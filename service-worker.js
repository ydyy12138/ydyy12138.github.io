if(!self.define){let e,a={};const i=(i,c)=>(i=new URL(i+".js",c).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(a[s])return;let b={};const d=e=>i(e,s),n={module:{uri:s},exports:b,require:d};a[s]=Promise.all(c.map((e=>n[e]||d(e)))).then((e=>(r(...e),b)))}}define(["./workbox-1f84e78b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"048de999f8225b38cbacbb4e0a2b6179"},{url:"about/index.html",revision:"7f59d217ac63b6d77d5cc68ef0f670f3"},{url:"archives/2024/12/index.html",revision:"3ab495bd129e2a3851dcc2c3463c3db3"},{url:"archives/2024/index.html",revision:"30ef447ce44230a50abeea38106bf4ab"},{url:"archives/2025/01/index.html",revision:"5467355ea4f2a135177ed729a3187883"},{url:"archives/2025/index.html",revision:"5b4ff7ada7ae23011af6eb7cdc3039e4"},{url:"archives/index.html",revision:"a2cefb36cb3416504088ae4bb5236012"},{url:"bangumis/index.html",revision:"a68970959fc91c1b9892fa773926df05"},{url:"categories/index.html",revision:"90f5b67ad84af367566b9bb84d32bde5"},{url:"categories/new/index.html",revision:"8521d7dcb48681e1c6e7287e55d2beab"},{url:"categories/分类/index.html",revision:"0bf9aef603d6e045739b048109b9ed6a"},{url:"categories/测试/index.html",revision:"781acb4737067dba9e452af2d110e5c1"},{url:"css/categorybar.css",revision:"52f4d30f8e534565a4f5a0c73b015de8"},{url:"css/custom.css",revision:"1570d9fdc96b0f3720659a672efb7802"},{url:"css/index.css",revision:"86a04ff5ba7b414cbe91aac96054536c"},{url:"css/kslink.css",revision:"dd1af3c36730c7ef47a7c1f4eab27bdb"},{url:"css/rightmenu.css",revision:"69f5faeec41e0431f2991fb314374aa0"},{url:"css/runtime.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/404.png",revision:"5021fd3a27a8833a83c70ab732e1502c"},{url:"img/butterfly-icon.png",revision:"28fa72a4d9b2feea4bb643a12facb7fb"},{url:"img/error-page.png",revision:"7ade9a88a5ced2c311e69b0b16680591"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/pwa/16.png",revision:"b3464d2788f8687c6a88c902accdaafc"},{url:"img/pwa/192.png",revision:"63f89b871e91765aa4747026a8f0173b"},{url:"img/pwa/32.png",revision:"22870870c2fd0bf95b1ad88549d8d2e7"},{url:"img/pwa/512.png",revision:"3865f4c71dfcc2a724347c157d797c81"},{url:"img/pwa/splash-1125x2436.png",revision:"45a04b92746b62a9a675d6b8936d0239"},{url:"img/pwa/splash-1136x640.png",revision:"aaff386c0d6b688405b75cee0466900d"},{url:"img/pwa/splash-1170x2532.png",revision:"a91cb0f29852d1ab25f909b3ac91a445"},{url:"img/pwa/splash-1179x2556.png",revision:"b7f8fe350d0eab5174c2b64b5bd69187"},{url:"img/pwa/splash-1242x2208.png",revision:"53210e7ee038e25e7ea1ed7a6329684b"},{url:"img/pwa/splash-1242x2688.png",revision:"4b48e233e40f2df63609c6b070374d64"},{url:"img/pwa/splash-1248x2778.png",revision:"e0850164eabf04083dcebd63f33437bd"},{url:"img/pwa/splash-1290x2796.png",revision:"3a75ee9bd5653b91a855bb672eb728ff"},{url:"img/pwa/splash-1334x750.png",revision:"a6c0e3f572020f0715fef60f1abc637d"},{url:"img/pwa/splash-1536x2048.png",revision:"ba1cd7cfb98e22079e8f7aa4d59ec8ab"},{url:"img/pwa/splash-1620x2160.png",revision:"41974e5f54f33147a7e8da24e32af077"},{url:"img/pwa/splash-1668x2224.png",revision:"f39f76005c3dc7d0511d9c3f75c0cc21"},{url:"img/pwa/splash-1668x2388.png",revision:"e67870fe1a8ae1daf50d1b536b89e5ec"},{url:"img/pwa/splash-1792x828.png",revision:"1fe2f1d959117d7e8afbc11d64b88471"},{url:"img/pwa/splash-2048x1536.png",revision:"d9229234ab0fc8850b21f63ebccbcd94"},{url:"img/pwa/splash-2048x2732.png",revision:"01ac9b292a8a396999dce2d36b9e12cc"},{url:"img/pwa/splash-2160x1620.png",revision:"5f55f3f39c060e0d1388bbb324fb4e21"},{url:"img/pwa/splash-2208x1242.png",revision:"e9931997ec7d34ed82cc1fa5ad1fec2d"},{url:"img/pwa/splash-2224x1668.png",revision:"e5d8fcf140cde9d4515da937ca351bc6"},{url:"img/pwa/splash-2388x1668.png",revision:"dc512f931d6835e0b11c6a2972cd41d3"},{url:"img/pwa/splash-2436x1125.png",revision:"eb7716989e556968f7646233d14c070f"},{url:"img/pwa/splash-2532x1170.png",revision:"9f739f3ad683a3ac97592f16bb00b566"},{url:"img/pwa/splash-2556x1179.png",revision:"7eb59065226979e7d8be904584bdd8f9"},{url:"img/pwa/splash-2688x1242.png",revision:"bab6a2e4cf7768e401068aee01dabea2"},{url:"img/pwa/splash-2732x2048.png",revision:"097a148d2fa99e4ec7e77450d224837b"},{url:"img/pwa/splash-2778x1248.png",revision:"1bc61c4e6f2225b7d04a3031a9d8921c"},{url:"img/pwa/splash-2796x1290.png",revision:"5db61727c902197719129df9e8966606"},{url:"img/pwa/splash-640x1136.png",revision:"51e5ebca56f87adc43992b04626eb1f1"},{url:"img/pwa/splash-750x1334.png",revision:"79696b2b70e58db63926afe882d9459a"},{url:"img/pwa/splash-828x1792.png",revision:"2c242cb2c2d35049bec36cf906e59c83"},{url:"img/pwa/咕哩.png",revision:"e7a38495ba79672ee99e58a933ae34cc"},{url:"img/wallhaven-13vym3_1920x1080.png",revision:"f5e3fd36cb158aebdfbe94c39eca56a1"},{url:"img/wallhaven-281d5y_1920x1080.png",revision:"fcc4590ea829994183ddeaaf9a9e3ea7"},{url:"img/wallhaven-2yoo1m_1920x1080.png",revision:"0bbb2bff0b1e558d43ce78a79f0bf8e2"},{url:"img/wallhaven-5gk8y8_1920x1080.png",revision:"b830b363889f297701e4526a5106ac66"},{url:"img/wallhaven-5gkk65_1920x1080.png",revision:"0c7f370b4eb81d5324fd252a9be4ae12"},{url:"img/wallhaven-5we787_1920x1080.png",revision:"15b1c7e5f3b4aa4386a49d51000a8ebd"},{url:"img/wallhaven-858x21_1920x1080.png",revision:"c038fc50fedd50f3e9b3dded69668779"},{url:"img/wallhaven-96w8e8_1920x1080.png",revision:"f82d43b25a070b0b5e06ad75dfc29bdd"},{url:"img/wallhaven-9mjoy1_1920x1080.png",revision:"528a5e22f31faa14edf63f9f94d89ff7"},{url:"img/wallhaven-d63qqj_1920x1080.png",revision:"1c76787a4021478870d48b31370379af"},{url:"img/wallhaven-ex9gwo_1920x1080.png",revision:"c81a3aab40952ed37b699275e0a5168c"},{url:"img/wallhaven-pkgkkp_1920x1080.png",revision:"cb0e08c16d0bf58fe531431d65cb738c"},{url:"img/wallhaven-rddgwm_1920x1080.png",revision:"914a66b86cb23bad050b535c053cd51e"},{url:"img/wallhaven-rdwjj7_1920x1080.png",revision:"5440ffcf13d667fe27cb54fc610b6bb7"},{url:"img/wallhaven-x6pl9v_1920x1080.png",revision:"c57d1c044d6c0d3bbd6c1a12cf6ccdc3"},{url:"img/wallhaven-x8ye3z_1920x1080.png",revision:"c24c6c649e3e0785e33db83c1614e40c"},{url:"img/wallhaven-y8622k_1920x1080.png",revision:"4d5b7c8db39208cf6f0c11b6ce4e66ea"},{url:"img/wallhaven-ymz61d_1920x1080.png",revision:"02aba4d35744057982db500a6d5fd1c8"},{url:"img/wallhaven-yxgmll_1920x1080.png",revision:"1087839822e4bd482a90a3ed04b9b263"},{url:"img/wallhaven-zyxvqy_1920x1080.png",revision:"7aadfd558aba56728faf3a2228793505"},{url:"img/头像.jpg",revision:"d9fccf42215e05a322bbc34d3e5dcc7f"},{url:"img/认识.jpg",revision:"56349637b0681d71d25ff35025644a1f"},{url:"index.html",revision:"0a018acb93dc87905c8dc163de555672"},{url:"js/cat.js",revision:"41ae87bcde1fd4cd4466902af1503591"},{url:"js/cursor.js",revision:"f566fae055a7800e78ce6a1f4aff3c39"},{url:"js/emoji.js",revision:"36b59b593d09fcd5d2b727a5787cd3a0"},{url:"js/kslink.js",revision:"c5e1f13cf2b125ab4d8637718a88e903"},{url:"js/main.js",revision:"edc44b71f0913eb77e7cbb4b7298b85e"},{url:"js/rightmenu.js",revision:"a3ee890197f64a343a401befb92c7c87"},{url:"js/runtime.js",revision:"55b90a99eb49f5be277dc5c38b49a409"},{url:"js/search/algolia.js",revision:"75e66239aa7a33ad0218f92e08021a64"},{url:"js/search/local-search.js",revision:"3a22c1b24d57711a7c0566aa2cecf98e"},{url:"js/tw_cn.js",revision:"accbc2ce08ee93a7bc3bc2199f4d0cfd"},{url:"js/utils.js",revision:"8d3507831ac63b0d5fc9c22bc1e87957"},{url:"link/index.html",revision:"8ba0067b14561260d70db80c961fcb15"},{url:"random.html",revision:"b57ac40d16ca47b8922ce8e9147e5f8e"},{url:"shuoshuo/index.html",revision:"c2e0e2b96078896e6f4a8649d948ef6a"},{url:"tags/index.html",revision:"42b8403a3db22c445b334a617f5e187f"},{url:"tags/标签/index.html",revision:"ff193ce55f391d7777c9de6054dedfc9"},{url:"tags/测试/index.html",revision:"5a95a4a6996a298ca470c0fb6590bcfa"},{url:"ydyy/4a17b156.html",revision:"60a6ac8acb91519c106991b2b0d56aba"},{url:"ydyy/6be34445.html",revision:"4885f9b0125324ccd2dbde1c588594da"},{url:"ydyy/6be34445/头像.jpg",revision:"d9fccf42215e05a322bbc34d3e5dcc7f"},{url:"ydyy/9daba997.html",revision:"9bbb5550b8d450fc7f918fb8355b26c2"},{url:"/",revision:"index-20250109173508388"},{url:"about/",revision:"about-20250109173508388"}],{})}));
//# sourceMappingURL=service-worker.js.map
