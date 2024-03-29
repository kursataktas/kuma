import{d as fe,l as ve,C as ye,i as ke,r as f,D as _e,j as O,n as U,au as N,ae as j,o as u,c as A,g as t,a as m,w as s,y as k,e as l,u as p,M as P,k as h,E as ee,X as W,x as g,a7 as r,a8 as b,av as v,ab as z,N as Ee,O as Te,H as Me}from"./index-e4d45609.js";import{F as c,E as we,S as Se}from"./StepSkeleton-403c21b0.js";import{f as Ue}from"./formatForCLI-931cd5c6.js";import{_ as ae}from"./CodeBlock.vue_vue_type_style_index_0_lang-dc80c0c7.js";import{T as Ne}from"./TabsWidget-bef73ca0.js";import{Q as Ae}from"./QueryParameter-70743f73.js";import"./toYaml-4e00099e.js";import"./ErrorBlock-e4240a41.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang-01d7e33d.js";const Ce={mtls:{enabledBackend:null,backends:[]},tracing:{defaultBackend:null,backends:[{name:null,type:null}]},logging:{backends:[{name:null,format:'{ "destination": "%KUMA_DESTINATION_SERVICE%", "destinationAddress": "%UPSTREAM_LOCAL_ADDRESS%", "source": "%KUMA_SOURCE_SERVICE%", "sourceAddress": "%KUMA_SOURCE_ADDRESS%", "bytesReceived": "%BYTES_RECEIVED%", "bytesSent": "%BYTES_SENT%"}',type:null}]},metrics:{enabledBackend:null,backends:[{name:null,type:null}]}},i=C=>(Ee("data-v-57c22bc8"),C=C(),Te(),C),De={class:"wizard"},Le={class:"wizard__content"},Be=i(()=>t("code",null,"kubectl",-1)),Ve=i(()=>t("code",null,"kumactl",-1)),Ie=i(()=>t("h3",null,`
            To get started, please fill in the following information:
          `,-1)),xe={class:"k-input-label mx-2"},Re=i(()=>t("span",null,"Disabled",-1)),Oe={class:"k-input-label mx-2"},Pe=i(()=>t("span",null,"Enabled",-1)),ze=i(()=>t("option",{value:"builtin"},`
                    builtin
                  `,-1)),Fe=i(()=>t("option",{value:"provided"},`
                    provided
                  `,-1)),Ke=i(()=>t("p",{class:"help"},`
                  If you've enabled mTLS, you must select a CA.
                `,-1)),Ye=i(()=>t("h3",null,`
            Setup Logging
          `,-1)),je=i(()=>t("p",null,`
            You can setup as many logging backends as you need that you can later use to log traffic via the “TrafficLog” policy. In this wizard, we allow you to configure one backend, but you can add more manually if you wish.
          `,-1)),We={class:"k-input-label mx-2"},Ge=i(()=>t("span",null,"Disabled",-1)),Ze={class:"k-input-label mx-2"},He=i(()=>t("span",null,"Enabled",-1)),$e={key:1},Qe=i(()=>t("option",{value:"tcp"},`
                      TCP
                    `,-1)),qe=i(()=>t("option",{value:"file"},`
                      File
                    `,-1)),Xe=i(()=>t("h3",null,`
            Setup Tracing
          `,-1)),Je=i(()=>t("p",null,`
            You can setup as many tracing backends as you need that you can later use to log traffic via the “TrafficTrace” policy. In this wizard we allow you to configure one backend, but you can add more manually as you wish.
          `,-1)),ea={class:"k-input-label mx-2"},aa=i(()=>t("span",null,"Disabled",-1)),ta={class:"k-input-label mx-2"},na=i(()=>t("span",null,"Enabled",-1)),la=i(()=>t("option",{value:"zipkin"},`
                    Zipkin
                  `,-1)),sa=[la],ia=i(()=>t("h3",null,`
            Setup Metrics
          `,-1)),oa=i(()=>t("p",null,`
            You can expose metrics from every data-plane on a configurable path
            and port that a metrics service, like Prometheus, can use to fetch them.
          `,-1)),da={class:"k-input-label mx-2"},ra=i(()=>t("span",null,"Disabled",-1)),ua={class:"k-input-label mx-2"},ca=i(()=>t("span",null,"Enabled",-1)),ma=i(()=>t("option",{value:"prometheus"},`
                    Prometheus
                  `,-1)),ga=[ma],pa={key:0},ha={key:0},ba=i(()=>t("h3",null,`
                Install a new Mesh
              `,-1)),fa=i(()=>t("h3",null,"Searching…",-1)),va=i(()=>t("p",null,"We are looking for your mesh.",-1)),ya=i(()=>t("h3",null,"Done!",-1)),ka={key:0},_a=i(()=>t("h3",null,"Mesh not found",-1)),Ea=i(()=>t("p",null,"We were unable to find your mesh.",-1)),Ta=i(()=>t("p",null,`
                You haven't filled any data out yet! Please return to the first
                step and fill out your information.
              `,-1)),Ma=i(()=>t("h3",null,"Mesh",-1)),wa=["href"],Sa=i(()=>t("h3",null,"Did You Know?",-1)),Ua=i(()=>t("p",null,`
            As you know, the GUI is read-only, but it will be providing instructions
            to create a new Mesh and verify everything worked well.
          `,-1)),Na=fe({__name:"MeshWizard",setup(C){const te=ve(),ne=[{label:"General & Security",slug:"general"},{label:"Logging",slug:"logging"},{label:"Tracing",slug:"tracing"},{label:"Metrics",slug:"metrics"},{label:"Install",slug:"complete"}],le=[{name:"mesh"},{name:"did-you-know"}],se=[{hash:"#kubernetes",title:"Kubernetes"},{hash:"#universal",title:"Universal"}],G=ye();function Z(){return{meshName:"",meshCAName:"",meshLoggingBackend:"",meshTracingBackend:"",meshMetricsName:"",meshTracingZipkinURL:"",mtlsEnabled:"disabled",meshCA:"builtin",loggingEnabled:"disabled",loggingType:"tcp",meshLoggingPath:"/",meshLoggingAddress:"127.0.0.1:5000",meshLoggingBackendFormat:'{ start_time: "%START_TIME%", source: "%KUMA_SOURCE_SERVICE%", destination: "%KUMA_DESTINATION_SERVICE%", source_address: "%KUMA_SOURCE_ADDRESS_WITHOUT_PORT%", destination_address: "%UPSTREAM_HOST%", duration_millis: "%DURATION%", bytes_received: "%BYTES_RECEIVED%", bytes_sent: "%BYTES_SENT%" }',tracingEnabled:"disabled",meshTracingType:"zipkin",meshTracingSampling:99.9,metricsEnabled:"disabled",meshMetricsType:"prometheus",meshMetricsDataplanePort:5670,meshMetricsDataplanePath:"/metrics"}}function ie(o,a){return Object.keys(o).filter(n=>!a.includes(n)).map(n=>Object.assign({},{[n]:o[n]})).reduce((n,_)=>Object.assign(n,_),{})}const H=ke(),D=f(!1),L=f(_e),$=f(""),oe=f(Ce),T=f(0),Q=f(!1),F=f(!1),B=f(!1),q=f(!1),e=f(Z()),V=f({meshName:""}),de=O(()=>H.getters["config/getTagline"]),re=O(()=>H.getters["config/getEnvironment"]),K=O(()=>{const o=Object.assign({},oe.value),a=e.value;if(!a)return;const n=a.mtlsEnabled==="enabled",_=a.loggingEnabled==="enabled",I=a.tracingEnabled==="enabled",x=a.metricsEnabled==="enabled",Y={mtls:n,logging:_,tracing:I,metrics:x},R=[];if(Object.entries(Y).forEach(d=>{const y=d[1],S=d[0];y||R.push(S)}),n){const d=o.mtls,y=e.value.meshCA,S=e.value.meshCAName;d.backends=[],d.enabledBackend=S,y==="provided"?d.backends=[{name:S,type:y,conf:{cert:{secret:""},key:{secret:""}}}]:d.backends=[{name:S,type:y}]}if(_){const d=o.logging.backends[0],y=d.format;d.conf={},d.name=a.meshLoggingBackend,d.type=a.loggingType,d.format=a.meshLoggingBackendFormat||y,a.loggingType==="tcp"?d.conf.address=a.meshLoggingAddress||"127.0.0.1:5000":a.loggingType==="file"&&(d.conf.path=a.meshLoggingPath)}if(I){const d=o.tracing;d.defaultBackend=a.meshTracingBackend,d.backends[0].type=a.meshTracingType||"zipkin",d.backends[0].name=a.meshTracingBackend,d.backends[0].sampling=a.meshTracingSampling||100,d.backends[0].conf={},d.backends[0].conf.url=a.meshTracingZipkinURL}if(x){const d=o.metrics;d.backends[0].conf={},d.enabledBackend=a.meshMetricsName,d.backends[0].type=a.meshMetricsType||"prometheus",d.backends[0].name=a.meshMetricsName,d.backends[0].conf.port=a.meshMetricsDataplanePort||5670,d.backends[0].conf.path=a.meshMetricsDataplanePath||"/metrics"}const M=ie(o,R);let E,w;return $.value==="#kubernetes"?(w="kubectl",E={apiVersion:"kuma.io/v1alpha1",kind:"Mesh",metadata:{name:a.meshName}},Object.keys(M).length>0&&(E.spec=M)):(w="kumactl",E={type:"Mesh",name:a.meshName,...M}),Ue(E,`" | ${w} apply -f -`)}),ue=O(()=>{const{meshName:o,meshCAName:a,meshLoggingBackend:n,meshTracingBackend:_,meshTracingZipkinURL:I,meshMetricsName:x,mtlsEnabled:Y,loggingEnabled:R,tracingEnabled:M,metricsEnabled:E,meshLoggingPath:w,loggingType:d}=e.value;return o.length===0||Y==="enabled"&&!a?!0:T.value===1?R==="disabled"?!1:n?d==="file"&&!w:!0:T.value===2?M==="enabled"&&!(_&&I):T.value===3?E==="enabled"&&!x:!1});U(()=>e.value.meshName,function(o){const a=N(o);e.value.meshName=a,he(a)}),U(()=>e.value.meshCAName,function(o){e.value.meshCAName=N(o)}),U(()=>e.value.meshLoggingBackend,function(o){e.value.meshLoggingBackend=N(o)}),U(()=>e.value.meshTracingBackend,function(o){e.value.meshTracingBackend=N(o)}),U(()=>e.value.meshMetricsName,function(o){e.value.meshMetricsName=N(o)});const X=Ae.get("step");T.value=X!==null?parseInt(X):0;const J=j.get("createMeshData");J!==null&&(e.value=J,D.value=!0);function ce(o){T.value=o,j.set("createMeshData",e.value),D.value=!0}function me(){j.remove("createMeshData"),D.value=!1,e.value=Z()}function ge(o){$.value=o}function pe(){F.value=!0}function he(o){!o||o===""?V.value.meshName="A Mesh name is required to proceed":V.value.meshName=""}async function be(){const o=e.value.meshName;if(q.value=!1,B.value=!1,!!o)try{(await te.getMesh({name:o})).name.length>0?Q.value=!0:B.value=!0}catch(a){B.value=!0,console.error(a)}finally{q.value=!0}}return(o,a)=>(u(),A("div",De,[t("div",Le,[m(Se,{steps:ne,"sidebar-content":le,"footer-enabled":F.value===!1,"next-disabled":p(ue),onGoToStep:ce},{general:s(()=>[t("p",null,`
            Welcome to the wizard for creating a new Mesh resource in `+k(L.value)+`.
            We will be providing you with a few steps that will get you started.
          `,1),l(),t("p",null,[l(`
            As you know, the `+k(L.value)+` GUI is read-only, so at the end of this wizard
            we will be generating the configuration that you can apply with either
            `,1),Be,l(` (if you are running in Kubernetes mode) or
            `),Ve,l(` / API (if you are running in Universal mode).
          `)]),l(),Ie,l(),m(p(P),{class:"my-6",title:"Mesh Information","has-shadow":""},{body:s(()=>[D.value?(u(),h(p(W),{key:0,class:"reset-mesh-data-alert",appearance:"info"},{alertMessage:s(()=>[l(`
                  Want to start with an empty slate?
                `)]),actionButtons:s(()=>[m(p(ee),{apperance:"outline",onClick:me},{default:s(()=>[l(`
                    Reset to defaults
                  `)]),_:1})]),_:1})):g("",!0),l(),m(c,{class:"mt-4",title:"Mesh name","for-attr":"mesh-name"},{default:s(()=>[r(t("input",{id:"mesh-name","onUpdate:modelValue":a[0]||(a[0]=n=>e.value.meshName=n),type:"text",class:"k-input w-100","data-testid":"mesh-name",placeholder:"your-mesh-name",required:""},null,512),[[b,e.value.meshName]]),l(),V.value.meshName?(u(),h(p(W),{key:0,appearance:"danger",size:"small","alert-message":V.value.meshName},null,8,["alert-message"])):g("",!0)]),_:1}),l(),m(c,{class:"mt-4",title:"Mutual TLS"},{default:s(()=>[t("label",xe,[r(t("input",{ref:"mtlsDisabled","onUpdate:modelValue":a[1]||(a[1]=n=>e.value.mtlsEnabled=n),value:"disabled",name:"mtls",type:"radio",class:"k-input mr-2","data-testid":"mesh-mtls-disabled"},null,512),[[v,e.value.mtlsEnabled]]),l(),Re]),l(),t("label",Oe,[r(t("input",{id:"mtls-enabled","onUpdate:modelValue":a[2]||(a[2]=n=>e.value.mtlsEnabled=n),value:"enabled",name:"mtls",type:"radio",class:"k-input mr-2","data-testid":"mesh-mtls-enabled"},null,512),[[v,e.value.mtlsEnabled]]),l(),Pe])]),_:1}),l(),e.value.mtlsEnabled==="enabled"?(u(),h(c,{key:1,class:"mt-4",title:"Certificate name","for-attr":"certificate-name"},{default:s(()=>[r(t("input",{id:"certificate-name","onUpdate:modelValue":a[3]||(a[3]=n=>e.value.meshCAName=n),type:"text",class:"k-input w-100",placeholder:"your-certificate-name","data-testid":"mesh-certificate-name"},null,512),[[b,e.value.meshCAName]])]),_:1})):g("",!0),l(),e.value.mtlsEnabled==="enabled"?(u(),h(c,{key:2,class:"mt-4",title:"Certificate Authority","for-attr":"certificate-authority"},{default:s(()=>[r(t("select",{id:"certificate-authority","onUpdate:modelValue":a[4]||(a[4]=n=>e.value.meshCA=n),class:"k-input w-100",name:"certificate-authority"},[ze,l(),Fe],512),[[z,e.value.meshCA]]),l(),Ke]),_:1})):g("",!0)]),_:1})]),logging:s(()=>[Ye,l(),je,l(),m(p(P),{class:"my-6",title:"Logging Configuration","has-shadow":""},{body:s(()=>[m(c,{title:"Logging"},{default:s(()=>[t("label",We,[r(t("input",{id:"logging-disabled","onUpdate:modelValue":a[5]||(a[5]=n=>e.value.loggingEnabled=n),value:"disabled",name:"logging",type:"radio",class:"k-input mr-2","data-testid":"mesh-logging-disabled"},null,512),[[v,e.value.loggingEnabled]]),l(),Ge]),l(),t("label",Ze,[r(t("input",{id:"logging-enabled","onUpdate:modelValue":a[6]||(a[6]=n=>e.value.loggingEnabled=n),value:"enabled",name:"logging",type:"radio",class:"k-input mr-2","data-testid":"mesh-logging-enabled"},null,512),[[v,e.value.loggingEnabled]]),l(),He])]),_:1}),l(),e.value.loggingEnabled==="enabled"?(u(),h(c,{key:0,class:"mt-4",title:"Backend name","for-attr":"backend-name"},{default:s(()=>[r(t("input",{id:"backend-name","onUpdate:modelValue":a[7]||(a[7]=n=>e.value.meshLoggingBackend=n),type:"text",class:"k-input w-100",placeholder:"your-backend-name","data-testid":"mesh-logging-backend-name"},null,512),[[b,e.value.meshLoggingBackend]])]),_:1})):g("",!0),l(),e.value.loggingEnabled==="enabled"?(u(),A("div",$e,[m(c,{class:"mt-4",title:"Type"},{default:s(()=>[r(t("select",{id:"logging-type",ref:"loggingTypeSelect","onUpdate:modelValue":a[8]||(a[8]=n=>e.value.loggingType=n),class:"k-input w-100",name:"logging-type"},[Qe,l(),qe],512),[[z,e.value.loggingType]])]),_:1}),l(),e.value.loggingType==="file"?(u(),h(c,{key:0,class:"mt-4",title:"Path","for-attr":"backend-address"},{default:s(()=>[r(t("input",{id:"backend-address","onUpdate:modelValue":a[9]||(a[9]=n=>e.value.meshLoggingPath=n),type:"text",class:"k-input w-100"},null,512),[[b,e.value.meshLoggingPath]])]),_:1})):g("",!0),l(),e.value.loggingType==="tcp"?(u(),h(c,{key:1,class:"mt-4",title:"Address","for-attr":"backend-address"},{default:s(()=>[r(t("input",{id:"backend-address","onUpdate:modelValue":a[10]||(a[10]=n=>e.value.meshLoggingAddress=n),type:"text",class:"k-input w-100"},null,512),[[b,e.value.meshLoggingAddress]])]),_:1})):g("",!0),l(),m(c,{class:"mt-4",title:"Format","for-attr":"backend-format"},{default:s(()=>[r(t("textarea",{id:"backend-format","onUpdate:modelValue":a[11]||(a[11]=n=>e.value.meshLoggingBackendFormat=n),class:"k-input w-100 code-sample",rows:"12"},null,512),[[b,e.value.meshLoggingBackendFormat]])]),_:1})])):g("",!0)]),_:1})]),tracing:s(()=>[Xe,l(),Je,l(),m(p(P),{class:"my-6",title:"Tracing Configuration","has-shadow":""},{body:s(()=>[m(c,{title:"Tracing"},{default:s(()=>[t("label",ea,[r(t("input",{id:"tracing-disabled","onUpdate:modelValue":a[12]||(a[12]=n=>e.value.tracingEnabled=n),value:"disabled",name:"tracing",type:"radio",class:"k-input mr-2"},null,512),[[v,e.value.tracingEnabled]]),l(),aa]),l(),t("label",ta,[r(t("input",{id:"tracing-enabled","onUpdate:modelValue":a[13]||(a[13]=n=>e.value.tracingEnabled=n),value:"enabled",name:"tracing",type:"radio",class:"k-input mr-2","data-testid":"mesh-tracing-enabled"},null,512),[[v,e.value.tracingEnabled]]),l(),na])]),_:1}),l(),e.value.tracingEnabled==="enabled"?(u(),h(c,{key:0,class:"mt-4",title:"Backend name","for-attr":"tracing-backend-name"},{default:s(()=>[r(t("input",{id:"tracing-backend-name","onUpdate:modelValue":a[14]||(a[14]=n=>e.value.meshTracingBackend=n),type:"text",class:"k-input w-100",placeholder:"your-tracing-backend-name","data-testid":"mesh-tracing-backend-name"},null,512),[[b,e.value.meshTracingBackend]])]),_:1})):g("",!0),l(),e.value.tracingEnabled==="enabled"?(u(),h(c,{key:1,class:"mt-4",title:"Type","for-attr":"tracing-type"},{default:s(()=>[r(t("select",{id:"tracing-type","onUpdate:modelValue":a[15]||(a[15]=n=>e.value.meshTracingType=n),class:"k-input w-100",name:"tracing-type"},sa,512),[[z,e.value.meshTracingType]])]),_:1})):g("",!0),l(),e.value.tracingEnabled==="enabled"?(u(),h(c,{key:2,class:"mt-4",title:"Sampling","for-attr":"tracing-sampling"},{default:s(()=>[r(t("input",{id:"tracing-sampling","onUpdate:modelValue":a[16]||(a[16]=n=>e.value.meshTracingSampling=n),type:"number",class:"k-input w-100",step:"0.1",min:"0",max:"100"},null,512),[[b,e.value.meshTracingSampling]])]),_:1})):g("",!0),l(),e.value.tracingEnabled==="enabled"?(u(),h(c,{key:3,class:"mt-4",title:"URL","for-attr":"tracing-zipkin-url"},{default:s(()=>[r(t("input",{id:"tracing-zipkin-url","onUpdate:modelValue":a[17]||(a[17]=n=>e.value.meshTracingZipkinURL=n),type:"text",class:"k-input w-100",placeholder:"http://zipkin.url:1234","data-testid":"mesh-tracing-url"},null,512),[[b,e.value.meshTracingZipkinURL]])]),_:1})):g("",!0)]),_:1})]),metrics:s(()=>[ia,l(),oa,l(),m(p(P),{class:"my-6",title:"Metrics Configuration","has-shadow":""},{body:s(()=>[m(c,{title:"Metrics"},{default:s(()=>[t("label",da,[r(t("input",{id:"metrics-disabled","onUpdate:modelValue":a[18]||(a[18]=n=>e.value.metricsEnabled=n),value:"disabled",name:"metrics",type:"radio",class:"k-input mr-2"},null,512),[[v,e.value.metricsEnabled]]),l(),ra]),l(),t("label",ua,[r(t("input",{id:"metrics-enabled","onUpdate:modelValue":a[19]||(a[19]=n=>e.value.metricsEnabled=n),value:"enabled",name:"metrics",type:"radio",class:"k-input mr-2","data-testid":"mesh-metrics-enabled"},null,512),[[v,e.value.metricsEnabled]]),l(),ca])]),_:1}),l(),e.value.metricsEnabled==="enabled"?(u(),h(c,{key:0,class:"mt-4",title:"Backend name","for-attr":"metrics-name"},{default:s(()=>[r(t("input",{id:"metrics-name","onUpdate:modelValue":a[20]||(a[20]=n=>e.value.meshMetricsName=n),type:"text",class:"k-input w-100",placeholder:"your-metrics-backend-name","data-testid":"mesh-metrics-backend-name"},null,512),[[b,e.value.meshMetricsName]])]),_:1})):g("",!0),l(),e.value.metricsEnabled==="enabled"?(u(),h(c,{key:1,class:"mt-4",title:"Type","for-attr":"metrics-type"},{default:s(()=>[r(t("select",{id:"metrics-type","onUpdate:modelValue":a[21]||(a[21]=n=>e.value.meshMetricsType=n),class:"k-input w-100",name:"metrics-type"},ga,512),[[z,e.value.meshMetricsType]])]),_:1})):g("",!0),l(),e.value.metricsEnabled==="enabled"?(u(),h(c,{key:2,class:"mt-4",title:"Dataplane port","for-attr":"metrics-dataplane-port"},{default:s(()=>[r(t("input",{id:"metrics-dataplane-port","onUpdate:modelValue":a[22]||(a[22]=n=>e.value.meshMetricsDataplanePort=n),type:"number",class:"k-input w-100",step:"1",min:"0",max:"65535",placeholder:"1234"},null,512),[[b,e.value.meshMetricsDataplanePort]])]),_:1})):g("",!0),l(),e.value.metricsEnabled==="enabled"?(u(),h(c,{key:3,class:"mt-4",title:"Dataplane path","for-attr":"metrics-dataplane-path"},{default:s(()=>[r(t("input",{id:"metrics-dataplane-path","onUpdate:modelValue":a[23]||(a[23]=n=>e.value.meshMetricsDataplanePath=n),type:"text",class:"k-input w-100"},null,512),[[b,e.value.meshMetricsDataplanePath]])]),_:1})):g("",!0)]),_:1})]),complete:s(()=>[p(K)?(u(),A("div",pa,[F.value===!1?(u(),A("div",ha,[ba,l(),t("p",null,`
                Since the `+k(L.value)+` GUI is read-only mode to follow Ops best practices,
                please execute the following command in your shell to create the entity.
                `+k(L.value)+` will automatically detect when the new entity has been created.
              `,1),l(),m(Ne,{tabs:se,"initial-tab-override":p(re),onOnTabChange:ge},{kubernetes:s(()=>[m(ae,{id:"code-block-kubernetes-command","data-testid":"kubernetes",language:"bash",code:p(K)},null,8,["code"])]),universal:s(()=>[m(ae,{id:"code-block-universal-command","data-testid":"universal",language:"bash",code:p(K)},null,8,["code"])]),_:1},8,["initial-tab-override"])])):g("",!0),l(),m(we,{"loader-function":be,"should-start":!0,"has-error":B.value,"can-complete":Q.value,onHideSiblings:pe},{"loading-title":s(()=>[fa]),"loading-content":s(()=>[va]),"complete-title":s(()=>[ya]),"complete-content":s(()=>[t("p",null,[l(`
                  Your mesh `),e.value.meshName?(u(),A("strong",ka,k(e.value.meshName),1)):g("",!0),l(` was found!
                `)]),l(),t("p",null,[m(p(ee),{appearance:"primary",to:{name:"mesh-detail-view",params:{mesh:e.value.meshName}}},{default:s(()=>[l(`
                    Go to mesh `+k(e.value.meshName),1)]),_:1},8,["to"])])]),"error-title":s(()=>[_a]),"error-content":s(()=>[Ea]),_:1},8,["has-error","can-complete"])])):(u(),h(p(W),{key:1,appearance:"danger"},{alertMessage:s(()=>[Ta]),_:1}))]),mesh:s(()=>[Ma,l(),t("p",null,`
            In `+k(p(de))+`, a Mesh resource allows you to define an isolated environment
            for your data-planes and policies. It's isolated because the mTLS CA
            you choose can be different from the one configured for our Meshes.
            Ideally, you will have either a large Mesh with all the workloads, or
            one Mesh per application for better isolation.
          `,1),l(),t("p",null,[t("a",{href:`${p(G)("KUMA_DOCS_URL")}/policies/mesh/?${p(G)("KUMA_UTM_QUERY_PARAMS")}`,target:"_blank"},`
              Learn More
            `,8,wa)])]),"did-you-know":s(()=>[Sa,l(),Ua]),_:1},8,["footer-enabled","next-disabled"])])]))}});const Oa=Me(Na,[["__scopeId","data-v-57c22bc8"]]);export{Oa as default};