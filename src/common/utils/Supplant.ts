export default supplant;

/**
 * @author      Thomas Burleson
 * @date        November, 2013
 * @description
 * @see https://raw.githubusercontent.com/angular/material-start/es6/app/src/utils/supplant.js
 */
function supplant( template:string, values:any[], pattern?:RegExp ):string {
    pattern = pattern || /\{([^\{\}]*)\}/g;

    return template.replace(pattern, function(a:string, b:string):string {
        let p = b.split('.'),
            r:string;

        try {
            for (let s in p) { r = values[p[s]];  }
        } catch(e){
            r = a;
        }

        return (typeof r === 'string' || typeof r === 'number') ? r : a;
    });
}

// supplant() method from Crockfords `Remedial Javascript`
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

String.method("supplant", function( values, pattern ) {
    var self = this;
    return supplant(self, values, pattern);
});

String.supplant = supplant;