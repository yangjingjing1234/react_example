"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var data_width = [{ name: 'first', value: "100" }, { name: 'second', value: "200" }, { name: 'three', value: "300" }];

var data_height = [{ name: 'first1', value: "150" }, { name: 'second1', value: "250" }, { name: 'three1', value: "350" }];

var Selectctrl = function (_React$Component) {
  _inherits(Selectctrl, _React$Component);

  function Selectctrl() {
    _classCallCheck(this, Selectctrl);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Selectctrl).apply(this, arguments));
  }

  _createClass(Selectctrl, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "option",
        { value: this.props.name },
        this.props.value
      );
    }
  }]);

  return Selectctrl;
}(_react2.default.Component);

var TabComponent = function (_React$Component2) {
  _inherits(TabComponent, _React$Component2);

  function TabComponent() {
    _classCallCheck(this, TabComponent);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(TabComponent).apply(this, arguments));
  }

  _createClass(TabComponent, [{
    key: "render",

    // constructor () {
    //   super();
    //   this.state={
    //        currentIndex:0,
    //   }
    //  }

    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "wrap", ref: "wrap" },
        _react2.default.createElement(
          "form",
          { action: "/", method: "get" },
          _react2.default.createElement(
            "section",
            { className: "page2 page" },
            _react2.default.createElement(
              "div",
              { className: "header", onClick: this.handleClick.bind(this, 0) },
              "返回>"
            ),
            _react2.default.createElement(
              "p",
              null,
              "width"
            ),
            _react2.default.createElement(
              "select",
              { name: "left", onChange: this.handlewidth.bind(this, 'width'), ref: "left" },
              _react2.default.createElement(
                "option",
                { value: "" },
                "请选择"
              ),
              data_width.map(function (element, index) {
                return _react2.default.createElement(Selectctrl, _extends({}, element, { key: index }));
              })
            )
          ),
          _react2.default.createElement(
            "section",
            { className: "page1 page" },
            "name:",
            _react2.default.createElement("input", { type: "text", name: "username", defaultValue: "请输入内容" }),
            _react2.default.createElement("br", null),
            "width:",
            _react2.default.createElement("input", { type: "text", name: "width", ref: "width", defaultValue: "请输入内容" }),
            _react2.default.createElement(
              "span",
              { className: "next", onClick: this.handleClick.bind(this, -1) },
              "-->"
            ),
            _react2.default.createElement("br", null),
            "height:",
            _react2.default.createElement("input", { type: "text", name: "height", ref: "height", defaultValue: "请输入内容" }),
            _react2.default.createElement(
              "span",
              { className: "next", onClick: this.handleClick.bind(this, 1) },
              "->"
            ),
            _react2.default.createElement("br", null),
            _react2.default.createElement("input", { type: "submit", value: "提交" })
          ),
          _react2.default.createElement(
            "section",
            { className: "page3 page" },
            _react2.default.createElement(
              "div",
              { className: "header", onClick: this.handleClick.bind(this, 0) },
              "返回"
            ),
            _react2.default.createElement(
              "p",
              null,
              "height"
            ),
            _react2.default.createElement(
              "select",
              { name: "right", onChange: this.handlewidth.bind(this, 'height'), ref: "right" },
              data_height.map(function (element, index) {
                return _react2.default.createElement(Selectctrl, _extends({}, element, { key: index }));
              })
            )
          )
        )
      );
    }
  }, {
    key: "handleClick",
    value: function handleClick(num) {
      if (num < 0) {
        this.refs.wrap.style.marginLeft = "0";
      } else if (num > 0) {
        this.refs.wrap.style.marginLeft = "-200%";
      } else if (num == 0) {
        this.refs.wrap.style.marginLeft = "-100%";
      }
    }
  }, {
    key: "handlewidth",
    value: function handlewidth(tag) {

      if (tag == "width") {
        this.refs.width.value = this.refs.left.value;
      } else if (tag == "height") {
        this.refs.height.value = this.refs.right.value;
      }
    }
  }]);

  return TabComponent;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(TabComponent, null), document.getElementById("left_right"));