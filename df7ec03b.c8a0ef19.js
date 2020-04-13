(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{130:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return i}));var r=t(1),a=(t(0),t(140));const o={title:"Parts"},s={id:"music/parts",title:"Parts",description:"In this chapter we're going to look at the concept of sequencing, or, how to",source:"@site/docs/music/parts.md",permalink:"/tuplet/docs/music/parts"},c=[{value:"Sequencing",id:"sequencing",children:[{value:"Patterns",id:"patterns",children:[]},{value:"Altering patterns",id:"altering-patterns",children:[]},{value:"Transforms",id:"transforms",children:[]}]},{value:"Sequencer",id:"sequencer",children:[]},{value:"Learning",id:"learning",children:[]}],l={rightToc:c};function i({components:e,...n}){return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"In this chapter we're going to look at the concept of sequencing, or, how to\ncombine notes into patterns and play them back. It combines what we've learned\nso far about notes and timing to help us build more complete musical structures."),Object(a.b)("p",null,"##\xa0Sequencers"),Object(a.b)("p",null,'Most music apps include some form of sequencer, often called a "pattern\nsequencer" or "step sequencer". At a minimum, they usually have the following\nfeatures:'),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Draw or record a sequence or "pattern" of notes and their velocities.'),Object(a.b)("li",{parentName:"ul"},"The number of steps (i.e. length) of the pattern can be adjusted (4 steps, 8\nsteps, etc.)."),Object(a.b)("li",{parentName:"ul"},'When played back, the sequencer "steps" through the pattern note by note,\nlooping back around when it reaches the end of the pattern.'),Object(a.b)("li",{parentName:"ul"},'The rate or "resolution" of the pattern can be adjusted. This defines how fast\nthe sequencer steps through the pattern.'),Object(a.b)("li",{parentName:"ul"},"Patterns themselves can also be sequenced, meaning you can cycle through or\nalternate between different patterns."),Object(a.b)("li",{parentName:"ul"},"Patterns can be copied to serve as the basis for new patterns."),Object(a.b)("li",{parentName:"ul"},'TODO: Mention pattern "banks"')),Object(a.b)("p",null,"An example is the\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.propellerheads.com/en/reason/recording/matrix"}),'"Matrix"')," pattern\nsequencer found in Reason, which has all the features listed above. We're going\nto build a basic emulation of the Matrix sequencer in this chapter, so let's\ntake a look at it:"),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/tuplet/img/sequencer/matrix.png",alt:null}))),Object(a.b)("h2",{id:"sequencing"},"Sequencing"),Object(a.b)("h3",{id:"patterns"},"Patterns"),Object(a.b)("p",null,'If we define a pattern "bank" as just an array of patterns, then moving between\npatterns is similar to progressing through the individual steps of a pattern,\nand we can use the same ',Object(a.b)("inlineCode",{parentName:"p"},"ring()")," trick."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),";(async () => {\n  // const metronome = await import('https://unpkg.com/@meleyal/tuplet/src/metro.js')\n  const { metronome, ring } = await import('http://localhost:8081/src/index.js')\n  const context = new AudioContext()\n\n  const metro = metronome(context, 60)\n\n  const pattern1 = ring(['a', 'b', 'c', 'd'])\n  const pattern2 = ring(['e', 'f', 'g', 'h'])\n  const bankA = ring([pattern1, pattern2])\n\n  metro.on('tock', (tock) => {\n    metro.on('tick', (tick) => {\n      console.log(bankA(tock)(tick)) // a, b, c, d, e, f, g, h, a, b...\n    })\n  })\n\n  metro.start()\n})()\n")),Object(a.b)("p",null,"##\xa0Generating patterns"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"TODO: Research if Generator functions would be useful here.")),Object(a.b)("p",null,"It would be nice if we could avoid writing out all of our patterns by hand. This\nis a book on generative music after all! For this purpose, we'll introduce the\nconcept of \"generators\". In this context, a generator is just a name we'll give\nto something that produces a pattern (not to be confused with\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*"}),"JavaScript generator functions"),")."),Object(a.b)("p",null,"We'll start simple, and reuse some of our learning from the previous chapter to\ngenerate a random pattern for our sequencer to play back."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import { limit, scale } from 'tuplet'\nimport {\n  flow,\n  sample,\n  random,\n  shuffle,\n  take,\n  fill,\n  map,\n  reverse,\n} from 'lodash/fp'\n\nconst pattern1 = flow(\n  scale('cmaj'),\n  limit('piano'),\n  shuffle,\n  take(8),\n  map((n) => [n, 127])\n)([])\n\nconst bpm = 60\nconst beat = (bpm / 60) * 1000 // 1000ms = 1s\nconst bar = beat * 4 // 4000ms = 4s\nconst resolution = 16\nconst length = bar / resolution\n\nlet pattern = 0\nlet step = 0\nconst patterns = [pattern1, reverse(pattern1)]\n\nnavigator.requestMIDIAccess().then((midi) => {\n  const outputs = midi.outputs.values()\n  const output = outputs.next().value\n\n  setInterval(() => {\n    console.log(`p${pattern + 1} : s${step + 1} : ${patterns[pattern][step]}`)\n\n    const [note, velocity] = patterns[pattern][step]\n    output.send([0x90, note, velocity])\n    output.send([0x80, note, velocity], window.performance.now() + length)\n\n    if (step < patterns[pattern].length - 1) {\n      step += 1\n    } else {\n      step = 0\n      if (pattern < patterns.length - 1) {\n        pattern += 1\n      } else {\n        pattern = 0\n      }\n    }\n  }, length)\n})\n")),Object(a.b)("p",null,"Here, we're shuffling the notes of the scale, then taking 16 of them to produce\na random pattern. To introduce some symmetry, our second pattern is just our\nfirst pattern reversed."),Object(a.b)("p",null,"###\xa0Seeding"),Object(a.b)("p",null,"We can now reload the browser and get a new random pattern each time. But what\nif we hit upon a pattern we like? If we reload, our pattern will be lost forever\n(or at least has only a small chance of occurring again)."),Object(a.b)("p",null,'Random number generators often let you provide a "seed" for the purpose of\nreproducing randomness. Given the same seed, you\'ll always get the same result.'),Object(a.b)("p",null,"The Lodash ",Object(a.b)("inlineCode",{parentName:"p"},"shuffle")," function we're using here relies on JS' native\n",Object(a.b)("inlineCode",{parentName:"p"},"Math.random()")," function, which unfortunately doesn't support seeding."),Object(a.b)("p",null,"Luckily there's ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/davidbau/seedrandom"}),Object(a.b)("inlineCode",{parentName:"a"},"seedrandom"))," which\nreplaces ",Object(a.b)("inlineCode",{parentName:"p"},"Math.random()")," with a seedable version."),Object(a.b)("p",null,"TODO: Can we just overwrite/mixin a custom ",Object(a.b)("inlineCode",{parentName:"p"},"random()")," function?\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/lodash/lodash/issues/3289#issuecomment-434854622"}),"https://github.com/lodash/lodash/issues/3289#issuecomment-434854622")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"import seedrandom from 'seedrandom'\nimport cryptoRandomString from 'crypto-random-string'\n\n// const seed = 'hello'\nconst seed = cryptoRandomString(7)\n\nconsole.log('seed:', seed)\n\nconst rng = new seedrandom(seed)\n\nfunction random(lower, upper) {\n  return lower + Math.floor(rng() * (upper - lower + 1))\n}\n\nfunction shuffle(collection) {\n  var index = -1,\n    result = [...collection],\n    length = result.length,\n    lastIndex = length - 1\n\n  while (++index < length) {\n    var rand = random(index, lastIndex)\n    result[index] = result[rand]\n  }\n\n  return result\n}\n\nconst arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n\nconsole.log(arr)\nconsole.log(shuffle(arr))\n")),Object(a.b)("h3",{id:"altering-patterns"},"Altering patterns"),Object(a.b)("p",null,"Being that our pattern is just an array, it's easy to copy and alter it:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const pattern = [\n  'C',\n  'C',\n  'D',\n  'D',\n  'D',\n  'D',\n  'D',\n  'E',\n  'F#',\n  'G#',\n  'G#',\n  'G#',\n  'G#',\n  'G#',\n  'G#',\n  'G#',\n]\n\nconst pattern2 = pattern.slice(0, 8).reverse()\n\nconsole.log(pattern2) // => ['E', 'D', 'D', 'D', 'D', 'D', 'C', 'C']\nconsole.log(pattern2.length) // => 8\n")),Object(a.b)("p",null,"To also model velocity, we can make each value an array (or tuple):"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const pattern = [\n  ['C', 127],\n  ['C', 127],\n  ['D', 127],\n  ['D', 127],\n  ['D', 127],\n  ['D', 127],\n  ['D', 127],\n  ['E', 127],\n  ['F#', 127],\n  ['G#', 127],\n  ['G#', 127],\n  ['G#', 127],\n  ['G#', 127],\n  ['G#', 127],\n  ['G#', 127],\n  ['G#', 127],\n]\n")),Object(a.b)("h3",{id:"transforms"},"Transforms"),Object(a.b)("p",null,"We've already seen how we can produce a new pattern based on an existing one via\nreversing it. The beauty of our patterns being arrays is that they're easy to\nslice and dice using built-in functions, or anything that works with arrays,\nsuch as the Lodash array and collection functions."),Object(a.b)("p",null,"This can be useful for creating both melodies and harmonies. Melodies might\nreuse the same notes in a different order to create a variation, while harmonies\nmight play the same notes in a lower octave on a different instrument."),Object(a.b)("p",null,'We\'ll refer to this as "transforming" a pattern, and there are many ways we\ncould do it:'),Object(a.b)("p",null,Object(a.b)("img",Object(r.a)({parentName:"p"},{src:"/tuplet/img/sequencer/transforms.svg",alt:null}))),Object(a.b)("p",null,"And here's how these transformations might look in code:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const original = [1, 2, 3, 4]\n\nconst reverse = (arr) => [...arr].reverse()\n\n// TODO: Handle positive and negative steps > 1\nconst nudge = (arr, step = 1) => {\n  const _arr = [...arr]\n  const last = _arr.pop()\n  _arr.unshift(last)\n  return _arr\n}\n\n// TODO\nconst shuffle = (arr) => {\n  return [...arr]\n}\n\nconst transpose = (arr, step = 1) => {\n  return arr.map((n) => n + step)\n}\n\nconst swap = (arr) => {\n  const a = arr.filter((n, idx) => idx % 2 == 0)\n  const b = arr.filter((n, idx) => idx % 2 == 1)\n  return a.map((n, idx) => [n, b[idx]].reverse())\n}\n\noriginal // => 1,2,3,4\nreverse(original) // => 4,3,2,1\nnudge(original) // => 4,1,2,3\nshuffle(original) // => 3,2,1,4\ntranspose(original) // => 2,3,4,5\nswap(original) // => 2,1,4,3\n")),Object(a.b)("p",null,"It should be noted that our patterns ",Object(a.b)("em",{parentName:"p"},"are")," technically\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Matrix_(mathematics)"}),"matrices")," (or vectors),\nand that matrix transformation is a rich topic, but beyond the scope of this\nbook."),Object(a.b)("h2",{id:"sequencer"},"Sequencer"),Object(a.b)("p",null,"Putting this all together, let's build a ",Object(a.b)("inlineCode",{parentName:"p"},"sequencer()")," function that does..?"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Has it's own metronome (or argument)?"),Object(a.b)("li",{parentName:"ul"},"Has it's own sampler (or argument)?")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Not sure we need this")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const metro = metronome(context, 60)\n\nconst piano = sampler(context, 'piano')\nconst cello = sampler(context, 'cello')\n\nconst pianoPattern = somePatternGenerator()\nconst celloPattern = someOtherPatternGenerator(pianoPattern?)\n\nconst sequencer = (met, samp) => {}\n\nconst pianoSeq = sequencer(metro, piano)\nconst celloSeq = sequencer(metro, cello)\n\n// console.log(seq)\n")),Object(a.b)("h2",{id:"learning"},"Learning"),Object(a.b)("p",null,"Before proceeding, let's encapsulate our learning so far."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Generating patterns:")," Functions for generating new patterns \u2192\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../api/gen"}),Object(a.b)("inlineCode",{parentName:"a"},"gen")),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Transforming patterns:")," Functions for transforming patterns \u2192\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../api/?"}),Object(a.b)("inlineCode",{parentName:"a"},"array/collection/transform/pattern")),".")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Sequencing patterns:")," Functions for sequencing patterns \u2192\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../api/seq"}),Object(a.b)("inlineCode",{parentName:"a"},"seq")),"."))))}i.isMDXComponent=!0},140:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=a.a.createContext({}),p=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},u=function(e){var n=p(e.components);return a.a.createElement(i.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,d=u["".concat(s,".").concat(m)]||u[m]||b[m]||o;return t?a.a.createElement(d,c({ref:n},i,{components:t})):a.a.createElement(d,c({ref:n},i))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var i=2;i<o;i++)s[i]=t[i];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);