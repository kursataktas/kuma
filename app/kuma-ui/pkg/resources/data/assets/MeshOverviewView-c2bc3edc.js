import{W as L,N as j}from"./kongponents.es-948bd603.js";import{d as W,u as F,q as f,c as h,o as u,e as p,h as l,g as c,r as Q,a as y,w as i,b as m,k as N,j as S,t as b,F as w,f as E}from"./index-452eba2d.js";import{j as q,h as H,H as A,J,K as C,g as z,e as U,y as R,f as X,_ as Y}from"./RouteView.vue_vue_type_script_setup_true_lang-1e381d15.js";import{_ as Z}from"./RouteTitle.vue_vue_type_script_setup_true_lang-b9d388cf.js";import{D as T,a as K}from"./DefinitionListItem-5b2fc413.js";import{_ as ee}from"./ResourceCodeBlock.vue_vue_type_script_setup_true_lang-97a530bb.js";import{_ as te}from"./StatusInfo.vue_vue_type_script_setup_true_lang-af1acd7b.js";import{T as ae}from"./TextWithCopyButton-eb9bc84b.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-d2b40c6f.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-7207a998.js";import"./ErrorBlock-c00ab7a0.js";const ne={class:"chart-box-list"},se=W({__name:"MeshCharts",setup(G){const o=q(),D=H(),x=F(),g=f(!1),_=f({total:0,online:0,partiallyDegraded:0,offline:0}),v=f({total:0,internal:0,external:0}),s=f({kumaDp:{},envoy:{}}),d=h(()=>{const e=[],{internal:t,external:a}=v.value;return t&&e.push({title:o.t("common.charts.services.internalLabel"),data:t}),a&&e.push({title:o.t("common.charts.services.externalLabel"),data:a}),{title:o.t("common.charts.services.title"),showTotal:!0,dataPoints:e}}),M=h(()=>{const e=[],{total:t,online:a,partiallyDegraded:n}=_.value;if(t>0){e.push({title:o.t("http.api.value.online"),statusKeyword:"online",data:a}),n>0&&e.push({title:o.t("http.api.value.partially_degraded"),statusKeyword:"partially_degraded",data:n});const r=t-n-a;r>0&&e.push({title:o.t("http.api.value.offline"),statusKeyword:"offline",data:r})}return{title:o.t("common.charts.dataPlaneProxies.title"),showTotal:!0,dataPoints:e}}),P=h(()=>{const e=Object.entries(s.value.kumaDp).map(([t,a])=>({title:t,data:a.total??0}));return e.sort((t,a)=>t.title==="unknown"?1:a.title==="unknown"?-1:A(t.title,a.title)),{title:o.t("common.charts.kumaDp.title"),subtitle:o.t("common.charts.kumaDp.subtitle"),dataPoints:e}}),V=h(()=>{const e=Object.entries(s.value.envoy).map(([t,a])=>({title:t,data:a.total??0}));return e.sort((t,a)=>t.title==="unknown"?1:a.title==="unknown"?-1:A(t.title,a.title)),{title:o.t("common.charts.envoy.title"),subtitle:o.t("common.charts.envoy.subtitle"),dataPoints:e}});$();async function $(){g.value=!0;const e=x.params.mesh;try{const t=await D.getMeshInsights({name:e}),a=J([t]);B(a),k(a),I(a)}catch{_.value={total:0,online:0,partiallyDegraded:0,offline:0},v.value={total:0,internal:0,external:0},s.value={kumaDp:{},envoy:{}}}finally{g.value=!1}}function B(e){const{total:t,online:a,partiallyDegraded:n}=e.dataplanes;_.value={total:t,online:a,partiallyDegraded:n,offline:t-a-n}}function k(e){const{total:t,internal:a,external:n}=e.services;v.value={total:t,internal:a,external:n}}function I(e){s.value=e.dpVersions}return(e,t)=>(u(),p("div",ne,[l(C,{data:d.value},null,8,["data"]),c(),l(C,{data:M.value},null,8,["data"]),c(),l(C,{data:P.value},null,8,["data"]),c(),l(C,{data:V.value},null,8,["data"])]))}});const le=z(se,[["__scopeId","data-v-375c50a1"]]),oe={class:"kcard-stack"},re={class:"columns"},ie={key:0},ue=W({__name:"MeshOverviewView",setup(G){const{t:o}=q(),D=H(),x=F(),g=U(),_=f(!0),v=f(!1),s=f(null),d=f(null),M=h(()=>{if(s.value===null||d.value===null)return null;const{name:e,creationTime:t,modificationTime:a}=s.value;return{name:e,created:R(t),modified:R(a),"Data Plane Proxies":d.value.dataplanes.total}}),P=h(()=>{var O;if(s.value===null)return null;const e=k(s.value,"mtls"),t=k(s.value,"logging"),a=k(s.value,"metrics"),n=k(s.value,"tracing"),r=!!((O=s.value.routing)!=null&&O.localityAwareLoadBalancing);return{mtls:e,logging:t,metrics:a,tracing:n,localityAwareLoadBalancing:r}}),V=h(()=>g.state.sidebar.insights.mesh.policies.total),$=h(()=>g.state.policyTypes.map(e=>{var t,a;return{...e,length:((a=(t=d.value)==null?void 0:t.policies[e.name])==null?void 0:a.total)??0}}));B();async function B(){_.value=!0,v.value=!1;const e=x.params.mesh;try{s.value=await D.getMesh({name:e}),d.value=await D.getMeshInsights({name:e});const t=J([d.value]);g.state.currentMeshPolicies=t.policies}catch(t){v.value=!0,s.value=null,d.value=null,console.error(t)}finally{_.value=!1}}function k(e,t){if(e===null||e[t]===void 0)return!1;const a=e[t].enabledBackend??e[t].defaultBackend??e[t].backends[0].name,n=e[t].backends.find(r=>r.name===a);return`${n.type} / ${n.name}`}async function I(e){const t=x.params.mesh;return await D.getMesh({name:t},e)}return(e,t)=>{const a=Q("router-link");return u(),y(Y,null,{default:i(()=>[l(Z,{title:m(o)("meshes.routes.overview.title")},null,8,["title"]),c(),l(X,null,{default:i(()=>[N("div",oe,[l(m(L),null,{body:i(()=>[l(le)]),_:1}),c(),s.value!==null?(u(),y(m(L),{key:0},{body:i(()=>[N("div",re,[l(te,{"is-loading":_.value,"has-error":v.value,"is-empty":s.value===null||d.value===null},{default:i(()=>[l(T,null,{default:i(()=>[(u(!0),p(w,null,S(M.value,(n,r)=>(u(),y(K,{key:r,term:m(o)(`http.api.property.${r}`)},{default:i(()=>[typeof n=="boolean"?(u(),y(m(j),{key:0,appearance:n?"success":"danger"},{default:i(()=>[c(b(n?"Enabled":"Disabled"),1)]),_:2},1032,["appearance"])):r==="name"&&typeof n=="string"?(u(),y(ae,{key:1,text:n},null,8,["text"])):(u(),p(w,{key:2},[c(b(n),1)],64))]),_:2},1032,["term"]))),128))]),_:1})]),_:1},8,["is-loading","has-error","is-empty"]),c(),l(T,null,{default:i(()=>[(u(!0),p(w,null,S(P.value,(n,r)=>(u(),y(K,{key:r,term:m(o)(`http.api.property.${r}`)},{default:i(()=>[typeof n=="boolean"?(u(),y(m(j),{key:0,appearance:n?"success":"danger"},{default:i(()=>[c(b(n?"Enabled":"Disabled"),1)]),_:2},1032,["appearance"])):(u(),p(w,{key:1},[c(b(n),1)],64))]),_:2},1032,["term"]))),128))]),_:1}),c(),l(T,null,{default:i(()=>[l(K,{term:`Policies (${V.value})`},{default:i(()=>[N("ul",null,[(u(!0),p(w,null,S($.value,(n,r)=>(u(),p(w,{key:r},[n.length!==0?(u(),p("li",ie,[l(a,{to:{name:"policies-list-view",params:{policyPath:n.path}}},{default:i(()=>[c(b(n.name)+": "+b(n.length),1)]),_:2},1032,["to"])])):E("",!0)],64))),128))])]),_:1},8,["term"])]),_:1})])]),_:1})):E("",!0),c(),l(m(L),null,{body:i(()=>{var n;return[l(ee,{id:"code-block-mesh","resource-fetcher":I,"resource-fetcher-watch-key":((n=s.value)==null?void 0:n.name)||null},null,8,["resource-fetcher-watch-key"])]}),_:1})])]),_:1})]),_:1})}}});const be=z(ue,[["__scopeId","data-v-f4f2b5dd"]]);export{be as default};
