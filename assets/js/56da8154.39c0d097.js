(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),c=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):I(I({},t),e)),n},u=function(e){var t=c(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},r={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},N=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,M=e.parentName,l=j(e,["components","mdxType","originalType","parentName"]),u=c(n),N=i,s=u["".concat(M,".").concat(N)]||u[N]||r[N]||a;return n?o.a.createElement(s,I(I({ref:t},l),{},{components:n})):o.a.createElement(s,I({ref:t},l))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,M=new Array(a);M[0]=N;var I={};for(var j in t)hasOwnProperty.call(t,j)&&(I[j]=t[j]);I.originalType=e,I.mdxType="string"==typeof e?e:i,M[1]=I;for(var l=2;l<a;l++)M[l]=n[l];return o.a.createElement.apply(null,M)}return o.a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},166:function(e,t,n){"use strict";n.r(t),t.default="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwOSAxMTEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTAgMGg0MDl2MTExaC00MDl6IiBmaWxsPSIjZmZmIi8+PGcgZmlsbD0iI2UwZTBlMCI+PHBhdGggZD0ibTkxLjc4IDUzLjg5NjkgMjYuNjM1LTI2LjYzNTJjLTYuODczLTYuNzkzMS0xNi4yNTctMTEuMDUwNS0yNi42MzUtMTEuMjU0MXoiLz48cGF0aCBkPSJtMTI5Ljk5MiA1NC4yMmgtMzcuNDMybDI2LjQwNC0yNi40MDQ0YzYuNjYyIDYuODUxMiAxMC44MjcgMTYuMTQyIDExLjAyOCAyNi40MDQ0eiIvPjxwYXRoIGQ9Im0xMTkuMTU2IDgxLjk4NmM2LjcxNy03LjAwNiAxMC44NDQtMTYuNTE0IDEwLjg0NC0yNi45ODZoLTM3LjgzeiIvPjwvZz48cGF0aCBkPSJtMTE4LjYxMSA4Mi41NDM3Yy02Ljg5IDYuOTA2My0xNi4zNTQgMTEuMjQzMS0yNi44MzEgMTEuNDQ4NnYtMzguMjc5MnoiIGZpbGw9IiNiZGJkYmQiLz48cGF0aCBkPSJtOTEgOTR2LTM4LjIybC0yNy4xODQ0IDI3LjE4NDRjNy4wMjQ0IDYuODI5NyAxNi42MTMyIDExLjAzNTYgMjcuMTg0NCAxMS4wMzU2eiIgZmlsbD0iI2JkYmRiZCIvPjxwYXRoIGQ9Im02My4yNjE4IDgyLjQxNTEgMjcuNDE1MS0yNy40MTUxaC0zOC42NzY5YzAgMTAuNjg3NCA0LjI5ODkgMjAuMzcwNyAxMS4yNjE4IDI3LjQxNTF6IiBmaWxsPSIjODI4MjgyIi8+PHBhdGggZD0ibTkxIDE2djM3LjgzbC0yNi45ODYtMjYuOTg2YzcuMDA2LTYuNzE2NyAxNi41MTQtMTAuODQ0IDI2Ljk4Ni0xMC44NDR6IiBmaWxsPSIjMzMzIi8+PHBhdGggZD0ibTYzLjQ1NjMgMjcuMzg5NCAyNi44MzA2IDI2LjgzMDZoLTM4LjI3OTNjLjIwNTYtMTAuNDc2OCA0LjU0MjQtMTkuOTQwOSAxMS40NDg3LTI2LjgzMDZ6IiBmaWxsPSIjODI4MjgyIi8+PHBhdGggZD0ibTkwLjIwNDkgNTMuNzA1MmMtLjc2ODQuMzA5NS0xLjE0MDQgMS4xODMzLS44MzA5IDEuOTUxOC4zMDk1Ljc2ODQgMS4xODM0IDEuMTQwNCAxLjk1MTguODMwOXptMzEuODMyMS0xMS4yMDQ5LTE3LjE1LTIuNDI4NiA2LjQ3MiAxNi4wNjYyem0tMzAuNzExMiAxMy45ODc2IDE1LjYzNTItNi4yOTgxLTEuMTItMi43ODI3LTE1LjYzNjEgNi4yOTgxem0xNS42MzUyLTYuMjk4MSAzLjExNC0xLjI1NDEtMS4xMjEtMi43ODI3LTMuMTEzIDEuMjU0MXoiIGZpbGw9IiMwMDAiLz48Y2lyY2xlIGN4PSI5MS4zOSIgY3k9IjU0LjYxIiBmaWxsPSIjMDAwIiByPSIyLjczIi8+PHBhdGggZD0ibTE5OC42ODMgODkuMTM0MmgxNzguMzY2IiBzdHJva2U9IiNlMGUwZTAiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Im0xOTguNjgzIDg4LjI2ODN2LTY5LjI2ODMiIHN0cm9rZT0iI2UwZTBlMCIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0ibTIyMS4xOTUgNjkuMjE5NWgxNy4zMTcxdjE3LjMxNzFoLTE3LjMxNzF6IiBmaWxsPSIjZTBlMGUwIi8+PHBhdGggZD0ibTIyMS4xOTUgNTAuMTcwN2gxNy4zMTcxdjE3LjMxNzFoLTE3LjMxNzF6IiBmaWxsPSIjZTBlMGUwIi8+PHBhdGggZD0ibTIyMS4xOTUgMzEuMTIxOWgxNy4zMTcxdjE3LjMxNzFoLTE3LjMxNzF6IiBmaWxsPSIjZTBlMGUwIi8+PHBhdGggZD0ibTI1NS44MjkgNTAuMTcwN2gxNy4zMTcxdjE3LjMxNzFoLTE3LjMxNzF6IiBmaWxsPSIjYmRiZGJkIi8+PHBhdGggZD0ibTI1NS44MjkgNjkuMjE5NWgxNy4zMTcxdjE3LjMxNzFoLTE3LjMxNzF6IiBmaWxsPSIjYmRiZGJkIi8+PHBhdGggZD0ibTI5My45MjcgNTAuMTcwN2gxNy4zMTcxdjE3LjMxNzFoLTE3LjMxNzF6IiBmaWxsPSIjODI4MjgyIi8+PHBhdGggZD0ibTI5My45MjcgNjkuMjE5NWgxNy4zMTcxdjE3LjMxNzFoLTE3LjMxNzF6IiBmaWxsPSIjODI4MjgyIi8+PHBhdGggZD0ibTMyOC41NjEgNjkuMjE5NWgxNy4zMTcxdjE3LjMxNzFoLTE3LjMxNzF6IiBmaWxsPSIjMzMzIi8+PGcgZmlsbD0iIzAwMCI+PHBhdGggZD0ibTIzMS4xNiAxMDJoMS4yNTRsLTEuOTYxLTUuNjM2N2gtMS4zODdsLTEuOTU3IDUuNjM2N2gxLjIxMWwuNDMtMS4zNjdoMS45OHptLTEuNDMzLTQuNTU4NmguMDI3bC43MjMgMi4zMDg2aC0xLjQ3M3oiLz48cGF0aCBkPSJtMjYzLjk2NSAxMDJjMS4yMDMgMCAxLjk0OS0uNjIxIDEuOTQ5LTEuNjEzIDAtLjc0NjQtLjU2Mi0xLjMwNS0xLjMyOC0xLjM2MzZ2LS4wMzEyYy41OTgtLjA4OTkgMS4wNTktLjYwNTUgMS4wNTktMS4yMjI3IDAtLjg2MzMtLjY2NS0xLjQwNjItMS43MjMtMS40MDYyaC0yLjQ1M3Y1LjYzNjd6bS0xLjMxNy00Ljc1NzhoLjk2OWMuNTUxIDAgLjg2Ny4yNTc4Ljg2Ny43MTA5IDAgLjQ3NjYtLjM1OS43NTM5LS45ODguNzUzOWgtLjg0OHptMCAzLjg3ODh2LTEuNjM2NmguOTg5Yy42OTUgMCAxLjA3NC4yODEyIDEuMDc0LjgwODYgMCAuNTM5LS4zNjcuODI4LTEuMDQ3LjgyOHoiLz48cGF0aCBkPSJtMzAyLjk2MSAxMDIuMDk4YzEuMzgzIDAgMi4zNDgtLjc5NyAyLjQ4LTIuMDU1aC0xLjE0OGMtLjEyNS42NjgtLjYyOSAxLjA3OC0xLjMyOCAxLjA3OC0uOTAzIDAtMS40NjktLjc0Mi0xLjQ2OS0xLjk0NTIgMC0xLjE4NzUuNTc0LTEuOTMzNiAxLjQ2NS0xLjkzMzYuNjg3IDAgMS4yMTkuNDUzMSAxLjMyOCAxLjE0NDVoMS4xNDljLS4wOS0xLjI2MTctMS4xMjItMi4xMjExLTIuNDc3LTIuMTIxMS0xLjYzMyAwLTIuNjY4IDEuMDk3Ny0yLjY2OCAyLjkxNDEgMCAxLjgyMDMgMS4wMjcgMi45MTgzIDIuNjY4IDIuOTE4M3oiLz48cGF0aCBkPSJtMzM0LjQ2OSA5Ni4zNjMzdjUuNjM2N2gyLjE1MmMxLjY5MSAwIDIuNjg4LTEuMDUxIDIuNjg4LTIuODM5OCAwLTEuNzg5MS0uOTk3LTIuNzk2OS0yLjY4OC0yLjc5Njl6bTEuMTc5Ljk3MjZoLjgzMmMxLjA0IDAgMS42MjUuNjQ4NSAxLjYyNSAxLjgyODIgMCAxLjIxODktLjU3IDEuODU4OS0xLjYyNSAxLjg1ODloLS44MzJ6Ii8+PC9nPjwvc3ZnPg=="},167:function(e,t,n){"use strict";n.r(t),t.default="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDI0IDEyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjx0ZXh0IGZpbGw9IiMwMDAiIGZvbnQtZmFtaWx5PSJTRlByb0Rpc3BsYXktQm9sZCwgU0YgUHJvIERpc3BsYXkiIGZvbnQtc2l6ZT0iOCIgZm9udC13ZWlnaHQ9ImJvbGQiIGxldHRlci1zcGFjaW5nPSIuMDE2NjY2NjY5NCI+PHRzcGFuIHg9IjI4NiIgeT0iMTA2Ij5Vbmlmb3JtIGRpc3RyaWJ1dGlvbjwvdHNwYW4+PC90ZXh0PjxnIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZD0ibTI0NCA4NWgxNTgiIHN0cm9rZT0iI2Q4ZDVkOSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0ibTI0MyA4NXYtNzIiIHN0cm9rZT0iI2Q4ZDVkOSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PGcgZmlsbD0iIzliOWI5YiI+PHBhdGggZD0ibTI1NCAyOWg4djU1aC04eiIvPjxwYXRoIGQ9Im0yNzAgMzJoOHY1MmgtOHoiLz48cGF0aCBkPSJtMjg2IDI4aDh2NTZoLTh6Ii8+PHBhdGggZD0ibTMwMyAzMmg4djUyaC04eiIvPjxwYXRoIGQ9Im0zMTkgMjhoOHY1NmgtOHoiLz48cGF0aCBkPSJtMzM1IDMyaDh2NTJoLTh6Ii8+PHBhdGggZD0ibTM1MiAyOGg4djU2aC04eiIvPjxwYXRoIGQ9Im0zNjggMjhoOHY1NmgtOHoiLz48cGF0aCBkPSJtMzg0IDM0aDh2NTBoLTh6Ii8+PC9nPjwvZz48dGV4dCBmaWxsPSIjMDAwIiBmb250LWZhbWlseT0iU0ZQcm9EaXNwbGF5LUJvbGQsIFNGIFBybyBEaXNwbGF5IiBmb250LXNpemU9IjgiIGZvbnQtd2VpZ2h0PSJib2xkIiBsZXR0ZXItc3BhY2luZz0iLjAxNjY2NjY2OTQiPjx0c3BhbiB4PSI2NyIgeT0iMTA2Ij5Ob3JtYWwgZGlzdHJpYnV0aW9uPC90c3Bhbj48L3RleHQ+PGcgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJtMjMgODVoMTU5IiBzdHJva2U9IiNkOGQ1ZDkiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Im0yMiA4NXYtNzIiIHN0cm9rZT0iI2Q4ZDVkOSIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0ibTMzIDgwaDh2NGgtOHoiIGZpbGw9IiM5YjliOWIiLz48cGF0aCBkPSJtNDkgNzhoOHY2aC04eiIgZmlsbD0iIzliOWI5YiIvPjxwYXRoIGQ9Im02NiA2OWg4djE1aC04eiIgZmlsbD0iIzliOWI5YiIvPjxwYXRoIGQ9Im04MiA1MWg4djMzaC04eiIgZmlsbD0iIzliOWI5YiIvPjxwYXRoIGQ9Im05OCAyMmg4djYyaC04eiIgZmlsbD0iIzliOWI5YiIvPjxwYXRoIGQ9Im0xMTQgNTFoOHYzM2gtOHoiIGZpbGw9IiM5YjliOWIiLz48cGF0aCBkPSJtMTQ3IDc4aDh2NmgtOHoiIGZpbGw9IiM5YjliOWIiLz48cGF0aCBkPSJtMTMxIDY5aDh2MTVoLTh6IiBmaWxsPSIjOWI5YjliIi8+PHBhdGggZD0ibTE2MyA4MGg4djRoLTh6IiBmaWxsPSIjOWI5YjliIi8+PC9nPjwvZz48L3N2Zz4="},168:function(e,t,n){"use strict";n.r(t),t.default="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDkwIDQxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0wIDBoOTB2NDFoLTkweiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Im04NSAxaDR2MzBoLTR6IiBzdHJva2U9IiNmMmYyZjIiIHN0cm9rZS13aWR0aD0iLjEyNSIvPjxwYXRoIGQ9Im0zMyAxaDR2MzBoLTR6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iLjEyNSIvPjxwYXRoIGQ9Im0zNyAxaDR2MzBoLTR6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iLjEyNSIvPjxwYXRoIGQ9Im00MSAxaDR2MzBoLTR6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iLjEyNSIvPjxwYXRoIGQ9Im00NSAxaDR2MzBoLTR6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iLjEyNSIvPjxwYXRoIGQ9Im00OSAxaDR2MzBoLTR6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iLjEyNSIvPjxwYXRoIGQ9Im01MyAxaDR2MzBoLTR6IiBzdHJva2U9IiMwMDAiIHN0cm9rZS13aWR0aD0iLjEyNSIvPjxwYXRoIGQ9Im0zNiAxaDJ2MjBoLTJ6IiBmaWxsPSIjMDAwIi8+PHBhdGggZD0ibTQ0IDFoMnYyMGgtMnoiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJtNDggMWgydjIwaC0yeiIgZmlsbD0iIzAwMCIvPjxwYXRoIGQ9Im01MiAxaDJ2MjBoLTJ6IiBmaWxsPSIjMDAwIi8+PHBhdGggZD0ibTY5IDFoNHYzMGgtNHoiIHN0cm9rZT0iI2YyZjJmMiIgc3Ryb2tlLXdpZHRoPSIuMTI1Ii8+PHBhdGggZD0ibTczIDFoNHYzMGgtNHoiIHN0cm9rZT0iI2YyZjJmMiIgc3Ryb2tlLXdpZHRoPSIuMTI1Ii8+PHBhdGggZD0ibTc3IDFoNHYzMGgtNHoiIHN0cm9rZT0iI2YyZjJmMiIgc3Ryb2tlLXdpZHRoPSIuMTI1Ii8+PHBhdGggZD0ibTgxIDFoNHYzMGgtNHoiIHN0cm9rZT0iI2YyZjJmMiIgc3Ryb2tlLXdpZHRoPSIuMTI1Ii8+PHBhdGggZD0ibTcyIDFoMnYyMGgtMnoiIGZpbGw9IiNmMmYyZjIiLz48cGF0aCBkPSJtNzYgMWgydjIwaC0yeiIgZmlsbD0iI2YyZjJmMiIvPjxwYXRoIGQ9Im04MCAxaDJ2MjBoLTJ6IiBmaWxsPSIjZjJmMmYyIi8+PGcgc3Ryb2tlPSIjZjJmMmYyIj48cGF0aCBkPSJtMSAxaDR2MzBoLTR6IiBzdHJva2Utd2lkdGg9Ii4xMjUiLz48cGF0aCBkPSJtNSAxaDR2MzBoLTR6IiBzdHJva2Utd2lkdGg9Ii4xMjUiLz48cGF0aCBkPSJtOSAxaDR2MzBoLTR6IiBzdHJva2Utd2lkdGg9Ii4xMjUiLz48cGF0aCBkPSJtMTMgMWg0djMwaC00eiIgc3Ryb2tlLXdpZHRoPSIuMTI1Ii8+PHBhdGggZD0ibTE3IDFoNHYzMGgtNHoiIHN0cm9rZS13aWR0aD0iLjEyNSIvPjxwYXRoIGQ9Im0yMSAxaDR2MzBoLTR6IiBzdHJva2Utd2lkdGg9Ii4xMjUiLz48cGF0aCBkPSJtMjUgMWg0djMwaC00eiIgc3Ryb2tlLXdpZHRoPSIuMTI1Ii8+PC9nPjxwYXRoIGQ9Im00IDFoMnYyMGgtMnoiIGZpbGw9IiNmMmYyZjIiLz48cGF0aCBkPSJtOCAxaDJ2MjBoLTJ6IiBmaWxsPSIjZjJmMmYyIi8+PHBhdGggZD0ibTE2IDFoMnYyMGgtMnoiIGZpbGw9IiNmMmYyZjIiLz48cGF0aCBkPSJtMjAgMWgydjIwaC0yeiIgZmlsbD0iI2YyZjJmMiIvPjxwYXRoIGQ9Im0yNCAxaDJ2MjBoLTJ6IiBmaWxsPSIjZjJmMmYyIi8+PHBhdGggZD0ibTYxIDFoNHYzMGgtNHoiIHN0cm9rZT0iI2YyZjJmMiIgc3Ryb2tlLXdpZHRoPSIuMTI1Ii8+PHBhdGggZD0ibTY1IDFoNHYzMGgtNHoiIHN0cm9rZT0iI2YyZjJmMiIgc3Ryb2tlLXdpZHRoPSIuMTI1Ii8+PHBhdGggZD0ibTY0IDFoMnYyMGgtMnoiIGZpbGw9IiNmMmYyZjIiLz48cGF0aCBkPSJtMjkgMzhoMzIiIHN0cm9rZT0iI2UwZTBlMCIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgc3Ryb2tlLXdpZHRoPSIuNSIvPjxwYXRoIGQ9Im00MCAzNmgxMXY0aC0xMXoiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJtNDIuMjEyMyAzNy4xMzYzYy0uNTQzNCAwLS44ODM2LjM2NDQtLjg4MzYuOTQ4NCAwIC41ODI3LjM0MDIuOTQ3Ljg4MzYuOTQ3LjU0MjEgMCAuODgzNi0uMzY0My44ODM2LS45NDcgMC0uNTg0LS4zNDE1LS45NDg0LS44ODM2LS45NDg0em0wIC4zMmMuMjk5NiAwIC40OTEzLjI0MzcuNDkxMy42Mjg0IDAgLjM4MzQtLjE5MTcuNjI1OC0uNDkxMy42MjU4LS4zMDA5IDAtLjQ5MjYtLjI0MjQtLjQ5MjYtLjYyNTggMC0uMzg0Ny4xOTMtLjYyODQuNDkyNi0uNjI4NHptMi4zNDQzLjY4OTNjLS4wMTY1LS4zMDg1LS4yNTAxLS41MzU3LS42MTgzLS41MzU3LS40MDc1IDAtLjY2NzguMjcxNi0uNjY3OC43MDg0IDAgLjQ0NDMuMjYwMy43MTA5LjY3MDQuNzEwOS4zNTggMCAuNTk3OS0uMjA2OS42MTY5LS41MjgxaC0uMzQ1M2MtLjAyMjguMTQ4NS0uMTE5My4yMzc0LS4yNjc4LjIzNzQtLjE4NDEgMC0uMjk4NC0uMTUyNC0uMjk4NC0uNDIwMiAwLS4yNjI4LjExNDMtLjQxNzcuMjk3MS0uNDE3Ny4xNTIzIDAgLjI0NzYuMTAxNS4yNjkxLjI0NXptLjI4NzYtLjgyMDF2LjMxMzZoLS4xOTE3di4yNzkzaC4xOTE3di43MTQ3YzAgLjI2NTMuMTI0NC4zNzIuNDQ0My4zNzIuMDc0OSAwIC4xMzg0LS4wMDY0LjE3NjUtLjAxNTN2LS4yNzI5Yy0uMDIyOC4wMDM4LS4wNTcxLjAwNjMtLjA5MDEuMDA2My0uMTA5MiAwLS4xNi0uMDQ5NS0uMTYtLjE1MzZ2LS42NTEyaC4yNTE0di0uMjc5M2gtLjI1MTR2LS4zMTM2em0xLjM0NjQgMS40MjgyYy0uMTI1NyAwLS4yMDk0LS4wNjM1LS4yMDk0LS4xNjUgMC0uMDk2NS4wNzg3LS4xNTg3LjIxNy0uMTY4OWwuMjg3LS4wMTc3di4wOTljMCAuMTQ3Mi0uMTMzMy4yNTI2LS4yOTQ2LjI1MjZ6bS0uMTIxOS4yNjc5Yy4xNzAyIDAgLjMzOS0uMDg1MS40MTUyLS4yMjk4aC4wMDc2di4yMDgyaC4zNTh2LS45MzU2YzAtLjI3NDMtLjIyNzItLjQ1NDUtLjU3NjQtLjQ1NDUtLjM2MDUgMC0uNTg1Mi4xODE1LS41OTkyLjQ0NTZoLjMzOWMuMDE3OC0uMTAwMy4xMDU0LS4xNjg5LjI0MzctLjE2ODkuMTM5NyAwIC4yMjg2LjA3MzcuMjI4Ni4yMDA2di4wOTAxbC0uMzQyOC4wMjA0Yy0uMzM5LjAyMDMtLjUyOTQuMTYzNy0uNTI5NC40MTEzIDAgLjI0NS4xOTY4LjQxMjYuNDU1Ny40MTI2em0yLjI2NTYtMS4zODI1aC0uMzg3MmwtLjI4MTggMS4wMzM0aC0uMDA3N2wtLjI4MzEtMS4wMzM0aC0uMzk3M2wuNDcxIDEuMzYwOWguNDE4OXptLjcxMDQuMjQ1Yy4xNjUgMCAuMjc4LjExOTMuMjg1Ni4yOTMyaC0uNTc3NmMuMDEyNy0uMTcwMS4xMjk1LS4yOTMyLjI5Mi0uMjkzMnptLjI5MDcuNjk5NWMtLjAzNDMuMTA0MS0uMTM4NC4xNzE0LS4yNzQyLjE3MTQtLjE4OTIgMC0uMzEyMy0uMTMzMy0uMzEyMy0uMzI3NnYtLjAyMjhoLjkzODJ2LS4xMTNjMC0uNDEzOS0uMjUwMS0uNjgxNy0uNjQ2Mi0uNjgxNy0uNDAyNSAwLS42NTY0LjI4MTgtLjY1NjQuNzE2IDAgLjQzNTQuMjUxNC43MDMzLjY3MDQuNzAzMy4zMzY0IDAgLjU4MDEtLjE3OS42MjA4LS40NDU2eiIgZmlsbD0iIzAwMCIvPjxwYXRoIGQ9Im0zMS4xMTA0IDM1LjAzNjZjLjUxODUgMCAuODgwMy0uMjk4OC45MzAxLS43NzA1aC0uNDMwNmMtLjA0NjkuMjUwNS0uMjM1OS40MDQzLS40OTgxLjQwNDMtLjMzODQgMC0uNTUwOC0uMjc4My0uNTUwOC0uNzI5NSAwLS40NDUzLjIxNTQtLjcyNTEuNTQ5NC0uNzI1MS4yNTc4IDAgLjQ1Ny4xNjk5LjQ5OC40MjkyaC40MzA3Yy0uMDMzNy0uNDczMS0uNDIwNC0uNzk1NC0uOTI4Ny0uNzk1NC0uNjEyNCAwLTEuMDAwNS40MTE2LTEuMDAwNSAxLjA5MjggMCAuNjgyNi4zODUyIDEuMDk0MiAxLjAwMDUgMS4wOTQyeiIgZmlsbD0iIzAwMCIvPjxwYXRoIGQ9Im01OS4xMTA0IDM1LjAzNjZjLjUxODUgMCAuODgwMy0uMjk4OC45MzAxLS43NzA1aC0uNDMwNmMtLjA0NjkuMjUwNS0uMjM1OS40MDQzLS40OTgxLjQwNDMtLjMzODQgMC0uNTUwOC0uMjc4My0uNTUwOC0uNzI5NSAwLS40NDUzLjIxNTQtLjcyNTEuNTQ5NC0uNzI1MS4yNTc4IDAgLjQ1Ny4xNjk5LjQ5OC40MjkyaC40MzA3Yy0uMDMzNy0uNDczMS0uNDIwNC0uNzk1NC0uOTI4Ny0uNzk1NC0uNjEyNCAwLTEuMDAwNS40MTE2LTEuMDAwNSAxLjA5MjggMCAuNjgyNi4zODUyIDEuMDk0MiAxLjAwMDUgMS4wOTQyeiIgZmlsbD0iIzAwMCIvPjxjaXJjbGUgY3g9IjM1IiBjeT0iMjkiIGZpbGw9IiNiZGJkYmQiIHI9IjEiLz48Y2lyY2xlIGN4PSIzOSIgY3k9IjI5IiBmaWxsPSIjYmRiZGJkIiByPSIxIi8+PGNpcmNsZSBjeD0iNDMiIGN5PSIyOSIgZmlsbD0iI2JkYmRiZCIgcj0iMSIvPjxjaXJjbGUgY3g9IjQ3IiBjeT0iMjkiIGZpbGw9IiNiZGJkYmQiIHI9IjEiLz48Y2lyY2xlIGN4PSI1MSIgY3k9IjI5IiBmaWxsPSIjYmRiZGJkIiByPSIxIi8+PGNpcmNsZSBjeD0iNTUiIGN5PSIyOSIgZmlsbD0iI2JkYmRiZCIgcj0iMSIvPjxnIGZpbGw9IiNmMmYyZjIiPjxjaXJjbGUgY3g9IjYzIiBjeT0iMjkiIHI9IjEiLz48Y2lyY2xlIGN4PSI2NyIgY3k9IjI5IiByPSIxIi8+PGNpcmNsZSBjeD0iNzEiIGN5PSIyOSIgcj0iMSIvPjxjaXJjbGUgY3g9Ijc1IiBjeT0iMjkiIHI9IjEiLz48Y2lyY2xlIGN4PSI3OSIgY3k9IjI5IiByPSIxIi8+PGNpcmNsZSBjeD0iODMiIGN5PSIyOSIgcj0iMSIvPjxjaXJjbGUgY3g9Ijg3IiBjeT0iMjkiIHI9IjEiLz48Y2lyY2xlIGN4PSIzIiBjeT0iMjkiIHI9IjEiLz48Y2lyY2xlIGN4PSI3IiBjeT0iMjkiIHI9IjEiLz48Y2lyY2xlIGN4PSIxMSIgY3k9IjI5IiByPSIxIi8+PGNpcmNsZSBjeD0iMTUiIGN5PSIyOSIgcj0iMSIvPjxjaXJjbGUgY3g9IjE5IiBjeT0iMjkiIHI9IjEiLz48Y2lyY2xlIGN4PSIyMyIgY3k9IjI5IiByPSIxIi8+PGNpcmNsZSBjeD0iMjciIGN5PSIyOSIgcj0iMSIvPjwvZz48cGF0aCBkPSJtMjkgMWg0djMwaC00eiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9Ii4xMjUiLz48cGF0aCBkPSJtMzIgMWgydjIwaC0yeiIgZmlsbD0iIzAwMCIvPjxjaXJjbGUgY3g9IjMxIiBjeT0iMjkiIGZpbGw9IiNiZGJkYmQiIHI9IjEiLz48Y2lyY2xlIGN4PSI1OSIgY3k9IjI5IiBmaWxsPSIjYmRiZGJkIiByPSIxIi8+PHBhdGggZD0ibTYwIDFoMnYyMGgtMnoiIGZpbGw9IiNmMmYyZjIiLz48cGF0aCBkPSJtNTcgMWg0djMwaC00eiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9Ii4xMjUiLz48L3N2Zz4="},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return M})),n.d(t,"toc",(function(){return I})),n.d(t,"default",(function(){return l}));var i=n(3),o=(n(0),n(116));const a={title:"Probability"},M={unversionedId:"generative/probability",id:"generative/probability",isDocsHomePage:!1,title:"Probability",description:"TODO",source:"@site/book/generative/probability.md",slug:"/generative/probability",permalink:"/book/generative/probability",version:"current",sidebar:"main",previous:{title:"Randomness",permalink:"/book/generative/randomness"},next:{title:"Grammars",permalink:"/book/generative/grammars"}},I=[{value:"Probability",id:"probability",children:[]},{value:"Markov chains",id:"markov-chains",children:[]},{value:"Normal distribution",id:"normal-distribution",children:[]},{value:"Perlin noise",id:"perlin-noise",children:[]},{value:"Scales",id:"scales",children:[]},{value:"Polyphony",id:"polyphony",children:[]}],j={toc:I};function l({components:e,...t}){return Object(o.b)("wrapper",Object(i.a)({},j,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"TODO")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Probability/Chance/Dice/Choices"),Object(o.b)("li",{parentName:"ul"},"Markov Models/Chains, State Machines"),Object(o.b)("li",{parentName:"ul"},"Apply to: notes, phrase choice")),Object(o.b)("h2",{id:"probability"},"Probability"),Object(o.b)("p",null,"By applying probability, we can still employ randomness, but weigh the odds to\nfavour specific outcomes. Adjusting the weights, we can influence how our\nprogram behaves."),Object(o.b)("p",null,"An easy way to think about this is by visualizing a pie chart. The more pieces\nof the pie we assign a given outcome, the more chance that outcome will occur."),Object(o.b)("p",null,Object(o.b)("img",{src:n(166).default})),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"navigator.requestMIDIAccess().then((midi) => {\n  const outputs = midi.outputs.values()\n  let output = outputs.next().value\n\n  function random(min, max) {\n    return Math.floor(Math.random() * (max - min + 1)) + min\n  }\n\n  function playNote(note, length, velocity = 127) {\n    let noteOn = 144 // channel 1 note on\n    let noteOff = 128 // channel 1 note off\n\n    output.send([noteOn, note, velocity])\n    output.send([noteOff, note, velocity], window.performance.now() + length)\n  }\n\n  let startNote = random(21, 108)\n  let length = 250\n\n  function play(note) {\n    let prob = 0.4\n    let num = Math.random()\n    let nextNote\n\n    if (num < prob) {\n      // 40% chance of going down 7 steps\n      nextNote = Math.max(note - 7, 21)\n    } else {\n      // 60% chance of going up 5 steps\n      nextNote = Math.min(note + 5, 108)\n    }\n\n    let timer = setTimeout(() => {\n      playNote(nextNote, length)\n      clearTimeout(timer)\n      play(nextNote)\n    }, length)\n  }\n\n  play(startNote)\n})\n")),Object(o.b)("p",null,"Here, we've weighed the odds to favour going up the scale. We'll sometimes dip\ndownwards, but the results will always trend upwards over time."),Object(o.b)("h2",{id:"markov-chains"},"Markov chains"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"TODO")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The resulting stochastic system is called a Markov chain. The number of\nprevious values observed is called the order of the Markov chain.")),Object(o.b)("h2",{id:"normal-distribution"},"Normal distribution"),Object(o.b)("p",null,"Probability is one way to reign in randomness. Another way is to emulate a\ncommon pattern found in nature, where values tend to cluster around a certain\nrange, otherwise known as normal (or Gaussian) distribution (in contrast to pure\nrandomness, which aims for uniform distribution). This maps well to music, where\nmelodies tend to use a narrow range of notes and steps."),Object(o.b)("p",null,Object(o.b)("img",{src:n(167).default})),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import random from 'random'\nimport clamp from 'lodash'\nimport { instrument, metronome, midi } from 'tuplet'\n\nmidi().then((output) => {\n  function playNote(note, length, velocity) {\n    let noteOn = 144\n    let noteOff = 128\n\n    output.send([noteOn, note, velocity])\n    output.send([noteOff, note, velocity], window.performance.now() + length)\n  }\n\n  // A mean of middle C with a small deviation\n  let noteGen = random.normal(60, 3)\n\n  // A mean of half velocity with a large deviation\n  let velGen = random.normal(64, 20)\n\n  let length = 200\n\n  setInterval(() => {\n    // We need to 'clamp' these values to prevent them straying out of range\n    let note = clamp(Math.round(noteGen()), 21, 108)\n    let velocity = clamp(Math.round(velGen()), 0, 127)\n    playNote(note, length, velocity)\n  }, length)\n})\n")),Object(o.b)("p",null,"Here, the notes cluster around middle C and medium velocity. By increasing the\ndeviation from the mean we can introduce more variation."),Object(o.b)("h2",{id:"perlin-noise"},"Perlin noise"),Object(o.b)("p",null,"Describe what Perlin noise is."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import rangeMap from 'range-map'\nimport tumult from 'tumult'\n\nimport { inst, midi } from 'tuplet'\n\nmidi().then((output) => {\n  const perlin = new tumult.Perlin1(Math.random())\n  const length = 100\n  let xoff = 0.0\n\n  setInterval(() => {\n    xoff = xoff + 0.01\n    const note = rangeMap(perlin.gen(xoff), -1, 1, 21, 108)\n    const velocity = rangeMap(perlin.gen(xoff), -1, 1, 0, 127)\n    inst(output, note, velocity, length)\n  }, length)\n})\n")),Object(o.b)("p",null,"The point so far is that there are many ways to generate streams of notes.\nWhat's lacking is any musical order."),Object(o.b)("h2",{id:"scales"},"Scales"),Object(o.b)("p",null,"Instead of choosing from all notes, we can instead limit our choices to a\nparticular scale. In fact, we've already been using a scale, the chromatic one.\nThis is valid, see\n",Object(o.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Twelve-tone_technique"},"Twelve-tone technique"),",\nbut lacks 'musicality' (part of what those composers were getting away from)."),Object(o.b)("p",null,"For our purposes we can say that a scale is a pattern of white and black keys.\nThis pattern can be described in terms of intervals. See the Music chapter for\ndetails. These notes sound like they 'belong together'."),Object(o.b)("p",null,"C Major scale is just all the white notes, starting at C to next C."),Object(o.b)("p",null,Object(o.b)("img",{src:n(168).default})),Object(o.b)("p",null,"All notes:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"C   C#  D   D#  E   F   F#  G   G#  A   A#  B   C\n60  61  62  63  64  65  66  67  68  69  70  71  72\n")),Object(o.b)("p",null,"C Major notes:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"C   C#  D   D#  E   F   F#  G   G#  A   A#  B   C\n60  -   62  -   64  65  -   67  -   69  -   71  72\n")),Object(o.b)("p",null,"If we express that as intervals:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"C   C#  D   D#  E   F   F#  G   G#  A   A#  B   C\n1   -   2   -   2   1   -   2   -   2   -   2   1\n")),Object(o.b)("p",null,"If we express that as indexes:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"C   C#  D   D#  E   F   F#  G   G#  A   A#  B   C\n0   -   2   -   4   5   -   7   -   9   -   11  12\n")),Object(o.b)("p",null,"How can we pick that pattern?"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import {\n  chain,\n  range,\n  drop,\n  dropRight,\n  chunk,\n  filter,\n  includes,\n  random,\n  sample,\n} from 'lodash'\nimport { inst, midi } from 'tuplet'\n\nconst allNotes = range(21, 109)\n\nconst cmaj = [0, 2, 4, 5, 7, 9, 11]\n\nconst octaves = chain(allNotes)\n  .drop(3) // start at first C\n  .dropRight(1) // drop last C\n  .chunk(12) // split into octaves\n  .value()\n\nconst notes = chain(octaves)\n  .map((o) => {\n    // select only the notes in the scale\n    return filter(o, (n, idx) => {\n      return includes(cmaj, idx)\n    })\n  })\n  .flatten() // flatten the octaves\n  .value()\n\nnavigator.requestMIDIAccess().then((midi) => {\n  const outputs = midi.outputs.values()\n  const output = outputs.next().value\n\n  const length = 300\n\n  setInterval(() => {\n    const note = sample(notes)\n    const velocity = random(64, 96)\n\n    output.send([0x90, note, velocity])\n    output.send([0x80, note, velocity], window.performance.now() + length)\n  }, length)\n})\n")),Object(o.b)("p",null,"Now all the notes are in the same scale so things sound a little less random /\nmore cohesive. Given a single stream of notes this is less jarring than total\nrandomness."),Object(o.b)("h2",{id:"polyphony"},"Polyphony"),Object(o.b)("p",null,"Now that we can play in key, we can introduce a second voice and know it will\nharmonize with the first."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { metro, limit2, scale } from 'tuplet'\nimport { flow, sample, random, partition, identity } from 'lodash/fp'\n\nconst [low, high] = flow(\n  scale('cmaj'),\n  limit2('piano'),\n  partition((n) => n < 64)\n)([])\n\nnavigator.requestMIDIAccess().then((midi) => {\n  const outputs = midi.outputs.values()\n  const output = outputs.next().value\n\n  setInterval(() => {\n    const note = sample(high)\n    const velocity = random(64, 96)\n    output.send([0x90, note, velocity])\n    output.send([0x80, note, velocity], window.performance.now() + 400)\n  }, 400)\n\n  setInterval(() => {\n    const note = sample(low)\n    const velocity = random(32, 64)\n    output.send([0x91, note, velocity])\n    output.send([0x81, note, velocity], window.performance.now() + 1200)\n  }, 1200)\n})\n")),Object(o.b)("p",null,"Here we're dividing the notes and sending the high notes to one channel, and the\nlow notes to a second channel. We're sampling from the same set of notes so we\ncan be sure they will harmonise. The results are more interesting as hearing how\nthe two voices interact adds a layer of depth to our music."),Object(o.b)("p",null,"##\xa0Learning"),Object(o.b)("p",null,"We covered two main topics in this chapter: 1) we can use various methods to\ngenerate sequences of numbers with different characteristics that we can use as\nthe input to our programs; and 2) we can apply music theory to coerce that data\ninto something that makes more musical sense."),Object(o.b)("p",null,"With that in mind, we can encapsulate our learning into two new utilities:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Generative:")," Functions for generating data we can use in our programs,\neither algorithms we write ourselves, or ones we might use from other\nlibraries \u2192 ",Object(o.b)("a",{parentName:"p",href:"/book/api/index"},Object(o.b)("inlineCode",{parentName:"a"},"gen")),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Music:")," A place to wrap up our musical knowledge and handle the details of\nmapping that to midi \u2192 ",Object(o.b)("a",{parentName:"p",href:"/book/api/index"},Object(o.b)("inlineCode",{parentName:"a"},"music")),"."))),Object(o.b)("p",null,"With these in our toolbelt, we could rewrite our last example as follows:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { midi, send, metro, limit, scale } from 'tuplet'\nimport { flow, sample, random, partition } from 'lodash/fp'\n\nmidi.then((output) => {\n  const ch1 = send(output, 0x90)\n  const ch2 = send(output, 0x91)\n  const [low, high] = flow(\n    scale('cmaj'),\n    limit('piano'),\n    partition((n) => n < 64)\n  )([])\n\n  loop(() => ch1(sample(high), random(64, 96)), 400)\n  loop(() => ch2(sample(low), random(32, 64)), 1200)\n})\n")),Object(o.b)("p",null,"Right now our music is basically just streams of notes. To take it further, we\nneed a way to generate cohesive patterns of notes, and sequence them with other\npatterns. As it happens, that's just the goal of the next chapter!"),Object(o.b)("p",null,"###\xa0Notes"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import {\n  chain,\n  range,\n  drop,\n  dropRight,\n  chunk,\n  filter,\n  includes,\n  random,\n  sample,\n} from 'lodash'\nimport { inst, midi } from 'tuplet'\n\nconst allNotes = range(21, 109)\n\nconst cmaj = [0, 2, 4, 5, 7, 9, 11]\n\nconst octaves = chain(allNotes)\n  .drop(3) // start at first C\n  .dropRight(1) // drop last C\n  .chunk(12) // split into octaves\n  .value()\n\nconst notes = chain(octaves)\n  .map((o) => {\n    // select only the notes in the scale\n    return filter(o, (n, idx) => {\n      return includes(cmaj, idx)\n    })\n  })\n  .flatten() // flatten the octaves\n  .value()\n\nnavigator.requestMIDIAccess().then((midi) => {\n  const outputs = midi.outputs.values()\n  const output = outputs.next().value\n\n  const length = 300\n\n  setInterval(() => {\n    const note = sample(notes)\n    const velocity = random(64, 96)\n\n    output.send([0x90, note, velocity])\n    output.send([0x80, note, velocity], window.performance.now() + length)\n  }, length)\n})\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { output } from 'midi'\nimport { Piano } from 'inst/piano'\nimport random from 'random'\n\nexport default class {\n  constructor() {\n    console.log('Walker')\n  }\n\n  async walk() {\n    const midi = await output()\n    const piano = new Piano(midi)\n    const length = 200\n\n    const mean = 0\n    const sd = 1\n\n    const normal = random.normal(mean, sd)\n\n    console.log(normal())\n\n    function play(note) {\n      let nextNote = normal()\n\n      const timer = setTimeout(() => {\n        piano.play(nextNote, length)\n        clearTimeout(timer)\n        play(nextNote)\n      }, length)\n    }\n\n    // play(normal());\n  }\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"navigator.requestMIDIAccess().then((midi) => {\n  const outputs = midi.outputs.values()\n  let output = outputs.next().value\n\n  function random(min, max) {\n    min = Math.ceil(min)\n    max = Math.floor(max)\n    return Math.floor(Math.random() * (max - min + 1)) + min\n  }\n\n  function playNote(note, length, velocity = random(0, 127)) {\n    let noteOn = 144 // channel 1 note on\n    let noteOff = 128 // channel 1 note off\n\n    output.send([noteOn, note, velocity])\n    output.send([noteOff, note, velocity], window.performance.now() + length)\n  }\n\n  let startNote = random(21, 108)\n  let length = 250\n\n  function play(note) {\n    let prob = 0.4\n    let num = Math.random()\n    let nextNote\n\n    if (num < prob) {\n      // 40% chance of going down 7 steps\n      nextNote = Math.max(note - 7, 21)\n    } else {\n      // 60% chance of going up 5 steps\n      nextNote = Math.min(note + 5, 108)\n    }\n\n    let timer = setTimeout(() => {\n      playNote(nextNote, length)\n      clearTimeout(timer)\n      play(nextNote)\n    }, length)\n  }\n\n  // play(startNote);\n})\n")))}l.isMDXComponent=!0}}]);