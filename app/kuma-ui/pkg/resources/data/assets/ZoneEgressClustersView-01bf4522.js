import{E as l}from"./EnvoyData-161bd6bd.js";import{d as m,a as t,o as d,b as u,w as s,e as a,m as g,f as _}from"./index-f5266944.js";import"./index-fce48c05.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-dc96b835.js";import"./uniqueId-90cc9b93.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-61af48b0.js";import"./ErrorBlock-07b366f0.js";import"./TextWithCopyButton-ad2c2056.js";import"./CopyButton-3af07971.js";import"./WarningIcon.vue_vue_type_script_setup_true_lang-02a543f6.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-6b4abfc9.js";const N=m({__name:"ZoneEgressClustersView",setup(f){return(h,C)=>{const r=t("RouteTitle"),n=t("KCard"),p=t("AppView"),i=t("RouteView");return d(),u(i,{name:"zone-egress-clusters-view",params:{zoneEgress:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:s(({route:e,t:c})=>[a(p,null,{title:s(()=>[g("h2",null,[a(r,{title:c("zone-egresses.routes.item.navigation.zone-egress-clusters-view")},null,8,["title"])])]),default:s(()=>[_(),a(n,null,{default:s(()=>[a(l,{resource:"Zone",src:`/zone-egresses/${e.params.zoneEgress}/data-path/clusters`,query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},null,8,["src","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])]),_:2},1024)]),_:2},1024)]),_:1})}}});export{N as default};