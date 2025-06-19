document.addEventListener('DOMContentLoaded', function() {
  // 修复可能缺失的元素
  const elementsToCheck = [
    'chat-btn',
    'name-container'
    // 添加其他可能在代码中被引用但不存在的元素ID
  ];
  
  elementsToCheck.forEach(function(id) {
    if (!document.getElementById(id)) {
      console.info(`Creating placeholder element for missing #${id}`);
      const placeholder = document.createElement('div');
      placeholder.id = id;
      placeholder.style.display = 'none';
      document.body.appendChild(placeholder);
    }
  });
  
  // 修复CRISP聊天按钮功能
  if (window.$crisp) {
    const originalCrispScript = window.$crisp;
    // 覆盖任何尝试使用chat-btn的代码
    const safeGetChatBtn = function() {
      return document.getElementById('chat-btn') || { 
        style: {}, 
        addEventListener: function(){} 
      };
    };
    
    // 替换原始的按钮处理函数
    if (window.chatBtnFn) {
      const originalChatBtnFn = window.chatBtnFn;
      window.chatBtnFn = function() {
        const btn = safeGetChatBtn();
        if (btn) {
          return originalChatBtnFn.apply(this, arguments);
        }
      };
    }
  }
  
  // 修复其他可能的错误
  // 为页面上所有可能失败的getElementById调用添加安全处理
  const originalGetElementById = document.getElementById;
  document.getElementById = function(id) {
    const element = originalGetElementById.call(document, id);
    if (!element && console && console.warn) {
      console.warn(`安全提示: 页面中不存在ID为"${id}"的元素`);
    }
    return element;
  };
});
