"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require("react-addons-css-transition-group");

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var data = ["../images/1.png", "../images/2.png", "../images/3.png"];
var num = 0;

var Students = function (_React$Component) {
  _inherits(Students, _React$Component);

  function Students(props) {
    _classCallCheck(this, Students);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Students).call(this, props));

    _this.state = {
      imageSrc: data[0],
      num: 0
    };
    return _this;
  }
  // shouldCompoentUpdate(){
  //   return false;
  // }
  // componentWillUpdate(){
  // console.log("====will update===")
  // }
  // componentDidUpdate(){
  //   console.log("====did update===")
  // }


  _createClass(Students, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      //this.focusUpdate();
      var update = function update(num) {
        // console.log(num)
        _this2.setState({
          imageSrc: data[num]
        });
        _this2.state.num += 1;
        if (_this2.state.num >= data.length) {
          _this2.state.num = 0;
        }
      };
      // console.log(this.state.num);
      // setInterval((num) =>{
      //      update(this.state.num);
      // }, 2000);
    }
  }, {
    key: "gotoPage",
    value: function gotoPage(index, event, a, b, c) {
      // console.log(this);
      // console.log(index,event,a,b,c);
      event.preventDefault();
      this.props.onGotoPage(index);
    }
  }, {
    key: "render",
    value: function render() {
      // console.dir(this.props);
      return _react2.default.createElement(
        _reactAddonsCssTransitionGroup2.default,
        { transitionName: "student", transitionAppear: true, transitionAppearTimeout: 500, transitionEnterTimeout: 600, transitionLeaveTimeout: 600 },
        _react2.default.createElement("img", { src: this.state.imageSrc, key: this.state.imageSrc, onClick: this.gotoPage.bind(this, 2) })
      );
    }
  }]);

  return Students;
}(_react2.default.Component);

exports.default = Students;