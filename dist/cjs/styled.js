"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavItem = exports.NavLine = exports.Nav = exports.NavWrapper = exports.TabPane = exports.Tabs = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("@atlaskit/theme");

function lockSelectedColor(normal) {
  var selected = {
    light: _theme.colors.B400,
    dark: _theme.colors.B100
  };
  return (0, _theme.themed)('status', {
    normal: normal,
    selected: selected
  });
}

var labelColor = lockSelectedColor({
  light: _theme.colors.N500,
  dark: _theme.colors.DN400
});
var activeLabelColor = lockSelectedColor({
  light: _theme.colors.B500,
  dark: _theme.colors.B200
});
var focusLabelColor = lockSelectedColor({
  light: _theme.colors.B100,
  dark: _theme.colors.B100
});
var hoverLabelColor = lockSelectedColor({
  light: _theme.colors.B400,
  dark: _theme.colors.B75
});
var underlineColor = lockSelectedColor({
  light: _theme.colors.N30,
  dark: _theme.colors.DN0
});
var underlineHeight = '2px';
/*
  NOTE min-height attribute
  FF http://stackoverflow.com/questions/28636832/firefox-overflow-y-not-working-with-nested-flexbox
*/
// Tabs

var Tabs = _styledComponents.default.div.withConfig({
  displayName: "styled__Tabs",
  componentId: "sc-716rt7-0"
})(["\n  display: flex;\n  flex-basis: 100%;\n  flex-direction: column;\n  flex-grow: 1;\n  max-width: 100%;\n  min-height: 0%; /* See min-height note */\n"]); // TabPane


exports.Tabs = Tabs;

var TabPane = _styledComponents.default.div.withConfig({
  displayName: "styled__TabPane",
  componentId: "sc-716rt7-1"
})(["\n  display: flex;\n  flex-grow: 1;\n  min-height: 0%; /* See min-height note */\n  padding-left: ", "px;\n  padding-right: ", "px;\n"], _theme.gridSize, _theme.gridSize); // TabNav


exports.TabPane = TabPane;

var NavWrapper = _styledComponents.default.div.withConfig({
  displayName: "styled__NavWrapper",
  componentId: "sc-716rt7-2"
})(["\n  position: relative;\n"]);

exports.NavWrapper = NavWrapper;

var Nav = _styledComponents.default.div.withConfig({
  displayName: "styled__Nav",
  componentId: "sc-716rt7-3"
})(["\n  display: flex;\n  font-weight: 500;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n"]);

exports.Nav = Nav;

var NavLine = _styledComponents.default.span.withConfig({
  displayName: "styled__NavLine",
  componentId: "sc-716rt7-4"
})(["\n  background-color: ", ";\n  border-radius: ", ";\n  bottom: 0;\n  content: '';\n  height: ", ";\n  left: ", "px;\n  margin: 0;\n  position: absolute;\n  right: ", "px;\n  width: inherit;\n"], underlineColor, underlineHeight, underlineHeight, _theme.gridSize, _theme.gridSize);

exports.NavLine = NavLine;

var NavItem = _styledComponents.default.div.withConfig({
  displayName: "styled__NavItem",
  componentId: "sc-716rt7-5"
})([""], labelColor, _theme.math.divide(_theme.gridSize, 2), _theme.gridSize, hoverLabelColor, activeLabelColor, _theme.borderRadius, focusLabelColor);

exports.NavItem = NavItem;