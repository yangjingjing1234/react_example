# 测试用例
<p>1, tab 选项卡 简单的选项卡，2种方法写的，可以复用</p>
<p>2，left_right_animation 左右滑动的布局</p></p>
<p>3，animation  动画，2个组件之间的动画，用的插件ReactCSSTransitionGroup 动画插件，比较坑</p>
<p>4，time_tab 自动轮播的banner图</p>
<p>5, webpack   用webpack 写的一个打包工具</p>
<p>6, forceUpdate   forceUpdate 方法强制刷新案例，对于页面渲染优化很有帮助</p>

<br> 

findDOMNode()：获取真实的DOM
forceUpdate()：强制更新

在以下两种情况会用到 forceUpdate

手动更改了 state 之后需要触发 render
做了除更改props和state之外的操作后，需要render。
但是使用forceUpdate 会跳过 shouldComponentUpdate 的过程，会触发子组件的所有lifeCycle方法（包括shouldComponentUpdate）从而造成性能的浪费。因此为了组件更加清晰高效，应该避免使用forceUpdate。

 <p>知识点1</p>
  <p>PureRenderMixin 插件，用来判断状态是否改变</p>
  <p>知识点2</p>
  <p>forceUpdate 不管状态有没有改变都会重新渲染页面，不走shouldComponentUpdate()</p>
  
  <p>(1),用这个插件的话在控制台打印不会走到shouldComponentUpdate()方法，用自己写的方法判断每次都会走进去,
  判断状态如果没有改变就不需要重新渲染页面。走生命周期中存在期的方法。很大程度上都会浪费，因此判断一下，如果没改变就不用走下边的
  生命周期中的方法了。具体看控制台就知道。<br/>  

  (2),在控制台打印,会发现forceUpdate()方法强制执行的时候，跟没有判断shouldComponentUpdate()是一样的，每次都会走生命周期。</p>
        
