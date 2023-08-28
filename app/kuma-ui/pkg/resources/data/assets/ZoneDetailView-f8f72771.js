import{d as S,c as _,Z as I,o as a,a as c,w as e,q as d,f as V,g as s,h as t,b as i,G as h,t as p,M as B,e as D,F as $,s as E}from"./index-30c3bdbc.js";import{g as C,x as T,y as Z,D as g,S as L,f as q,A as M,o as G,q as J,E as P,r as R,_ as j}from"./RouteView.vue_vue_type_script_setup_true_lang-1dd6f4c1.js";import{a as F,A as H,S as K,b as U}from"./SubscriptionHeader-4cbb664c.js";import{_ as W}from"./CodeBlock.vue_vue_type_style_index_0_lang-bf980d9d.js";import{_ as Q}from"./TabsWidget.vue_vue_type_style_index_0_lang-3e0839b4.js";import{T as X}from"./TextWithCopyButton-19c2f2e4.js";import{_ as Y}from"./WarningsWidget.vue_vue_type_script_setup_true_lang-bff247a4.js";import{f as ee}from"./dataplane-30467516.js";import{_ as te}from"./RouteTitle.vue_vue_type_script_setup_true_lang-cbf5001a.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-b3f1f8ad.js";import"./CopyButton-bbd9c9e2.js";const se={class:"stack"},ne={class:"columns",style:{"--columns":"4"}},oe=S({__name:"ZoneDetails",props:{zoneOverview:{type:Object,required:!0}},setup(z){const r=z,{t:l}=C(),w=T(),m=[{hash:"#overview",title:l("zone-cps.routes.item.tabs.overview")},{hash:"#insights",title:l("zone-cps.routes.item.tabs.insights")}],v=_(()=>{var o;for(const n of((o=r.zoneOverview.zoneInsight)==null?void 0:o.subscriptions)??[])if(n.config)return JSON.parse(n.config).environment;return"kubernetes"}),y=_(()=>Z(r.zoneOverview)),f=_(()=>I(r.zoneOverview)),k=_(()=>{var u;const o=[],n=((u=r.zoneOverview.zoneInsight)==null?void 0:u.subscriptions)??[];if(n.length>0){const b=n[n.length-1],A=b.version.kumaCp.version||"-",{kumaCpGlobalCompatible:N=!0}=b.version.kumaCp;N||o.push({kind:ee,payload:{zoneCpVersion:A,globalCpVersion:w("KUMA_VERSION")}})}return o}),O=_(()=>{var n;const o=((n=r.zoneOverview.zoneInsight)==null?void 0:n.subscriptions)??[];if(o.length>0){const u=o[o.length-1];if(u.config)return JSON.stringify(JSON.parse(u.config),null,2)}return null}),x=_(()=>{var n;const o=((n=r.zoneOverview.zoneInsight)==null?void 0:n.subscriptions)??[];return Array.from(o).reverse()});return(o,n)=>(a(),c(Q,{tabs:m},{overview:e(()=>[d("div",se,[k.value.length>0?(a(),c(Y,{key:0,warnings:k.value},null,8,["warnings"])):V("",!0),s(),t(i(h),null,{body:e(()=>[d("div",ne,[t(g,null,{title:e(()=>[s(p(i(l)("http.api.property.status")),1)]),body:e(()=>[t(L,{status:y.value},null,8,["status"])]),_:1}),s(),t(g,null,{title:e(()=>[s(p(i(l)("http.api.property.name")),1)]),body:e(()=>[t(X,{text:r.zoneOverview.name},null,8,["text"])]),_:1}),s(),t(g,null,{title:e(()=>[s(p(i(l)("http.api.property.type")),1)]),body:e(()=>[s(p(v.value),1)]),_:1}),s(),t(g,null,{title:e(()=>[s(p(i(l)("http.api.property.authenticationType")),1)]),body:e(()=>[s(p(f.value),1)]),_:1})])]),_:1}),s(),d("div",null,[d("h2",null,p(i(l)("zone-cps.detail.configuration_title")),1),s(),t(i(h),{class:"mt-4"},{body:e(()=>[O.value!==null?(a(),c(W,{key:0,id:"code-block-zone-config",language:"json",code:O.value,"is-searchable":"","query-key":"zone-config"},null,8,["code"])):(a(),c(i(B),{key:1,class:"mt-4","data-testid":"warning-no-subscriptions",appearance:"warning"},{alertMessage:e(()=>[s(p(i(l)("zone-cps.detail.no_subscriptions")),1)]),_:1}))]),_:1})])])]),insights:e(()=>[t(i(h),null,{body:e(()=>[t(F,{"initially-open":0},{default:e(()=>[(a(!0),D($,null,E(x.value,(u,b)=>(a(),c(H,{key:b},{"accordion-header":e(()=>[t(K,{subscription:u},null,8,["subscription"])]),"accordion-content":e(()=>[t(U,{subscription:u},null,8,["subscription"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}))}});const ie=q(oe,[["__scopeId","data-v-edd36e9c"]]),be=S({__name:"ZoneDetailView",setup(z){const{t:r}=C();return(l,w)=>(a(),c(j,{name:"zone-cp-detail-view","data-testid":"zone-cp-detail-view"},{default:e(({route:m})=>[t(M,{breadcrumbs:[{to:{name:"zone-cp-list-view"},text:i(r)("zone-cps.routes.item.breadcrumbs")}]},{title:e(()=>[d("h1",null,[t(te,{title:i(r)("zone-cps.routes.item.title",{name:m.params.zone}),render:!0},null,8,["title"])])]),default:e(()=>[s(),t(G,{src:`/zone-cps/${m.params.zone}`},{default:e(({data:v,isLoading:y,error:f})=>[y?(a(),c(J,{key:0})):f!==void 0?(a(),c(P,{key:1,error:f},null,8,["error"])):v===void 0?(a(),c(R,{key:2})):(a(),c(ie,{key:3,"zone-overview":v,"data-testid":"detail-view-details"},null,8,["zone-overview"]))]),_:2},1032,["src"])]),_:2},1032,["breadcrumbs"])]),_:1}))}});export{be as default};