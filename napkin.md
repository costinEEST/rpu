##### Book

- [Reactive Programming with RxJS 5 | Sergi Mansilla](./uajc)
- https://pragprog.com/titles/rkrxjs/build-reactive-websites-with-rxjs
- https://softchris.github.io/books/rxjs/hot-n-cold-observables

##### Cheat sheet

- https://learn-anything.xyz/1907
- https://www.thisdot.co/training/rxjs-workshop
- https://github.com/ReactiveX/rxjs/blob/master/docs_app/content/guide/operators.md
- https://github.com/ReactiveX/rxjs/blob/master/src/operators/index.ts
- https://github.com/ReactiveX/rxjs/blob/master/docs_app/content/6-to-7-change-summary.md
- https://github.com/stevedang-dev/Angular-Real-Time-Search-With-RxJS
- https://stackoverflow.com/questions/39494058/behaviorsubject-vs-observable
- https://rxjs.dev/deprecations/breaking-changes + https://medium.com/volosoft/whats-new-in-rxjs-7-a11cc564c6c0 + https://github.com/ReactiveX/rxjs/pull/5729
- As of the latest version of RxJS, the following operators have been deprecated and are scheduled for removal in a future release:
  - `let` replaced by `pipe` operator
  - `zip` replaced by `zipWith` operator
  - `concat` replaced by `concatWith` operator
  - `merge` replaced by `mergeWith` operator
  - `race` replaced by `raceWith` operator
  - `do` replaced by `tap` operator
  - `catch` replaced by `catchError` operator
  - `finally` replaced by `finalize` operator
  - `switch` replaced by `switchAll` operator
  - `switchMapTo` replaced by `switchMap` operator
  - `takeUntil` replaced by `takeWhile` operator
  - `last` replaced by `lastValueFrom` operator
  - `startWith` replaced by `startWithMany` operator
  - `single` replaced by `singleValue` operator
  - [`create`](https://egghead.io/lessons/rxjs-using-observable-create-for-fine-grained-control) can be replaced by [`of`](https://stackoverflow.com/questions/55539103/angular-create-is-deprecated-use-new-observable-instead#comment97781613_55539146) operator
  - [`flatMap`](https://rxjs.dev/api/operators/flatMap) replaced by [`mergeMap`](https://www.learnrxjs.io/learn-rxjs/operators/transformation/mergemap)
- What is the difference between `of` and `from` operator?
- What is the difference between `concatMap` and `mergeMap` operator?
- What is the difference between `ajax` and [`fromFetch`](https://www.meghsohor.com/blog/rxjs-ajax-fromfetch-operators) operator?

##### Cinema

- [Reactive Programming using Observables](https://github.com/lund0n/observables-utahjs)
- [Your bouse is a database | Erik Meijer](https://twitter.com/headinthebox/status/1600255588528574464)
- https://glebbahmutov.com/blog/journey-from-procedural-to-reactive-javascript-with-stops
- https://www.youtube.com/playlist?list=PLa_W0QyB2915CaMl3sDUPPHCs0WwfJHGJ
- https://www.youtube.com/playlist?list=PLWIcRrPLCdUdwhnxS2A7yZtxfHwB1MNVQ
- Build the operators of RxJS from scratch: [article](https://blog.strongbrew.io/build-the-operators-from-rxjs-from-scratch), [playlist](https://www.youtube.com/playlist?list=PL7Z4uBV2KGdv5nTpKGlScdMbeVzM02b7L), [repo](<[repo](https://github.com/KwintenP/rxjs-operators-from-scratch)>)
- [RxJs Core Team](https://www.youtube.com/playlist?list=PLw5h0DiJ-9PAviWAD5k8NFJp2PBagO2SS)
- [Actor Model | Hans Schenker](https://www.youtube.com/playlist?list=PLw5h0DiJ-9PCUiJd0FrJhenOSvO3XLgmP)

##### Community

- https://www.reddit.com/r/angular/comments/109y41z/comment/j4145te
- http://www.hanselman.com/blog/reactive-extensions-rx-is-now-open-source
- https://github.com/jhusain/observable-spec
- https://reactivex.io/tutorials.html#rxjs
- https://github.com/nartc/rxjs-react-custom-command
- https://github.com/this-is-learning/rxjs-fundamentals-course
- [An Implementation of Observables for Javascript](https://github.com/zenparsing/zen-observable)
- [Generators are the new observables](https://github.com/zenparsing/geneviv)
- [Observable Push Streams](https://github.com/zenparsing/zen-push)
- https://nils-mehlhorn.de/posts/react-hooks-rxjs
- [React bindings for RxJS](https://github.com/re-rxjs/react-rxjs)
- [Lightweight Redux Store based on RxJS](https://github.com/spierala/mini-rx-store)
- https://github.com/sindresorhus/awesome-observables
- [RxJS Observables testing](https://github.com/hirezio/observer-spy)
- [Fake e-shop to learn reactive programming from Angular 13](https://github.com/antdlc135/FakeE-Shop)
- [S.js is a small reactive programming library](https://github.com/adamhaile/S)
- https://github.com/thisdot/starter.dev-github-showcases/tree/main/cra-rxjs-styled-components
- ["atoms" are really "behaviors" in functional reactive programming](https://twitter.com/BenLesh/status/1287070499378475011) + https://codesandbox.io/s/rxjs-recoil-7cdq4-7cdq4
- [using Recoil and RxJS](https://github.com/facebookexperimental/Recoil/discussions/1013#discussioncomment-711974)

##### Debugging

- https://github.com/rxjs-debug/rxjs-debug
- https://github.com/Coly010/rxjs-debug-operator
- [A debugging library for RxJS](https://github.com/cartant/rxjs-spy)
- [RxFiddle is a debugger for Reactive Extensions](https://github.com/hermanbanken/RxFiddle)

##### Work with the DOM API

- https://github.com/surma/observables-with-streams
- https://dev.to/rxjs/fetching-data-in-react-with-rxjs-and-lt-gt-fragment-54h7
- [storing and retrieving data from indexedDB databases, using an RxJS based API](https://github.com/thisdot/open-source/tree/main/libs/rxidb)
- [Observable based Api wrapping Web APIs](https://github.com/niklas-wortmann/rxjs-web)

##### Work with the server

- https://blog.logrocket.com/exploring-reactive-programming-node-js
- https://sergimansilla.com/blog/real-world-observables
- [Offline-first, reactive database](https://github.com/pubkey/rxdb)

##### Tool

- https://playcode.io/rxjs
- [Animated playground for Rx Observables](https://github.com/moroshko/rxviz)
- [Know your Observables before deploying to production](https://github.com/observable-playground/observable-playground)
- [Interactive diagrams of Rx Observables](https://github.com/staltz/rxmarbles)
- [RxJS cheat sheet inside VS Code](https://github.com/dzhavat/rxjs-cheatsheet)
- [A game for learning RxJS](https://github.com/GregorBiswanger/rxjs-fruits), https://github.com/Troy96/rxjs-fruits-solutions
- [Chrome extension that can be used to visualize RxJS streams in realtime](https://github.com/KwintenP/rx-devtools)
- https://github.com/rxjs-playground/rxjs-playground.github.io
- [RxJS Insights is a browser extension that helps you debug and visualize the observables in your app](https://github.com/ksz-ksz/rxjs-insights)
- https://github.com/swissmanu/rxjs-debugging-for-vscode
- https://github.com/hediet/rxjs-playground

https://dev.to/charlintosh/reactive-app-with-react-rxjs-24b3

https://indepth.dev/posts/1114/learn-to-combine-rxjs-sequences-with-super-intuitive-interactive-diagrams

https://egghead.io/q/rxjs + https://www.learnrxjs.io/#videos

https://www.youtube.com/playlist?list=PLWIcRrPLCdUdwhnxS2A7yZtxfHwB1MNVQ

https://bestofjs.org/projects?tags=reactive

https://goodguydaniel.com/blog/awesome-reactive

https://mattpodwysocki.github.io/rxjs/twitch/youtube/reactive/2019/01/09/adentofcode-2018.html

https://github.com/lucamezzalira/awesome-reactive-programming

[Useful resources for Reactive Extensions](https://github.com/riiid/awesome-rx)

[Awesome list of RxJS 5](https://github.com/RxJS-CN/awesome-rxjs)

https://github.com/ichpuchtli/awesome-rxjs
