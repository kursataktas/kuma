import{_ as C}from"./CodeBlock.vue_vue_type_style_index_0_lang-cb530502.js";import{d as k,a as t,o as a,b as l,w as o,e as r,V as y,m as d,f as s,t as x,c as p,F as w,C as R}from"./index-12461953.js";import"./uniqueId-90cc9b93.js";const V=["data-testid","innerHTML"],S=k({__name:"ZoneConfigView",props:{data:{},notifications:{default:()=>[]}},setup(m){const i=m;return(z,F)=>{const g=t("RouteTitle"),u=t("KAlert"),f=t("KCard"),_=t("AppView"),h=t("RouteView");return a(),l(h,{name:"zone-cp-config-view",params:{zone:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:o(({route:n,t:c})=>[r(_,null,y({title:o(()=>[d("h2",null,[r(g,{title:c("zone-cps.routes.item.navigation.zone-cp-config-view")},null,8,["title"])])]),default:o(()=>[s(),s(),r(f,null,{default:o(()=>[Object.keys(i.data.zoneInsight.config).length>0?(a(),l(C,{key:0,id:"code-block-zone-config",language:"json",code:JSON.stringify(i.data.zoneInsight.config,null,2),"is-searchable":"",query:n.params.codeSearch,"is-filter-mode":n.params.codeFilter,"is-reg-exp-mode":n.params.codeRegExp,onQueryChange:e=>n.update({codeSearch:e}),onFilterModeChange:e=>n.update({codeFilter:e}),onRegExpModeChange:e=>n.update({codeRegExp:e})},null,8,["code","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])):(a(),l(u,{key:1,class:"mt-4","data-testid":"warning-no-subscriptions",appearance:"warning"},{alertMessage:o(()=>[s(x(c("zone-cps.detail.no_subscriptions")),1)]),_:2},1024))]),_:2},1024)]),_:2},[i.notifications.length>0?{name:"notifications",fn:o(()=>[d("ul",null,[(a(!0),p(w,null,R(i.notifications,e=>(a(),p("li",{key:e.kind,"data-testid":`warning-${e.kind}`,innerHTML:c(`common.warnings.${e.kind}`,e.payload)},null,8,V))),128)),s()])]),key:"0"}:void 0]),1024)]),_:1})}}});export{S as default};