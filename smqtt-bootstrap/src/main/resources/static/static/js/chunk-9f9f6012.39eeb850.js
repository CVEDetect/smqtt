(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f9f6012"],{"64ae":function(e,t,a){},"6e57":function(e,t,a){"use strict";a("e413")},"80c1":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("common-layout",[s("div",{staticClass:"top"},[s("div",{staticClass:"header"},[s("img",{staticClass:"logo",attrs:{alt:"logo",src:a("4ffd")}}),s("span",{staticClass:"title"},[e._v(e._s(e.systemName))])]),s("div",{staticClass:"desc"},[e._v("smqtt 是一款Java实现的高性能可扩展的MQTT broker")])]),s("div",{staticClass:"login"},[s("a-form",{attrs:{form:e.form},on:{submit:e.onSubmit}},[s("a-tabs",{staticStyle:{padding:"0 2px"},attrs:{tabBarStyle:{textAlign:"center"},size:"large"}},[s("a-tab-pane",{key:"1",attrs:{tab:"账户密码登录"}},[s("a-alert",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}],staticStyle:{"margin-bottom":"24px"},attrs:{closable:!0,message:e.error,showIcon:"",type:"error"}}),s("a-form-item",[s("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入账户名",whitespace:!0}]}],expression:"['name', {rules: [{ required: true, message: '请输入账户名', whitespace: true}]}]"}],attrs:{autocomplete:"autocomplete",placeholder:"smqtt",size:"large"}},[s("a-icon",{attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),s("a-form-item",[s("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"请输入密码",whitespace:!0}]}],expression:"['password', {rules: [{ required: true, message: '请输入密码', whitespace: true}]}]"}],attrs:{autocomplete:"autocomplete",placeholder:"smqtt",size:"large",type:"password"}},[s("a-icon",{attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1)],1)],1),s("div",[s("a-checkbox",{attrs:{checked:!0}},[e._v("自动登录")]),s("a",{staticStyle:{float:"right"}},[e._v("忘记密码")])],1),s("a-form-item",[s("a-button",{staticStyle:{width:"100%","margin-top":"24px"},attrs:{loading:e.logging,htmlType:"submit",size:"large",type:"primary"}},[e._v("登录 ")])],1)],1)],1)])},r=[],o=a("5530"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"common-layout"},[a("div",{staticClass:"content"},[e._t("default")],2),a("page-footer",{attrs:{"link-list":e.footerLinks,copyright:e.copyright}})],1)},n=[],c=a("613e"),m=a("5880"),l={name:"CommonLayout",components:{PageFooter:c["a"]},computed:Object(o["a"])({},Object(m["mapState"])("setting",["footerLinks","copyright"]))},u=l,d=(a("6e57"),a("2877")),p=Object(d["a"])(u,i,n,!1,null,"63c094a6",null),f=p.exports,g=a("93d6"),h=a("b775"),v={name:"Login",components:{CommonLayout:f},data:function(){return{logging:!1,error:"",form:this.$form.createForm(this),userName:"admin"}},computed:{systemName:function(){return this.$store.state.setting.systemName}},methods:Object(o["a"])(Object(o["a"])({},Object(m["mapMutations"])("account",["setUser","setPermissions","setRoles"])),{},{onSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields((function(e){if(!e){t.logging=!0;var a=t.form.getFieldValue("name"),s=t.form.getFieldValue("password");t.userName=a,Object(g["a"])(a,s).then(t.afterLogin)}}))},afterLogin:function(e){this.logging=!1;var t=e.data;this.setUser({name:this.userName,avatar:"",address:"",position:""}),this.setPermissions([{id:"queryForm",operation:["add","edit"]}]),this.setRoles([{id:"admin",operation:["add","edit","delete"]}]),Object(h["g"])({token:t.data.access_token,expireAt:new Date(t.data.expires_in)}),this.$router.push("/dashboard/connections"),this.$message.success("".concat(this.userName,"，欢迎回来"),3)}})},b=v,y=(a("fc64"),Object(d["a"])(b,s,r,!1,null,"0d3633e0",null)),w=y.exports;t["default"]=w},e413:function(e,t,a){},fc64:function(e,t,a){"use strict";a("64ae")}}]);