declare type int = number;
declare var global: any;
interface Tuple<K,V> extends Array<K|V> {0:K, 1:V}
declare type RegexOrString = RegExp | string;
declare type InflectorTuple = Tuple<RegexOrString, string>;