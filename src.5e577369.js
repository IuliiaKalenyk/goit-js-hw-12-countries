parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function r(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}var a=function(){function e(r){var a=r.selector,s=r.targetDate;t(this,e),this.intervalId=null,this.isActive=!1,this.selector=a,this.targetDate=s,this.timer=document.querySelector(this.selector),this.refs={days:this.timer.querySelector('[data-value="days"]'),hours:this.timer.querySelector('[data-value="hours"]'),mins:this.timer.querySelector('[data-value="mins"]'),secs:this.timer.querySelector('[data-value="secs"]')},console.log(this.refs.days)}return r(e,[{key:"start",value:function(){var t=this;if(!this.isActive){Date.now();this.isActive=!0,this.intervalId=setInterval(function(){var e=Date.now(),r=s(t.targetDate-e);t.updateClockface(r)},1e3)}}},{key:"stop",value:function(){clearInterval(intervalId),this.isActive=!1}},{key:"updateClockface",value:function(t){var e=t.days,r=t.hours,a=t.mins,s=t.secs;this.refs.days.textContent="".concat(e),this.refs.hours.textContent="".concat(r),this.refs.mins.textContent="".concat(a),this.refs.secs.textContent="".concat(s)}}]),e}();function s(t){return{days:n(Math.floor(t/864e5)),hours:n(Math.floor(t%864e5/36e5)),mins:n(Math.floor(t%36e5/6e4)),secs:n(Math.floor(t%6e4/1e3))}}function n(t){return String(t).padStart(2,"0")}var i=new a({selector:"#timer-1",targetDate:new Date("Jul 17, 2021")});i.start();
},{}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-12-countries/src.5e577369.js.map