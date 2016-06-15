"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var data = {
    title: ['first', 'second', 'three'],
    content: ['第一屏', '第二屏', "第三屏"]
};

var TabsControl = function (_React$Component) {
    _inherits(TabsControl, _React$Component);

    function TabsControl() {
        _classCallCheck(this, TabsControl);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TabsControl).call(this));

        _this.state = {
            currentIndex: 0
        };
        return _this;
    }

    _createClass(TabsControl, [{
        key: "check_title_index",
        value: function check_title_index(index) {
            console.log(index);
            return index === this.state.currentIndex ? "Tab_tittle active" : "Tab_tittle";
        }
    }, {
        key: "check_item_index",
        value: function check_item_index(index) {
            return index === this.state.currentIndex ? "Tab_item show" : "Tab_item";
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "Tab_tittle_wrap" },
                    _react2.default.Children.map(this.props.children, function (element, index) {
                        console.log(_react2.default.Children);
                        return _react2.default.createElement(
                            "div",
                            {
                                onClick: function onClick() {
                                    _this2.setState({ currentIndex: index });
                                },
                                className: _this2.check_title_index(index) },
                            element.props.name
                        );
                    })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "Tab_item_wrap" },
                    _react2.default.Children.map(this.props.children, function (element, index) {
                        return _react2.default.createElement(
                            "div",
                            { className: _this2.check_item_index(index) },
                            element
                        );
                    })
                )
            );
        }
    }]);

    return TabsControl;
}(_react2.default.Component);

var TabdataControl = function (_React$Component2) {
    _inherits(TabdataControl, _React$Component2);

    function TabdataControl() {
        _classCallCheck(this, TabdataControl);

        var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(TabdataControl).call(this));

        _this3.state = {
            currentIndex: 0
        };
        return _this3;
    }

    _createClass(TabdataControl, [{
        key: "check_title_index",
        value: function check_title_index(index) {
            return index === this.state.currentIndex ? "Tab_tittle active" : "Tab_tittle";
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "Tab_tittle_wrap" },
                    data.title.map(function (element, index) {
                        return _react2.default.createElement(
                            "div",
                            {
                                key: index,
                                onClick: function onClick() {
                                    _this4.setState({ currentIndex: index });
                                },
                                className: _this4.check_title_index(index) },
                            element
                        );
                    })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "Tab_item_wrap" },
                    _react2.default.createElement(
                        "div",
                        { className: "Tab_item show" },
                        data.content[this.state.currentIndex]
                    )
                )
            );
        }
    }]);

    return TabdataControl;
}(_react2.default.Component);

var TabComponent = function (_React$Component3) {
    _inherits(TabComponent, _React$Component3);

    function TabComponent() {
        _classCallCheck(this, TabComponent);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(TabComponent).apply(this, arguments));
    }

    _createClass(TabComponent, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "container" },
                _react2.default.createElement(
                    TabsControl,
                    null,
                    _react2.default.createElement(
                        "div",
                        { name: "first" },
                        "我是第一屏"
                    ),
                    _react2.default.createElement(
                        "div",
                        { name: "second" },
                        "我是第二屏"
                    ),
                    _react2.default.createElement(
                        "div",
                        { name: "three" },
                        "我是第三屏"
                    )
                ),
                _react2.default.createElement("br", null),
                _react2.default.createElement(TabdataControl, null),
                _react2.default.createElement("br", null),
                _react2.default.createElement(TabdataControl, null)
            );
        }
    }]);

    return TabComponent;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(TabComponent, null), document.getElementById("app"));