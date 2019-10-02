"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_express["default"].json());
var port = process.env.PORT || 8080;
app.listen(port, function () {
  console.log("Server started on http://localhost:".concat(port));
});
var _default = app;
exports["default"] = _default;