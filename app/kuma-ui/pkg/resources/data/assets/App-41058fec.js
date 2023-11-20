import{_ as L,o as _,c as A,r as f,d as v,a as l,b as d,w as a,e as c,f as e,n as M,h as V,g as E,i as O,j as T,u as B,k as U,l as z,m as I,p as s,t as h,q as o,x as P,s as x,v as y,y as H,z as Y,L as Z,A as G,B as q}from"./index-203d56a2.js";import{K as C}from"./index-9dd3e7d3.js";const F=""+new URL("product-logo-7a2ca341.png",import.meta.url).href,j={},J={class:"app-navigator"};function Q(r,n){return _(),A("li",J,[f(r.$slots,"default")])}const R=L(j,[["render",Q]]),W=v({__name:"ControlPlaneNavigator",setup(r){return(n,u)=>{const i=l("RouterLink");return _(),d(R,{"data-testid":"control-planes-navigator"},{default:a(()=>[c(i,{class:M({"is-active":[n.$route.name].concat(n.$route.matched.map(t=>t.name)).some(t=>t==="home")}),to:{name:"home"}},{default:a(()=>[e(`
      Home
    `)]),_:1},8,["class"])]),_:1})}}}),X=v({name:"github-button",props:{href:String,ariaLabel:String,title:String,dataIcon:String,dataColorScheme:String,dataSize:String,dataShowCount:String,dataText:String},render:function(){const r={ref:"_"};for(const n in this.$props)r[V(n)]=this.$props[n];return E("span",[O(this.$slots,"default")?E("a",r,this.$slots.default()):E("a",r)])},mounted:function(){this.paint()},beforeUpdate:function(){this.reset()},updated:function(){this.paint()},beforeUnmount:function(){this.reset()},methods:{paint:function(){const r=this.$el.appendChild(document.createElement("span")),n=this;T(()=>import("./buttons.esm-48f94bc9.js"),[],import.meta.url).then(function(u){u.render(r.appendChild(n.$refs._),function(i){try{r.parentNode.replaceChild(i,r)}catch{}})})},reset:function(){this.$el.replaceChild(this.$refs._,this.$el.lastChild)}}}),ee={class:"upgrade-check"},te={class:"alert-content"},ne=v({__name:"UpgradeCheck",setup(r){const n=B(),u=U(),{t:i}=z(),t=I(""),k=I(!1);g(u("KUMA_VERSION"));const w=(m,p)=>{const S=m.split("."),$=p.split(".");for(let b=0;b<3;b++){const N=Number(S[b]),K=Number($[b]);if(N>K)return 1;if(K>N)return-1}return 0};async function g(m){if(m.match("^[0-9]+.[0-9]+.[0-9]+$")){try{t.value=await n.getLatestVersion()}catch(p){console.error(p);return}if(t.value!==""){const p=w(t.value,m);k.value=p===1}else{const S=new Date,$=new Date("2020-06-03 12:00:00"),b=new Date($.getFullYear(),$.getMonth()+3,$.getDate());k.value=S.getTime()>=b.getTime()}}}return(m,p)=>(_(),A("div",ee,[k.value?(_(),d(o(x),{key:0,"data-testid":"upgrade-check",class:"upgrade-check-alert",appearance:"warning",size:"small"},{alertMessage:a(()=>[s("div",te,[s("div",null,h(o(i)("common.product.name"))+` update available
          `,1),e(),s("div",null,[c(o(P),{class:"warning-button",appearance:"primary",size:"small",to:o(u)("KUMA_INSTALL_URL")},{default:a(()=>[e(`
              Update
            `)]),_:1},8,["to"])])])]),_:1})):y("",!0)]))}});const ae=L(ne,[["__scopeId","data-v-d893f8e9"]]),D=r=>(G("data-v-147ee1c7"),r=r(),q(),r),oe={class:"application-shell"},se={role:"banner"},ce={class:"horizontal-list"},ie={class:"upgrade-check-wrapper"},re={class:"horizontal-list"},le={class:"app-status app-status--mobile"},_e={class:"app-status app-status--desktop"},pe=D(()=>s("span",{class:"visually-hidden"},"Help",-1)),ue=["href"],de=["href"],me=D(()=>s("span",{class:"visually-hidden"},"Diagnostics",-1)),he={class:"app-content-container"},fe={key:0,"aria-label":"Main",class:"app-sidebar"},ve={class:"app-main-content"},ge={class:"app-notifications"},$e=["innerHTML"],ke=v({__name:"ApplicationShell",setup(r){const n=U(),u=H(),{t:i}=z();return(t,k)=>{const w=l("RouterLink"),g=l("KButton"),m=l("KPop"),p=l("KDropdownItem"),S=l("KDropdownMenu"),$=l("KAlert");return _(),A("div",oe,[s("header",se,[s("div",ce,[f(t.$slots,"header",{},()=>[c(w,{to:{name:"home"}},{default:a(()=>[f(t.$slots,"home",{},void 0,!0)]),_:3}),e(),c(o(X),{class:"gh-star",href:"https://github.com/kumahq/kuma","aria-label":"Star kumahq/kuma on GitHub"},{default:a(()=>[e(`
            Star
          `)]),_:1}),e(),s("div",ie,[c(ae)])],!0)]),e(),s("div",re,[f(t.$slots,"content-info",{},()=>[s("div",le,[c(m,{width:"280"},{content:a(()=>[s("p",null,[e(h(o(i)("common.product.name"))+" ",1),s("b",null,h(o(n)("KUMA_VERSION")),1),e(" on "),s("b",null,h(o(i)(`common.product.environment.${o(n)("KUMA_ENVIRONMENT")}`)),1),e(" ("+h(o(i)(`common.product.mode.${o(n)("KUMA_MODE")}`))+`)
                `,1)])]),default:a(()=>[c(g,{appearance:"outline"},{default:a(()=>[e(`
                Info
              `)]),_:1}),e()]),_:1})]),e(),s("p",_e,[e(h(o(i)("common.product.name"))+" ",1),s("b",null,h(o(n)("KUMA_VERSION")),1),e(" on "),s("b",null,h(o(i)(`common.product.environment.${o(n)("KUMA_ENVIRONMENT")}`)),1),e(" ("+h(o(i)(`common.product.mode.${o(n)("KUMA_MODE")}`))+`)
          `,1)]),e(),c(S,{"kpop-attributes":{placement:"bottomEnd"}},{items:a(()=>[c(p,null,{default:a(()=>[s("a",{href:o(i)("common.product.href.docs.index"),target:"_blank",rel:"noopener noreferrer"},`
                  Documentation
                `,8,ue)]),_:1}),e(),c(p,null,{default:a(()=>[s("a",{href:o(n)("KUMA_FEEDBACK_URL"),target:"_blank",rel:"noopener noreferrer"},`
                  Feedback
                `,8,de)]),_:1}),e(),c(p,{item:{to:{name:"onboarding-welcome"},label:"Onboarding"}})]),default:a(()=>[c(g,{appearance:"outline"},{default:a(()=>[c(o(Y),{size:o(C)},null,8,["size"]),e(),pe]),_:1}),e()]),_:1}),e(),c(g,{to:{name:"diagnostics"},"button-appearance":"btn-link","data-testid":"nav-item-diagnostics"},{default:a(()=>[c(o(Z),{size:o(C),"hide-title":""},null,8,["size"]),e(),me]),_:1})],!0)])]),e(),s("div",he,[t.$slots.navigation?(_(),A("nav",fe,[s("ul",null,[f(t.$slots,"navigation",{},void 0,!0)])])):y("",!0),e(),s("div",ve,[s("div",ge,[f(t.$slots,"notifications",{},void 0,!0)]),e(),f(t.$slots,"notifications",{},()=>[o(u)("use state")?y("",!0):(_(),d($,{key:0,class:"mb-4",appearance:"warning"},{alertMessage:a(()=>[s("ul",null,[s("li",{"data-testid":"warning-GLOBAL_STORE_TYPE_MEMORY",innerHTML:o(i)("common.warnings.GLOBAL_STORE_TYPE_MEMORY")},null,8,$e),e()])]),_:1}))],!0),e(),f(t.$slots,"default",{},void 0,!0)])])])}}});const be=L(ke,[["__scopeId","data-v-147ee1c7"]]),we=v({__name:"MeshNavigator",setup(r){return(n,u)=>{const i=l("RouterLink");return _(),d(R,{"data-testid":"meshes-navigator"},{default:a(()=>[c(i,{class:M({"is-active":[n.$route.name].concat(n.$route.matched.map(t=>t.name)).some(t=>t==="mesh-index-view")}),to:{name:"mesh-list-view"}},{default:a(()=>[e(`
      Meshes
    `)]),_:1},8,["class"])]),_:1})}}}),Se=v({__name:"ZoneEgressNavigator",setup(r){return(n,u)=>{const i=l("RouterLink");return _(),d(R,{"data-testid":"zone-egresses-navigator"},{default:a(()=>[c(i,{class:M({"is-active":[n.$route.name].concat(n.$route.matched.map(t=>t.name)).some(t=>t==="zone-egress-list-view")}),to:{name:"zone-egress-list-view"}},{default:a(()=>[e(`
      Zone Egresses
    `)]),_:1},8,["class"])]),_:1})}}}),Ae=v({__name:"ZoneNavigator",setup(r){return(n,u)=>{const i=l("RouterLink");return _(),d(R,{"data-testid":"zones-navigator"},{default:a(()=>[c(i,{class:M({"is-active":[n.$route.name].concat(n.$route.matched.map(t=>t.name)).some(t=>t==="zone-index-view")}),to:{name:"zone-cp-list-view"}},{default:a(()=>[e(`
      Zones
    `)]),_:1},8,["class"])]),_:1})}}}),ye=["alt"],Le=v({__name:"App",setup(r){return(n,u)=>{const i=l("RouterView"),t=l("AppView"),k=l("RouteView"),w=l("DataSource");return _(),d(w,{src:"/control-plane/addresses"},{default:a(({data:g})=>[typeof g<"u"?(_(),d(k,{key:0,name:"app",attrs:{class:"kuma-ready"},"data-testid-root":"mesh-app"},{default:a(({t:m,can:p})=>[c(be,{class:"kuma-application"},{home:a(()=>[s("img",{class:"logo",src:F,alt:`${m("common.product.name")} Logo`,"data-testid":"logo"},null,8,ye)]),navigation:a(()=>[c(W),e(),p("use zones")?(_(),d(Ae,{key:0})):(_(),d(Se,{key:1})),e(),c(we)]),default:a(()=>[e(),e(),c(t,null,{default:a(()=>[c(i)]),_:1})]),_:2},1024)]),_:1})):y("",!0)]),_:1})}}});const Ee=L(Le,[["__scopeId","data-v-f821200e"]]);export{Ee as default};