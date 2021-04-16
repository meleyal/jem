(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(b,i(i({ref:t},l),{},{components:n})):a.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},172:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/one-way-data-flow-91d14fed98327a888a77dbc3518cb3dc.svg"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),a=(n(0),n(116));const o={title:"Architecture"},c={unversionedId:"examples/architecture",id:"examples/architecture",isDocsHomePage:!1,title:"Architecture",description:"This chapter focuses on how to structure our programs. The goal is to provide",source:"@site/book/examples/architecture.md",slug:"/examples/architecture",permalink:"/book/examples/architecture",version:"current"},i=[{value:"Model",id:"model",children:[]},{value:"Messages",id:"messages",children:[]},{value:"Update",id:"update",children:[]},{value:"Render",id:"render",children:[]},{value:"Program",id:"program",children:[]}],s={toc:i};function l({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This chapter focuses on how to structure our programs. The goal is to provide\nsome minimal conventions for where to put things, so we can focus on the\ninteresting parts of our program."),Object(a.b)("p",null,"This is not essential, you can certainly structure your program any way that\nmakes sense to you. What's offered here is one way to do it. Even if you don't\nadopt this pattern, it's worth skimming this chapter as the later examples in\nthe book use it."),Object(a.b)("p",null,'The architecture presented here is based on the concept of "one-way data flow",\nand is borrowed from\n',Object(a.b)("a",{parentName:"p",href:"https://guide.elm-lang.org/architecture/"},"The Elm Architecture"),". A ",Object(a.b)("inlineCode",{parentName:"p"},"program"),"\ngenerates ",Object(a.b)("inlineCode",{parentName:"p"},"messages")," which are sent to an ",Object(a.b)("inlineCode",{parentName:"p"},"update")," function that updates a data\n",Object(a.b)("inlineCode",{parentName:"p"},"model")," and passes it to a ",Object(a.b)("inlineCode",{parentName:"p"},"render")," function. It's as simple as that!"),Object(a.b)("p",null,Object(a.b)("img",{src:n(172).default})),Object(a.b)("h2",{id:"model"},"Model"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"model"),' is an object that describes the state of our program. Here, we can\nthink about the "shape" of the data that our program will need. We can fill in\nknown values, and provide placeholders for data we need to wait for (e.g.\nsamples being loaded).'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const model = {\n  tick: 0,\n  bpm: 60,\n  samples: [],\n}\n")),Object(a.b)("h2",{id:"messages"},"Messages"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"messages()")," function describes all the things we want to happen in our\nprogram. It receives the current ",Object(a.b)("inlineCode",{parentName:"p"},"model"),", and a ",Object(a.b)("inlineCode",{parentName:"p"},"send()")," function it can use to\nupdate the model. It returns an object describing the things we want to happen\nin our program."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const messages = (model, send) => {\n  return {\n    tick: () => {\n      setInterval(() => {\n        send({ tick: 1 })\n      }, 1000)\n    },\n  }\n}\n")),Object(a.b)("p",null,"Messages can optionally call other messages:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const messages = (model, send) => {\n  const msgs =  {\n    tick: () => {\n      setInterval(() => {\n        const msg = { tick: 1, ...msgs.hello() }\n        send(msg)\n      }, 1000)\n    }\n\n    hello: () => {\n      return { hello: 'world' }\n    }\n  }\n\n  return msgs\n}\n")),Object(a.b)("h2",{id:"update"},"Update"),Object(a.b)("p",null,"If your update logic is more complicated, you can provide a custom ",Object(a.b)("inlineCode",{parentName:"p"},"update()"),"\nfunction to ",Object(a.b)("inlineCode",{parentName:"p"},"program()"),"."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"update()")," function receives the current ",Object(a.b)("inlineCode",{parentName:"p"},"model"),', and a message (or\n"action") (',Object(a.b)("inlineCode",{parentName:"p"},"msg"),'). It updates the model according to the message type and\nreturns it. While not enforced, you should think of the model as immutable. Each\ntime we update it we get back a new version or "snapshot" of the current model.\nThe benefits of immutable model will become more apparent later in the book.'),Object(a.b)("p",null,"The default implementation just merges the message into the model using the key\nand value of the ",Object(a.b)("inlineCode",{parentName:"p"},"msg"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const update = (model, msg) => {\n  return {\n    ...model,\n    ...msg,\n  }\n}\n\nupdate({ tick: 0 }, { tick: 1 }) // => { tick: 1 }\n")),Object(a.b)("h2",{id:"render"},"Render"),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"render()")," function is where we actually make sounds. It takes our model as\ninput, and the result is something that outputs audio to our speakers."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"TODO: Example")),Object(a.b)("h2",{id:"program"},"Program"),Object(a.b)("p",null,"These functions don't currently talk to each other, we still need a way to wire\nthem together."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"program()")," function takes care of calling ",Object(a.b)("inlineCode",{parentName:"p"},"init()")," to build the initial\nmodel, sends ",Object(a.b)("inlineCode",{parentName:"p"},"messages()")," to ",Object(a.b)("inlineCode",{parentName:"p"},"update()")," our model, and automatically calls\n",Object(a.b)("inlineCode",{parentName:"p"},"render()")," with the updated model, forming a continuous feedback loop."),Object(a.b)("p",null,"This example shows how to setup a metronome to continually update the model with\nthe current beat."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},"const { program, metronome, resolution } = tuplet\n\n// -- MODEL\n\nconst model = {\n  tick: 0\n}\n\n// -- MESSAGES\n\nconst messages = (model, send) => ({\n  const { context } = model\n\n  tick: () => {\n    const metro = resolution(metronome(context, 60), 4)\n\n    metro.subscribe(tick => {\n      send({ tick })\n    })\n  }\n})\n\n// -- RENDER\n\nconst render = model => {\n  console.log('render', model.tick)\n}\n\n// -- PROGRAM\n\nprogram({ model, messages, render })\n")))}l.isMDXComponent=!0}}]);