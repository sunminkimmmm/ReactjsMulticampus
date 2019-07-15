"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var base = 100;
var add = function add(x) {
    return base + x;
};
var multiply = function multiply(x) {
    return base * x;
};
var substract = function substract(x) {
    return base - x;
};

exports.add = add;
exports.multiply = multiply;
exports.default = substract;