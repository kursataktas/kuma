import{d as v,o as s,f as m,b as n,w as e,i as y,h as a,t as l,e as o,a as i,g as x,k as g,F as k}from"./index-d6e04092.js";import{f,D as u,S,T as $,R as b,A as I,d as w,E as B,g as D,_ as T}from"./RouteView.vue_vue_type_script_setup_true_lang-c4937c78.js";import{T as V}from"./TagList-8d704f3d.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-c618043c.js";const C={class:"stack"},E={class:"columns",style:{"--columns":"2"}},N=v({__name:"ExternalServiceDetails",props:{externalService:{}},setup(c){const t=c,{t:r}=f();return(h,_)=>(s(),m("div",C,[n(o(g),null,{body:e(()=>[y("div",E,[n(u,null,{title:e(()=>[a(l(o(r)("http.api.property.address")),1)]),body:e(()=>[a(l(t.externalService.networking.address),1)]),_:1}),a(),t.externalService.tags!==null?(s(),i(u,{key:0},{title:e(()=>[a(l(o(r)("http.api.property.tags")),1)]),body:e(()=>[n(V,{tags:t.externalService.tags},null,8,["tags"])]),_:1})):x("",!0)])]),_:1})]))}}),P={class:"stack"},A={class:"columns",style:{"--columns":"3"}},F=v({__name:"ServiceInsightDetails",props:{serviceInsight:{}},setup(c){const t=c,{t:r}=f();return(h,_)=>(s(),m("div",P,[n(o(g),null,{body:e(()=>{var p,d;return[y("div",A,[n(u,null,{title:e(()=>[a(l(o(r)("http.api.property.status")),1)]),body:e(()=>[n(S,{status:t.serviceInsight.status??"not_available"},null,8,["status"])]),_:1}),a(),n(u,null,{title:e(()=>[a(l(o(r)("http.api.property.address")),1)]),body:e(()=>[t.serviceInsight.addressPort?(s(),i($,{key:0,text:t.serviceInsight.addressPort},null,8,["text"])):(s(),m(k,{key:1},[a(l(o(r)("common.detail.none")),1)],64))]),_:1}),a(),n(b,{online:((p=t.serviceInsight.dataplanes)==null?void 0:p.online)??0,total:((d=t.serviceInsight.dataplanes)==null?void 0:d.total)??0},{title:e(()=>[a(l(o(r)("http.api.property.dataPlaneProxies")),1)]),_:1},8,["online","total"])])]}),_:1})]))}}),q=v({__name:"ServiceDetailView",props:{data:{}},setup(c){const t=c;return(r,h)=>(s(),i(T,{name:"service-detail-view","data-testid":"service-detail-view"},{default:e(({route:_})=>[n(I,null,{default:e(()=>[t.data.serviceType==="external"?(s(),i(w,{key:0,src:`/meshes/${_.params.mesh}/external-services/${_.params.service}`},{default:e(({data:p,error:d})=>[d?(s(),i(B,{key:0,error:d},null,8,["error"])):p===void 0?(s(),i(D,{key:1})):(s(),i(N,{key:2,"external-service":p},null,8,["external-service"]))]),_:2},1032,["src"])):(s(),i(F,{key:1,"service-insight":r.data},null,8,["service-insight"]))]),_:2},1024)]),_:1}))}});export{q as default};
