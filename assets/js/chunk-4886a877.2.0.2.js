(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4886a877"],{"2d3b":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"container"},[t("div",{staticClass:"content"},[t("br"),t("Row",[t("Col",{attrs:{xs:{push:1},lg:{push:0}}},[t("Breadcrumb",[t("BreadcrumbItem",{attrs:{to:{name:"home"}}},[e._v(e._s(e.$t("header.index")))]),t("BreadcrumbItem",[e._v(e._s(e.$t("search.title")))])],1)],1)],1),t("br"),t("div",{class:"search-content "+(e.cheaters.length>0?"search-content-mini":"")},[t("Row",{staticStyle:{width:"100%"},attrs:{type:"flex",justify:"center",gutter:0}},[t("Col",{attrs:{xs:{span:24},sm:{span:12},md:{span:7}}},[t("RadioGroup",{attrs:{type:"button",size:"large"},model:{value:e.searchScopeValue,callback:function(t){e.searchScopeValue=t},expression:"searchScopeValue"}},e._l(e.searchScope,(function(s){return t("Radio",{key:s,staticClass:"search-input-show",attrs:{label:s,border:""}},[e._v(e._s(e.$t("search.scope."+s)))])})),1)],1),t("Col",{staticClass:"desktop-hide",attrs:{xs:{span:24}}},[e._v(" ")]),t("Col",{attrs:{xs:{span:24},sm:{span:12},md:{span:12}}},[t("Dropdown",{staticStyle:{width:"100%"}},[t("Input",{staticClass:"search-input search-input-show",attrs:{"enter-button":"",search:"",size:"large",placeholder:e.$t("search.placeholder")},on:{"on-clear":function(t){e.searchVal="",e.cheaters=[]},"on-click":e.handleSearch,"on-search":e.handleSearch},model:{value:e.searchVal,callback:function(t){e.searchVal=t},expression:"searchVal"}}),t("div",{attrs:{slot:"list",transfer:""},slot:"list"},[e.searchHistory.list.length>0?t("Row",{staticStyle:{padding:"10px"},attrs:{gutter:5}},e._l(e.searchHistory.list,(function(s,a){return t("Col",{key:a},[t("Tag",{attrs:{stype:"border",type:"dot",checkable:"",closable:""},on:{"on-change":function(t){return e.handleSearchHistoryClickTag(a)},"on-close":function(t){return e.handleSearchHistoryClose(a)}}},[e._v(e._s(s||"")+" ")])],1)})),1):t("div",{attrs:{align:"center"}},[e._v(" 🦖 ")])],1)],1)],1)],1),t("Row",{staticClass:"checkboxGroup",attrs:{type:"flex",justify:"center"}},[t("Col",{attrs:{xs:{span:24},lg:{span:11},align:"center"}},[t("Icon",{attrs:{type:"md-alert"}}),e._v(" "+e._s(e.$t("search.describe"))+" ")],1),t("Col",{attrs:{xs:{span:0},lg:{span:1}}},[t("Divider",{attrs:{type:"vertical"}})],1),t("Col",{attrs:{xs:{span:24},lg:{span:11},align:"center"}},[t("a",{attrs:{href:"javascript:void(0)"}},[e._v(e._s(e.$t("search.collectionHint")))])])],1)],1),e.cheaters.length>60?t("Alert",{attrs:{type:"warning","show-icon":""}},[e._v(" 庞大的数量 "),t("template",{slot:"desc"},[e._v(" 啊呀！一共"+e._s(e.cheaters.length)+"条,看起来与你搜索的关键词区配出大量数据，请尝试继续补充"+e._s(e.searchVal)+"后续字符，如: "),t("a",{attrs:{href:"?s="+e.searchVal+"2021"}},[e._v(e._s(e.searchVal)+"2021")]),e._v("、"),t("a",{attrs:{href:"?s="+e.searchVal+"_love"}},[e._v(e._s(e.searchVal)+"2021")]),e._v(" 让搜索更精准 ")])],2):e._e(),0!==e.cheaters.length?t("div",[t("List",{staticClass:"content",attrs:{border:""}},[e._l(e.cheaters,(function(s,a){return t("ListItem",{key:a},[t("ListItemMeta",{attrs:{avatar:s.avatarLink,title:s.currentName||s.originName,description:`${s.originUserId?"uid:"+s.originPersonaId:""} ${s.historyName?"过去id:"+s.historyName:""}`}}),t("template",{slot:"action"},[t("li",{on:{click:function(t){e.searchModal=!1}}},[t("router-link",{attrs:{to:{name:"player",params:{ouid:""+s.originPersonaId}}}},[t("Icon",{attrs:{type:"ios-eye",size:"20"}}),e._v(" 查看 ")],1)],1)])],2)})),t("Spin",{directives:[{name:"show",rawName:"v-show",value:e.modalSpinShow,expression:"modalSpinShow"}],attrs:{size:"large",fix:""}})],2)],1):e._e()],1),t("br")])},r=[],c=s("890e"),i=s("e4b4"),o=new c["a"]({name:"search",data(){return{searchVal:"",searchHistory:{list:[]},modalSpinShow:!1,searchScope:["current","history"],searchScopeValue:"current",cheaters:[]}},created(){const{s:e,type:t}=this.$route.query;this.searchScopeValue=t||this.searchScope[0],this.searchVal=e||"",this.handleSearch(),this.getSearchHistory()},methods:{getSearchHistory(){let e=i["e"].get("search.history");-1==e.code&&this.setSearchHistoryValue([]),this.searchHistory.list=e.data.value||[]},async setSearchHistoryValue(e){await i["e"].set("search.history",e)},handleSearchHistoryClose(e){this.searchHistory.list.splice(e,1),this.setSearchHistoryValue(this.searchHistory.list)},handleSearchHistoryClickTag(e){this.searchVal=this.searchHistory.list[e],this.handleSearch()},handleSearch(){const e=this,t=this.searchVal.trim();if(""===t&&t.length<=3)return!1;this.searchModal=!0,this.modalSpinShow=!0,i["b"].get(i["a"]["search"],{params:{param:t,scope:this.searchScopeValue}}).then(s=>{e.modalSpinShow=!1;let a=Array.from(new Set(e.searchHistory.list.concat([t])));e.setSearchHistoryValue(a),e.searchHistory.list=a;const r=s.data;if(1===r.success){const{cheaters:e}=r.data;this.cheaters=r.data,r.data.length<=0&&this.$Message.error("not data")}else this.$Message.error(r.message)})}}}),n=o,h=(s("a6ef"),s("2877")),l=Object(h["a"])(n,a,r,!1,null,"8ece2222",null);t["default"]=l.exports},"890e":function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));var a=s("ade3"),r=(s("9224"),s("0efc"));class c extends r["a"]{constructor(e){return super(),Object(a["a"])(this,"BFBANLOG",window.BFBANLOG),e}}},a6ef:function(e,t,s){"use strict";s("bf9a")},bf9a:function(e,t,s){}}]);
//# sourceMappingURL=chunk-4886a877.2.0.2.js.map