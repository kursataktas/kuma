import{d as x,L as y,R as C,a7 as h,t as M,o as r,j as V,h as s,w as t,i as e,a6 as N,aG as $,l,D as v,a4 as A,g as m,m as z,k as D,r as O,p as T,E as B,s as R,A as E,ae as Z,a8 as j,C as I,n as L,_ as S}from"./index-da030e22.js";import{_ as q}from"./DeleteResourceModal.vue_vue_type_script_setup_true_lang-95f70bd8.js";import{N as G}from"./NavTabs-ee5644c2.js";const K=x({__name:"ZoneActionMenu",props:{zoneOverview:{type:Object,required:!0},kpopAttributes:{type:Object,default:()=>({placement:"bottomEnd"})}},setup(w){const n=w,{t:a}=y(),k=C(),b=h(),i=M(!1);function o(){i.value=!i.value}async function d(){await k.deleteZone({name:n.zoneOverview.name})}function c(){b.push({name:"zone-cp-list-view"})}return(_,p)=>(r(),V("div",null,[s(e(A),{"button-appearance":"creation","kpop-attributes":n.kpopAttributes,label:e(a)("zones.action_menu.toggle_button"),"show-caret":"",width:"280"},{items:t(()=>[s(e(N),{"is-dangerous":"","data-testid":"delete-button",onClick:$(o,["prevent"])},{default:t(()=>[l(v(e(a)("zones.action_menu.delete_button")),1)]),_:1},8,["onClick"])]),_:1},8,["kpop-attributes","label"]),l(),i.value?(r(),m(q,{key:0,"confirmation-text":n.zoneOverview.name,"delete-function":d,"is-visible":i.value,"modal-id":"delete-zone-modal","action-button-text":e(a)("zones.delete.confirmModal.proceedText"),title:e(a)("zones.delete.confirmModal.title"),onCancel:o,onDelete:c},{"body-content":t(()=>[z("p",null,v(e(a)("zones.delete.confirmModal.text1",{zoneName:n.zoneOverview.name})),1),l(),z("p",null,v(e(a)("zones.delete.confirmModal.text2")),1)]),error:t(()=>[l(v(e(a)("zones.delete.confirmModal.errorText")),1)]),_:1},8,["confirmation-text","is-visible","action-button-text","title"])):D("",!0)]))}}),J=x({__name:"ZoneDetailTabsView",setup(w){var i;const{t:n}=y(),b=(((i=h().getRoutes().find(o=>o.name==="zone-cp-detail-tabs-view"))==null?void 0:i.children)??[]).map(o=>{var u,f;const d=typeof o.name>"u"?(u=o.children)==null?void 0:u[0]:o,c=d.name,_=((f=d.meta)==null?void 0:f.module)??"";return{title:n(`zone-cps.routes.item.navigation.${c}`),routeName:c,module:_}});return(o,d)=>{const c=O("RouterView");return r(),m(S,{name:"zone-cp-detail-tabs-view","data-testid":"zone-cp-detail-tabs-view"},{default:t(({can:_,route:p})=>[s(T,{src:`/zone-cps/${p.params.zone}`},{default:t(({data:u,error:f})=>[f!==void 0?(r(),m(B,{key:0,error:f},null,8,["error"])):u===void 0?(r(),m(R,{key:1})):(r(),m(E,{key:2,breadcrumbs:[{to:{name:"zone-cp-list-view"},text:e(n)("zone-cps.routes.item.breadcrumbs")}]},Z({title:t(()=>[z("h1",null,[s(j,{text:p.params.zone},{default:t(()=>[s(I,{title:e(n)("zone-cps.routes.item.title",{name:p.params.zone}),render:!0},null,8,["title"])]),_:2},1032,["text"])])]),default:t(()=>[l(),l(),s(G,{class:"route-zone-detail-view-tabs",tabs:e(b)},null,8,["tabs"]),l(),s(c,null,{default:t(g=>[(r(),m(L(g.Component),{data:u},null,8,["data"]))]),_:2},1024)]),_:2},[_("create zones")?{name:"actions",fn:t(()=>[s(K,{"zone-overview":u},null,8,["zone-overview"])]),key:"0"}:void 0]),1032,["breadcrumbs"]))]),_:2},1032,["src"])]),_:1})}}});export{J as default};
