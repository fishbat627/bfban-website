(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-575c8d84"],{"2b11":function(t,a,s){},"4a33":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t._self._c;t._self._setupProxy;return a("div",{staticClass:"container"},[a("br"),a("Row",[a("Col",{attrs:{xs:{push:1},lg:{push:0}}},[a("Breadcrumb",[a("BreadcrumbItem",{attrs:{to:{name:"home"}}},[t._v(t._s(t.$t("header.index")))]),a("BreadcrumbItem",[t._v(t._s(t.$t("signin.title")))])],1)],1)],1),a("br"),a("div",{staticClass:"content"},[a("Row",{attrs:{gutter:0}},[a("Col",{staticClass:"mobile-hide carousel",attrs:{xs:{span:24},lg:{span:11}}},[a("div",{staticClass:"carousel-item"},[a("img",{attrs:{src:s("9d64")}}),a("h2",[t._v(t._s(t.$t("home.cover.h1")))]),a("span",[t._v(t._s(t.$t("home.cover.h3")))])])]),a("Col",{attrs:{xs:{span:22,push:1,pull:1},lg:{span:13,push:0,pull:0}}},[""==t.currentUser.token?a("Card",{attrs:{padding:50,shadow:""}},[a("Form",{ref:"signin",attrs:{model:t.signin,rules:t.ruleValidate,"label-position":"top"}},[t.signinBackMsg?a("Alert",{attrs:{type:"error","show-icon":""}},[a("b",[t._v(t._s(t.$t("signin.failed"))+" :")]),t._v(" "+t._s(t.signinBackMsg)+" ")]):t._e(),a("FormItem",{attrs:{label:t.$t("signin.form.username"),prop:"username"}},[a("Input",{attrs:{prefix:"ios-contact",type:"text",size:"large",placeholder:t.$t("signin.form.username")},model:{value:t.signin.username,callback:function(a){t.$set(t.signin,"username",a)},expression:"signin.username"}})],1),a("FormItem",{attrs:{label:t.$t("signin.form.password"),prop:"password"}},[a("Input",{attrs:{type:"password",password:"",size:"large",placeholder:t.$t("signin.form.password")},model:{value:t.signin.password,callback:function(a){t.$set(t.signin,"password",a)},expression:"signin.password"}})],1),a("Row",{attrs:{gutter:30,type:"flex",justify:"space-between",align:"middle"}},[a("Col",{attrs:{span:"15"}},[a("FormItem",{attrs:{label:t.$t("captcha.title"),prop:"captcha"}},[a("Input",{attrs:{type:"text",size:"large",maxlength:"4",placeholder:t.$t("captcha.title")},model:{value:t.signin.captcha,callback:function(a){t.$set(t.signin,"captcha",a)},expression:"signin.captcha"}},[a("div",{staticClass:"captcha-input-append",attrs:{slot:"append",alt:t.$t("captcha.get")},slot:"append"},[a("Captcha",{ref:"captcha",attrs:{seconds:15,disable:!(t.signin.password&&t.signin.username)}})],1)])],1)],1)],1),a("FormItem",[a("Button",{attrs:{long:"",loading:t.spinShow,size:"large",type:"primary"},on:{click:function(a){return a.preventDefault(),a.stopPropagation(),t.handleSignin.apply(null,arguments)}}},[t._v(" "+t._s(t.$t("basic.button.submit"))+" ")])],1),a("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",[a("router-link",{attrs:{to:{name:"signup"}}},[a("Icon",{attrs:{type:"md-mail"}}),t._v(" "+t._s(t.$t("signin.form.submitHint"))+" ")],1)],1),a("Divider",{attrs:{type:"vertical"}}),a("Col",[a("router-link",{attrs:{to:{name:"forgetPassword"}}},[t._v(t._s(t.$t("signin.form.forgetPasswordHint")))])],1)],1)],1)],1):t._e(),""!=t.currentUser.token?a("Card",{attrs:{shadow:"",align:"center"}},[a("br"),a("Avatar",{attrs:{size:"100"}},[t._v(t._s(t.currentUser.userinfo.username[0]))]),a("h1",[t._v(" "+t._s(t.currentUser.userinfo.username)+" ")]),a("p",[t._v(" "+t._s(t.$t("signin.loggedIn"))+" ")]),a("br")],1):t._e()],1)],1)],1),a("br")],1)},n=[],i=(s("14d9"),s("890e")),c=s("e4b4"),r=s("e7f8"),o=s("2f62"),p=s("2ef0"),h=s.n(p);const{mapActions:l,mapMutations:u}=o["a"];var d=new i["a"]({components:{Captcha:r["a"]},data(){return{ruleValidate:{username:[{required:!0,trigger:"blur"}],password:[{required:!0,trigger:"blur"}],captcha:[{required:!0,min:4,max:4,trigger:"change"}]},signinBackMsg:"",signin:{username:"",password:"",captcha:""},spinShow:!1}},beforeMount(){this.$route.query.rurl&&this.$Message.info(this.$t("signin.loginFirst"))},methods:{...l({signinUser:"signin"}),...u(["SIGNIN"]),handleSignin(){const t=this,{username:a,password:s,captcha:e}=h.a.each(this.signin,(t,a,s)=>{s[a]=t.trim()});this.$refs["signin"].validate(n=>{n?(this.spinShow=!0,c["c"].post(c["b"]["account_signin"],{data:{data:{username:a,password:s},encryptCaptcha:this.$refs.captcha.hash,captcha:e}}).then(a=>{const s=a.data;1==s.error?(t.signin.password="",t.signin.captcha="",t.signinBackMsg=s.message):t.signinUser(s.data).then(()=>{const t=this.$route.query.backurl;t?this.$router.push({path:t}):this.$router.go("-1"),this.$Message.success(this.$t("signin.success"))})}).finally(a=>{t.spinShow=!1,t.$refs.captcha.refreshCaptcha()})):this.$Message.error(this.$t("signin.fillEverything"))})}},computed:{currentUser(){return this.$store.state.user||{token:""}}}}),m=d,g=(s("6d1b"),s("2877")),f=Object(g["a"])(m,e,n,!1,null,"0268e99d",null);a["default"]=f.exports},"6d1b":function(t,a,s){"use strict";s("ff20")},c72a:function(t,a,s){"use strict";s("2b11")},e7f8:function(t,a,s){"use strict";var e=function(){var t=this,a=t._self._c;return a("div",{staticClass:"captcha-view",style:`cursor: ${t.captchaTime.count<=0?"pointer":"not-allowed"};height: ${t.height}`,on:{click:t.refreshCaptcha}},[t.content?a("div",{class:""+(t.captchaTime.count<=0?"disable":""),domProps:{innerHTML:t._s(t.content)}}):a("span",{staticClass:"tip"},[t.disable?a("div",{staticStyle:{"min-width":"80px"}},[a("Icon",{attrs:{type:"md-close",size:"20"}})],1):[t._v(" "+t._s(t.$t("captcha.get"))+" ")]],2),a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.content&&t.captchaTime.count<=0,expression:"content && captchaTime.count <= 0"}],staticClass:"captcha-view-icon"},[t.disable?a("Icon",{attrs:{type:"md-close",size:"20"}}):a("Icon",{attrs:{type:"md-refresh",size:"20"}})],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.captchaTime.count>0,expression:"captchaTime.count > 0"}],staticClass:"count"},[t._v(t._s(t.captchaTime.count)+"s")])],1)},n=[],i=s("e4b4"),c={name:"Captcha",props:{id:{type:String,default:"0"},disable:{type:Boolean,default:!1},seconds:{type:Number,default:60},height:{type:String,default:"40px"}},data(){return{postload:!1,hash:"",content:"",capthcaHash:{},captchaTime:{fun:null,count:0,lock:!1}}},created(){let t=i["i"].session().get("captcha");t?this.capthcaHash=t.data:i["i"].session().set("captcha",{[`${this.id}_${this.$route.name}`]:this.seconds})},destroyed(){clearInterval(this.captchaTime.fun),this.captchaTime.fun=null},methods:{async refreshCaptcha(){let t=await i["i"].session().get("captcha"),a=this;t.code<=0&&(t={data:{value:this.seconds}}),this.disable||this.postload||this.captchaTime.count>0||(this.postload=!0,i["c"].get(i["b"]["captcha"],{params:{t:Math.random()}}).then(t=>{1===t.data.success&&(a.capthcaHash=Object.assign({[a.$route.name]:0}),this.hash=t.data.data["hash"],this.content=t.data.data["content"])}).finally(s=>{setTimeout((function(){a.postload=!1}),800),Object.keys(t.data.value).indexOf(this.$route.name)>=0&&(this.captchaTime.count=t.data.value[this.$route.name]),this.capthcaTimeout(this.captchaTime.count||this.seconds)}))},capthcaTimeout(t){const a=this;let s;a.captchaTime.lock||(a.captchaTime.count=t,s=setInterval((function(){if(a.captchaTime.count<=0)return clearInterval(s),void(a.captchaTime.lock=!1);a.captchaTime.count-=1,a.capthcaHash=Object.assign({[`${a.id}_${a.$route.name}`]:a.captchaTime.count}),i["i"].session().set("captcha",a.capthcaHash)}),1e3),a.captchaTime.lock=!0)}},computed:{isCaptcha(){return this.hash&&this.content}}},r=c,o=(s("c72a"),s("2877")),p=Object(o["a"])(r,e,n,!1,null,null,null);a["a"]=p.exports},ff20:function(t,a,s){}}]);
//# sourceMappingURL=chunk-575c8d84.2.7.0.js.map