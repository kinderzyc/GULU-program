(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{302:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},303:function(t,e,n){var a=n(24),c="["+n(302)+"]",i=RegExp("^"+c+c+"*"),r=RegExp(c+c+"*$"),o=function(t){return function(e){var n=String(a(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(r,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},304:function(t,e,n){"use strict";var a=n(1),c=n(303).trim;a({target:"String",proto:!0,forced:n(305)("trim")},{trim:function(){return c(this)}})},305:function(t,e,n){var a=n(2),c=n(302);t.exports=function(t){return a((function(){return!!c[t]()||"​᠎"!="​᠎"[t]()||c[t].name!==t}))}},306:function(t,e,n){},308:function(t,e,n){var a=n(1),c=n(4),i=n(97),r=[].slice,o=function(t){return function(e,n){var a=arguments.length>2,c=a?r.call(arguments,2):void 0;return t(a?function(){("function"==typeof e?e:Function(e)).apply(this,c)}:e,n)}};a({global:!0,bind:!0,forced:/MSIE .\./.test(i)},{setTimeout:o(c.setTimeout),setInterval:o(c.setInterval)})},311:function(t,e,n){n(165),n(308),function(t){var e,n='<svg><symbol id="i-error" viewBox="0 0 1024 1024"><path d="M512 298.666667c23.466667 0 42.666667 19.2 42.666667 42.666666v170.666667c0 23.466667-19.2 42.666667-42.666667 42.666667s-42.666667-19.2-42.666667-42.666667V341.333333c0-23.466667 19.2-42.666667 42.666667-42.666666z m-0.426667-213.333334C276.053333 85.333333 85.333333 276.48 85.333333 512s190.72 426.666667 426.24 426.666667C747.52 938.666667 938.666667 747.52 938.666667 512S747.52 85.333333 511.573333 85.333333zM512 853.333333c-188.586667 0-341.333333-152.746667-341.333333-341.333333s152.746667-341.333333 341.333333-341.333333 341.333333 152.746667 341.333333 341.333333-152.746667 341.333333-341.333333 341.333333z m42.666667-128h-85.333334v-85.333333h85.333334v85.333333z"  ></path></symbol><symbol id="i-loading" viewBox="0 0 1024 1024"><path d="M956.1139225 479.50629406a68.29592344 68.29592344 0 0 1 20.77677187 50.26195969c0 19.67964844-6.92559094 36.27363844-20.77677187 50.26195969a67.54165125 67.54165125 0 0 1-50.12481938 20.77677187c-19.54250812 0-36.20506781-6.99416063-50.26195969-20.77677187a68.29592344 68.29592344 0 0 1-20.77677187-50.26195969c0-19.67964844 6.92559094-36.27363844 20.77677187-50.26195969a68.29592344 68.29592344 0 0 1 50.26195969-20.77677094c19.4739375 0 36.34220812 6.99416063 50.12481938 20.77677094m-93.66689907 327.07987406a68.57020406 68.57020406 0 0 1-21.11962312 50.05624875 68.43306375 68.43306375 0 0 1-50.05624875 21.11962313c-19.67964844 0-36.20506781-6.99416063-50.26195969-20.77677188a68.29592344 68.29592344 0 0 1-20.77677187-50.26195968c0-19.67964844 6.99416063-36.20506781 20.77677187-50.26195969a68.29592344 68.29592344 0 0 1 50.26195969-20.77677188c19.67964844 0 36.27363844 6.99416063 50.26195969 20.77677188a67.8845025 67.8845025 0 0 1 20.91391218 50.12481937m53.34761907-553.29297656c0 34.42224281-12.20549625 63.83886-36.68505938 88.04414156a120.0664275 120.0664275 0 0 1-87.76986094 36.27363844c-34.35367219 0-63.77028937-12.13692656-88.0441425-36.27363844a119.92928719 119.92928719 0 0 1-36.20506781-88.04414156c0-34.07939156 12.13692656-63.35886844 36.20506781-87.76986187a119.92928719 119.92928719 0 0 1 88.11271219-36.68505938c34.07939156 0 63.35886844 12.27406687 87.70129125 36.75363 24.47956312 24.2052825 36.68505938 53.48475937 36.68505938 87.70129125m-350.80516407 617.40611719a68.29592344 68.29592344 0 0 1 20.70820125 50.26195969c0 19.67964844-6.92559094 36.27363844-20.70820125 50.26195968a68.29592344 68.29592344 0 0 1-50.33053031 20.77677188c-19.67964844 0-36.20506781-6.99416063-50.26195969-20.77677188a67.8845025 67.8845025 0 0 1-20.77677187-50.26195968c0-19.67964844 6.99416063-36.20506781 20.77677187-50.26195969a68.29592344 68.29592344 0 0 1 50.26195969-20.77677188c19.67964844 0 36.34220812 6.99416063 50.33053031 20.77677188M590.36045406 63.079445c20.70820125 20.77677188 31.1308725 45.87346687 31.1308725 75.63293531 0 29.75946844-10.42267125 54.71902312-31.1308725 75.56436469a102.71816531 102.71816531 0 0 1-75.56436563 31.06230281c-29.75946844 0-54.71902312-10.42267125-75.56436468-31.06230281a102.51245531 102.51245531 0 0 1-31.1308725-75.56436469c0-29.75946844 10.49124094-54.71902312 31.1308725-75.63293531A102.92387625 102.92387625 0 0 1 514.72751875 32.01714219c29.62232812 0 54.71902312 10.42267125 75.56436468 31.06230281M288.44584468 756.32420844a68.29592344 68.29592344 0 0 1 20.70820219 50.26195968c0 19.67964844-6.92559094 36.27363844-20.70820219 50.33052938a68.29592344 68.29592344 0 0 1-50.33052937 20.70820219 68.57020406 68.57020406 0 0 1-50.05624875-21.11962313 68.43306375 68.43306375 0 0 1-21.05105344-50.05624875c0-19.67964844 6.92559094-36.20506781 20.70820219-50.26195969a68.29592344 68.29592344 0 0 1 50.33052937-20.70820125c19.67964844 0 36.47934844 6.92559094 50.3991 20.84534157M300.78848125 190.41431375c17.41683187 17.41683187 26.12524781 38.39931469 26.12524781 62.7417375 0 24.4109925-8.70841594 45.256335-26.12524781 62.81030625-17.41683187 17.4854025-38.39931469 26.26238813-62.81030625 26.26238813-24.34242281 0-45.256335-8.63984531-62.74173657-26.19381751a85.43847469 85.43847469 0 0 1-26.12524781-62.74173656c0-24.34242281 8.63984531-45.256335 26.12524781-62.7417375 17.55397219-17.55397219 38.39931469-26.1938175 62.74173657-26.1938175 24.4109925 0 45.256335 8.63984531 62.81030625 26.05667719M173.86503437 479.50629406a68.29592344 68.29592344 0 0 1 20.77677094 50.26195969c0 19.67964844-6.99416063 36.27363844-20.77677094 50.26195969a67.67879156 67.67879156 0 0 1-50.26195969 20.77677187c-19.67964844 0-36.27363844-6.99416063-50.26195968-20.77677187A67.67879156 67.67879156 0 0 1 52.56434312 529.83682438c0-19.67964844 6.99416063-36.27363844 20.77677188-50.26195969a68.29592344 68.29592344 0 0 1 50.26195968-20.77677188c19.67964844 0 36.34220812 6.99416063 50.26195969 20.77677188"  ></path></symbol><symbol id="i-right" viewBox="0 0 1024 1024"><path d="M330.56 247.68a32 32 0 0 1 42.88-47.36l320 288a32 32 0 0 1 0 47.36l-320 288a32 32 0 0 1-42.88-47.36L624.32 512z"  ></path></symbol><symbol id="i-left" viewBox="0 0 1024 1024"><path d="M672 832l-313.6-313.6L672 201.6l-44.8-44.8L291.2 496v44.8l336 339.2z"  ></path></symbol><symbol id="i-download" viewBox="0 0 1024 1024"><path d="M480 224a32 32 0 0 1 64 0v448a32 32 0 0 1-64 0z"  ></path><path d="M800 832v-160a32 32 0 0 1 64 0v192a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32v-192a32 32 0 0 1 64 0v160z"  ></path><path d="M648.32 522.24a32 32 0 1 1 47.36 43.52l-176 192a32 32 0 0 1-47.36 0l-176-192a32 32 0 1 1 47.36-43.52l152.32 166.4z"  ></path></symbol><symbol id="i-settings" viewBox="0 0 1024 1024"><path d="M920.5 435.9c-7.6-40.3-36.1-66.8-69.8-66.2h-3.4c-36.6 0-66.3-29.7-66.3-66.3 0-7.8 3.6-19.1 6-24.9 15.4-35.1 3.3-78.1-28.9-100.6l-102-56.9-4.2-2c-31.7-13.7-72.7-5.4-96.4 19.2-15.1 15.6-42.2 33.7-54.6 33.7-12.5 0-39.8-18.5-54.9-34.3-23.6-24.9-62.2-34.4-97.4-19.5l-105.4 57.7-4.2 2.7c-31.7 22-43.8 65.3-28.3 100.1 1.9 4.6 6 16.7 6 24.9 0 36.6-29.7 66.3-66.3 66.3h-2.6c-34.9-0.6-63.1 25.8-70.7 66.2-0.9 4.8-8.9 48.2-8.9 84s8 79.2 8.9 84c7.5 39.6 35.3 66.2 69.2 66.2h4.1c36.6 0 66.3 29.7 66.3 66.3 0 8.2-4 20.3-5.8 24.5-15.6 35.2-3.6 78.4 28.9 101.2l99.8 56 4.1 2c10.5 4.6 21.8 6.9 33.6 6.9 24.5 0 47.8-9.9 63.7-27.3 14.8-16.1 43.5-35.8 55.8-35.8 12.8 0 40.8 19.7 56.1 36.5 15.8 17.4 39.8 27.8 64.2 27.8 11.6 0 22.6-2.2 34.3-7.3l103.2-56.9 4.2-2.7c31.6-22 43.7-65.2 28.1-100.4-1.9-4.6-5.9-16.5-5.9-24.6 0-36.6 29.7-66.3 66.3-66.3h4c34 0 61.7-26.4 69.2-65.9 0.1-0.5 9-46.3 9-84.4-0.1-35.9-8.1-79.1-9-83.9z m-71.3 154.6c-0.6 3.3-1.5 5.6-2.2 7.1-76.4 0.1-138.6 62.4-138.6 138.8 0 23 8.4 45.7 12.1 53.9 1.6 3.5 0.4 8.4-3.3 11.5l-96.4 53.3c-4.7 1.6-11.9-0.9-14.3-3.5-5.6-6.2-56.5-60.3-109.8-60.3-54 0-106.9 56.8-109.1 59.2-2.2 2.4-7.4 5.7-14.6 3.1l-93.1-52.1c-3.1-2.5-4.5-7.7-2.8-11.6 1.2-2.8 12-28.1 12-53.7 0-76.5-62.1-138.7-138.6-138.8-0.7-1.5-1.6-3.8-2.3-7.1-0.3-1.6-7.6-40.9-7.6-70.6 0-29.7 7.3-69 7.6-70.6 0.6-3.3 1.5-5.7 2.3-7.1 76.4-0.1 138.6-62.3 138.6-138.8 0-25-9.9-49.1-12.1-54-1.5-3.5-0.4-8.3 3.2-11.4l98.2-53.9c4.8-1.7 12.5 0.8 15 3.4 5.5 5.8 55.7 56.8 107.4 56.8 51.2 0 101.2-50 106.7-55.8 2.4-2.4 8.3-5.6 15.1-3.1l94.9 52.7c3.2 2.5 4.5 7.7 2.9 11.3l-0.7 1.8c-3.1 7.6-11.3 29.8-11.3 52.2 0 76.5 62.1 138.7 138.6 138.8 0.7 1.5 1.6 3.8 2.3 7.1 0.1 0.4 7.6 40.6 7.6 70.6-0.1 25.6-5.7 60.4-7.7 70.8z"  ></path><path d="M498.7 355.9c-90.3 0-163.8 73.5-163.8 163.8 0 90.3 73.5 163.8 163.8 163.8 90.3 0 163.8-73.5 163.8-163.8 0-90.4-73.5-163.8-163.8-163.8z m0 273.1c-60.3 0-109.4-49.1-109.4-109.4 0-60.3 49.1-109.4 109.4-109.4 60.3 0 109.4 49.1 109.4 109.4 0 60.3-49.1 109.4-109.4 109.4z"  ></path></symbol><symbol id="i-like" viewBox="0 0 1024 1024"><path d="M859.2 406.4H616c-1.6 0-3.2-1.6-3.2-4.8l43.2-152c8-28.8 4.8-59.2-9.6-84.8s-38.4-46.4-67.2-54.4c-28.8-8-59.2-4.8-84.8 9.6s-44.8 38.4-52.8 67.2l-22.4 78.4c-24 81.6-99.2 139.2-184 139.2h-68.8c-52.8 0-96 43.2-96 96v320c0 52.8 43.2 96 96 96h612.8c44.8 0 83.2-30.4 92.8-72l80-320c1.6-8 3.2-16 3.2-24 0-52.8-43.2-94.4-96-94.4z m-694.4 448c-17.6 0-32-14.4-32-32v-320c0-17.6 14.4-32 32-32h80v384h-80z m724.8-345.6l-80 320c-3.2 14.4-16 24-30.4 24H308.8V457.6c80-25.6 145.6-89.6 169.6-174.4l22.4-78.4C504 192 512 182.4 523.2 176c11.2-6.4 24-8 36.8-4.8 12.8 3.2 22.4 11.2 28.8 22.4 6.4 11.2 8 24 4.8 36.8L550.4 384c-1.6 6.4-3.2 12.8-3.2 19.2 0 36.8 30.4 67.2 67.2 67.2h243.2c17.6 0 32 14.4 32 32 1.6 1.6 0 4.8 0 6.4z"  ></path></symbol><symbol id="i-dropdown" viewBox="0 0 1024 1024"><path d="M512 624.32l264.32-293.76a32 32 0 1 1 47.36 42.88l-288 320a32 32 0 0 1-47.36 0l-288-320a32 32 0 0 1 47.36-42.88z"  ></path></symbol></svg>';if((e=document.getElementsByTagName("script"))[e.length-1].getAttribute("data-injectcss")&&!t.__iconfont__svg__cssinject__){t.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}!function(e){if(document.addEventListener)if(~["complete","loaded","interactive"].indexOf(document.readyState))setTimeout(e,0);else{document.addEventListener("DOMContentLoaded",(function t(){document.removeEventListener("DOMContentLoaded",t,!1),e()}),!1)}else document.attachEvent&&(a=e,c=t.document,i=!1,(r=function(){try{c.documentElement.doScroll("left")}catch(t){return void setTimeout(r,50)}n()})(),c.onreadystatechange=function(){"complete"==c.readyState&&(c.onreadystatechange=null,n())});function n(){i||(i=!0,a())}var a,c,i,r}((function(){var t,e,a,c,i,r;(t=document.createElement("div")).innerHTML=n,n=null,(e=t.getElementsByTagName("svg")[0])&&(e.setAttribute("aria-hidden","true"),e.style.position="absolute",e.style.width=0,e.style.height=0,e.style.overflow="hidden",a=e,(c=document.body).firstChild?(i=a,(r=c.firstChild).parentNode.insertBefore(i,r)):c.appendChild(a))}))}(window)},312:function(t,e,n){"use strict";var a=n(306);n.n(a).a},318:function(t,e,n){"use strict";n(311);var a={name:"GuluIcon",props:["name"]},c=(n(312),n(44)),i=Object(c.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"g-icon"},[e("use",{attrs:{"xlink:href":"#i-"+this.name}})])}),[],!1,null,"47beec86",null);e.a=i.exports},322:function(t,e,n){},353:function(t,e,n){"use strict";var a=n(322);n.n(a).a},370:function(t,e,n){"use strict";var a={components:{Icon:n(318).a},name:"Gulu-Input",props:{value:{type:String},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:String}}},c=(n(353),n(44)),i=Object(c.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",class:{error:t.error}},[n("input",{attrs:{type:"text",disabled:t.disabled,readonly:t.readonly},domProps:{value:t.value},on:{change:function(e){return t.$emit("change",e.target.value)},input:function(e){return t.$emit("input",e.target.value)},focus:function(e){return t.$emit("focus",e.target.value)},blur:function(e){return t.$emit("blur",e.target.value)}}}),t._v(" "),t.error?[n("icon",{staticClass:"icon-error",attrs:{name:"error"}}),t._v(" "),n("span",{staticClass:"errorMessage"},[t._v(t._s(t.error))])]:t._e()],2)}),[],!1,null,"7240dfa8",null);e.a=i.exports},422:function(t,e,n){"use strict";n.r(e);n(45),n(66),n(304);var a={components:{"g-input":n(370).a},data:function(){return{selected:"1",content:'\n            <g-input></g-input>\n            <g-input value="中文"></g-input>\n            <g-input value="中文" disabled></g-input>\n            <g-input value="中文" readonly></g-input>\n        '.replace(/^ {8}/gm,"").trim()}}},c=n(44),i=Object(c.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"padding-top":"16px"}},[n("h2",[t._v("简单用法")]),t._v(" "),t._m(0),t._v(" "),n("g-input",{attrs:{value:"中文"}}),t._v(" "),n("g-input",{attrs:{value:"中文",disabled:""}}),t._v(" "),n("g-input",{attrs:{value:"中文",readonly:""}}),t._v(" "),t._m(1),t._v(" "),n("pre",[n("code",[t._v(t._s(t.content))])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("预览")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("代码")])])}],!1,null,null,null);e.default=i.exports}}]);