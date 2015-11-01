import '../../../common/utils/Supplant';
import {DateTime} from  './DateTime';
import {BrowserDetect} from  './BrowserDetect';
export { LogDecorator, ExternalLogger }

/**
 * Decorate the $log to use inject the LogEnhancer features.
 * @param {object} $provide The log console.
 */
class LogDecorator {
    // Register our $log decorator with AngularJS $provider
    constructor($provide) {
        $provide.decorator(
            '$log',
            [
                '$delegate',
                ($delegate) => {
                    return enhanceLog($delegate);
                }
            ]
        );
    }
}

class ExternalLogger implements IEnhancedLogger {

    public log: angular.ILogCall;
    public info: angular.ILogCall;
    public warn: angular.ILogCall;
    public debug: angular.ILogCall;
    public error: angular.ILogCall;
    public getInstance:(s:string) => ExternalLogger;

    constructor() {
        this.log = this.prepareLogToConsole("log");
        this.info = this.prepareLogToConsole("info");
        this.warn = this.prepareLogToConsole("warn");
        this.debug = this.prepareLogToConsole("debug");
        this.error = this.prepareLogToConsole("error");
        enhanceLog(this);
    }

    protected prepareLogToConsole(method) {
        var console = window.console,
            isFunction = function(fn) {
                return (typeof (fn) == typeof (Function));
            },
            isAvailableConsoleFor = function(method) {
                var isPhantomJS = new BrowserDetect().browser != "PhantomJS";
                // NOTE: Tried using this for less logging in the console/terminal, but then logging in IDE is
                // wiped out as well return console && console[method] && isFunction(console[method]) && isPhantomJS;
                return console && console[method] && isFunction(console[method]);
            };

        return (message) => {
            if (isAvailableConsoleFor(method)) {
                try {
                    console[method](message);
                }
                catch (e) { }
            }
        };
    }

}

function enhanceLog($log) {

    var separator = "::",

        /**
         * Cached DateTime formatter
         */
        dateFormatter = new DateTime(),
        detector = new BrowserDetect(),


        /**
         * Capture the original $log functions; for use in enhancedLogFn()
         */
        _$log = (function($log) {
            return {
                log: $log.log,
                info: $log.info,
                warn: $log.warn,
                debug: $log.debug,
                error: $log.error
            };
        })($log),

        /**
         * Chrome Dev tools supports color logging
         * @see https://developers.google.com/chrome-developer-tools/docs/console#styling_console_output_with_css
         */
        colorify = function(message, colorCSS) {
            var isChrome = detector.browser == "Chrome",
                canColorize = isChrome && (colorCSS !== undefined);

            return canColorize ? ["%c" + message, colorCSS] : [message];
        },

        /**
         * Partial application to pre-capture a logger function
         */
        prepareLogFn = function(logFn, className, colorCSS?) {
            /**
             * Invoke the specified `logFn` with the supplant functionality...
             */
            var supplant = String.supplant;
            var enhancedLogFn:any = function() {
                try {
                    var args = Array.prototype.slice.call(arguments);

                    // prepend a timestamp and optional classname to the original output message
                    args[0] = supplant("{0} - {1}{2}", [dateFormatter.now(), className, args[0]]);
                    args = colorify(supplant.apply(null, args), colorCSS);

                    logFn.apply(null, args);
                }
                catch (error) {
                    $log.error("LogEnhancer ERROR: " + error);
                }

            };

            // Only needed to support angular-mocks expectations
            enhancedLogFn.logs = [];

            return enhancedLogFn;
        },

        /**
         * Support to generate class-specific logger instance with classname only
         */
        getInstance = function(className, colorCSS, customSeparator) {
            className = (className !== undefined) ? className + (customSeparator || separator) : "";

            var instance = {
                log: prepareLogFn(_$log.log, className, colorCSS),
                info: prepareLogFn(_$log.info, className, colorCSS),
                warn: prepareLogFn(_$log.warn, className, colorCSS),
                debug: prepareLogFn(_$log.debug, className, colorCSS),
                error: prepareLogFn(_$log.error, className), // NO styling of ERROR messages
                tryCatch: null
            };

            // Attach instance specific tryCatch() functionality...
            instance.tryCatch = makeTryCatch(instance.error, instance);

            return instance;
        };

    // Add special method to AngularJS $log
    $log.getInstance = getInstance;

    return $log;
}


/**
 * Implement a tryCatch() method that logs exceptions for method invocations AND
 * promise rejection activity.
 *
 * @param notifyFn      Function used to log.debug exception information
 * @param scope         Object Receiver for the notifyFn invocation
 *
 * @return Function used to guard and invoke the targeted actionFn
 */
function makeTryCatch(notifyFn, scope) {
    /**
     * Report error (with stack trace if possible) to the logger function
     */
    var reportError = function(reason) {
            if (notifyFn != null) {
                var error = (reason && reason.stack) ? reason : null,
                    message = reason != null ? String(reason) : "";
    
                if (error != null) {
                    message = error.message + "\n" + error.stack;
                }
    
                notifyFn.apply(scope, [message]);
            }
    
            return reason;
        },
        /**
         * Publish the tryCatch() guard 'n report function
         */
        tryCatch = function(actionFn, scope, args) {
            try {
                // Invoke the targeted `actionFn`
                var result = angular.isFunction(actionFn) ? actionFn.apply(scope, args || []) : String(actionFn),
                    promise = (angular.isObject(result) && result.then) ? result : null;

                if (promise != null) {
                    // Catch and report any promise rejection reason...
                    promise.then(null, reportError);
                }

                actionFn = null;
                return result;

            }
            catch (e) {
                actionFn = null;
                throw reportError(e);
            }

        };

    return tryCatch;
}