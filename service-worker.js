if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let n={};const l=e=>a(e,r),b={module:{uri:r},exports:n,require:l};i[r]=Promise.all(d.map((e=>b[e]||l(e)))).then((e=>(c(...e),n)))}}define(["./workbox-ddbcfce3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"eb49a2b31bb06eb7d790c9f3fe2bb447"},{url:"archives/2024/12/index.html",revision:"d5f07b3793d4a1903b791b840358fb37"},{url:"archives/2024/index.html",revision:"4d5d2b90cd7a81b546ee78dfc0de5183"},{url:"archives/index.html",revision:"864add156647126ec4a77c02a06ca081"},{url:"bangumis/index.html",revision:"664ad09d087877df874c9eb0e5ee83db"},{url:"categories/index.html",revision:"1c0c0d7b80b02caf6a6aaed5d7f7a985"},{url:"categories/分类/index.html",revision:"4114f4771fe68466412b2b6922787f5c"},{url:"css/custom.css",revision:"7e4da0302a216757465bd32f0d22e8af"},{url:"css/index.css",revision:"465a82f4958f531529e41f770e0c197e"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/404.png",revision:"5021fd3a27a8833a83c70ab732e1502c"},{url:"img/butterfly-icon.png",revision:"28fa72a4d9b2feea4bb643a12facb7fb"},{url:"img/error-page.png",revision:"7ade9a88a5ced2c311e69b0b16680591"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/wallhaven-13vym3_1920x1080.png",revision:"f5e3fd36cb158aebdfbe94c39eca56a1"},{url:"img/wallhaven-281d5y_1920x1080.png",revision:"fcc4590ea829994183ddeaaf9a9e3ea7"},{url:"img/wallhaven-2yoo1m_1920x1080.png",revision:"0bbb2bff0b1e558d43ce78a79f0bf8e2"},{url:"img/wallhaven-5gk8y8_1920x1080.png",revision:"b830b363889f297701e4526a5106ac66"},{url:"img/wallhaven-5gkk65_1920x1080.png",revision:"0c7f370b4eb81d5324fd252a9be4ae12"},{url:"img/wallhaven-5we787_1920x1080.png",revision:"15b1c7e5f3b4aa4386a49d51000a8ebd"},{url:"img/wallhaven-858x21_1920x1080.png",revision:"c038fc50fedd50f3e9b3dded69668779"},{url:"img/wallhaven-96w8e8_1920x1080.png",revision:"f82d43b25a070b0b5e06ad75dfc29bdd"},{url:"img/wallhaven-9mjoy1_1920x1080.png",revision:"528a5e22f31faa14edf63f9f94d89ff7"},{url:"img/wallhaven-d63qqj_1920x1080.png",revision:"1c76787a4021478870d48b31370379af"},{url:"img/wallhaven-ex9gwo_1920x1080.png",revision:"c81a3aab40952ed37b699275e0a5168c"},{url:"img/wallhaven-pkgkkp_1920x1080.png",revision:"cb0e08c16d0bf58fe531431d65cb738c"},{url:"img/wallhaven-rddgwm_1920x1080.png",revision:"914a66b86cb23bad050b535c053cd51e"},{url:"img/wallhaven-rdwjj7_1920x1080.png",revision:"5440ffcf13d667fe27cb54fc610b6bb7"},{url:"img/wallhaven-x6pl9v_1920x1080.png",revision:"c57d1c044d6c0d3bbd6c1a12cf6ccdc3"},{url:"img/wallhaven-x8ye3z_1920x1080.png",revision:"c24c6c649e3e0785e33db83c1614e40c"},{url:"img/wallhaven-y8622k_1920x1080.png",revision:"4d5b7c8db39208cf6f0c11b6ce4e66ea"},{url:"img/wallhaven-ymz61d_1920x1080.png",revision:"02aba4d35744057982db500a6d5fd1c8"},{url:"img/wallhaven-yxgmll_1920x1080.png",revision:"1087839822e4bd482a90a3ed04b9b263"},{url:"img/wallhaven-zyxvqy_1920x1080.png",revision:"7aadfd558aba56728faf3a2228793505"},{url:"img/头像.jpg",revision:"d9fccf42215e05a322bbc34d3e5dcc7f"},{url:"img/认识.jpg",revision:"56349637b0681d71d25ff35025644a1f"},{url:"index.html",revision:"df0b8990783dadf03a7bf2c0fcb89225"},{url:"js/main.js",revision:"edc44b71f0913eb77e7cbb4b7298b85e"},{url:"js/search/algolia.js",revision:"75e66239aa7a33ad0218f92e08021a64"},{url:"js/search/local-search.js",revision:"3a22c1b24d57711a7c0566aa2cecf98e"},{url:"js/tw_cn.js",revision:"accbc2ce08ee93a7bc3bc2199f4d0cfd"},{url:"js/utils.js",revision:"8d3507831ac63b0d5fc9c22bc1e87957"},{url:"link/index.html",revision:"71d8da1999e6be5195441ff165ceda2e"},{url:"shuoshuo/index.html",revision:"2b624da1edb4277939d62209c2a5c9ba"},{url:"tags/index.html",revision:"d83bad113c2305839bd14b96d3ab2da9"},{url:"tags/标签/index.html",revision:"9a1ee5b57f0c287714e99aff856cca28"},{url:"ydyy/4a17b156.html",revision:"eec84840a7ccb48e5de37fbe4608a472"},{url:"ydyy/9daba997.html",revision:"cb010dc48ac69297f8828d3defe7ef9c"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
