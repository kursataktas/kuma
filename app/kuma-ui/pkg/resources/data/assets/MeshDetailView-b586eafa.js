import{d as V,l as R,R as w,o as t,c as T,f as r,t as i,q as _,e,$ as g,_ as k,a4 as S,a as c,b as u,w as n,H as $,I as B,p as I}from"./index-dc1529df.js";const M={class:"date-status"},b=V({__name:"ResourceDateStatus",props:{creationTime:{},modificationTime:{}},setup(p){const{t:a,formatIsoDate:d}=R(),l=p,m=w(()=>d(l.creationTime)),s=w(()=>d(l.modificationTime));return(f,h)=>(t(),T("span",M,[r(i(_(a)("common.detail.created"))+": "+i(m.value)+" ",1),e(_(g)),r(" "+i(_(a)("common.detail.modified"))+": "+i(s.value),1)]))}});const C=k(b,[["__scopeId","data-v-fa366713"]]),N={key:2,class:"stack","data-testid":"detail-view-details"},A={class:"date-status-wrapper"},q=V({__name:"MeshDetailView",setup(p){const a=S();return(d,l)=>{const m=c("RouteTitle"),s=c("DataSource"),f=c("AppView"),h=c("RouteView");return t(),u(h,{name:"mesh-detail-view",params:{mesh:""}},{default:n(({route:v,t:x})=>[e(m,{title:x("meshes.routes.overview.title")},null,8,["title"]),r(),e(f,null,{default:n(()=>[e(s,{src:`/meshes/${v.params.mesh}`},{default:n(({data:o,error:D})=>[e(s,{src:`/mesh-insights/${v.params.mesh}`},{default:n(({data:y})=>[D?(t(),u($,{key:0,error:D},null,8,["error"])):o===void 0?(t(),u(B,{key:1})):(t(),T("div",N,[e(_(a),{mesh:o,"mesh-insight":y},null,8,["mesh","mesh-insight"]),r(),I("div",A,[e(C,{"creation-time":o.creationTime,"modification-time":o.modificationTime},null,8,["creation-time","modification-time"])])]))]),_:2},1032,["src"])]),_:2},1032,["src"])]),_:2},1024)]),_:1})}}});const H=k(q,[["__scopeId","data-v-fab0c2e7"]]);export{H as default};