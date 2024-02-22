import{_ as M,a as k,o,b as v,w as a,r as N,m as s,f as t,d as G,c as u,e as r,l as Q,q as d,t as i,F as f,H as w,p as I,n as tt,B as et,M as at,Y as C,$ as nt,a0 as st,K as A,W as ot,a1 as it,a2 as lt,A as rt,a3 as dt,a4 as ct,a5 as Z,D as ut,x as pt,y as _t}from"./index-mgI1s4j-.js";import{S as mt}from"./StatusBadge-giYU4rYl.js";import{S as ft}from"./SummaryView-m2l0Rjcu.js";import{T as W}from"./TagList-W3I9RuE3.js";import{_ as yt}from"./SubscriptionList.vue_vue_type_script_setup_true_lang-OW18NzEa.js";import"./AccordionList-4Wth0ZRG.js";const vt={},gt={class:"card"},ht={class:"title"},kt={class:"body"};function bt(c,n){const e=k("KCard");return o(),v(e,{class:"data-card"},{default:a(()=>[s("dl",null,[s("div",gt,[s("dt",ht,[N(c.$slots,"title",{},void 0,!0)]),t(),s("dd",kt,[N(c.$slots,"default",{},void 0,!0)])])])]),_:3})}const J=M(vt,[["render",bt],["__scopeId","data-v-6e083223"]]),$t={class:"service-traffic"},wt={class:"actions"},xt=G({__name:"DataPlaneTraffic",setup(c){return(n,e)=>(o(),u("div",$t,[s("div",wt,[N(n.$slots,"actions",{},void 0,!0)]),t(),r(J,{class:"header"},{title:a(()=>[N(n.$slots,"title",{},void 0,!0)]),_:3}),t(),N(n.$slots,"default",{},void 0,!0)]))}}),j=M(xt,[["__scopeId","data-v-5bd1dbf9"]]),Bt=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],Tt=["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],Ct=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],St=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],X=(c,n,e)=>{let b=c;return typeof n=="string"||Array.isArray(n)?b=c.toLocaleString(n,e):(n===!0||e!==void 0)&&(b=c.toLocaleString(void 0,e)),b};function F(c,n){if(!Number.isFinite(c))throw new TypeError(`Expected a finite number, got ${typeof c}: ${c}`);n={bits:!1,binary:!1,space:!0,...n};const e=n.bits?n.binary?St:Ct:n.binary?Tt:Bt,b=n.space?" ":"";if(n.signed&&c===0)return` 0${b}${e[0]}`;const x=c<0,D=x?"-":n.signed?"+":"";x&&(c=-c);let h;if(n.minimumFractionDigits!==void 0&&(h={minimumFractionDigits:n.minimumFractionDigits}),n.maximumFractionDigits!==void 0&&(h={maximumFractionDigits:n.maximumFractionDigits,...h}),c<1){const E=X(c,n.locale,h);return D+E+b+e[0]}const $=Math.min(Math.floor(n.binary?Math.log(c)/Math.log(1024):Math.log10(c)/3),e.length-1);c/=(n.binary?1024:1e3)**$,h||(c=c.toPrecision(3));const B=X(Number(c),n.locale,h),K=e[$];return D+B+b+K}const It={class:"title"},Dt={key:0},Kt=G({__name:"ServiceTrafficCard",props:{protocol:{},traffic:{default:void 0},direction:{default:"downstream"}},setup(c){const{t:n}=Q(),e=c,b=x=>{const D=x.target;if(x.isTrusted&&D.nodeName.toLowerCase()!=="a"){const h=D.closest(".service-traffic-card, a");if(h){const $=h.nodeName.toLowerCase()==="a"?h:h.querySelector("a");$!==null&&"click"in $&&typeof $.click=="function"&&$.click()}}};return(x,D)=>{const h=k("KBadge"),$=k("KSkeletonBox");return o(),v(J,{class:"service-traffic-card",onClick:b},{title:a(()=>[r(h,{appearance:e.protocol==="passthrough"?"success":"info"},{default:a(()=>[t(i(d(n)(`data-planes.components.service_traffic_card.protocol.${e.protocol}`,{},{defaultMessage:d(n)(`http.api.value.${e.protocol}`)})),1)]),_:1},8,["appearance"]),t(),s("div",It,[N(x.$slots,"default",{},void 0,!0)])]),default:a(()=>{var B,K,E,R,P,L,q,U,z;return[t(),e.traffic?(o(),u(f,{key:0},[e.traffic.name.length>0?(o(),u("dl",Dt,[e.protocol==="passthrough"?(o(!0),u(f,{key:0},w([["http","tcp"].reduce((p,m)=>{var S;const y=e.direction;return Object.entries(((S=e.traffic)==null?void 0:S[m])||{}).reduce((V,[l,_])=>[`${y}_cx_tx_bytes_total`,`${y}_cx_rx_bytes_total`].includes(l)?{...V,[l]:_+(V[l]??0)}:V,p)},{})],(p,m)=>(o(),u(f,{key:m},[s("div",null,[s("dt",null,i(d(n)("data-planes.components.service_traffic_card.tx")),1),t(),s("dd",null,i(d(F)(p.downstream_cx_rx_bytes_total??0)),1)]),t(),s("div",null,[s("dt",null,i(d(n)("data-planes.components.service_traffic_card.rx")),1),t(),s("dd",null,i(d(F)(p.downstream_cx_tx_bytes_total??0)),1)])],64))),128)):e.protocol==="grpc"?(o(),u(f,{key:1},[s("div",null,[s("dt",null,i(d(n)("data-planes.components.service_traffic_card.grpc_success")),1),t(),s("dd",null,i(d(n)("common.formats.integer",{value:((B=e.traffic.grpc)==null?void 0:B.success)??0})),1)]),t(),s("div",null,[s("dt",null,i(d(n)("data-planes.components.service_traffic_card.grpc_failure")),1),t(),s("dd",null,i(d(n)("common.formats.integer",{value:((K=e.traffic.grpc)==null?void 0:K.failure)??0})),1)])],64)):e.protocol.startsWith("http")?(o(),u(f,{key:2},[(o(!0),u(f,null,w([((E=e.traffic.http)==null?void 0:E[`${e.direction}_rq_1xx`])??0].filter(p=>p!==0),p=>(o(),u("div",{key:p},[s("dt",null,i(d(n)("data-planes.components.service_traffic_card.1xx")),1),t(),s("dd",null,i(d(n)("common.formats.integer",{value:p})),1)]))),128)),t(),s("div",null,[s("dt",null,i(d(n)("data-planes.components.service_traffic_card.2xx")),1),t(),s("dd",null,i(d(n)("common.formats.integer",{value:((R=e.traffic.http)==null?void 0:R[`${e.direction}_rq_2xx`])??0})),1)]),t(),(o(!0),u(f,null,w([((P=e.traffic.http)==null?void 0:P[`${e.direction}_rq_3xx`])??0].filter(p=>p!==0),p=>(o(),u("div",{key:p},[s("dt",null,i(d(n)("data-planes.components.service_traffic_card.3xx")),1),t(),s("dd",null,i(d(n)("common.formats.integer",{value:p})),1)]))),128)),t(),s("div",null,[s("dt",null,i(d(n)("data-planes.components.service_traffic_card.4xx")),1),t(),s("dd",null,i(d(n)("common.formats.integer",{value:((L=e.traffic.http)==null?void 0:L[`${e.direction}_rq_4xx`])??0})),1)]),t(),s("div",null,[s("dt",null,i(d(n)("data-planes.components.service_traffic_card.5xx")),1),t(),s("dd",null,i(d(n)("common.formats.integer",{value:((q=e.traffic.http)==null?void 0:q[`${e.direction}_rq_5xx`])??0})),1)])],64)):(o(),u(f,{key:3},[s("div",null,[s("dt",null,i(d(n)("data-planes.components.service_traffic_card.tx")),1),t(),s("dd",null,i(d(F)(((U=e.traffic.tcp)==null?void 0:U[`${e.direction}_cx_rx_bytes_total`])??0)),1)]),t(),s("div",null,[s("dt",null,i(d(n)("data-planes.components.service_traffic_card.rx")),1),t(),s("dd",null,i(d(F)(((z=e.traffic.tcp)==null?void 0:z[`${e.direction}_cx_tx_bytes_total`])??0)),1)])],64))])):I("",!0)],64)):(o(),v($,{key:1,width:"10"}))]}),_:3})}}}),O=M(Kt,[["__scopeId","data-v-c38fcb65"]]),Nt={class:"body"},Et=G({__name:"ServiceTrafficGroup",props:{type:{}},setup(c){const n=c;return(e,b)=>{const x=k("KCard");return o(),v(x,{class:tt(["service-traffic-group",`type-${n.type}`])},{default:a(()=>[s("div",Nt,[N(e.$slots,"default",{},void 0,!0)])]),_:3},8,["class"])}}}),Y=M(Et,[["__scopeId","data-v-baf4abf7"]]),Vt=c=>(pt("data-v-75e10e0e"),c=c(),_t(),c),Mt={"data-testid":"dataplane-warnings"},Rt=["data-testid","innerHTML"],Pt={key:0,"data-testid":"warning-stats-loading"},Lt={class:"stack","data-testid":"dataplane-details"},qt={class:"columns"},Ut={class:"status-with-reason"},zt={class:"columns"},At=Vt(()=>s("span",null,"Outbounds",-1)),Ft={"data-testid":"dataplane-mtls"},Gt={class:"columns"},Ot=["innerHTML"],Yt={key:1,"data-testid":"dataplane-subscriptions"},Ht=G({__name:"DataPlaneDetailView",props:{data:{}},setup(c){const n=et(),e=c,b=at(()=>e.data.warnings.concat(...e.data.isCertExpired?[{kind:"CERT_EXPIRED"}]:[]));return(x,D)=>{const h=k("KTooltip"),$=k("DataCollection"),B=k("KCard"),K=k("RouterLink"),E=k("KInputSwitch"),R=k("KButton"),P=k("RouterView"),L=k("KAlert"),q=k("AppView"),U=k("DataSource"),z=k("RouteView");return o(),v(z,{params:{mesh:"",dataPlane:"",inactive:!1},name:"data-plane-detail-view"},{default:a(({route:p,t:m})=>[r(U,{src:e.data.dataplane.networking.type!=="delegated"?`/meshes/${p.params.mesh}/dataplanes/${p.params.dataPlane}/stats/${e.data.dataplane.networking.inboundName}`:""},{default:a(({data:y,error:S,refresh:V})=>[r(q,null,Z({default:a(()=>[t(),s("div",Lt,[r(B,null,{default:a(()=>[s("div",qt,[r(C,null,{title:a(()=>[t(i(m("http.api.property.status")),1)]),body:a(()=>[s("div",Ut,[r(mt,{status:e.data.status},null,8,["status"]),t(),e.data.dataplane.networking.type==="standard"?(o(),v($,{key:0,items:e.data.dataplane.networking.inbounds,predicate:l=>!l.health.ready,empty:!1},{default:a(({items:l})=>[r(h,{class:"reason-tooltip"},{content:a(()=>[s("ul",null,[(o(!0),u(f,null,w(l,_=>(o(),u("li",{key:`${_.service}:${_.port}`},i(m("data-planes.routes.item.unhealthy_inbound",{service:_.service,port:_.port})),1))),128))])]),default:a(()=>[r(d(nt),{color:d(st),size:d(A),"hide-title":""},null,8,["color","size"]),t()]),_:2},1024)]),_:2},1032,["items","predicate"])):I("",!0)])]),_:2},1024),t(),r(C,null,{title:a(()=>[t(i(m("data-planes.routes.item.last_updated")),1)]),body:a(()=>[t(i(m("common.formats.datetime",{value:Date.parse(e.data.modificationTime)})),1)]),_:2},1024),t(),e.data.dataplane.networking.gateway?(o(),u(f,{key:0},[r(C,null,{title:a(()=>[t(i(m("http.api.property.tags")),1)]),body:a(()=>[r(W,{tags:e.data.dataplane.networking.gateway.tags},null,8,["tags"])]),_:2},1024),t(),r(C,null,{title:a(()=>[t(i(m("http.api.property.address")),1)]),body:a(()=>[r(ot,{text:`${e.data.dataplane.networking.address}`},null,8,["text"])]),_:2},1024)],64)):I("",!0)])]),_:2},1024),t(),e.data.dataplane.networking.type!=="delegated"?(o(),v(B,{key:0,class:"traffic","data-testid":"dataplane-traffic"},{default:a(()=>[s("div",zt,[r(j,null,{title:a(()=>[r(d(it),{display:"inline-block",decorative:"",size:d(A)},null,8,["size"]),t(`
                  Inbounds
                `)]),default:a(()=>[t(),r(Y,{type:"inbound"},{default:a(()=>[r($,{items:e.data.dataplane.networking.gateway?((y==null?void 0:y.inbounds)??[]).map(l=>({...e.data.dataplane.networking.inbounds[0],name:l.name,port:Number(l.port),protocol:l.protocol})):e.data.dataplane.networking.inbounds},{default:a(({items:l})=>[(o(!0),u(f,null,w(l,_=>(o(),u(f,{key:`${_.name}`},[(o(!0),u(f,null,w([(y||{inbounds:[]}).inbounds.find(g=>`${g.name}`==`${_.name}`)],g=>(o(),v(O,{key:g,protocol:(g==null?void 0:g.protocol)??_.protocol,traffic:typeof S>"u"?g:{name:"",protocol:_.protocol,port:`${_.port}`}},{default:a(()=>[(o(!0),u(f,null,w([`${_.name.replace(`_${_.port}`,"").replace("localhost","")}:${_.port}`],T=>(o(),v(K,{key:T,to:{name:(H=>H.includes("bound")?H.replace("-outbound-","-inbound-"):"data-plane-inbound-summary-overview-view")(String(d(n).name)),params:{service:T},query:{inactive:p.params.inactive?null:void 0}}},{default:a(()=>[t(i(T),1)]),_:2},1032,["to"]))),128)),t(),r(W,{tags:[{label:"kuma.io/service",value:_.tags["kuma.io/service"]}]},null,8,["tags"])]),_:2},1032,["protocol","traffic"]))),128))],64))),128))]),_:2},1032,["items"])]),_:2},1024)]),_:2},1024),t(),r(j,null,Z({title:a(()=>[r(d(lt),{display:"inline-block",decorative:"",size:d(A)},null,8,["size"]),t(),At]),default:a(()=>[t(),t(),typeof S>"u"?(o(),u(f,{key:0},[typeof y>"u"?(o(),v(rt,{key:0})):(o(!0),u(f,{key:1},w([e.data.dataplane.networking.type!=="standard"?"upstream":"downstream"],l=>(o(),u(f,{key:l},[r(Y,{type:"passthrough"},{default:a(()=>[r(O,{protocol:"passthrough",traffic:y.passthrough},{default:a(()=>[t(`
                          Non mesh traffic
                        `)]),_:2},1032,["traffic"])]),_:2},1024),t(),r($,{predicate:p.params.inactive?void 0:_=>{var g,T;return((_.protocol==="tcp"?(g=_.tcp)==null?void 0:g[`${l}_cx_rx_bytes_total`]:(T=_.http)==null?void 0:T[`${l}_rq_total`])??0)>0},items:y.outbounds},{default:a(({items:_})=>[_.length>0?(o(),v(Y,{key:0,type:"outbound","data-testid":"dataplane-outbounds"},{default:a(()=>[(o(!0),u(f,null,w(_,g=>(o(),v(O,{key:`${g.name}`,protocol:g.protocol,traffic:g,direction:l},{default:a(()=>[r(K,{to:{name:(T=>T.includes("bound")?T.replace("-inbound-","-outbound-"):"data-plane-outbound-summary-overview-view")(String(d(n).name)),params:{service:g.name},query:{inactive:p.params.inactive?null:void 0}}},{default:a(()=>[t(i(g.name),1)]),_:2},1032,["to"])]),_:2},1032,["protocol","traffic","direction"]))),128))]),_:2},1024)):I("",!0)]),_:2},1032,["predicate","items"])],64))),128))],64)):(o(),v(dt,{key:1}))]),_:2},[y?{name:"actions",fn:a(()=>[r(E,{modelValue:p.params.inactive,"onUpdate:modelValue":l=>p.params.inactive=l,"data-testid":"dataplane-outbounds-inactive-toggle"},{label:a(()=>[t(`
                      Show inactive
                    `)]),_:2},1032,["modelValue","onUpdate:modelValue"]),t(),r(R,{appearance:"primary",onClick:V},{default:a(()=>[r(d(ct),{size:d(A)},null,8,["size"]),t(`

                    Refresh
                  `)]),_:2},1032,["onClick"])]),key:"0"}:void 0]),1024)])]),_:2},1024)):I("",!0),t(),r(P,null,{default:a(l=>[l.route.name!==p.name?(o(),v(ft,{key:0,width:"670px",onClose:function(_){p.replace({name:"data-plane-detail-view",params:{mesh:p.params.mesh,dataPlane:p.params.dataPlane},query:{inactive:p.params.inactive?null:void 0}})}},{default:a(()=>[(o(),v(ut(l.Component),{"dataplane-type":e.data.dataplaneType,gateway:e.data.dataplane.networking.gateway,inbounds:l.route.name.includes("-inbound-")?e.data.dataplane.networking.inbounds:[],data:l.route.name.includes("-inbound-")?(y==null?void 0:y.inbounds)||[]:(y==null?void 0:y.outbounds)||[]},null,8,["dataplane-type","gateway","inbounds","data"]))]),_:2},1032,["onClose"])):I("",!0)]),_:2},1024),t(),s("div",Ft,[s("h2",null,i(m("data-planes.routes.item.mtls.title")),1),t(),e.data.dataplaneInsight.mTLS?(o(!0),u(f,{key:0},w([e.data.dataplaneInsight.mTLS],l=>(o(),v(B,{key:l,class:"mt-4"},{default:a(()=>[s("div",Gt,[r(C,null,{title:a(()=>[t(i(m("data-planes.routes.item.mtls.expiration_time.title")),1)]),body:a(()=>[t(i(m("common.formats.datetime",{value:Date.parse(l.certificateExpirationTime)})),1)]),_:2},1024),t(),r(C,null,{title:a(()=>[t(i(m("data-planes.routes.item.mtls.generation_time.title")),1)]),body:a(()=>[t(i(m("common.formats.datetime",{value:Date.parse(l.lastCertificateRegeneration)})),1)]),_:2},1024),t(),r(C,null,{title:a(()=>[t(i(m("data-planes.routes.item.mtls.regenerations.title")),1)]),body:a(()=>[t(i(m("common.formats.integer",{value:l.certificateRegenerations})),1)]),_:2},1024),t(),r(C,null,{title:a(()=>[t(i(m("data-planes.routes.item.mtls.issued_backend.title")),1)]),body:a(()=>[t(i(l.issuedBackend),1)]),_:2},1024),t(),r(C,null,{title:a(()=>[t(i(m("data-planes.routes.item.mtls.supported_backends.title")),1)]),body:a(()=>[s("ul",null,[(o(!0),u(f,null,w(l.supportedBackends,_=>(o(),u("li",{key:_},i(_),1))),128))])]),_:2},1024)])]),_:2},1024))),128)):(o(),v(L,{key:1,class:"mt-4",appearance:"warning"},{alertMessage:a(()=>[s("div",{innerHTML:m("data-planes.routes.item.mtls.disabled")},null,8,Ot)]),_:2},1024))]),t(),e.data.dataplaneInsight.subscriptions.length>0?(o(),u("div",Yt,[s("h2",null,i(m("data-planes.routes.item.subscriptions.title")),1),t(),r(B,{class:"mt-4"},{default:a(()=>[r(yt,{subscriptions:e.data.dataplaneInsight.subscriptions},null,8,["subscriptions"])]),_:1})])):I("",!0)])]),_:2},[b.value.length>0||S?{name:"notifications",fn:a(()=>[s("ul",Mt,[(o(!0),u(f,null,w(b.value,l=>(o(),u("li",{key:l.kind,"data-testid":`warning-${l.kind}`,innerHTML:m(`common.warnings.${l.kind}`,l.payload)},null,8,Rt))),128)),t(),S?(o(),u("li",Pt,[t(`
              The below view is not enhanced with runtime stats (Error loading stats: `),s("strong",null,i(S.toString()),1),t(`)
            `)])):I("",!0)])]),key:"0"}:void 0]),1024)]),_:2},1032,["src"])]),_:1})}}}),te=M(Ht,[["__scopeId","data-v-75e10e0e"]]);export{te as default};