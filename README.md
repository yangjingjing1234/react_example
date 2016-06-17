# 测试用例
1,tab 选项卡
2，左右滑动的布局
3，动画，自动轮播图




findDOMNode()：获取真实的DOM
forceUpdate()：强制更新

在以下两种情况会用到 forceUpdate

手动更改了 state 之后需要触发 render
做了除更改props和state之外的操作后，需要render。
但是使用forceUpdate 会跳过 shouldComponentUpdate 的过程，会触发子组件的所有lifeCycle方法（包括shouldComponentUpdate）从而造成性能的浪费。因此为了组件更加清晰高效，应该避免使用forceUpdate。