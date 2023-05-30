import{Z as ee,t as te,_ as ae}from"./kongponents.es-7b6521fb.js";import{d as K,r as l,o as u,b as h,w as y,z as $,h as g,e as a,f as M,u as ne,v as oe,a2 as se,a3 as U,R as re,j as N,i as Z,g as I,y as ie,L as Y,t as D}from"./index-b98f176a.js";import{_ as le}from"./MultizoneInfo.vue_vue_type_script_setup_true_lang-72a8813b.js";import{_ as ce}from"./ZoneDetails.vue_vue_type_script_setup_true_lang-7a6db3c0.js";import{D as ue}from"./DataOverview-ef06cd6e.js";import{u as de}from"./store-afcf5034.js";import{a as me,b as pe,u as fe}from"./index-54cbc4d8.js";import{Q as A}from"./QueryParameter-70743f73.js";import"./AccordionList-8bd7758e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./CodeBlock.vue_vue_type_style_index_0_lang-5793f3ca.js";import"./DefinitionListItem-71803942.js";import"./SubscriptionHeader.vue_vue_type_script_setup_true_lang-23d9e179.js";import"./TabsWidget-4767abfb.js";import"./ErrorBlock-ccd115b4.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-b05074b9.js";import"./datadogLogEvents-302eea7b.js";import"./TextWithCopyButton-4889beb3.js";import"./WarningsWidget.vue_vue_type_script_setup_true_lang-07101ce8.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang-e91c7ad7.js";import"./TagList-494a26aa.js";import"./StatusBadge-e865102d.js";const ve=K({__name:"DeleteResourceModal",props:{actionButtonText:{type:String,required:!1,default:"Yes, delete"},confirmationText:{type:String,required:!1,default:""},deleteFunction:{type:Function,required:!0},isVisible:{type:Boolean,required:!0},modalId:{type:String,required:!0},title:{type:String,required:!1,default:"Delete"}},emits:["cancel","delete"],setup(z,{emit:d}){const o=z,s=l(!1);async function r(){s.value=!1;try{await o.deleteFunction(),d("delete")}catch(m){console.error(m),s.value=!0}}return(m,b)=>(u(),h(a(te),{"action-button-text":o.actionButtonText,"confirmation-text":o.confirmationText,"is-visible":o.isVisible,"modal-id":o.modalId,title:o.title,type:"danger",onCanceled:b[0]||(b[0]=k=>d("cancel")),onProceed:r},{"body-content":y(()=>[$(m.$slots,"body-content"),g(),s.value?(u(),h(a(ee),{key:0,class:"mt-4",appearance:"danger","is-dismissible":""},{alertMessage:y(()=>[$(m.$slots,"error")]),_:3})):M("",!0)]),_:3},8,["action-button-text","confirmation-text","is-visible","modal-id","title"]))}}),ge={class:"zones"},ye={key:1,class:"kcard-stack"},be={class:"kcard-border"},_e={key:0,class:"kcard-border"},We=K({__name:"ZoneListView",props:{selectedZoneName:{type:[String,null],required:!1,default:null},offset:{type:Number,required:!1,default:0}},setup(z){const d=z,o=me(),s=pe(),r=fe(),m={title:"No Data",message:"There are no Zones present."},b=ne(),k=de(),w=l(!0),_=l(!1),x=l(""),E=l(null),p=l({headers:[{label:"Status",key:"status"},{label:"Name",key:"entity"},{label:"Zone CP Version",key:"zoneCpVersion"},{label:"Storage type",key:"storeType"},{label:"Ingress",key:"hasIngress"},{label:"Egress",key:"hasEgress"},{label:"Warnings",key:"warnings",hideLabel:!0},{label:"Actions",key:"actions",hideLabel:!0}],data:[]}),f=l(null),O=l(null),V=l(d.offset);oe(()=>b.params.mesh,function(){b.name==="zone-list-view"&&L(0)}),se(function(){L(d.offset)});function L(e){k.getters["config/getMulticlusterStatus"]&&R(e)}async function R(e){var n;V.value=e,A.set("offset",e>0?e:null),w.value=!0,E.value=null;const c=Y;try{const[{items:i,next:T},{items:t},{items:C}]=await Promise.all([r.getAllZoneOverviews({size:c,offset:e}),U(r.getAllZoneIngressOverviews.bind(r)),U(r.getAllZoneEgressOverviews.bind(r))]);O.value=T,p.value.data=G(i??[],t??[],C??[]),await q({name:d.selectedZoneName??((n=p.value.data[0])==null?void 0:n.entity.name)})}catch(i){f.value=null,p.value.data=[],i instanceof Error?E.value=i:console.error(i)}finally{w.value=!1}}function G(e,c,n){const i=new Set(c.map(t=>t.zoneIngress.zone)),T=new Set(n.map(t=>t.zoneEgress.zone));return e.map(t=>{var W;const{name:C}=t,J={name:"zone-detail-view",params:{zone:C}};let B="-",F="",P=!0;(((W=t.zoneInsight)==null?void 0:W.subscriptions)??[]).forEach(v=>{if(v.version&&v.version.kumaCp){B=v.version.kumaCp.version;const{kumaCpGlobalCompatible:X=!0}=v.version.kumaCp;P=X,v.config&&(F=JSON.parse(v.config).store.type)}});const H=re(t.zoneInsight);return{entity:t,detailViewRoute:J,status:H,zoneCpVersion:B,storeType:F,hasIngress:i.has(t.name)?"Yes":"No",hasEgress:T.has(t.name)?"Yes":"No",withWarnings:!P}})}async function q({name:e}){if(e===void 0){f.value=null,A.set("zone",null);return}try{f.value=await r.getZoneOverview({name:e}),A.set("zone",e)}catch(c){console.error(c)}}async function Q(){await r.deleteZone({name:x.value})}function S(e){var n;const c=((n=e==null?void 0:e.entity)==null?void 0:n.name)??(e==null?void 0:e.name)??"";_.value=!_.value,x.value=c}function j(){S()}return(e,c)=>{var n;return u(),N("div",ge,[a(k).getters["config/getMulticlusterStatus"]===!1?(u(),h(le,{key:0})):(u(),N("div",ye,[Z("div",be,[I(ue,{"selected-entity-name":(n=f.value)==null?void 0:n.name,"page-size":a(Y),"is-loading":w.value,error:E.value,"empty-state":m,"table-data":p.value,"table-data-is-empty":p.value.data.length===0,"show-warnings":p.value.data.some(i=>i.withWarnings),next:O.value,"page-offset":V.value,"show-delete-action":a(o)("KUMA_ZONE_CREATION_FLOW")==="enabled",onDeleteResource:S,onTableAction:q,onLoadData:R},ie({_:2},[a(o)("KUMA_ZONE_CREATION_FLOW")==="enabled"?{name:"additionalControls",fn:y(()=>[I(a(ae),{appearance:"creation",icon:"plus",to:{name:"zone-create-view"}},{default:y(()=>[g(`
              Create Zone
            `)]),_:1})]),key:"0"}:void 0]),1032,["selected-entity-name","page-size","is-loading","error","table-data","table-data-is-empty","show-warnings","next","page-offset","show-delete-action"])]),g(),f.value!==null?(u(),N("div",_e,[I(ce,{"zone-overview":f.value},null,8,["zone-overview"])])):M("",!0)])),g(),_.value?(u(),h(ve,{key:2,"confirmation-text":x.value,"delete-function":Q,"is-visible":_.value,"modal-id":"delete-zone-modal","action-button-text":a(s).t("zones.delete.confirmModal.proceedText"),title:a(s).t("zones.delete.confirmModal.title"),onCancel:S,onDelete:j},{"body-content":y(()=>[Z("p",null,D(a(s).t("zones.delete.confirmModal.text1")),1),g(),Z("p",null,D(a(s).t("zones.delete.confirmModal.text2")),1)]),error:y(()=>[g(D(a(s).t("zones.delete.confirmModal.errorText")),1)]),_:1},8,["confirmation-text","is-visible","action-button-text","title"])):M("",!0)])}}});export{We as default};
