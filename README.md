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

 <p>知识点1</p>
  <p>PureRenderMixin 插件，用来判断状态是否改变</p>
  <p>知识点2</p>
  <p>forceUpdate 不管状态有没有改变都会重新渲染页面，不走shouldComponentUpdate()</p>
  
  <p>(1),用这个插件的话在控制台打印不会走到shouldComponentUpdate()方法，用自己写的方法判断每次都会走进去,
  判断状态如果没有改变就不需要重新渲染页面。走生命周期中存在期的方法。很大程度上都会浪费，因此判断一下，如果没改变就不用走下边的
  生命周期中的方法了。具体看控制台就知道。<br/>  

  (2),在控制台打印,会发现forceUpdate()方法强制执行的时候，跟没有判断shouldComponentUpdate()是一样的，每次都会走生命周期。</p>
        
