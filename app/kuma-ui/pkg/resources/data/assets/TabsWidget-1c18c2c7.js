import{W as B,u as k,S}from"./kongponents.es-948bd603.js";import{E as T}from"./ErrorBlock-c00ab7a0.js";import{L as q,i as E,g as w}from"./RouteView.vue_vue_type_script_setup_true_lang-1e381d15.js";import{d as V,q as W,c as $,o as t,e as n,a as f,F as x,n as m,f as C,g as p,k as c,h as l,l as L,j as N,w as i,b as d,Y as I,p as O,m as A}from"./index-452eba2d.js";import{Q as b}from"./QueryParameter-70743f73.js";const F=a=>(O("data-v-4cf998d3"),a=a(),A(),a),H={class:"tab-container","data-testid":"tab-container"},Q={key:0,class:"tab__header"},j={class:"tab__content-container"},z={class:"flex items-center with-warnings"},G=F(()=>c("span",null,"Warnings",-1)),P=V({__name:"TabsWidget",props:{tabs:{type:Array,required:!0},isLoading:{type:Boolean,required:!1,default:!1},isEmpty:{type:Boolean,required:!1,default:!1},hasError:{type:Boolean,required:!1,default:!1},error:{type:[Error,null],required:!1,default:null},hasBorder:{type:Boolean,required:!1,default:!1},initialTabOverride:{type:String,required:!1,default:null}},emits:["on-tab-change"],setup(a,{emit:_}){const o=a,g=q(),s=W(""),h=$(()=>o.tabs.map(e=>e.hash.replace("#","")));function v(){const e=b.get("tab");e!==null?s.value=`#${e}`:o.initialTabOverride!==null&&(s.value=`#${o.initialTabOverride}`)}v();function y(e){b.set("tab",e.substring(1)),g.info(I.TABS_TAB_CHANGE,{data:{newActiveTabHash:e}}),_("on-tab-change",e)}return(e,u)=>(t(),n("div",H,[a.isLoading?(t(),f(E,{key:0})):a.error!==null?(t(),f(T,{key:1,error:a.error},null,8,["error"])):(t(),n(x,{key:2},[e.$slots.tabHeader?(t(),n("header",Q,[m(e.$slots,"tabHeader",{},void 0,!0)])):C("",!0),p(),c("div",j,[l(d(S),{modelValue:s.value,"onUpdate:modelValue":u[0]||(u[0]=r=>s.value=r),tabs:a.tabs,onChanged:y},L({"warnings-anchor":i(()=>[c("span",z,[l(d(k),{class:"mr-1",icon:"warning",color:"var(--black-500)","secondary-color":"var(--yellow-300)",size:"16"}),p(),G])]),_:2},[N(h.value,(r,U)=>({name:r,fn:i(()=>[l(d(B),{"border-variant":"noBorder"},{body:i(()=>[m(e.$slots,r,{},void 0,!0)]),_:2},1024)])}))]),1032,["modelValue","tabs"])])],64))]))}});const R=w(P,[["__scopeId","data-v-4cf998d3"]]);export{R as T};
