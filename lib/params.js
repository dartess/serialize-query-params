"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Serialize = require("./serialize");
/**
 * String values
 */
exports.StringParam = {
    encode: Serialize.encodeString,
    decode: Serialize.decodeString,
};
/**
 * Numbers (integers or floats)
 */
exports.NumberParam = {
    encode: Serialize.encodeNumber,
    decode: Serialize.decodeNumber,
};
/**
 * For flat objects where values are strings
 */
exports.ObjectParam = {
    encode: Serialize.encodeObject,
    decode: Serialize.decodeObject,
};
/**
 * For flat arrays of strings, filters out undefined values during decode
 */
exports.ArrayParam = {
    encode: Serialize.encodeArray,
    decode: Serialize.decodeArray,
};
/**
 * For flat arrays of strings, filters out undefined values during decode
 */
exports.NumericArrayParam = {
    encode: Serialize.encodeNumericArray,
    decode: Serialize.decodeNumericArray,
};
/**
 * For any type of data, encoded via JSON.stringify
 */
exports.JsonParam = {
    encode: Serialize.encodeJson,
    decode: Serialize.decodeJson,
};
/**
 * For simple dates (YYYY-MM-DD)
 */
exports.DateParam = {
    encode: Serialize.encodeDate,
    decode: Serialize.decodeDate,
};
/**
 * For boolean values: 1 = true, 0 = false
 */
exports.BooleanParam = {
    encode: Serialize.encodeBoolean,
    decode: Serialize.decodeBoolean,
};
/**
 * For flat objects where the values are numbers
 */
exports.NumericObjectParam = {
    encode: Serialize.encodeNumericObject,
    decode: Serialize.decodeNumericObject,
};
/**
 * For flat arrays of strings, filters out undefined values during decode
 */
exports.DelimitedArrayParam = {
    encode: Serialize.encodeDelimitedArray,
    decode: Serialize.decodeDelimitedArray,
};
/**
 * For flat arrays where the values are numbers, filters out undefined values during decode
 */
exports.DelimitedNumericArrayParam = {
    encode: Serialize.encodeDelimitedNumericArray,
    decode: Serialize.decodeDelimitedNumericArray,
};
