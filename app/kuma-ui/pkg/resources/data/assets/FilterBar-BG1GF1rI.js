var U=Object.defineProperty;var V=(e,t,i)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var k=(e,t,i)=>V(e,typeof t!="symbol"?t+"":t,i);import{d as D,I as F,F as w,o as f,m as Z,w as G,c as v,G as J,E as Q,ab as W,v as b,U as Y,T as X,aq as ee,k as u,ar as te,e as m,b as q,l as x,K as B,as as ie,a as re,t as _,at as se,au as ne,n as M,H as oe,J as ae,p as A,L as le,M as ue,q as ce}from"./index-_1cV718N.js";const de=["aria-hidden"],z='<path d="M9.4 18L8 16.6L12.6 12L8 7.4L9.4 6L15.4 12L9.4 18Z" fill="currentColor"/>',fe=D({__name:"ChevronRightIcon",props:{title:{type:String,required:!1,default:""},color:{type:String,required:!1,default:"currentColor"},display:{type:String,required:!1,default:"block"},decorative:{type:Boolean,required:!1,default:!1},size:{type:[Number,String],required:!1,default:F,validator:e=>{if(typeof e=="number"&&e>0)return!0;if(typeof e=="string"){const t=String(e).replace(/px/gi,""),i=Number(t);if(i&&!isNaN(i)&&Number.isInteger(i)&&i>0)return!0}return!1}},as:{type:String,required:!1,default:"span"},staticIds:{type:Boolean,default:!1}},setup(e){const t=e,i=w(()=>{if(typeof t.size=="number"&&t.size>0)return`${t.size}px`;if(typeof t.size=="string"){const a=String(t.size).replace(/px/gi,""),s=Number(a);if(s&&!isNaN(s)&&Number.isInteger(s)&&s>0)return`${s}px`}return F}),g=w(()=>({boxSizing:"border-box",color:t.color,display:t.display,flexShrink:"0",height:i.value,lineHeight:"0",width:i.value})),p=a=>{const s={},S=Math.random().toString(36).substring(2,12);return a.replace(/id="([^"]+)"/g,(d,l)=>{const h=`${S}-${l}`;return s[l]=h,`id="${h}"`}).replace(/#([^\s^")]+)/g,(d,l)=>s[l]?`#${s[l]}`:d)},y=a=>{const s={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;","`":"&#039;"};return a.replace(/[<>"'`]/g,S=>s[S])},c=`${t.title?`<title data-testid="kui-icon-svg-title">${y(t.title)}</title>`:""}${t.staticIds?z:p(z)}`;return(a,s)=>(f(),Z(Q(e.as),{"aria-hidden":e.decorative?"true":void 0,class:"kui-icon chevron-right-icon","data-testid":"kui-icon-wrapper-chevron-right-icon",style:J(g.value)},{default:G(()=>[(f(),v("svg",{"aria-hidden":e.decorative?"true":void 0,"data-testid":"kui-icon-svg-chevron-right-icon",fill:"none",height:"100%",role:"img",viewBox:"0 0 24 24",width:"100%",xmlns:"http://www.w3.org/2000/svg",innerHTML:c},null,8,de))]),_:1},8,["aria-hidden","style"]))}}),ge=["ControlLeft","ControlRight","ShiftLeft","ShiftRight","AltLeft"];class pe{constructor(t,i){k(this,"commands");k(this,"keyMap");k(this,"boundTriggerShortcuts");this.commands=i,this.keyMap=Object.fromEntries(Object.entries(t).map(([g,p])=>[g.toLowerCase(),p])),this.boundTriggerShortcuts=this.triggerShortcuts.bind(this)}registerListener(){document.addEventListener("keydown",this.boundTriggerShortcuts)}unRegisterListener(){document.removeEventListener("keydown",this.boundTriggerShortcuts)}triggerShortcuts(t){he(t,this.keyMap,this.commands)}}function he(e,t,i){const g=me(e.code),p=[e.ctrlKey?"ctrl":"",e.shiftKey?"shift":"",e.altKey?"alt":"",g].filter(a=>a!=="").join("+"),y=t[p];if(!y)return;const c=i[y];c.isAllowedContext&&!c.isAllowedContext(e)||(c.shouldPreventDefaultAction&&e.preventDefault(),!(c.isDisabled&&c.isDisabled())&&c.trigger(e))}function me(e){return ge.includes(e)?"":e.replace(/^Key/,"").toLowerCase()}const ve=e=>(le("data-v-2016eda0"),e=e(),ue(),e),be=ve(()=>u("span",{class:"visually-hidden"},"Focus filter",-1)),ye={class:"filter-bar-icon"},Se=["for"],_e=["id","placeholder"],we={key:0,class:"suggestion-box","data-testid":"filter-bar-suggestion-box"},ke={class:"suggestion-list"},xe={key:0,class:"filter-bar-error"},Ie={key:0},Ce=["title","data-filter-field"],Le={class:"visually-hidden"},Ne=D({__name:"FilterBar",props:{fields:{},placeholder:{default:""},query:{default:""},id:{default:()=>W("filter-bar")}},emits:["change"],setup(e,{emit:t}){const i=e,g=b(),p=t,y=r=>{r!=null&&r.target&&(p("change",new FormData(r.target)),d.value=!1)},c=r=>{p("change",new FormData(g.value))},a=b(null),s=b(null),S=b(null),d=b(!1),l=b(i.query);Y(()=>i.query,r=>{l.value=r});const h=b(0),C=w(()=>Object.keys(i.fields)),L=w(()=>Object.entries(i.fields).slice(0,5).map(([r,o])=>({fieldName:r,...o}))),N=w(()=>C.value.length>0?`Filter by ${C.value.join(", ")}`:"Filter"),j=w(()=>i.placeholder??N.value),P={ArrowDown:"jumpToNextSuggestion",ArrowUp:"jumpToPreviousSuggestion"},E={jumpToNextSuggestion:{trigger:()=>$(1),isAllowedContext(r){return s.value!==null&&r.composedPath().includes(s.value)},shouldPreventDefaultAction:!0},jumpToPreviousSuggestion:{trigger:()=>$(-1),isAllowedContext(r){return s.value!==null&&r.composedPath().includes(s.value)},shouldPreventDefaultAction:!0}},T=new pe(P,E);X(function(){T.registerListener()}),ee(function(){T.unRegisterListener()});function $(r){const o=L.value.length;let n=h.value+r;n===-1&&(n=o),h.value=n%(o+1)}function K(){s.value instanceof HTMLInputElement&&s.value.focus()}function O(r){const n=r.currentTarget.getAttribute("data-filter-field");n&&s.value instanceof HTMLInputElement&&H(s.value,n)}function H(r,o){const n=l.value===""||l.value.endsWith(" ")?"":" ";l.value+=n+o+":",r.focus(),h.value=0}function R(r){r.relatedTarget===null&&(d.value=!1),a.value instanceof HTMLElement&&r.relatedTarget instanceof Node&&!a.value.contains(r.relatedTarget)&&(d.value=!1)}return(r,o)=>(f(),v("div",{ref_key:"filterBar",ref:a,class:"filter-bar","data-testid":"filter-bar"},[u("search",null,[u("form",{ref_key:"$form",ref:g,onSubmit:te(y,["prevent"])},[u("button",{class:"focus-filter-input-button",title:"Focus filter",type:"button","data-testid":"filter-bar-focus-filter-input-button",onClick:K},[be,m(),u("span",ye,[q(x(ie),{decorative:"","data-testid":"filter-bar-filter-icon","hide-title":"",size:x(B)},null,8,["size"])])]),m(),u("label",{for:`${i.id}-filter-bar-input`,class:"visually-hidden"},[re(r.$slots,"default",{},()=>[m(_(N.value),1)],!0)],8,Se),m(),se(u("input",{id:`${i.id}-filter-bar-input`,ref_key:"filterInput",ref:s,"onUpdate:modelValue":o[0]||(o[0]=n=>l.value=n),class:"filter-bar-input",type:"search",placeholder:j.value,"data-testid":"filter-bar-filter-input",name:"s",onFocus:o[1]||(o[1]=n=>d.value=!0),onInput:o[2]||(o[2]=n=>d.value=!0),onBlur:R,onSearch:o[3]||(o[3]=n=>{n.target.value.length===0&&(c(),d.value=!0)})},null,40,_e),[[ne,l.value]]),m(),d.value?(f(),v("div",we,[u("div",ke,[S.value!==null?(f(),v("p",xe,_(S.value.message),1)):(f(),v("button",{key:1,type:"submit",class:M(["submit-query-button",{"submit-query-button-is-selected":h.value===0}]),"data-testid":"filter-bar-submit-query-button"},`
              Submit `+_(l.value),3)),m(),(f(!0),v(oe,null,ae(L.value,(n,I)=>(f(),v("div",{key:`${i.id}-${I}`,class:M(["suggestion-list-item",{"suggestion-list-item-is-selected":h.value===I+1}])},[u("b",null,_(n.fieldName),1),n.description!==""?(f(),v("span",Ie,": "+_(n.description),1)):A("",!0),m(),u("button",{class:"apply-suggestion-button",title:`Add ${n.fieldName}:`,type:"button","data-filter-field":n.fieldName,"data-testid":"filter-bar-apply-suggestion-button",onClick:O},[u("span",Le,"Add "+_(n.fieldName)+":",1),m(),q(x(fe),{decorative:"","hide-title":"",size:x(B)},null,8,["size"])],8,Ce)],2))),128))])])):A("",!0)],544)])],512))}}),Fe=ce(Ne,[["__scopeId","data-v-2016eda0"]]);export{Fe as F};
