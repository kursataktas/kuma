import{E as d}from"./EnvoyData-f24794d6.js";import{d as l,a as t,o as m,b as g,w as a,e as s,p as u,f as _}from"./index-8aa310e6.js";import"./index-fce48c05.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-a10aedb8.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-ff47098a.js";import"./ErrorBlock-d02da328.js";import"./TextWithCopyButton-80be2f0c.js";import"./CopyButton-f917b14f.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-9de17830.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-0a8337c0.js";const S=l({__name:"ZoneEgressStatsView",setup(f){return(h,x)=>{const r=t("RouteTitle"),n=t("KCard"),p=t("AppView"),i=t("RouteView");return m(),g(i,{name:"zone-egress-stats-view",params:{zoneEgress:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:a(({route:e,t:c})=>[s(p,null,{title:a(()=>[u("h2",null,[s(r,{title:c("zone-egresses.routes.item.navigation.zone-egress-stats-view")},null,8,["title"])])]),default:a(()=>[_(),s(n,null,{default:a(()=>[s(d,{resource:"Zone",src:`/zone-egresses/${e.params.zoneEgress}/data-path/stats`,query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter==="true","is-reg-exp-mode":e.params.codeRegExp==="true",onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},null,8,["src","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{S as default};