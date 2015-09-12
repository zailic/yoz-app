export class Inflector {
        
        /**
        * This class instance
        */
        private static _instance: Inflector = new Inflector();

        /**
        * Plurarization rules
        */
        private plurals: InflectorTuple[] = [
                [(/(quiz)$/i), "$1zes"],
                [(/^(ox)$/i), "$1en"],
                [(/([m|l])ouse$/i), "$1ice"],
                [(/(matr|vert|ind)ix|ex$/i), "$1ices"],
                [(/(x|ch|ss|sh)$/i), "$1es"],
                [(/([^aeiouy]|qu)y$/i), "$1ies"],
                [(/(hive)$/i), "$1s"],
                [(/(?:([^f])fe|([lr])f)$/i), "$1$2ves"],
                [(/sis$/i), "ses"],
                [(/([ti])um$/i), "$1a"],
                [(/(buffal|tomat|potat)o$/i), "$1oes"],
                [(/(bu)s$/i), "$1ses"],
                [(/(alias|status|sex)$/i), "$1es"],
                [(/(octop|vir)us$/i), "$1i"],
                [(/(ax|test)is$/i), "$1es"],
                [(/^(p)erson$/i), "$1eople"],
                [(/^(m)an$/i), "$1en"],
                [(/(.*)(child)(ren)?$/i), "$1$2ren"],
                [(/s$/i), "s"],
                [(/$/), "s"]
        ];
        
        /**
         * Singularization rules
         */
        private singulars: InflectorTuple[] = [
                [(/(address)$/i), "$1"],
                [(/(quiz)zes$/i), "$1"],
                [(/(matr)ices$/i), "$1ix"],
                [(/(vert|ind)ices$/i), "$1ex"],
                [(/^(ox)en/i), "$1"],
                [(/(alias|status)es$/i), "$1"],
                [(/(octop|vir)i$/i), "$1us"],
                [(/(cris|ax|test)es$/i), "$1is"],
                [(/(shoe)s$/i), "$1"],
                [(/(o)es$/i), "$1"],
                [(/(bus)es$/i), "$1"],
                [(/([m|l])ice$/i), "$1ouse"],
                [(/(x|ch|ss|sh)es$/i), "$1"],
                [(/(m)ovies$/i), "$1ovie"],
                [(/(s)eries$/i), "$1eries"],
                [(/([^aeiouy]|qu)ies$/i), "$1y"],
                [(/([lr])ves$/i), "$1f"],
                [(/(tive)s$/i), "$1"],
                [(/(hive)s$/i), "$1"],
                [(/([^f])ves$/i), "$1fe"],
                [(/(^analy)ses$/i), "$1sis"],
                [(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/i), "$1$2sis"],
                [(/([ti])a$/i), "$1um"],
                [(/(n)ews$/i), "$1ews"],
                [(/(p)eople$/i), "$1erson"],
                [(/s$/i), ""]
        ];

        private uncountable: Array<string> = [
                "sheep",
                "fish",
                "series",
                "species",
                "money",
                "rice",
                "information",
                "equipment",
                "grass",
                "mud",
                "offspring",
                "deer",
                "means"
        ];
        
        /**
         * The constructor
         */
        constructor() {
                if (Inflector._instance) {
                        throw new Error("Error: Instantiation failed! Use Inflector.getInstance() instead.");
                }
                Inflector._instance = this;
        }
        
        /**
         * The Singleton instance
         */
        static getInstance(): Inflector {
                return Inflector._instance;
        }
        
        /**
         * Adds a new singuralization rule to the inflector
         * @param {RegexOrString} matcher
         * @param {String} replacer
         */
        singular(matcher: RegExp, replacer: string): void {
                this.singulars.unshift([matcher, replacer]);
        }
        
        /**
         * Adds a new pluralization rule to the Inflector.
         * @param {RegexOrString} matcher
         * @param {String} replacer 
         */
        plural(matcher: RegExp, replacer: string): void {
                this.plurals.unshift([matcher, replacer]);
        }
        
        
        /**
         * Removes all registered singularization rules
         */
        clearSingulars() {
                this.singulars = [];
        }

        /**
         * Removes all registered pluralization rules
         */
        clearPlurals() {
                this.plurals = [];
        }

        isTransnumeral(word: string) {
                return this.uncountable.indexOf(word) !== -1;
        }

        pluralize(word: string) {
                if (this.isTransnumeral(word)) {
                        return word;
                }
                for (var i: number = 0; i < this.plurals.length; i++) {
                        let tuple: InflectorTuple = this.plurals[i];
                        let regex = typeof tuple[0] === "string" ? /^tuple[0]$/ : tuple[0];
                        if (typeof regex === 'object' && regex.test(word)) {
                                return word.replace(regex, tuple[1]);
                        }
                }
                return word;
        }

        singularize(word: string) {
                if (this.isTransnumeral(word)) {
                        return word;
                }
                for (var i: number = 0; i < this.singulars.length; i++) {
                        let tuple = this.singulars[i];
                        let regex = tuple[0];
                        if (regex === word || (typeof regex === 'object' && regex.test(word))) {
                                return word.replace(regex, tuple[1]);
                        }
                }
                return word;
        }
}