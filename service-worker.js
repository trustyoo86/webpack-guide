/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bbc147e28b22c138195f45412e06f474"
  },
  {
    "url": "advanced/mode-config.html",
    "revision": "ef505c1aa569c06c23c3286ce37b1f0e"
  },
  {
    "url": "advanced/tree-shaking.html",
    "revision": "5221f26679fdb6ab5dc71b53c1eda97f"
  },
  {
    "url": "advanced/webpack-merge.html",
    "revision": "c11f5a13639bb6d2f746bdb17a438881"
  },
  {
    "url": "assets/css/0.styles.293d55c1.css",
    "revision": "d17fdb654ee830c1305d29eb1c1f0c2a"
  },
  {
    "url": "assets/img/css-loading-error.a03a18eb.png",
    "revision": "a03a18eb11f2c4b71630b3f5bbf83ed2"
  },
  {
    "url": "assets/img/diagram.519da03f.png",
    "revision": "519da03f4a1d31fffbeac96b2804bcd2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wds.8baa2312.png",
    "revision": "8baa2312e5a6a2b57a04cfb7316c0ae8"
  },
  {
    "url": "assets/img/webpack-bundling.e79747a1.png",
    "revision": "e79747a157ff215dc60f91b847fc451b"
  },
  {
    "url": "assets/img/webpack-entry.90e26197.png",
    "revision": "90e26197b33def35ba574f45774f20d7"
  },
  {
    "url": "assets/js/10.3d3e40e7.js",
    "revision": "ecfa4d09fb5d090503dd5044d4a59392"
  },
  {
    "url": "assets/js/11.bec836e7.js",
    "revision": "eaed075ec56c16ea7931089d4c489f39"
  },
  {
    "url": "assets/js/12.c15653e2.js",
    "revision": "c38561a5c83aff2d79f7fe288df38008"
  },
  {
    "url": "assets/js/13.dd4ff596.js",
    "revision": "3d12db8404bfe7027ae8b54eb38d6aec"
  },
  {
    "url": "assets/js/14.fcf9a619.js",
    "revision": "2b813d1d611cdec2a9840dcfee54cdba"
  },
  {
    "url": "assets/js/15.2b2a5aac.js",
    "revision": "82dcb55a06e00f9e92a7c8b9faba4b5d"
  },
  {
    "url": "assets/js/16.b3266783.js",
    "revision": "a40c3f4cadd072d59e05d8bec5ab56f7"
  },
  {
    "url": "assets/js/17.5a1aa0e4.js",
    "revision": "a6f11a02c4843c9d41d0efc8d55322fa"
  },
  {
    "url": "assets/js/18.3c48af21.js",
    "revision": "a4e475396d559c4f8a3a5da4d9398695"
  },
  {
    "url": "assets/js/19.dfe2c264.js",
    "revision": "1d331d30d5e58a38b924ae216312b2b0"
  },
  {
    "url": "assets/js/2.dbe79a9f.js",
    "revision": "9db66c11c33f2f7daa94d7f716f68314"
  },
  {
    "url": "assets/js/20.475c9c02.js",
    "revision": "247829cfc84a0a51d5634a35efb81480"
  },
  {
    "url": "assets/js/21.651baedf.js",
    "revision": "1d3dde0ed774ce8cc9198744353387d4"
  },
  {
    "url": "assets/js/22.3fa2c0e0.js",
    "revision": "4256fffd52d638913d4f227ca5e920e2"
  },
  {
    "url": "assets/js/23.11ef8687.js",
    "revision": "211dd6a54ed8601c1c0d8a21ab4ffa7f"
  },
  {
    "url": "assets/js/24.c52237d0.js",
    "revision": "657aaa2783d76554b105353a930f83e2"
  },
  {
    "url": "assets/js/25.4b6280e2.js",
    "revision": "6822cfc74c28a107efbeb2c232e8902d"
  },
  {
    "url": "assets/js/26.34d758eb.js",
    "revision": "6a89ea9b762786dd6673f8e3970b367c"
  },
  {
    "url": "assets/js/27.11993f58.js",
    "revision": "82415ec1a64a122b7ddd1a1a4938b5e7"
  },
  {
    "url": "assets/js/28.ba37ab41.js",
    "revision": "239b075cb4b73dfc12a40a89cc3a4358"
  },
  {
    "url": "assets/js/29.321376b7.js",
    "revision": "98ec46a9f11defbee4f7d26a4cdcafb7"
  },
  {
    "url": "assets/js/3.86551baa.js",
    "revision": "6f3b4a84a2178ec1ceef0a3fd3352e0a"
  },
  {
    "url": "assets/js/30.2f460578.js",
    "revision": "06174ff4a447266552b9c7391f69dbd2"
  },
  {
    "url": "assets/js/31.2a73ea17.js",
    "revision": "a1e29ee82c2f674301279357c66015b6"
  },
  {
    "url": "assets/js/32.db3e0e8c.js",
    "revision": "5377c37cddc5bf79d91cde933fda2eb5"
  },
  {
    "url": "assets/js/33.0c8959d5.js",
    "revision": "620b999dee9252098429537772eeb60d"
  },
  {
    "url": "assets/js/34.08311645.js",
    "revision": "8a051231e16012d79838f76ab74bce70"
  },
  {
    "url": "assets/js/35.fb3e2c4c.js",
    "revision": "2d2f2971d2a140495431d5e34ed1226c"
  },
  {
    "url": "assets/js/36.e83871c0.js",
    "revision": "fc1ee755226456a3e5fad11616093c18"
  },
  {
    "url": "assets/js/37.38fde7d1.js",
    "revision": "16cbe82c8571d1490df8379ee50b0f13"
  },
  {
    "url": "assets/js/38.f1a2ac74.js",
    "revision": "656803ea2ba975ea7bae48d835a06b28"
  },
  {
    "url": "assets/js/39.b4734918.js",
    "revision": "aaf7ab699a7735f49c68288574401adb"
  },
  {
    "url": "assets/js/4.545e4ccb.js",
    "revision": "b20a327289c7fedbda192cc817ee1857"
  },
  {
    "url": "assets/js/40.934a78e3.js",
    "revision": "e71dd70ac2725d6998c0d05044b4417c"
  },
  {
    "url": "assets/js/5.5845e093.js",
    "revision": "b3a1205d1d6bfe2bf170bdc2b1ef5780"
  },
  {
    "url": "assets/js/6.c39304cd.js",
    "revision": "46c37812f4194bc68f85598d72b58c6f"
  },
  {
    "url": "assets/js/7.c05980cb.js",
    "revision": "49c8b5a1ca5b0b01743f0d5ae8a8d82e"
  },
  {
    "url": "assets/js/8.f4120ef1.js",
    "revision": "c225c853de1ef5d982ed0cf4205caf8b"
  },
  {
    "url": "assets/js/9.9a882d1e.js",
    "revision": "4a100891ac389bdc5114e39310813fde"
  },
  {
    "url": "assets/js/app.f7026cf5.js",
    "revision": "0f65fca4fbd059f4834f9d3dd0e152da"
  },
  {
    "url": "backup/flow.html",
    "revision": "c82afc2a20ef7230f1f9d226b505c473"
  },
  {
    "url": "build/node-npm.html",
    "revision": "78ea8335499dc7aa1a517731f9f64261"
  },
  {
    "url": "build/npm-custom-commands.html",
    "revision": "f4d97e947fdd8f3910449fad6e46bba7"
  },
  {
    "url": "build/npm-module-install.html",
    "revision": "41ac2ee5fb4d73a3cf485479e92a188c"
  },
  {
    "url": "concepts/entry.html",
    "revision": "954806324cb41e22324871bd884a6d42"
  },
  {
    "url": "concepts/loader.html",
    "revision": "5d27fa33ec9ec9681508771f477e0daa"
  },
  {
    "url": "concepts/output.html",
    "revision": "6917af8ae031537e640ff5e24ac69f7f"
  },
  {
    "url": "concepts/overview.html",
    "revision": "890611b7ba0e5bbd96f04c450b158495"
  },
  {
    "url": "concepts/plugin.html",
    "revision": "160c3d01a7a47b093ece9887ea0808c6"
  },
  {
    "url": "concepts/wrapup.html",
    "revision": "cd6ce0357d5c231d8d45c4e629abf038"
  },
  {
    "url": "contribution.html",
    "revision": "644ebe54bb8f28298de46d08b302eced"
  },
  {
    "url": "devtools/hot-module-replacement.html",
    "revision": "588490cc7c085aee6cd3e0116b4a5751"
  },
  {
    "url": "devtools/source-map.html",
    "revision": "e4bc2da80b9d50ba5ff33a088e832a36"
  },
  {
    "url": "devtools/webpack-dev-server.html",
    "revision": "8409e965c2389e02c95ce09df4bc0a42"
  },
  {
    "url": "faq.html",
    "revision": "eb9abc9c35427a175bd1bbc66611d8db"
  },
  {
    "url": "from-scratch.html",
    "revision": "a84250d3e79f65904f3e0f912d222f48"
  },
  {
    "url": "getting-started.html",
    "revision": "0a731d5bd3eb86a589598538e397b935"
  },
  {
    "url": "guide.html",
    "revision": "d2d888b40796b6cc9b2c329e5fae6918"
  },
  {
    "url": "images/css-loading-error.png",
    "revision": "a03a18eb11f2c4b71630b3f5bbf83ed2"
  },
  {
    "url": "images/diagram.png",
    "revision": "519da03f4a1d31fffbeac96b2804bcd2"
  },
  {
    "url": "images/favicon.png",
    "revision": "9144652d53e2cb1f58b31434be1754dc"
  },
  {
    "url": "images/icons/120.png",
    "revision": "21d61a59a8b81e2f2b7c1c4498931403"
  },
  {
    "url": "images/icons/128.png",
    "revision": "52282522bbeedc203932501bae719d3d"
  },
  {
    "url": "images/icons/144.png",
    "revision": "c8e2ba305773c351de6ceb6f541fcda8"
  },
  {
    "url": "images/icons/152.png",
    "revision": "7020b01c65552daefc6a040e98799c3b"
  },
  {
    "url": "images/icons/180.png",
    "revision": "f01084a321ad9222b05b58e70f3a9169"
  },
  {
    "url": "images/icons/192.png",
    "revision": "5b857fb78e5c61ba0a654b8c84114e97"
  },
  {
    "url": "images/icons/384.png",
    "revision": "b5f35dedd751624d3cd125f4131e883e"
  },
  {
    "url": "images/icons/512.png",
    "revision": "e8c8cd801fd9cd4348e0fdd70aedaa07"
  },
  {
    "url": "images/icons/72.png",
    "revision": "6d6096aeb8339449afd43567dec8bcdb"
  },
  {
    "url": "images/icons/96.png",
    "revision": "26887d961394795c8f14b086148c0e61"
  },
  {
    "url": "images/patron-button.png",
    "revision": "8b4321f782e84764e556af3dee32a131"
  },
  {
    "url": "images/wds.png",
    "revision": "8baa2312e5a6a2b57a04cfb7316c0ae8"
  },
  {
    "url": "images/webpack-bundling.png",
    "revision": "e79747a157ff215dc60f91b847fc451b"
  },
  {
    "url": "images/webpack-entry.png",
    "revision": "90e26197b33def35ba574f45774f20d7"
  },
  {
    "url": "index.html",
    "revision": "84425af0ca8c100026cd4d3d341a98de"
  },
  {
    "url": "logo.png",
    "revision": "81da10d7fe4e203f74c1fd5e2d316f5b"
  },
  {
    "url": "logo.svg",
    "revision": "96621d3c37d96ad3bf792fcc848d912f"
  },
  {
    "url": "motivation/fe-ecosystem.html",
    "revision": "1dc5593178ff7c80b02143662ad4f252"
  },
  {
    "url": "motivation/problem-to-solve.html",
    "revision": "03c6ede99577ec97541ee67d612bc1e7"
  },
  {
    "url": "motivation/why-webpack.html",
    "revision": "ba3606a909edc308baf81be9085c7605"
  },
  {
    "url": "roadmap.html",
    "revision": "d7b8ebbf39a22fb9a1d4aa9f8b45b781"
  },
  {
    "url": "tutorials/code-splitting.html",
    "revision": "ccbd2c852842ecdbda66f877dc27b963"
  },
  {
    "url": "tutorials/plugins.html",
    "revision": "8d3f34455c3d25edda8f3809a91febaf"
  },
  {
    "url": "tutorials/webpack-dev-server.html",
    "revision": "16ddc1a64728a76a6e9de7c73cdcbe6f"
  },
  {
    "url": "webpack/module-bundler.html",
    "revision": "8a14e5b73ad06af3dc750b8b904ebad2"
  },
  {
    "url": "webpack/modules.html",
    "revision": "4f99aeaff6e877a45e070bc36f0e31f9"
  },
  {
    "url": "webpack/web-task-manager.html",
    "revision": "2c6da22c75c4e2750a9fde28ea826c0b"
  },
  {
    "url": "webpack/what-is-webpack.html",
    "revision": "f59f6b0de50ddab8128783334c505342"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
