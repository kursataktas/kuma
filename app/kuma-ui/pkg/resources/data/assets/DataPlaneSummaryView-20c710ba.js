import{d as x,l as D,P as g,a as h,o as l,c as p,e as i,w as t,f as e,t as n,q as a,p as u,b,a7 as R,K as C,v as B,a6 as f,F as w,_ as P,y as L,B as N,C as E,a8 as K}from"./index-e8a21a80.js";import{_ as $}from"./EmptyBlock.vue_vue_type_script_setup_true_lang-9e1b8d5a.js";import{S as A}from"./StatusBadge-180f9a6f.js";import{T as V}from"./TagList-89a4eadf.js";import{a as G,d as U,b as z}from"./dataplane-0a086c06.js";const F={class:"stack"},j={class:"status-with-reason"},q=x({__name:"DataPlaneSummary",props:{dataplaneOverview:{}},setup(r){const{t:s,formatIsoDate:k}=D(),o=r,d=g(()=>G(o.dataplaneOverview.dataplane,o.dataplaneOverview.dataplaneInsight)),m=g(()=>U(o.dataplaneOverview.dataplane)),_=g(()=>z(o.dataplaneOverview.dataplaneInsight)),c=g(()=>{var y;const v=((y=o.dataplaneOverview.dataplaneInsight)==null?void 0:y.subscriptions)??[];if(v.length===0)return null;const S=v[v.length-1];return k(S.status.lastUpdateTime)});return(v,S)=>{const y=h("KTooltip");return l(),p("div",F,[i(f,null,{title:t(()=>[e(n(a(s)("http.api.property.status")),1)]),body:t(()=>[u("div",j,[i(A,{status:d.value.status},null,8,["status"]),e(),d.value.reason.length>0?(l(),b(y,{key:0,label:d.value.reason.join(", "),class:"reason-tooltip","position-fixed":""},{default:t(()=>[i(a(R),{size:a(C),"hide-title":""},null,8,["size"])]),_:1},8,["label"])):B("",!0)])]),_:1}),e(),i(f,null,{title:t(()=>[e(n(a(s)("http.api.property.tags")),1)]),body:t(()=>[m.value.length>0?(l(),b(V,{key:0,tags:m.value},null,8,["tags"])):(l(),p(w,{key:1},[e(n(a(s)("common.detail.none")),1)],64))]),_:1}),e(),i(f,null,{title:t(()=>[e(n(a(s)("http.api.property.dependencies")),1)]),body:t(()=>[_.value!==null?(l(),b(V,{key:0,tags:_.value},null,8,["tags"])):(l(),p(w,{key:1},[e(n(a(s)("common.detail.none")),1)],64))]),_:1}),e(),i(f,null,{title:t(()=>[e(n(a(s)("data-planes.routes.item.last_updated")),1)]),body:t(()=>[c.value?(l(),p(w,{key:0},[e(n(c.value),1)],64)):(l(),p(w,{key:1},[e(n(a(s)("common.detail.none")),1)],64))]),_:1}),e(),i(f,null,{title:t(()=>[e(n(a(s)("data-planes.routes.item.certificate_info")),1)]),body:t(()=>{var I,T,O;return[(T=(I=o.dataplaneOverview.dataplaneInsight)==null?void 0:I.mTLS)!=null&&T.certificateExpirationTime?(l(),p(w,{key:0},[e(n(a(k)((O=o.dataplaneOverview.dataplaneInsight)==null?void 0:O.mTLS.certificateExpirationTime)),1)],64)):(l(),p(w,{key:1},[e(n(a(s)("data-planes.routes.item.no_certificate")),1)],64))]}),_:1})])}}});const W=P(q,[["__scopeId","data-v-cdf3b188"]]),Z=r=>(N("data-v-b90b45fd"),r=r(),E(),r),H={class:"summary-title-wrapper"},J=Z(()=>u("img",{"aria-hidden":"true",src:K},null,-1)),M={class:"summary-title"},Q={key:1,class:"stack"},X=x({__name:"DataPlaneSummaryView",props:{name:{},dataplaneOverview:{default:void 0}},setup(r){const{t:s}=D(),k=L(),o=r,d=g(()=>{var m,_,c;return((c=(_=(m=o.dataplaneOverview)==null?void 0:m.dataplane)==null?void 0:_.networking)==null?void 0:c.gateway)!==void 0});return(m,_)=>{const c=h("RouteTitle"),v=h("RouterLink"),S=h("AppView"),y=h("RouteView");return l(),b(y,{name:a(k).name},{default:t(()=>[i(S,null,{title:t(()=>[u("div",H,[J,e(),u("h2",M,[i(v,{to:{name:d.value?"gateway-detail-view":"data-plane-detail-view",params:{dataPlane:o.name}}},{default:t(()=>[i(c,{title:a(s)("data-planes.routes.item.title",{name:o.name}),render:!0},null,8,["title"])]),_:1},8,["to"])])])]),default:t(()=>[e(),o.dataplaneOverview===void 0?(l(),b($,{key:0},{message:t(()=>[u("p",null,n(a(s)("common.collection.summary.empty_message",{type:d.value?"Gateway":"Dataplane"})),1)]),default:t(()=>[e(n(a(s)("common.collection.summary.empty_title",{type:d.value?"Gateway":"Dataplane"}))+" ",1)]),_:1})):(l(),p("div",Q,[u("div",null,[u("h3",null,n(a(s)("data-planes.routes.item.overview")),1),e(),i(W,{class:"mt-4","dataplane-overview":o.dataplaneOverview},null,8,["dataplane-overview"])])]))]),_:1})]),_:1},8,["name"])}}});const ne=P(X,[["__scopeId","data-v-b90b45fd"]]);export{ne as default};