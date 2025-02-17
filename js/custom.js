// APlayer 默认关闭歌词
// 创建一个 MutationObserver 实例，用于监听 DOM 的变化
var observer = new MutationObserver(function (mutations) {
  // 查找页面中 class 为 "aplayer-icon-lrc" 的元素
  var lrcButton = document.querySelector(".aplayer-icon-lrc");
  // 如果找到了 lrcButton
  if (lrcButton) {
    // 延迟1毫秒执行点击操作
    setTimeout(function () {
      lrcButton.click();
    }, 1);
    // 断开 MutationObserver 实例，停止监听 DOM 的变化
    observer.disconnect();
  }
});