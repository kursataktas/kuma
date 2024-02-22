import{d as x,l as b,a as m,o as l,b as p,w as e,e as a,f as n,t as c,q as t,k as N,z as P,m as r,E as C,A as T,c as k,F as V,J as I,K as E,p as L,_ as Z}from"./index-mgI1s4j-.js";import{A as K}from"./AppCollection-5Bf33TLd.js";import{S as $}from"./StatusBadge-giYU4rYl.js";const F=x({__name:"MeshInsightsList",props:{items:{}},setup(z){const{t:s}=b(),u=z;return(w,f)=>{var d;const y=m("RouterLink");return l(),p(K,{headers:[{label:t(s)("meshes.components.mesh-insights-list.name"),key:"name"},{label:t(s)("meshes.components.mesh-insights-list.services"),key:"services"},{label:t(s)("meshes.components.mesh-insights-list.dataplanes"),key:"dataplanes"}],items:u.items,total:(d=u.items)==null?void 0:d.length,"empty-state-message":t(s)("common.emptyState.message",{type:t(s)("meshes.common.type",{count:2})}),"empty-state-cta-to":t(s)("meshes.href.docs"),"empty-state-cta-text":t(s)("common.documentation")},{name:e(({row:o})=>[a(y,{to:{name:"mesh-detail-view",params:{mesh:o.name}}},{default:e(()=>[n(c(o.name),1)]),_:2},1032,["to"])]),services:e(({row:o})=>[n(c(o.services.internal),1)]),dataplanes:e(({row:o})=>[n(c(o.dataplanesByType.standard.online)+" / "+c(o.dataplanesByType.standard.total),1)]),_:1},8,["headers","items","total","empty-state-message","empty-state-cta-to","empty-state-cta-text"])}}}),J=x({__name:"ZoneControlPlanesList",props:{items:{}},setup(z){const{t:s}=b(),u=N(),w=z;return(f,y)=>{var o;const d=m("RouterLink");return l(),p(K,{headers:[{label:t(s)("zone-cps.components.zone-control-planes-list.name"),key:"name"},{label:t(s)("zone-cps.components.zone-control-planes-list.status"),key:"status"}],items:w.items,total:(o=w.items)==null?void 0:o.length,"empty-state-title":t(s)("zone-cps.empty_state.title"),"empty-state-message":t(u)("create zones")?t(s)("zone-cps.empty_state.message"):t(s)("common.emptyState.message",{type:"Zones"}),"empty-state-cta-to":t(u)("create zones")?{name:"zone-create-view"}:void 0,"empty-state-cta-text":t(s)("zones.index.create")},{name:e(({row:_})=>[a(d,{to:{name:"zone-cp-detail-view",params:{zone:_.name}}},{default:e(()=>[n(c(_.name),1)]),_:2},1032,["to"])]),status:e(({row:_})=>[a($,{status:_.state},null,8,["status"])]),_:1},8,["headers","items","total","empty-state-title","empty-state-message","empty-state-cta-to","empty-state-cta-text"])}}}),q={key:2,class:"stack","data-testid":"detail-view-details"},M={class:"columns"},O={class:"card-header"},U={class:"card-title"},j={key:0,class:"card-actions"},G={class:"card-header"},H={class:"card-title"},Q=x({__name:"ControlPlaneDetailView",setup(z){const s=P();return(u,w)=>{const f=m("RouteTitle"),y=m("RouterLink"),d=m("KButton"),o=m("DataSource"),_=m("KCard"),A=m("AppView"),D=m("RouteView");return l(),p(D,{name:"home"},{default:e(({can:g,t:h})=>[a(A,null,{title:e(()=>[r("h1",null,[a(f,{title:h("main-overview.routes.item.title")},null,8,["title"])])]),default:e(()=>[n(),a(o,{src:"/global-insight"},{default:e(({data:B,error:R})=>[R?(l(),p(C,{key:0,error:R},null,8,["error"])):B===void 0?(l(),p(T,{key:1})):(l(),k("div",q,[a(t(s),{"can-use-zones":g("use zones"),"global-insight":B},null,8,["can-use-zones","global-insight"]),n(),r("div",M,[g("use zones")?(l(),p(_,{key:0},{default:e(()=>[a(o,{src:"/zone-cps?page=1&size=10"},{default:e(({data:i,error:v})=>{var S;return[v?(l(),p(C,{key:0,error:v},null,8,["error"])):(l(),k(V,{key:1},[r("div",O,[r("div",U,[r("h2",null,c(h("main-overview.detail.zone_control_planes.title")),1),n(),a(y,{to:{name:"zone-cp-list-view"}},{default:e(()=>[n(c(h("main-overview.detail.health.view_all")),1)]),_:2},1024)]),n(),g("create zones")&&(((S=i==null?void 0:i.items)==null?void 0:S.length)??0>0)?(l(),k("div",j,[a(d,{appearance:"primary",to:{name:"zone-create-view"}},{default:e(()=>[a(t(I),{size:t(E)},null,8,["size"]),n(" "+c(h("zones.index.create")),1)]),_:2},1024)])):L("",!0)]),n(),a(J,{"data-testid":"zone-control-planes-details",items:i==null?void 0:i.items},null,8,["items"])],64))]}),_:2},1024)]),_:2},1024)):L("",!0),n(),a(_,null,{default:e(()=>[a(o,{src:"/mesh-insights?page=1&size=10"},{default:e(({data:i,error:v})=>[v?(l(),p(C,{key:0,error:v},null,8,["error"])):(l(),k(V,{key:1},[r("div",G,[r("div",H,[r("h2",null,c(h("main-overview.detail.meshes.title")),1),n(),a(y,{to:{name:"mesh-list-view"}},{default:e(()=>[n(c(h("main-overview.detail.health.view_all")),1)]),_:2},1024)])]),n(),a(F,{"data-testid":"meshes-details",items:i==null?void 0:i.items},null,8,["items"])],64))]),_:2},1024)]),_:2},1024)])]))]),_:2},1024)]),_:2},1024)]),_:1})}}}),ee=Z(Q,[["__scopeId","data-v-a360c612"]]);export{ee as default};