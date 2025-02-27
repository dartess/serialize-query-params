import { QueryParamConfig } from './types';
/**
 * String values
 */
export declare const StringParam: QueryParamConfig<string | null | undefined, string | undefined>;
/**
 * Numbers (integers or floats)
 */
export declare const NumberParam: QueryParamConfig<number | null | undefined, number | undefined>;
/**
 * For flat objects where values are strings
 */
export declare const ObjectParam: QueryParamConfig<{
    [key: string]: string | undefined;
} | null | undefined, {
    [key: string]: string | undefined;
} | undefined>;
/**
 * For flat arrays of strings, filters out undefined values during decode
 */
export declare const ArrayParam: QueryParamConfig<string[] | null | undefined, string[] | undefined>;
/**
 * For flat arrays of strings, filters out undefined values during decode
 */
export declare const NumericArrayParam: QueryParamConfig<number[] | null | undefined, number[] | undefined>;
/**
 * For any type of data, encoded via JSON.stringify
 */
export declare const JsonParam: QueryParamConfig<any, any>;
/**
 * For simple dates (YYYY-MM-DD)
 */
export declare const DateParam: QueryParamConfig<Date | null | undefined, Date | undefined>;
/**
 * For boolean values: 1 = true, 0 = false
 */
export declare const BooleanParam: QueryParamConfig<boolean | null | undefined, boolean | undefined>;
/**
 * For flat objects where the values are numbers
 */
export declare const NumericObjectParam: QueryParamConfig<{
    [key: string]: number | undefined;
} | null | undefined, {
    [key: string]: number | undefined;
} | undefined>;
/**
 * For flat arrays of strings, filters out undefined values during decode
 */
export declare const DelimitedArrayParam: QueryParamConfig<string[] | null | undefined, string[] | undefined>;
/**
 * For flat arrays where the values are numbers, filters out undefined values during decode
 */
export declare const DelimitedNumericArrayParam: QueryParamConfig<number[] | null | undefined, number[] | undefined>;
