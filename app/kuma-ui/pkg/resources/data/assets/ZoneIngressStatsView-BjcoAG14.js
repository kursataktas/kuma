import{_ as d}from"./EnvoyData.vue_vue_type_script_setup_true_lang-DMkhEi0d.js";import{d as l,i as a,o as m,a as g,w as t,j as n,g as _,k as u}from"./index-DQUwSwHF.js";import"./kong-icons.es350-D4Gbfme0.js";import"./CodeBlock-DCsN1aa-.js";const z=l({__name:"ZoneIngressStatsView",setup(f){return(h,x)=>{const s=a("RouteTitle"),r=a("KCard"),i=a("AppView"),c=a("RouteView");return m(),g(c,{name:"zone-ingress-stats-view",params:{zoneIngress:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:t(({route:e,t:p})=>[n(i,null,{title:t(()=>[_("h2",null,[n(s,{title:p("zone-ingresses.routes.item.navigation.zone-ingress-stats-view")},null,8,["title"])])]),default:t(()=>[u(),n(r,null,{default:t(()=>[n(d,{resource:"Zone",src:`/zone-ingresses/${e.params.zoneIngress}/data-path/stats`,query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},null,8,["src","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{z as default};