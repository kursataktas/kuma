import{d as V,a as l,o as i,b as d,w as a,e as m,m as s,f as t,O as b,t as p,c as _,Y as E,p as u,F,s as P,v as B,U as T,_ as $}from"./index-50c87f77.js";import{_ as D}from"./ResourceCodeBlock.vue_vue_type_style_index_0_lang-c2c0a2f9.js";import"./CodeBlock-4de02eb1.js";import"./uniqueId-90cc9b93.js";import"./CopyButton-a040646f.js";import"./index-fce48c05.js";import"./toYaml-4e00099e.js";const I=r=>(P("data-v-0ee376b5"),r=r(),B(),r),M={class:"summary-title-wrapper"},N=I(()=>s("img",{"aria-hidden":"true",src:T},null,-1)),q={class:"summary-title"},A={key:1,class:"stack"},K={key:0},L={class:"mt-4 stack"},Q={key:0},O={class:"mt-4"},U=V({__name:"PolicySummaryView",props:{policy:{default:void 0},policyType:{}},setup(r){const c=r;return(Y,j)=>{const f=l("RouteTitle"),v=l("RouterLink"),R=l("KBadge"),k=l("DataSource"),w=l("AppView"),x=l("RouteView");return i(),d(x,{name:"policy-summary-view",params:{mesh:"",policyPath:"",policy:"",codeSearch:"",codeFilter:!1,codeRegExp:!1}},{default:a(({route:e,t:n})=>[m(w,null,{title:a(()=>[s("div",M,[N,t(),s("h2",q,[m(v,{to:{name:"policy-detail-view",params:{mesh:e.params.mesh,policyPath:e.params.policyPath,policy:e.params.policy}}},{default:a(()=>[m(f,{title:n("policies.routes.item.title",{name:e.params.policy})},null,8,["title"])]),_:2},1032,["to"])])])]),default:a(()=>{var h;return[t(),c.policy===void 0?(i(),d(b,{key:0},{message:a(()=>[s("p",null,p(n("common.collection.summary.empty_message",{type:c.policyType.name})),1)]),default:a(()=>[t(p(n("common.collection.summary.empty_title",{type:c.policyType.name}))+" ",1)]),_:2},1024)):(i(),_("div",A,[(h=c.policy.spec)!=null&&h.targetRef?(i(),_("div",K,[s("h3",null,p(n("policies.routes.item.overview")),1),t(),s("div",L,[m(E,null,{title:a(()=>[t(p(n("http.api.property.targetRef")),1)]),body:a(()=>{var o;return[(o=c.policy.spec)!=null&&o.targetRef?(i(),d(R,{key:0,appearance:"neutral"},{default:a(()=>[t(p(c.policy.spec.targetRef.kind),1),c.policy.spec.targetRef.name?(i(),_("span",Q,[t(":"),s("b",null,p(c.policy.spec.targetRef.name),1)])):u("",!0)]),_:1})):(i(),_(F,{key:1},[t(p(n("common.detail.none")),1)],64))]}),_:2},1024)])])):u("",!0),t(),s("div",null,[s("h3",null,p(n("policies.routes.item.config")),1),t(),s("div",O,[m(D,{resource:c.policy.config,"is-searchable":"",query:e.params.codeSearch,"is-filter-mode":e.params.codeFilter,"is-reg-exp-mode":e.params.codeRegExp,onQueryChange:o=>e.update({codeSearch:o}),onFilterModeChange:o=>e.update({codeFilter:o}),onRegExpModeChange:o=>e.update({codeRegExp:o})},{default:a(({copy:o,copying:C})=>[C?(i(),d(k,{key:0,src:`/meshes/${e.params.mesh}/policy-path/${e.params.policyPath}/policy/${e.params.policy}/as/kubernetes?no-store`,onChange:y=>{o(g=>g(y))},onError:y=>{o((g,S)=>S(y))}},null,8,["src","onChange","onError"])):u("",!0)]),_:2},1032,["resource","query","is-filter-mode","is-reg-exp-mode","onQueryChange","onFilterModeChange","onRegExpModeChange"])])])]))]}),_:2},1024)]),_:1})}}});const ee=$(U,[["__scopeId","data-v-0ee376b5"]]);export{ee as default};