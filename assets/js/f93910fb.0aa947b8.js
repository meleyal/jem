(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{113:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return s}));var r=t(3),o=(t(0),t(116));const c={title:"Metronome 2"},a={unversionedId:"examples/metronome2",id:"examples/metronome2",isDocsHomePage:!1,title:"Metronome 2",description:"`js",source:"@site/book/examples/metronome2.md",slug:"/examples/metronome2",permalink:"/book/examples/metronome2",version:"current"},i=[],p={toc:i};function s({components:e,...n}){return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"const { metronome, sampler, music, pattern } = tuplet\nconst { c4, d4, e4, f4, g4, c5, rest } = music.pitches\nconst { wn, qn, den, sn, hn, ent } = music.durations\n\n;(async () => {\n  const notes = [\n    [c4, qn],\n    [c4, qn],\n    [c4, den],\n    [d4, sn],\n    [e4, qn],\n\n    [e4, den],\n    [d4, sn],\n    [e4, den],\n    [f4, sn],\n    [g4, hn],\n\n    [c5, ent],\n    [c5, ent],\n    [c5, ent],\n    [g4, ent],\n    [g4, ent],\n    [g4, ent],\n    [e4, ent],\n    [e4, ent],\n    [e4, ent],\n    [c4, ent],\n    [c4, ent],\n    [c4, ent],\n\n    [g4, den],\n    [f4, sn],\n    [e4, den],\n    [d4, sn],\n    [c4, hn],\n  ]\n\n  const piano = await sampler('piano')\n  const metro = metronome({ bpm: 60 })\n  const melody = pattern(notes, { loop: true })\n\n  // console.log(melody.fold())\n\n  metro.on('tick', (time) => {\n    piano.play(melody.at(time))\n  })\n\n  metro.start()\n})()\n")))}s.isMDXComponent=!0},116:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(t),f=r,d=l["".concat(a,".").concat(f)]||l[f]||m[f]||c;return t?o.a.createElement(d,i(i({ref:n},s),{},{components:t})):o.a.createElement(d,i({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=f;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<c;s++)a[s]=t[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);