"use strict";

var _module = require("./module1");

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log((0, _module.add)(3)); //103
console.log((0, _module.multiply)(3)); //300
console.log((0, _module2.default)(3)); //97