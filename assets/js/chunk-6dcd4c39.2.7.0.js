(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6dcd4c39"],{"2b11":function(t,e,s){},"409e":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"container"},[e("div",{staticClass:"content"},[e("br"),e("Row",[e("Col",{attrs:{xs:{push:1},lg:{push:0}}},[e("Breadcrumb",[e("BreadcrumbItem",{attrs:{to:{name:"home"}}},[t._v(t._s(t.$t("header.index")))]),e("BreadcrumbItem",[t._v(t._s(t.$t("forgetPassword.title")))])],1)],1)],1),e("br"),e("Row",[e("Col",{attrs:{span:"24"}},[e("Card",{attrs:{shadow:""}},[e("Steps",{attrs:{current:t.stepsIndex}},[e("Step",{attrs:{title:t.$t("signup.steps[0].title"),content:t.$t("signup.steps[0].title")}}),e("Step",{attrs:{title:t.$t("signup.steps[1].title"),content:t.$t("signup.steps[1].title")}}),e("Step",{attrs:{title:t.$t("signup.steps[2].title"),content:t.$t("signup.steps[2].title")}}),e("Step",{attrs:{title:t.$t("signup.steps[3].title"),content:t.$t("signup.steps[3].title")}}),e("Step",{attrs:{title:t.$t("signup.steps[4].title"),content:t.$t("signup.steps[4].title")}})],1),e("Divider",{attrs:{dashed:""}}),e("Card",{attrs:{"dis-hover":"",padding:50}},[e("Form",{ref:"formValidate",staticStyle:{position:"relative"},attrs:{"label-position":"top",rules:t.ruleValidate}},[0==t.stepsIndex?e("div",[e("FormItem",{attrs:{label:t.$t("signup.form.username"),prop:"username"}},[e("Input",{attrs:{size:"large",placeholder:t.$t("signup.placeholder.username")},model:{value:t.forgetPassword.username,callback:function(e){t.$set(t.forgetPassword,"username",e)},expression:"forgetPassword.username"}})],1),e("FormItem",{attrs:{label:t.$t("signup.form.originEmail"),prop:"originEmail"}},[e("Input",{attrs:{size:"large",placeholder:t.$t("signup.placeholder.originEmail")},model:{value:t.forgetPassword.originEmail,callback:function(e){t.$set(t.forgetPassword,"originEmail",e)},expression:"forgetPassword.originEmail"}})],1)],1):t._e(),1==t.stepsIndex?e("FormItem",{attrs:{label:t.$t("captcha.title")}},[e("Input",{attrs:{type:"text",size:"large",maxlength:"4",placeholder:t.$t("captcha.title")},model:{value:t.forgetPassword.captcha,callback:function(e){t.$set(t.forgetPassword,"captcha",e)},expression:"forgetPassword.captcha"}},[e("div",{staticClass:"captcha-input-append",attrs:{slot:"append"},slot:"append"},[e("Captcha",{ref:"captcha"})],1)])],1):t._e(),2==t.stepsIndex?e("div",[e("EmailTip",{attrs:{email:t.forgetPassword.originEmail}})],1):t._e(),3==t.stepsIndex?e("div",[e("FormItem",{attrs:{label:t.$t("signup.form.password"),prop:"password"}},[e("Input",{attrs:{type:"password",password:"",minlength:"6",size:"large",placeholder:t.$t("signup.placeholder.password")},model:{value:t.forgetPassword.password,callback:function(e){t.$set(t.forgetPassword,"password",e)},expression:"forgetPassword.password"}})],1)],1):t._e(),4==t.stepsIndex?e("div",{attrs:{align:"center"}},[e("h1",[t._v(t._s(t.$t("forgetPassword.resetSuccess")))])]):t._e(),e("Row",[e("Col",{attrs:{span:"12"}},[t.button.prev?e("Button",{attrs:{disabled:t.button.prevShow,size:"large"},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.stepsIndex--,t.onStepsIndex()}}},[t._v(t._s(t.$t("basic.button.prev"))+" ")]):t._e(),e("Divider",{attrs:{type:"vertical"}}),t.button.next?e("Button",{attrs:{disabled:t.button.nextShow,size:"large",type:"primary"},on:{click:function(e){e.preventDefault(),e.stopPropagation(),t.stepsIndex++,t.onStepsIndex()}}},[t._v(t._s(t.$t("basic.button.next"))+" ")]):t._e()],1),e("Col",{attrs:{span:"12",align:"right",type:"flex"}},[t.button.submit?e("Button",{attrs:{long:"",disabled:""==t.forgetPassword.captcha,loading:t.spinShow,size:"large",type:"primary"},on:{click:function(e){return e.preventDefault(),e.stopPropagation(),t.onSubmit.apply(null,arguments)}}},[t._v(" "+t._s(t.$t("basic.button.submit"))+" ")]):t._e()],1)],1)],1)],1)],1)],1)],1)],1)])},i=[],o=s("890e"),n=s("e4b4"),r=s("47f2"),c=s("e7f8"),p=new o["a"]({name:"forgetPassword",data(){return{button:{next:!0,nextShow:!1,prev:!0,prevShow:!0,submit:!1},stepsIndex:0,ruleValidate:{},forgetPassword:{username:"",originEmail:"",password:""},spinShow:!1,verify:{load:0}}},components:{EmailTip:r["a"],Captcha:c["a"]},created(){const{code:t}=this.$route.query;t&&(this.stepsIndex=3,this.onStepsIndex())},methods:{onStepsIndex(){let t=this.stepsIndex;switch(this.button.submit=!1,t){case 0:this.button.prev=!0,this.button.prevShow=!0,this.button.next=!0;break;case 1:this.button.prev=!0,this.button.prevShow=!1,this.button.next=!1,this.button.submit=!0;break;case 2:this.button.prev=!1,this.button.next=!1;break;case 3:this.button.prev=!1,this.button.next=!1,this.button.submit=!0;break;case 4:this.button={};break}return this.stepsIndex},onSubmit(){switch(this.stepsIndex){case 1:this.onForgetPassword();break;case 3:this.forgetPasswordVerify();break}},forgetPasswordVerify(){const{code:t}=this.$route.query,e=this.forgetPassword.password;this.spinShow=!0,""!=t&&void 0!=t&&null!=t?(this.verify.iscode=!0,this.verify.load=0,n["c"].post(n["b"]["user_forgetPasswordVerify"],{data:{data:{code:t,newpassword:e}}}).then(t=>{const e=t.data;1===e.success?(this.verify.load=3,this.stepsIndex=4):(this.$Message.error(e.message),this.verify.load=-1)}).catch(t=>{this.verify={load:-1,msg:t.toString()}}).finally(()=>{this.spinShow=!1,this.onStepsIndex()})):this.verify.iscode=!1},onForgetPassword(){this.spinShow=!0,this.forgetPassword.language=this.$root.$i18n.locale,n["c"].post(n["b"]["user_forgetPassword"],{data:{data:this.forgetPassword,encryptCaptcha:this.$refs.captcha.hash,captcha:this.forgetPassword.captcha,language:n["e"].exchangeLangField(this.$root.$i18n.locale)}}).then(t=>{const e=t.data;1===e.success?(this.stepsIndex++,this.$Message.success(this.$i18n.t("detail.messages.submitSuccess"))):this.$Message.error(e.message)}).finally(()=>{this.onStepsIndex(),this.spinShow=!1})}},computed:{currentUser(){return this.$store.state.user||{token:""}}}}),l=p,h=s("2877"),d=Object(h["a"])(l,a,i,!1,null,"def50478",null);e["default"]=d.exports},"47f2":function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",[e("Alert",{attrs:{type:"success","show-icon":""}},[t._v(" "+t._s(t.$("signup.checkAllEmail"))+" ")])],1)},i=[],o={name:"EmailTip",props:{email:String}},n=o,r=s("2877"),c=Object(r["a"])(n,a,i,!1,null,"32964e9f",null);e["a"]=c.exports},c72a:function(t,e,s){"use strict";s("2b11")},e7f8:function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"captcha-view",style:`cursor: ${t.captchaTime.count<=0?"pointer":"not-allowed"};height: ${t.height}`,on:{click:t.refreshCaptcha}},[t.content?e("div",{class:""+(t.captchaTime.count<=0?"disable":""),domProps:{innerHTML:t._s(t.content)}}):e("span",{staticClass:"tip"},[t.disable?e("div",{staticStyle:{"min-width":"80px"}},[e("Icon",{attrs:{type:"md-close",size:"20"}})],1):[t._v(" "+t._s(t.$t("captcha.get"))+" ")]],2),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.content&&t.captchaTime.count<=0,expression:"content && captchaTime.count <= 0"}],staticClass:"captcha-view-icon"},[t.disable?e("Icon",{attrs:{type:"md-close",size:"20"}}):e("Icon",{attrs:{type:"md-refresh",size:"20"}})],1)]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.captchaTime.count>0,expression:"captchaTime.count > 0"}],staticClass:"count"},[t._v(t._s(t.captchaTime.count)+"s")])],1)},i=[],o=s("e4b4"),n={name:"Captcha",props:{id:{type:String,default:"0"},disable:{type:Boolean,default:!1},seconds:{type:Number,default:60},height:{type:String,default:"40px"}},data(){return{postload:!1,hash:"",content:"",capthcaHash:{},captchaTime:{fun:null,count:0,lock:!1}}},created(){let t=o["i"].session().get("captcha");t?this.capthcaHash=t.data:o["i"].session().set("captcha",{[`${this.id}_${this.$route.name}`]:this.seconds})},destroyed(){clearInterval(this.captchaTime.fun),this.captchaTime.fun=null},methods:{async refreshCaptcha(){let t=await o["i"].session().get("captcha"),e=this;t.code<=0&&(t={data:{value:this.seconds}}),this.disable||this.postload||this.captchaTime.count>0||(this.postload=!0,o["c"].get(o["b"]["captcha"],{params:{t:Math.random()}}).then(t=>{1===t.data.success&&(e.capthcaHash=Object.assign({[e.$route.name]:0}),this.hash=t.data.data["hash"],this.content=t.data.data["content"])}).finally(s=>{setTimeout((function(){e.postload=!1}),800),Object.keys(t.data.value).indexOf(this.$route.name)>=0&&(this.captchaTime.count=t.data.value[this.$route.name]),this.capthcaTimeout(this.captchaTime.count||this.seconds)}))},capthcaTimeout(t){const e=this;let s;e.captchaTime.lock||(e.captchaTime.count=t,s=setInterval((function(){if(e.captchaTime.count<=0)return clearInterval(s),void(e.captchaTime.lock=!1);e.captchaTime.count-=1,e.capthcaHash=Object.assign({[`${e.id}_${e.$route.name}`]:e.captchaTime.count}),o["i"].session().set("captcha",e.capthcaHash)}),1e3),e.captchaTime.lock=!0)}},computed:{isCaptcha(){return this.hash&&this.content}}},r=n,c=(s("c72a"),s("2877")),p=Object(c["a"])(r,a,i,!1,null,null,null);e["a"]=p.exports}}]);
//# sourceMappingURL=chunk-6dcd4c39.2.7.0.js.map