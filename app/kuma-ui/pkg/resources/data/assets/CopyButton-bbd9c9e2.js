import{K as p,f as d}from"./RouteView.vue_vue_type_script_setup_true_lang-1dd6f4c1.js";import{d as f,o as y,a as _,w as l,h as c,b as s,D as x,v as T,g as C,z as g,q as m,t as b,ai as S}from"./index-30c3bdbc.js";const B={class:"visually-hidden"},h=f({__name:"CopyButton",props:{text:{type:String,required:!1,default:""},getText:{type:Function,required:!1,default:null},copyText:{type:String,required:!1,default:"Copy"},tooltipSuccessText:{type:String,required:!1,default:"Copied code!"},tooltipFailText:{type:String,required:!1,default:"Failed to copy!"}},setup(r){const t=r;async function u(n,i){const e=n.currentTarget;let o=!1;try{const a=t.getText?await t.getText():t.text;o=await i(a)}catch{o=!1}finally{const a=o?t.tooltipSuccessText:t.tooltipFailText;e instanceof HTMLButtonElement&&(e.setAttribute("data-tooltip-copy-success",String(o)),e.setAttribute("data-tooltip-text",a),window.setTimeout(function(){e instanceof HTMLButtonElement&&e.removeAttribute("data-tooltip-text")},1500))}}return(n,i)=>(y(),_(s(S),null,{default:l(({copyToClipboard:e})=>[c(s(x),{appearance:"outline",class:"copy-button non-visual-button","data-testid":"copy-button","is-rounded":!1,size:"small",title:t.copyText,type:"button",onClick:o=>u(o,e)},{default:l(()=>[c(s(T),{color:"currentColor",icon:"copy",size:s(p),title:t.copyText},null,8,["size","title"]),C(),g(n.$slots,"default",{},()=>[m("span",B,b(t.copyText),1)],!0)]),_:2},1032,["title","onClick"])]),_:3}))}});const w=d(h,[["__scopeId","data-v-b4823326"]]);export{w as C};