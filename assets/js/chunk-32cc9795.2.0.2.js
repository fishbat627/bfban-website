(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32cc9795","chunk-2d0ccbb8"],{"2fc1":function(t,e,a){},"4ed5":function(t){t.exports=JSON.parse('{"defaultIndex":2,"default":"bf1","child":[{"value":"bf1","full_name":"bf1","bk_file":"images/games/bf1","bk_src":"//media.contentapi.ea.com/content/dam/gin/images/2017/01/battlefield-1-keyart-5452x3859.jpg.adapt.crop1x1.767p.jpg","logo_src":"//media.contentapi.ea.com/content/dam/gin/common/logos/layer-1.png","app_assets_bk_file":"assets/images/report/battlefield-1-png-logo.png","app_assets_logo_file":"assets/images/report/battlefield-1-png-logo.png"},{"value":"bfv","full_name":"bfv","bk_file":"images/games/bfv","bk_src":"https://media.contentapi.ea.com/content/dam/gin/images/2018/05/bfv-campaignart-standard-large.jpg.adapt.crop1x1.767p.jpg","bk_width":150,"logo_src":"https://media.contentapi.ea.com/content/dam/gin/common/logos/bfv-logo-white.png","app_assets_bk_file":"assets/images/report/battlefield-v-png-logo.png","app_assets_logo_file":"assets/images/report/battlefield-v-png-logo.png"},{"value":"bf6","full_name":"bf2046","bk_file":"images/games/bf6","bk_src":"https://media.contentapi.ea.com/content/dam/gin/images/2021/06/battlefield-2042-key-art.jpg.adapt.crop1x1.767p.jpg","logo_src":"https://media.contentapi.ea.com/content/dam/gin/common/logos/battlefield-2042-mono-logo-svg.svg","app_assets_bk_file":"assets/images/report/battlefield-2042-logo.png","app_assets_logo_file":"assets/images/report/battlefield-2042-logo.png"}]}')},6036:function(t,e,a){"use strict";a("2fc1")},"77be":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"container"},[e("br"),e("Row",[e("Col",{attrs:{flex:"auto",xs:{push:1},lg:{push:0}}},[e("Breadcrumb",[e("BreadcrumbItem",{attrs:{to:{name:"home"}}},[t._v(t._s(t.$t("header.index")))]),e("BreadcrumbItem",[t._v(t._s(t.$t("account.title")))])],1)],1),t.currentUser?e("Col",{attrs:{align:"right"}},[t.account.attr.allowDM?t._e():e("Alert",{attrs:{"show-icon":"",type:"error"}},[t._v(" "+t._s(t.$t("account.message.hint.taOffChat"))+" ")]),t.account.id==t.currentUser.userinfo.userId?e("Alert",{attrs:{"show-icon":"",type:"error"}},[t._v(" "+t._s(t.$t("account.message.hint.selfTalk"))+" ")]):t._e(),e("Button",{attrs:{disabled:!t.account.attr.allowDM||t.account.id==t.currentUser.userinfo.userId},on:{click:t.openMessage}},[e("Icon",{attrs:{type:"ios-chatbubbles"}}),t._v(" "+t._s(t.$t("account.message.chat"))+" ")],1)],1):t._e()],1),e("br"),e("div",{attrs:{"dis-hover":"",bordered:""}},[e("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[e("Col",{attrs:{justify:"center",align:"middle"}},[e("br"),e("Avatar",{staticStyle:{"background-color":"yellow"},attrs:{shape:"square",size:"150"}},[t._v(t._s(t.account.username[0]||""))]),e("h1",{staticClass:"account-username",attrs:{title:t.$t("account.username")}},[t._v(" "+t._s(t.account.username||"username")+" ")]),e("Row",{attrs:{gutter:20,type:"flex",justify:"center",align:"middle"}},[e("Col",[t.account.privilege?e("PrivilegesTag",{attrs:{data:t.account.privilege}}):t._e(),e("p",{staticClass:"account-info-p"},[t._v(t._s(t.$t("account.role")))])],1),e("Divider",{attrs:{type:"vertical"}}),e("Col",[e("Tag",{attrs:{type:"border",size:"large",color:"primary"}},[t.account.joinTime?e("Time",{attrs:{time:t.account.joinTime||new Date}}):t._e()],1),e("p",{staticClass:"account-info-p"},[t._v(t._s(t.$t("account.joinedAt")))])],1),e("Divider",{attrs:{type:"vertical"}}),e("Col",[e("Tag",{attrs:{type:"border",size:"large",color:"#df22ff"}},[t.account.lastOnlineTime?e("Time",{attrs:{time:t.account.lastOnlineTime||new Date}}):t._e()],1),e("p",{staticClass:"account-info-p"},[t._v(t._s(t.$t("account.lastOnlineTime")))])],1),e("Divider",{attrs:{type:"vertical"}}),e("Col",[e("h3",[t._v(t._s(t.account.reportnum))]),e("p",{staticClass:"account-info-p"},[t._v(t._s(t.$t("account.reportnum")))])])],1)],1)],1)],1),e("br"),e("div",{staticClass:"content"},[e("Row",{attrs:{gutter:8}},[e("Col",{attrs:{xm:{span:24,order:2},sm:{span:7,order:2}}},[t.account.introduction?e("Card",{attrs:{"dis-shadow":""}},[e("div",{domProps:{innerHTML:t._s(t.account.introduction)}})]):t._e(),t.account.introduction?e("br"):t._e(),t.account.origin&&t.account.origin.originName?e("Card",{attrs:{"dis-shadow":""}},[e("b",[t._v("origin id:")]),e("p",[t._v(t._s(t.account.origin.originName))])]):t._e(),t.account.origin&&t.account.origin.originName?e("br"):t._e(),e("br"),e("p",{staticClass:"hint"},[t._v(t._s(t.$t("account.hint2")))]),e("p",{staticClass:"hint"},[t._v(t._s(t.$t("account.hint3")))])],1),e("Col",{attrs:{xm:{span:24,order:1},sm:{span:17,order:1}}},[e("Card",{attrs:{"dis-hover":"",padding:0}},[e("Table",{attrs:{"show-header":"",border:!1,"no-data-text":t.$t("basic.tip.noReports"),columns:t.report.columns,data:t.report.data}})],1),e("br"),e("Page",{staticClass:"page",attrs:{"page-size":t.limit,"show-total":"",current:t.page,total:t.total,size:"small"},on:{"on-change":t.getReports}})],1)],1)],1),e("Modal",{on:{"on-ok":t.setMessage},model:{value:t.message.show,callback:function(e){t.$set(t.message,"show",e)},expression:"message.show"}},[e("Form",[e("FormItem",{attrs:{label:"聊天"}},[e("Input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:t.message.content,callback:function(e){t.$set(t.message,"content",e)},expression:"message.content"}})],1)],1)],1)],1)},o=[],r=a("890e"),i=a("e4b4"),n=a("d78a"),c=a("4ed5"),l=new r["a"]({data(){return{games:c.child,account:{username:"",originId:"",privilege:"",createDatetime:"",attr:{allowDM:!1}},report:{columns:[{title:" ",key:"createTime",sortable:!0,fixed:"left",render:(t,e)=>t("Tag",{props:{color:"primary"}},[t("Time",{props:{time:e.row.createTime}})])},{title:this.$i18n.t("account.reported"),key:"originName",ellipsis:!0,tooltip:!0,render:(t,e)=>{const a=this;return t("div",[t("a",{href:"/player/"+e.row.originPersonaId,on:{click(){a.$router.push({name:"player",params:{ouid:e.row.originPersonaId}})}}},e.row.originName)])}},{title:"ID",key:"originPersonaId",ellipsis:!0,align:"center",render:(t,e)=>t("div",[t("p",e.row.originPersonaId)])},{title:this.$i18n.t("account.status"),key:"status",align:"center",render:(t,e)=>t("div",[t("Tag",{props:{color:"error"}},""+this.$i18n.t(`basic.status[${e.row.status}]`))])},{title:this.$i18n.t("account.recentlyUpdated"),key:"updateTime",align:"center",sortable:!0,render:(t,e)=>t("div",[t("Tag",{props:{color:"warning"}},""+e.row.updateTime)])}],data:[]},limit:20,page:1,total:100,message:{id:"",show:!1,load:!1,content:""}}},watch:{$route:"loadData"},components:{PrivilegesTag:n["a"]},created(){this.http=i["c"].call(this),this.loadData()},methods:{async loadData(){const{uId:t}=this.$route.params;this.getUserInfo(t)},getUserInfo(t){i["b"].get(i["a"]["user_info"],{params:{id:t}}).then(t=>{const e=t.data;1===e.success?this.account=e.data:(this.account="",this.$Message.warning(e.msg)),this.$route.query.repeat&&this.openMessage(),this.getReports()})},openMessage(){this.account.attr.allowDM?this.account.id!=this.currentUser.userinfo.userId?this.message.show=!0:this.$Message.error(this.$i18n.t("account.message.hint.selfTalk")):this.$Message.error(this.$i18n.t("account.message.hint.taOffChat"))},setMessage(){const{uId:t}=this.$route.params;this.http.post(i["a"]["user_message"],{data:{data:{toUserId:this.message.id||t,type:"direct",content:this.message.content}}}).then(t=>{if(1==t.data.success)this.$Message.success(t.data.message);else switch(t.data.error){case"message.denied":this.$Message.error(this.$i18n.t("account.message.hint.denied"));break;case"message.blocked":this.$Message.error(this.$i18n.t("account.message.hint.taOffChat"));break;default:this.$Message.error(t.data.message)}}).finally(()=>{this.message.load=!1,this.message.show=!1})},getReports(t){const{uId:e}=this.$route.params;i["b"].get(i["a"]["user_reports"],{params:{id:e,skip:(t||1)-1,limit:this.limit}}).then(t=>{const e=t.data;let a=[];1===e.success&&(e.data.forEach(t=>{a.push({createTime:t.createTime,originName:t.originName,originPersonaId:t.originPersonaId,status:t.status,updateTime:t.updateTime})}),this.report.data=a,this.total=Number(this.account.reportnum))})}},computed:{currentUser(){return this.$store.state.user&&{token:"",userinfo:{userId:""}}}}}),u=l,d=(a("6036"),a("2877")),p=Object(d["a"])(u,s,o,!1,null,null,null);e["default"]=p.exports},"890e":function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var s=a("ade3"),o=(a("9224"),a("0efc"));class r extends o["a"]{constructor(t){return super(),Object(s["a"])(this,"BFBANLOG",window.BFBANLOG),t}}}}]);
//# sourceMappingURL=chunk-32cc9795.2.0.2.js.map