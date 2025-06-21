// APlayer 默认关闭歌词
// 创建一个 MutationObserver 实例，用于监听 DOM 的变化
var observer = new MutationObserver(function(mutations) {
  // 查找页面中 class 为 "aplayer-icon-lrc" 的元素
  var lrcButton = document.querySelector(".aplayer-icon-lrc");
  // 如果找到了 lrcButton
  if (lrcButton) {
    // 延迟1毫秒执行点击操作
    setTimeout(function() {
      lrcButton.click();
    }, 1);
    // 断开 MutationObserver 实例，停止监听 DOM 的变化
    observer.disconnect();
  }
});

/* 随便逛逛功能 - 随机跳转到站内其他页面 */
function randomPost() {
  // 显示加载提示
  if (typeof Snackbar !== 'undefined') {
    Snackbar.show({
      text: '正在获取页面列表...',
      pos: 'top-center',
      showAction: false
    });
  }
  
  fetch('/baidusitemap.xml')
    .then(res => {
      if (!res.ok) throw new Error('站点地图获取失败');
      return res.text();
    })
    .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    .then(data => {
      const urls = data.querySelectorAll('url loc');
      
      // 如果没有找到URL，抛出错误
      if (!urls || urls.length === 0) {
        throw new Error('没有找到可用的页面URL');
      }
      
      // 获取所有非当前页面的URL
      const otherUrls = Array.from(urls)
        .map(node => node.innerHTML)
        .filter(url => url !== location.href);
      
      // 如果没有其他页面可跳转，显示提示
      if (otherUrls.length === 0) {
        if (typeof Snackbar !== 'undefined') {
          Snackbar.show({
            text: '站点只有这一个页面哦',
            pos: 'top-center',
            showAction: false
          });
        } else {
          alert('站点只有这一个页面哦');
        }
        return;
      }
      
      // 随机选择一个非当前页面的URL
      const randomUrl = otherUrls[Math.floor(Math.random() * otherUrls.length)];
      
      // 使用pjax跳转（如果存在），否则使用普通跳转
      if (window.pjax) {
        pjax.loadUrl(randomUrl);
      } else {
        location.href = randomUrl;
      }
    })
    .catch(error => {
      console.error('随机访问页面出错:', error);
      
      // 显示错误提示
      if (typeof Snackbar !== 'undefined') {
        Snackbar.show({
          text: '获取页面列表失败，请稍后再试',
          pos: 'top-center',
          showAction: false
        });
      } else {
        alert('获取页面列表失败，请稍后再试');
      }
    });
}



// 动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    // 离开当前页面时标签显示内容
    document.title = '👀跑哪里去了~';
    clearTimeout(titleTime);
  } else {
    // 返回当前页面时标签显示内容
    document.title = '🐖抓到你啦～';
    // 两秒后变回正常标题
    titleTime = setTimeout(function() {
      document.title = OriginTitile;
    }, 2000);
  }
});
