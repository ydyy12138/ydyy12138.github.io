if(!self.define){let e,a={};const i=(i,d)=>(i=new URL(i+".js",d).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(d,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(a[n])return;let c={};const s=e=>i(e,n),b={module:{uri:n},exports:c,require:s};a[n]=Promise.all(d.map((e=>b[e]||s(e)))).then((e=>(r(...e),c)))}}define(["./workbox-1f84e78b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"23800a80e3bbb4afb26be33d3dbd98ee"},{url:"about/index.html",revision:"20bc3450d54010f58257e0ad4bd77dea"},{url:"archives/2024/12/index.html",revision:"a061a1419081b2e08d580d3938aa2d86"},{url:"archives/2024/index.html",revision:"ee9f24b97c6b63d781d875b9a8cd9e8f"},{url:"archives/index.html",revision:"9343f8b845c9dcd539d9bffb2e2d6083"},{url:"bangumis/index.html",revision:"a00b59027b604cbe54e70c268b951284"},{url:"categories/index.html",revision:"55717e2ffabd04083fc5e7a205489598"},{url:"categories/分类/index.html",revision:"d5657c18f635d3f79f4216789c9dd589"},{url:"css/index.css",revision:"e4caf583e884316b8c2cb515b62a9f43"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/404.png",revision:"5021fd3a27a8833a83c70ab732e1502c"},{url:"img/butterfly-icon.png",revision:"28fa72a4d9b2feea4bb643a12facb7fb"},{url:"img/error-page.png",revision:"7ade9a88a5ced2c311e69b0b16680591"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/pwa/16.png",revision:"b3464d2788f8687c6a88c902accdaafc"},{url:"img/pwa/192.png",revision:"63f89b871e91765aa4747026a8f0173b"},{url:"img/pwa/32.png",revision:"22870870c2fd0bf95b1ad88549d8d2e7"},{url:"img/pwa/512.png",revision:"3865f4c71dfcc2a724347c157d797c81"},{url:"img/pwa/splash-1125x2436.png",revision:"45a04b92746b62a9a675d6b8936d0239"},{url:"img/pwa/splash-1136x640.png",revision:"aaff386c0d6b688405b75cee0466900d"},{url:"img/pwa/splash-1170x2532.png",revision:"a91cb0f29852d1ab25f909b3ac91a445"},{url:"img/pwa/splash-1179x2556.png",revision:"b7f8fe350d0eab5174c2b64b5bd69187"},{url:"img/pwa/splash-1242x2208.png",revision:"53210e7ee038e25e7ea1ed7a6329684b"},{url:"img/pwa/splash-1242x2688.png",revision:"4b48e233e40f2df63609c6b070374d64"},{url:"img/pwa/splash-1248x2778.png",revision:"e0850164eabf04083dcebd63f33437bd"},{url:"img/pwa/splash-1290x2796.png",revision:"3a75ee9bd5653b91a855bb672eb728ff"},{url:"img/pwa/splash-1334x750.png",revision:"a6c0e3f572020f0715fef60f1abc637d"},{url:"img/pwa/splash-1536x2048.png",revision:"ba1cd7cfb98e22079e8f7aa4d59ec8ab"},{url:"img/pwa/splash-1620x2160.png",revision:"41974e5f54f33147a7e8da24e32af077"},{url:"img/pwa/splash-1668x2224.png",revision:"f39f76005c3dc7d0511d9c3f75c0cc21"},{url:"img/pwa/splash-1668x2388.png",revision:"e67870fe1a8ae1daf50d1b536b89e5ec"},{url:"img/pwa/splash-1792x828.png",revision:"1fe2f1d959117d7e8afbc11d64b88471"},{url:"img/pwa/splash-2048x1536.png",revision:"d9229234ab0fc8850b21f63ebccbcd94"},{url:"img/pwa/splash-2048x2732.png",revision:"01ac9b292a8a396999dce2d36b9e12cc"},{url:"img/pwa/splash-2160x1620.png",revision:"5f55f3f39c060e0d1388bbb324fb4e21"},{url:"img/pwa/splash-2208x1242.png",revision:"e9931997ec7d34ed82cc1fa5ad1fec2d"},{url:"img/pwa/splash-2224x1668.png",revision:"e5d8fcf140cde9d4515da937ca351bc6"},{url:"img/pwa/splash-2388x1668.png",revision:"dc512f931d6835e0b11c6a2972cd41d3"},{url:"img/pwa/splash-2436x1125.png",revision:"eb7716989e556968f7646233d14c070f"},{url:"img/pwa/splash-2532x1170.png",revision:"9f739f3ad683a3ac97592f16bb00b566"},{url:"img/pwa/splash-2556x1179.png",revision:"7eb59065226979e7d8be904584bdd8f9"},{url:"img/pwa/splash-2688x1242.png",revision:"bab6a2e4cf7768e401068aee01dabea2"},{url:"img/pwa/splash-2732x2048.png",revision:"097a148d2fa99e4ec7e77450d224837b"},{url:"img/pwa/splash-2778x1248.png",revision:"1bc61c4e6f2225b7d04a3031a9d8921c"},{url:"img/pwa/splash-2796x1290.png",revision:"5db61727c902197719129df9e8966606"},{url:"img/pwa/splash-640x1136.png",revision:"51e5ebca56f87adc43992b04626eb1f1"},{url:"img/pwa/splash-750x1334.png",revision:"79696b2b70e58db63926afe882d9459a"},{url:"img/pwa/splash-828x1792.png",revision:"2c242cb2c2d35049bec36cf906e59c83"},{url:"img/pwa/咕哩.png",revision:"e7a38495ba79672ee99e58a933ae34cc"},{url:"img/wallhaven-13vym3_1920x1080.png",revision:"f5e3fd36cb158aebdfbe94c39eca56a1"},{url:"img/wallhaven-281d5y_1920x1080.png",revision:"fcc4590ea829994183ddeaaf9a9e3ea7"},{url:"img/wallhaven-2yoo1m_1920x1080.png",revision:"0bbb2bff0b1e558d43ce78a79f0bf8e2"},{url:"img/wallhaven-5gk8y8_1920x1080.png",revision:"b830b363889f297701e4526a5106ac66"},{url:"img/wallhaven-5gkk65_1920x1080.png",revision:"0c7f370b4eb81d5324fd252a9be4ae12"},{url:"img/wallhaven-5we787_1920x1080.png",revision:"15b1c7e5f3b4aa4386a49d51000a8ebd"},{url:"img/wallhaven-858x21_1920x1080.png",revision:"c038fc50fedd50f3e9b3dded69668779"},{url:"img/wallhaven-96w8e8_1920x1080.png",revision:"f82d43b25a070b0b5e06ad75dfc29bdd"},{url:"img/wallhaven-9mjoy1_1920x1080.png",revision:"528a5e22f31faa14edf63f9f94d89ff7"},{url:"img/wallhaven-d63qqj_1920x1080.png",revision:"1c76787a4021478870d48b31370379af"},{url:"img/wallhaven-ex9gwo_1920x1080.png",revision:"c81a3aab40952ed37b699275e0a5168c"},{url:"img/wallhaven-pkgkkp_1920x1080.png",revision:"cb0e08c16d0bf58fe531431d65cb738c"},{url:"img/wallhaven-rddgwm_1920x1080.png",revision:"914a66b86cb23bad050b535c053cd51e"},{url:"img/wallhaven-rdwjj7_1920x1080.png",revision:"5440ffcf13d667fe27cb54fc610b6bb7"},{url:"img/wallhaven-x6pl9v_1920x1080.png",revision:"c57d1c044d6c0d3bbd6c1a12cf6ccdc3"},{url:"img/wallhaven-x8ye3z_1920x1080.png",revision:"c24c6c649e3e0785e33db83c1614e40c"},{url:"img/wallhaven-y8622k_1920x1080.png",revision:"4d5b7c8db39208cf6f0c11b6ce4e66ea"},{url:"img/wallhaven-ymz61d_1920x1080.png",revision:"02aba4d35744057982db500a6d5fd1c8"},{url:"img/wallhaven-yxgmll_1920x1080.png",revision:"1087839822e4bd482a90a3ed04b9b263"},{url:"img/wallhaven-zyxvqy_1920x1080.png",revision:"7aadfd558aba56728faf3a2228793505"},{url:"img/头像.jpg",revision:"d9fccf42215e05a322bbc34d3e5dcc7f"},{url:"img/认识.jpg",revision:"56349637b0681d71d25ff35025644a1f"},{url:"index.html",revision:"512acab3cbc69d5f4ad70b4b1d95d080"},{url:"js/main.js",revision:"edc44b71f0913eb77e7cbb4b7298b85e"},{url:"js/search/algolia.js",revision:"75e66239aa7a33ad0218f92e08021a64"},{url:"js/search/local-search.js",revision:"3a22c1b24d57711a7c0566aa2cecf98e"},{url:"js/tw_cn.js",revision:"accbc2ce08ee93a7bc3bc2199f4d0cfd"},{url:"js/utils.js",revision:"8d3507831ac63b0d5fc9c22bc1e87957"},{url:"link/index.html",revision:"74df4de8c3be2d6ec4f76821e47df79d"},{url:"random.html",revision:"470e3c8c8773ee54adc3e4286937b000"},{url:"shuoshuo/index.html",revision:"9682c8a89a9a0152185adaccfef5a10b"},{url:"tags/index.html",revision:"b2d6a7734e2e9877e588ecdb103d5c63"},{url:"tags/标签/index.html",revision:"6ea39085a33dd36abc2c3aa75a70275d"},{url:"ydyy/4a17b156.html",revision:"9ac70649410118493d341d26b9ba7011"},{url:"ydyy/9daba997.html",revision:"d0bf514ebd438eca2a4eeccbebd66e96"},{url:"/",revision:"index-20241205085953396"},{url:"about/",revision:"about-20241205085953396"}],{})}));
//# sourceMappingURL=service-worker.js.map
