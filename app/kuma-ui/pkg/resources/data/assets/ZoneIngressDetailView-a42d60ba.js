import{f,A as w,D as p,S as z,T as k,_ as v}from"./RouteView.vue_vue_type_script_setup_true_lang-c4937c78.js";import{_ as b}from"./SubscriptionList.vue_vue_type_script_setup_true_lang-a3f55cd8.js";import{g as C}from"./dataplane-30467516.js";import{d as x,r as B,o as i,a as c,w as e,b as a,i as g,h as s,t as d,e as o,f as u,F as h,g as V}from"./index-d6e04092.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-c618043c.js";import"./AccordionList-1e614c4c.js";const $={class:"stack","data-testid":"detail-view-details"},A={class:"columns",style:{"--columns":"3"}},D={key:0},W=x({__name:"ZoneIngressDetailView",props:{data:{}},setup(y){const t=y,{t:r}=f();return(m,N)=>{const _=B("KCard");return i(),c(v,{name:"zone-ingress-detail-view","data-testid":"zone-ingress-detail-view"},{default:e(()=>[a(w,null,{default:e(()=>{var I;return[g("div",$,[a(_,null,{body:e(()=>[g("div",A,[a(p,null,{title:e(()=>[s(d(o(r)("http.api.property.status")),1)]),body:e(()=>[a(z,{status:o(C)(t.data.zoneIngressInsight)},null,8,["status"])]),_:1}),s(),a(p,null,{title:e(()=>[s(d(o(r)("http.api.property.address")),1)]),body:e(()=>{var n,l;return[(n=t.data.zoneIngress.networking)!=null&&n.address&&((l=t.data.zoneIngress.networking)!=null&&l.port)?(i(),c(k,{key:0,text:`${t.data.zoneIngress.networking.address}:${t.data.zoneIngress.networking.port}`},null,8,["text"])):(i(),u(h,{key:1},[s(d(o(r)("common.detail.none")),1)],64))]}),_:1}),s(),a(p,null,{title:e(()=>[s(d(o(r)("http.api.property.advertisedAddress")),1)]),body:e(()=>{var n,l;return[(n=t.data.zoneIngress.networking)!=null&&n.advertisedAddress&&((l=t.data.zoneIngress.networking)!=null&&l.advertisedPort)?(i(),c(k,{key:0,text:`${t.data.zoneIngress.networking.advertisedAddress}:${t.data.zoneIngress.networking.advertisedPort}`},null,8,["text"])):(i(),u(h,{key:1},[s(d(o(r)("common.detail.none")),1)],64))]}),_:1})])]),_:1}),s(),(((I=m.data.zoneIngressInsight)==null?void 0:I.subscriptions)??[]).length>0?(i(),u("div",D,[g("h2",null,d(o(r)("zone-ingresses.detail.subscriptions")),1),s(),a(_,{class:"mt-4"},{body:e(()=>{var n;return[a(b,{subscriptions:((n=m.data.zoneIngressInsight)==null?void 0:n.subscriptions)??[]},null,8,["subscriptions"])]}),_:1})])):V("",!0)])]}),_:1})]),_:1})}}});export{W as default};
