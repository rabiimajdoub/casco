import './polyfills.server.mjs';
var w=Object.create;var m=Object.defineProperty,x=Object.defineProperties,y=Object.getOwnPropertyDescriptor,z=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertyNames,n=Object.getOwnPropertySymbols,B=Object.getPrototypeOf,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;var l=(a,b)=>(b=Symbol[a])?b:Symbol.for("Symbol."+a);var r=(a,b,c)=>b in a?m(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,C=(a,b)=>{for(var c in b||={})o.call(b,c)&&r(a,c,b[c]);if(n)for(var c of n(b))s.call(b,c)&&r(a,c,b[c]);return a},D=(a,b)=>x(a,z(b));var E=(a=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(a,{get:(b,c)=>(typeof require<"u"?require:b)[c]}):a)(function(a){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+a+'" is not supported')});var F=(a,b)=>{var c={};for(var d in a)o.call(a,d)&&b.indexOf(d)<0&&(c[d]=a[d]);if(a!=null&&n)for(var d of n(a))b.indexOf(d)<0&&s.call(a,d)&&(c[d]=a[d]);return c};var G=(a,b)=>()=>(a&&(b=a(a=0)),b);var H=(a,b)=>()=>(b||a((b={exports:{}}).exports,b),b.exports),I=(a,b)=>{for(var c in b)m(a,c,{get:b[c],enumerable:!0})},t=(a,b,c,d)=>{if(b&&typeof b=="object"||typeof b=="function")for(let e of A(b))!o.call(a,e)&&e!==c&&m(a,e,{get:()=>b[e],enumerable:!(d=y(b,e))||d.enumerable});return a};var J=(a,b,c)=>(c=a!=null?w(B(a)):{},t(b||!a||!a.__esModule?m(c,"default",{value:a,enumerable:!0}):c,a)),K=a=>t(m({},"__esModule",{value:!0}),a);var L=(a,b,c)=>new Promise((d,e)=>{var f=g=>{try{i(c.next(g))}catch(j){e(j)}},h=g=>{try{i(c.throw(g))}catch(j){e(j)}},i=g=>g.done?d(g.value):Promise.resolve(g.value).then(f,h);i((c=c.apply(a,b)).next())}),u=function(a,b){this[0]=a,this[1]=b},M=(a,b,c)=>{var d=(h,i,g,j)=>{try{var p=c[h](i),q=(i=p.value)instanceof u,v=p.done;Promise.resolve(q?i[0]:i).then(k=>q?d(h==="return"?h:"next",i[1]?{done:k.done,value:k.value}:k,g,j):g({value:k,done:v})).catch(k=>d("throw",k,g,j))}catch(k){j(k)}},e=h=>f[h]=i=>new Promise((g,j)=>d(h,i,g,j)),f={};return c=c.apply(a,b),f[l("asyncIterator")]=()=>f,e("next"),e("throw"),e("return"),f},N=a=>{var b=a[l("asyncIterator")],c=!1,d,e={};return b==null?(b=a[l("iterator")](),d=f=>e[f]=h=>b[f](h)):(b=b.call(a),d=f=>e[f]=h=>{if(c){if(c=!1,f==="throw")throw h;return h}return c=!0,{done:!1,value:new u(new Promise(i=>{var g=b[f](h);if(!(g instanceof Object))throw TypeError("Object expected");i(g)}),1)}}),e[l("iterator")]=()=>e,d("next"),"throw"in b?d("throw"):e.throw=f=>{throw f},"return"in b&&d("return"),e},O=(a,b,c)=>(b=a[l("asyncIterator")])?b.call(a):(a=a[l("iterator")](),b={},c=(d,e)=>(e=a[d])&&(b[d]=f=>new Promise((h,i,g)=>(f=e.call(a,f),g=f.done,Promise.resolve(f.value).then(j=>h({value:j,done:g}),i)))),c("next"),c("return"),b);export{C as a,D as b,E as c,F as d,G as e,H as f,I as g,J as h,K as i,L as j,u as k,M as l,N as m,O as n};
