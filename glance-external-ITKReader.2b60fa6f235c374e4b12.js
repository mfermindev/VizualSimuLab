!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var n=r();for(var t in n)("object"==typeof exports?exports:e)[t]=n[t]}}(self,(function(){return(self.webpackChunkglance=self.webpackChunkglance||[]).push([[3],{534:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return w},extensions:function(){return I},imageExtensions:function(){return v},polyDataExtensions:function(){return x},registerToGlance:function(){return R}});var t=n(535),a=n(536),o=n(458),i=n.n(o),s=n(684),f=n(172),c=n.n(f),l=n(537),u=(n(53),n(8)),m=n(87),d=n(538);const{convertItkToVtkImage:y}=m.Z;function p(e){const r=e.lastIndexOf(".");return`Scalars ${r>-1?e.substring(0,r):e}`}const g={fileName:"",arrayName:null};function h(e,r,n={}){Object.assign(r,g,n),u.ZP.obj(e,r),u.ZP.algo(e,r,0,1),u.ZP.setGet(e,r,["fileName","arrayName"]),function(e,r){r.classHierarchy.push("vtkITKDicomImageReader"),e.readFileSeries=n=>n&&n.length&&n!==r.files?(r.files=n,(0,d.Z)(n).then((({image:e})=>e)).then((n=>{const t=y(n,{scalarArrayName:r.arrayName||p(r.fileName)});r.output[0]=t,e.modified()}))):Promise.resolve(),e.requestData=()=>{e.readFileSeries(r.files,r.fileName)}}(e,r)}var N={newInstance:u.ZP.newInstance(h,"vtkITKDicomImageReader"),extend:h};t.ZP.setReadImageArrayBufferFromITK(s.Z),a.ZP.setReadPolyDataArrayBufferFromITK(l.Z);const k=new Set(Array.from(i().keys()).map((e=>e.toLowerCase())));k.delete("json");const v=Array.from(k),x=Array.from(new Set(Array.from(c().keys()).map((e=>e.toLowerCase())))),I=v.concat(x);function R(e){e&&(v.filter((e=>"dcm"!==e)).forEach((r=>e.registerReader({extension:r,name:`${r.toUpperCase()} Reader`,vtkReader:t.ZP,binary:!0,fileNameMethod:"setFileName"}))),x.forEach((r=>e.registerReader({extension:r,name:`${r.toUpperCase()} Reader`,vtkReader:a.ZP,binary:!0,fileNameMethod:"setFileName"}))),e.registerReader({extension:"dcm",name:"DICOM File Series Reader",vtkReader:N,fileNameMethod:"setFileName",fileSeriesMethod:"readFileSeries",binary:!0}))}var w={extensions:I,registerToGlance:R};R(("undefined"==typeof window?{}:window).Glance)},354:function(){}},function(e){return e.O(0,[1],(function(){return r=534,e(e.s=r);var r})),e.O()}])}));