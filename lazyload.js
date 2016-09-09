registerListener('load',setLazy);registerListener('load',lazyLoad);registerListener('scroll',lazyLoad);var lazy=[];function setLazy(){lazy=document.getElementsByClassName('lazy');console.log('Found '+lazy.length+' lazy images');}
function lazyLoad(){for(var i=0;i<lazy.length;i++){if(isInViewport(lazy[i])){if(lazy[i].getAttribute('data-src')){lazy[i].src=lazy[i].getAttribute('data-src');lazy[i].style="background-image:url("+lazy[i].getAttribute('data-src');+");"
lazy[i].removeAttribute('data-src');}}}
cleanLazy();}
function cleanLazy(){lazy=Array.prototype.filter.call(lazy,function(l){return l.getAttribute('data-src');});}
function isInViewport(el){var rect=el.getBoundingClientRect();return(rect.bottom>=0&&rect.right>=0&&rect.top<=(window.innerHeight||document.documentElement.clientHeight)&&rect.left<=(window.innerWidth||document.documentElement.clientWidth));}
function registerListener(event,func){if(window.addEventListener){window.addEventListener(event,func)}else{window.attachEvent('on'+event,func)}}!function(t,e){"function"==typeof define&&define.amd?define([],e()):"object"==typeof module&&module.exports?module.exports=e():t.zenscroll=e()}(this,function(){"use strict";if("undefined"==typeof window||!("document"in window))return{};var t=function(t,e,n){e=e||999,n||0===n||(n=9);var o,i=document.documentElement,r=function(){return"getComputedStyle"in window&&"smooth"===window.getComputedStyle(t?t:document.body)["scroll-behavior"]},c=function(){return t?t.scrollTop:window.scrollY||i.scrollTop},u=function(){return t?Math.min(t.offsetHeight,window.innerHeight):window.innerHeight||i.clientHeight},f=function(e){return t?e.offsetTop:e.getBoundingClientRect().top+c()-i.offsetTop},l=function(){clearTimeout(o),o=0},a=function(n,f,a){if(l(),r())(t||window).scrollTo(0,n),a&&a();else{var d=c(),s=Math.max(n,0)-d;f=f||Math.min(Math.abs(s),e);var m=(new Date).getTime();!function e(){o=setTimeout(function(){var n=Math.min(((new Date).getTime()-m)/f,1),o=Math.max(Math.floor(d+s*(n<.5?2*n*n:n*(4-2*n)-1)),0);t?t.scrollTop=o:window.scrollTo(0,o),n<1&&u()+o<(t||i).scrollHeight?e():(setTimeout(l,99),a&&a())},9)}()}},d=function(t,e,o){a(f(t)-n,e,o)},s=function(t,e,o){var i=t.getBoundingClientRect().height,r=f(t),l=r+i,s=u(),m=c(),h=m+s;r-n<m||i+n>s?d(t,e,o):l+n>h?a(l-s+n,e,o):o&&o()},m=function(t,e,n,o){a(Math.max(f(t)-u()/2+(n||t.getBoundingClientRect().height/2),0),e,o)},h=function(t,o){t&&(e=t),(0===o||o)&&(n=o)};return{setup:h,to:d,toY:a,intoView:s,center:m,stop:l,moving:function(){return!!o}}},e=t();if("addEventListener"in window&&"smooth"!==document.body.style.scrollBehavior&&!window.noZensmooth){var n=function(t){try{history.replaceState({},"",window.location.href.split("#")[0]+t)}catch(t){}};window.addEventListener("click",function(t){for(var o=t.target;o&&"A"!==o.tagName;)o=o.parentNode;if(!(!o||1!==t.which||t.shiftKey||t.metaKey||t.ctrlKey||t.altKey)){var i=o.getAttribute("href")||"";if(0===i.indexOf("#"))if("#"===i)t.preventDefault(),e.toY(0),n("");else{var r=o.hash.substring(1),c=document.getElementById(r);c&&(t.preventDefault(),e.to(c),n("#"+r))}}},!1)}return{createScroller:t,setup:e.setup,to:e.to,toY:e.toY,intoView:e.intoView,center:e.center,stop:e.stop,moving:e.moving}});
document.getElementById("battleGround").innerHTML += "<a id='button' class='btn' href='/#battleGround'>Click To Launch!</a>";var bey1=document.getElementById("bey1"),bey2=document.getElementById("bey2");document.getElementById("button").addEventListener("click",function(e){bey1.className="bey bey1",bey2.className="bey bey2",e.preventDefault()});
