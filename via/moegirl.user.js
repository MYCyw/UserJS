// 萌娘-去黑幕-改-Plus
// mzh.moegirl.org.cn


// ==UserScript==

// @name 萌娘-去黑幕-改-Plus

// @namespace mytreee@qq.com

// @version 0.2.1

// @description 萌娘百科黑幕透明，添加边界框；删除线变下划线

// @author mytreee

// @match *://zh.moegirl.org.cn/*

// @match *://mzh.moegirl.org.cn/*

// @match *://*.hmoegirl.com/*

// @grant GM_addStyle

// @run-at document-idle

 

// ==/UserScript==

 

(function () {

//删除"你知道的太多了"标签

document.querySelectorAll('.heimu').forEach(e => e.title = '');

})();

 

(function () {

//令黑幕BackgroundColor透明

document.querySelectorAll('.heimu').forEach(e => e.style.backgroundColor = '#ffffff00');

document.querySelectorAll('.heimu a').forEach(e => e.style.backgroundColor = '#ffffff00');

document.querySelectorAll('a .heimu').forEach(e => e.style.backgroundColor = '#ffffff00');

})();

//为黑幕文本添加一个Border框

(function () {

document.querySelectorAll('.heimu').forEach(e => e.style.border = '1px solid #555');

document.querySelectorAll('.heimu a').forEach(e => e.style.border = '1px solid #555');

document.querySelectorAll('a .heimu').forEach(e => e.style.border = '1px solid #555');

})();