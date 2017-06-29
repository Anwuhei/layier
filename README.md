<h3>惰性模式</h3>
为了减少每次执行XMLHttpRequest时都能力检测；可以有两种方法
<h4>第一种方法是在文件加载时通过闭包执行重新定义</h4>
加载时立即执行对象方法来重定义，占用一定资源损失性能，第一次调用时不损失性能
<pre>
var createXHR=(function(){ 
  return function(){ //闭包执行重新定义 }
})()
</pre>
<h4>第二种方法是在第一次调用时对其重新定义</h4>
加载时不损失性能但第一次重定对象，执行时间增加，第一次调用时损失性能
<pre>
function createXHR2(){
  createXHR2 = function(){};
  return createXHR2(调用时重新定义);
}</pre>
