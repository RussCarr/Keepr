webpackJsonp([1],{"1eDy":function(t,e){},"2rTy":function(t,e){},"3HWY":function(t,e){},"4U7s":function(t,e){},"5OYB":function(t,e){},A4Vb:function(t,e){},"G/TD":function(t,e){},IZc2:function(t,e){},Ixoe:function(t,e){},JT4I:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=s("VU/8")({name:"App",components:{},mounted:function(){this.$store.dispatch("getAllSharedKeeps"),this.$store.dispatch("authenticateUser")}},n,!1,function(t){s("IZc2")},null,null).exports,r=s("/ocq"),o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-12 foot"},[e("p",{staticClass:"text-center"},[this._v("Copywrite Research Driven Marketing 2018")])])}]};var c=s("VU/8")({name:"Footer",data:function(){return{}}},o,!1,function(t){s("tmxd")},"data-v-3431d9d2",null).exports,l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"homebar bgcolor"},[s("div",{staticClass:"container-fluid "},[s("div",{staticClass:"row"},[t._m(0),t._v(" "),s("div",{staticClass:"col-sm-4"},[s("button",{staticClass:"btn btn-success ",on:{click:function(e){t.$emit("showSignIn")}}},[t._v("Sign in")]),t._v(" "),s("button",{staticClass:"btn btn-danger ",on:{click:function(e){t.$emit("showRegister")}}},[t._v("Register")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-8"},[e("h1",{staticClass:"h3 text-light font-weight-bold"},[e("i",{staticClass:"fab fa-kickstarter-k"}),this._v("eepr")])])}]};var u=s("VU/8")({name:"HomeBar",components:{},data:function(){return{userStatus:this.$store.state.userStatus,user:this.$store.state.user.username}},computed:{},methods:{logout:function(){this.$store.dispatch("logoutUser")}}},l,!1,function(t){s("T28y")},"data-v-529c5a0e",null).exports,d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"signIn container"},[s("transition",{attrs:{name:"modal"}},[s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"signInForm text-dark"},[s("form",{staticClass:"border border-secondary rounded p-4",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"ml-4",attrs:{for:"email"}},[t._v("Email:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"text",id:"email",placeholder:"my@address.com"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group formed"},[s("label",{staticClass:"ml-4",attrs:{for:"password"}},[t._v("Password:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"********"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),t._v(" "),s("button",{staticClass:"btn btn-success px-4",attrs:{type:"submit"}},[t._v("Sign in")]),t._v(" "),s("button",{staticClass:"btn btn-danger px-4",on:{click:function(e){t.$emit("closeSignIn")}}},[t._v("Register")]),t._v(" "),s("div",{staticClass:"text-center pt-4"})])]),t._v(" "),s("button",{staticClass:"btn btn-dark px-4",on:{click:function(e){t.$emit("close")}}},[t._v("Click here to just Browse.")])])])],1)},staticRenderFns:[]};var p=s("VU/8")({name:"SignIn",data:function(){return{user:{Password:"",Email:""}}},methods:{submit:function(){this.$store.dispatch("loginUser",this.user),this.$emit("close")}}},d,!1,function(t){s("JT4I")},"data-v-31d6e262",null).exports,h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register container"},[s("transition",{attrs:{name:"modal"}},[s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"registerForm text-dark"},[s("form",{staticClass:"border border-secondary rounded p-4",attrs:{action:"#"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"ml-4",attrs:{for:"username"}},[t._v("Name: ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.username,expression:"user.username"}],staticClass:"form-control",attrs:{type:"text",id:"username",placeholder:"My Name"},domProps:{value:t.user.username},on:{input:function(e){e.target.composing||t.$set(t.user,"username",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"ml-4",attrs:{for:"email"}},[t._v("Email: ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"text",id:"email",placeholder:"my@address.com"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"ml-4",attrs:{for:"password"}},[t._v("Password: ")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"password",placeholder:"********"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}})]),t._v(" "),s("button",{staticClass:"btn btn-success px-4",attrs:{type:"submit"}},[t._v("Register")]),t._v(" "),s("button",{staticClass:"btn btn-danger px-4",on:{click:function(e){t.$emit("closeRegister")}}},[t._v("Sign In")]),t._v(" "),s("div",{staticClass:"text-center pt-4"})])]),t._v(" "),s("button",{staticClass:"btn btn-dark px-4",on:{click:function(e){t.$emit("close")}}},[t._v("Click here to just Browse.")])])])],1)},staticRenderFns:[]};var v=s("VU/8")({name:"Register",data:function(){return{user:{username:"",email:"",password:""}}},methods:{submit:function(){this.$emit("close"),this.$store.dispatch("registerUser",this.user)}}},h,!1,function(t){s("2rTy")},"data-v-fb66c666",null).exports,m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"keeps"},[s("div",{staticClass:"col-sm-6 col-md-2 col-lg-3 ml-3 mr-3 "},[s("div",{staticClass:"card",staticStyle:{width:"18rem"},on:{mouseenter:function(e){t.keepButtons=!0},mouseleave:function(e){t.keepButtons=!1}}},[s("img",{staticClass:"card-img-top img mb-4",attrs:{src:t.imgLink,alt:"Card image cap"}}),t._v(" "),t.loggedIn?s("div",[s("div",{staticClass:"row"},[(t.keepButtons=!!t.keepButtons)?s("div",{staticClass:"col-12 text-center "},[s("Button",{staticClass:"btn btn-danger",on:{click:function(e){t.keepToVault=!t.keepToVault}}},[t._v("K")]),t._v(" "),s("Button",{staticClass:"btn btn-dark",on:{click:function(e){t.shareBox=!t.shareBox}}},[s("i",{staticClass:"fas fa-share-alt"})]),t._v(" "),s("a",{staticClass:"btn btn-secondary",attrs:{href:t.link,target:"_blank"},on:{click:t.addViewCount}},[s("i",{staticClass:"fas fa-link"})])],1):t._e()]),t._v(" "),s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-sm-12 text-center"},[t.shareBox?s("div",{staticClass:"shareButton"},[s("a",{staticClass:"share-icon",attrs:{href:t.facebook,target:"_blank",title:"Share on Facebook"},on:{click:t.addShareCount}},[s("i",{staticClass:"fa-2x fab fa-facebook"})]),t._v(" "),s("a",{staticClass:"share-icon",attrs:{href:t.twitter,target:"_blank"},on:{click:t.addShareCount}},[s("i",{staticClass:"fa-2x fab fa-twitter"})])]):t._e()])]),t._v(" "),s("div",{staticClass:"col"},[t.keepToVault?s("div",{staticClass:"text-center keepButton mt-3",on:{mouseleave:function(e){t.keepToVault=!1}}},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedVault,expression:"selectedVault"}],on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedVault=e.target.multiple?s:s[0]},t.addToVault]}},[s("option",{attrs:{disabled:"",value:""}},[t._v("Please select one")]),t._v(" "),t._l(t.vaults,function(e){return s("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])})],2)]):t._e()])]):t._e(),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col text-center"},[s("h5",[s("span",[t._v("Keep: "+t._s(t.keep.countKeep))]),t._v(" |\n              "),s("span",[t._v("Share: "+t._s(t.keep.countShare))]),t._v(" |\n              "),s("span",[t._v("View: "+t._s(t.keep.countView))])])])]),t._v(" "),s("hr"),t._v(" "),s("h5",{staticClass:"text-center"},[t._v(t._s(t.keep.title))])])])])])},staticRenderFns:[]};var f=s("VU/8")({name:"Keeps",data:function(){return{shareBox:!1,keepButtons:!1,keepToVault:!1,selectedVault:"",shared:this.keep.shared,link:this.keep.link}},watch:{shared:function(t){1==t?(this.keep.shared=1,this.$store.dispatch("updateKeep",this.keep)):(this.keep.shared=0,this.$store.dispatch("updateKeep",this.keep))}},computed:{imgLink:function(){return this.keep.img},vaults:function(){return this.$store.state.allUserVaults},loggedIn:function(){return this.$store.state.userStatus},facebook:function(){return"https://www.facebook.com/sharer/sharer.php?u=https://localhost:5000/"+this.keep.id+"&t=Keepr"},twitter:function(){return"https://twitter.com/intent/tweet?url=https://localhost:5000/"+this.keep.id+"&text=Keepr&via=Keepr"}},props:["keep","user"],methods:{removeKeep:function(){this.$store.dispatch("deleteKeep",this.keep.id)},addToVault:function(){var t={userId:this.keep.userId,keepId:this.keep.id,vaultId:this.selectedVault};this.$store.dispatch("addToVault",t);var e=this.keep,s=e.countKeep+1;e.countKeep=s,this.$store.dispatch("updateKeep",e),this.selectedVault=""},addViewCount:function(){var t=this.keep,e=t.countView+1;t.countView=e,this.$store.dispatch("updateKeep",t)},addShareCount:function(){var t=this.keep,e=t.countShare+1;t.countShare=e,this.$store.dispatch("updateKeep",t)}}},m,!1,function(t){s("Ixoe")},null,null).exports,_={name:"NonUser",components:{homeBar:u,signIn:p,register:v,keeps:f},data:function(){return{showSignIn:!1,showRegister:!1}},computed:{keeps:function(){return this.$store.state.allSharedKeeps}},mount:function(){this.$store.dispatch("getAllSharedKeeps")},methods:{openSignIn:function(){this.showRegister=!1,this.showSignIn=!0},openRegister:function(){this.showSignIn=!1,this.showRegister=!0}}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nonUser"},[s("homeBar",{on:{showSignIn:function(e){t.showSignIn=!0},showRegister:function(e){t.showRegister=!0}}}),t._v(" "),t.showSignIn?s("signIn",{on:{close:function(e){t.showSignIn=!1},closeSignIn:function(e){t.openRegister(e)}}}):t._e(),t._v(" "),t.showRegister?s("register",{on:{close:function(e){t.showRegister=!1},closeRegister:function(e){t.openSignIn(e)}}}):t._e(),t._v(" "),s("div",{staticClass:"row"},t._l(t.keeps,function(t){return s("keeps",{key:t.id,attrs:{keep:t}})}))],1)},staticRenderFns:[]};var C={name:"Home",components:{bottom:c,nonUser:s("VU/8")(_,g,!1,function(t){s("o+zY")},"data-v-5b7939fd",null).exports},data:function(){return{showSignIn:!1,showRegister:!1}},computed:{keeps:function(){return this.$store.state.allSharedKeeps}},mount:function(){this.$store.dispatch("getAllSharedKeeps")},methods:{openSignIn:function(){this.showRegister=!1,this.showSignIn=!0},openRegister:function(){this.showSignIn=!1,this.showRegister=!0}}},k={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main"},[e("nonUser"),this._v(" "),e("bottom")],1)},staticRenderFns:[]};var w=s("VU/8")(C,k,!1,function(t){s("kaas")},"data-v-4047d188",null).exports,b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"topbar bgcolor"},[s("div",{staticClass:"container-fluid "},[s("div",{staticClass:"row mt-2"},[t._m(0),t._v(" "),s("div",{staticClass:"col-sm-3 userControls"},[s("button",{staticClass:"btn btn-info",on:{click:function(e){t.$emit("showDashboard")}}},[s("i",{staticClass:"fas fa-tachometer-alt"})]),t._v(" "),s("button",{staticClass:"btn btn-danger ",on:{click:t.logout}},[t._v("Logout")])]),t._v(" "),s("div",{staticClass:"col-sm-3"},[s("h5",{staticClass:"h5 text-light"},[t._v("User:\n                    "),s("span",{staticClass:"h3 text-dark"},[t._v(t._s(t.user.username))])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-6"},[e("h1",{staticClass:"h3 text-light font-weight-bold"},[e("i",{staticClass:"fab fa-kickstarter-k"}),this._v("eepr")])])}]};var V=s("VU/8")({name:"TopBar",components:{},data:function(){return{userStatus:this.$store.state.userStatus}},computed:{user:function(){return this.$store.state.user}},methods:{logout:function(){this.$store.dispatch("logoutUser")}}},b,!1,function(t){s("1eDy")},"data-v-34977df9",null).exports,K={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"modal"}},[s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-wrapper"},[s("div",{staticClass:"modal-container"},[s("div",{staticClass:"modal-header"},[s("h4",[t._v("\n            Create a Keep\n          ")]),t._v(" "),s("button",{staticClass:"btn btn-danger",on:{click:function(e){t.$emit("close")}}},[t._v("\n            close\n          ")])]),t._v(" "),s("div",{staticClass:"modal-body"},[s("form",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.title,expression:"newKeep.title"}],attrs:{placeholder:"title",required:""},domProps:{value:t.newKeep.title},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"title",e.target.value)}}}),t._v(" "),s("p",[t._v("Title...required")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.img,expression:"newKeep.img"}],attrs:{placeholder:"Img",required:""},domProps:{value:t.newKeep.img},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"img",e.target.value)}}}),t._v(" "),s("p",[t._v("Img...required")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.link,expression:"newKeep.link"}],attrs:{placeholder:"link",required:""},domProps:{value:t.newKeep.link},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"link",e.target.value)}}}),t._v(" "),s("p",[t._v("Link...required")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newKeep.tags,expression:"newKeep.tags"}],attrs:{placeholder:"tags",required:""},domProps:{value:t.newKeep.tags},on:{input:function(e){e.target.composing||t.$set(t.newKeep,"tags",e.target.value)}}}),t._v(" "),s("p",[t._v("Tags...required")]),t._v(" "),s("button",{staticClass:"btn btn-success form-btn",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.sendKeep(e)}}},[t._v("Submit")])])]),t._v(" "),s("div",{staticClass:"modal-footer"})])])])])},staticRenderFns:[]};var $=s("VU/8")({name:"KeepCreator",data:function(){return{newKeep:{img:"",link:"",tags:"",title:"",userId:this.$store.state.user.id}}},methods:{sendKeep:function(){this.$store.dispatch("createKeep",this.newKeep),this.newKeep={img:"",link:"",tags:"",title:""},this.$emit("close")}}},K,!1,function(t){s("G/TD")},"data-v-07242685",null).exports,x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"modal"}},[s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-wrapper"},[s("div",{staticClass:"modal-container"},[s("div",{staticClass:"modal-header"},[s("h4",[t._v("\n            Create a Vault\n          ")]),t._v(" "),s("button",{staticClass:"btn btn-danger",on:{click:function(e){t.$emit("close")}}},[t._v("\n            close\n          ")])]),t._v(" "),s("div",{staticClass:"modal-body"},[s("form",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newVault.name,expression:"newVault.name"}],attrs:{placeholder:"name",required:""},domProps:{value:t.newVault.name},on:{input:function(e){e.target.composing||t.$set(t.newVault,"name",e.target.value)}}}),t._v(" "),s("p",[t._v("Title...required")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newVault.description,expression:"newVault.description"}],attrs:{placeholder:"description",required:""},domProps:{value:t.newVault.description},on:{input:function(e){e.target.composing||t.$set(t.newVault,"description",e.target.value)}}}),t._v(" "),s("p",[t._v("Description...required")]),t._v(" "),s("button",{staticClass:"btn btn-success form-btn",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.sendVault(e)}}},[t._v("Submit")])])])])])])])},staticRenderFns:[]};var S=s("VU/8")({name:"VaultCreator",data:function(){return{newVault:{description:"",name:"",userId:this.$store.state.user.id}}},methods:{sendVault:function(){this.$store.dispatch("createVault",this.newVault),this.newVault={name:"",description:""},this.$emit("close")}}},x,!1,function(t){s("oNe2")},"data-v-93725744",null).exports,U={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row mykeeps"},[s("div",{staticClass:"col-sm-12 col-md-6 col-lg-3 ml-3 mr-3 "},[s("div",{staticClass:"card",staticStyle:{width:"18rem"},on:{mouseenter:function(e){t.keepButtons=!0},mouseleave:function(e){t.keepButtons=!1}}},[s("img",{staticClass:"card-img-top img",attrs:{src:t.imgLink,alt:"Card image cap"}}),t._v(" "),s("div",{staticClass:"card-body"},[s("a",{staticClass:"btn btn-link",attrs:{href:t.link,target:"_blank"}},[t._v(t._s(t.keep.title))]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col text-center"},[s("span",[t._v("Keep "+t._s(t.keep.countKeep))]),t._v(" "),s("span",[t._v("Share "+t._s(t.keep.countShare))]),t._v(" "),s("span",[t._v("View "+t._s(t.keep.countView))])])]),t._v(" "),s("hr"),t._v(" "),s("div",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-3 mr-3"},[s("Button",{staticClass:"btn-danger",on:{click:t.removeKeep}},[s("i",{staticClass:"fas fa-trash"})])],1),t._v(" "),s("div",{staticClass:"col-6"},[s("div",{},[s("label",{staticClass:"switch"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.shared,expression:"shared"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.shared)?t._i(t.shared,null)>-1:t.shared},on:{change:function(e){var s=t.shared,a=e.target,n=!!a.checked;if(Array.isArray(s)){var i=t._i(s,null);a.checked?i<0&&(t.shared=s.concat([null])):i>-1&&(t.shared=s.slice(0,i).concat(s.slice(i+1)))}else t.shared=n}}}),t._v(" "),s("span",{staticClass:"slider round"})]),t._v(" "),s("p",{},[t.shared?t._e():s("span",[t._v("Private")]),t._v(" "),t.shared?s("span",[t._v("Shared")]):t._e()])])])]),t._v(" "),s("hr")])])])])])},staticRenderFns:[]};var y=s("VU/8")({name:"MyKeeps",data:function(){return{shareBox:!1,keepButtons:!1,keepToVault:!1,selectedVault:"",shared:this.keep.shared,loggedIn:this.$store.state.userStatus,link:this.keep.link}},watch:{shared:function(t){1==t?(this.keep.shared=1,this.$store.dispatch("updateKeep",this.keep)):(this.keep.shared=0,this.$store.dispatch("updateKeep",this.keep))}},computed:{imgLink:function(){return this.keep.img},vaults:function(){return this.$store.state.allUserVaults}},props:["keep","user"],methods:{removeKeep:function(){this.$store.dispatch("deleteKeep",this.keep)},addToVault:function(){if(""!==this.selectedVault){var t={userId:this.user.id,keepId:this.keep.id,vaultId:this.selectedVault};this.$store.dispatch("addToVault",t),this.selectedVault=""}}}},U,!1,function(t){s("wSul")},null,null).exports,I={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row vaultKeeps"},[s("div",{staticClass:"col-sm-12 col-md-6 col-lg-3 ml-3 mr-3 "},[s("div",{staticClass:"card",staticStyle:{width:"18rem"},on:{mouseenter:function(e){t.keepButtons=!0},mouseleave:function(e){t.keepButtons=!1}}},[s("img",{staticClass:"card-img-top img",attrs:{src:t.imgLink,alt:"Card image cap"}}),t._v(" "),s("a",{staticClass:"text-center",attrs:{href:t.link,target:"_blank"},on:{click:t.addViewCount}},[t._v(t._s(t.keep.title))]),t._v(" "),s("div",{staticClass:"card-body"},[s("hr"),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col text-center"},[s("span",[t._v("Keep "+t._s(t.keep.countKeep))]),t._v(" "),s("span",[t._v("Share "+t._s(t.keep.countShare))]),t._v(" "),s("span",[t._v("View "+t._s(t.keep.countView))])])]),t._v(" "),s("hr"),t._v(" "),t.loggedIn?s("div",[s("div",{staticClass:"row"},[(t.keepButtons=!!t.keepButtons)?s("div",{staticClass:"col-12 text-center "},[s("Button",{staticClass:"btn btn-dark",on:{click:function(e){t.shareBox=!t.shareBox}}},[s("i",{staticClass:"fas fa-share-alt"})])],1):t._e()]),t._v(" "),s("div",{staticClass:"row mt-3"},[s("div",{staticClass:"col-sm-12 text-center"},[t.shareBox?s("div",{staticClass:"shareButton"},[s("a",{staticClass:"share-icon",attrs:{href:t.facebook,target:"_blank",title:"Share on Facebook"},on:{click:t.addShareCount}},[s("i",{staticClass:"fa-2x fab fa-facebook"})]),t._v(" "),s("a",{staticClass:"share-icon",attrs:{href:t.twitter,target:"_blank"},on:{click:t.addShareCount}},[s("i",{staticClass:"fa-2x fab fa-twitter"})])]):t._e()])]),t._v(" "),s("div",{staticClass:"col"},[t.keepToVault?s("div",{staticClass:"text-center keepButton mt-3",on:{mouseleave:function(e){t.keepToVault=!1}}},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedVault,expression:"selectedVault"}],on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectedVault=e.target.multiple?s:s[0]},t.addToVault]}},[s("option",{attrs:{disabled:"",value:""}},[t._v("Please select one")]),t._v(" "),t._l(t.vaults,function(e){return s("option",{key:e.id,domProps:{value:e.id}},[t._v(t._s(e.name))])})],2)]):t._e()])]):t._e()])])])])},staticRenderFns:[]};var R={name:"Vault",components:{vaultKeeps:s("VU/8")({name:"VaultKeeps",data:function(){return{shareBox:!1,keepButtons:!1,keepToVault:!1,selectedVault:"",shared:this.keep.shared,link:this.keep.link}},watch:{shared:function(t){1==t?(this.keep.shared=1,this.$store.dispatch("updateKeep",this.keep)):(this.keep.shared=0,this.$store.dispatch("updateKeep",this.keep))}},computed:{imgLink:function(){return this.keep.img},vaults:function(){return this.$store.state.allUserVaults},loggedIn:function(){return this.$store.state.userStatus},facebook:function(){return"https://www.facebook.com/sharer/sharer.php?u=https://localhost:5000/"+this.keep.id+"&t=Keepr"},twitter:function(){return"https://twitter.com/intent/tweet?url=https://localhost:5000/"+this.keep.id+"&text=Keepr&via=Keepr"}},props:["keep","user"],methods:{removeKeep:function(){var t={userId:this.user.id,keepId:this.keep.id,vaultId:this.selectedVault};this.$store.dispatch("deleteVaultKeep",t)},moveToOtherVault:function(){var t={userId:this.user.id,keepId:this.keep.id,vaultId:this.selectedVault};this.$store.dispatch("moveToOtherVault",t),this.selectedVault=""},addViewCount:function(){var t=this.keep,e=t.countView+1;t.countView=e,this.$store.dispatch("updateKeep",t)},addShareCount:function(){var t=this.keep,e=t.countShare+1;t.countShare=e,this.$store.dispatch("updateKeep",t)}}},I,!1,function(t){s("A4Vb")},null,null).exports},data:function(){return{}},computed:{keeps:function(){return this.$store.state.userStoredVaultKeeps}}},B={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"modal"}},[s("div",{staticClass:"singleVault row"},[s("div",{staticClass:"col-4"},[s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-wrapper"},[s("div",{staticClass:"modal-container"},[s("div",{staticClass:"modal-header"},[s("h3",[t._v("These are your keeps in this Vault!")])]),t._v(" "),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"row ml-4"},t._l(t.keeps,function(t){return s("vaultKeeps",{key:t.id,attrs:{keep:t}})}))]),t._v(" "),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-danger",on:{click:function(e){t.$emit("close")}}},[t._v("\n                  close\n                ")])])])])])])])])},staticRenderFns:[]};var E={name:"MyVaults",components:{vault:s("VU/8")(R,B,!1,function(t){s("5OYB")},"data-v-2c09134d",null).exports},data:function(){return{showVault:!1}},props:["vault"],methods:{removeVault:function(){this.$store.dispatch("removeVault",this.vault)},getVaultKeeps:function(){this.showVault=!0,this.$store.dispatch("getUserStoredVaultKeeps",this.vault.id)}}},T={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-2 ml-3 mr-3 mt-5 vault"},[s("h3",{staticClass:"text-center text-light"},[t._v(t._s(t.vault.name))]),t._v(" "),s("hr"),t._v(" "),s("h5",{staticClass:"text-center text-light"},[t._v(t._s(t.vault.description))]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"row"},[s("hr"),t._v(" "),s("div",{staticClass:"col text-center"},[s("Button",{staticClass:"btn btn-sm btn-info",on:{click:t.getVaultKeeps}},[t._v("open")]),t._v(" "),s("Button",{staticClass:"btn btn-sm btn-danger",on:{click:t.removeVault}},[t._v("Delete")])],1)]),t._v(" "),t.showVault?s("vault",{on:{close:function(e){t.showVault=!1}}}):t._e()],1)},staticRenderFns:[]};var A={name:"Dashboard",components:{myKeeps:y,myVaults:s("VU/8")(E,T,!1,function(t){s("4U7s")},null,null).exports,keepCreator:$,vaultCreator:S},data:function(){return{showKeepCreator:!1,showVaultCreator:!1}},computed:{vaults:function(){return this.$store.state.allUserVaults},keeps:function(){return this.$store.state.allUserKeeps}}},D={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dashboard"},[t.showKeepCreator?s("keepCreator",{on:{close:function(e){t.showKeepCreator=!1}}}):t._e(),t._v(" "),t.showVaultCreator?s("vaultCreator",{on:{close:function(e){t.showVaultCreator=!1}}}):t._e(),t._v(" "),s("div",{staticClass:"row menu"},[t._m(0),t._v(" "),s("div",{staticClass:"col-sm-2"},[s("button",{staticClass:"btn btn-info ",on:{click:function(e){t.showKeepCreator=!0}}},[s("i",{staticClass:"fab fa-kickstarter-k"})]),t._v(" "),s("button",{staticClass:"btn btn-danger",on:{click:function(e){t.showVaultCreator=!0}}},[s("i",{staticClass:"fas fa-archive"})])]),t._v(" "),s("div",{staticClass:"col-sm-2"},[s("button",{staticClass:"btn btn-light px-4",on:{click:function(e){t.$emit("closeDashboard")}}},[t._v("close")])])]),t._v(" "),s("div",{staticClass:"row ml-4"},[s("div",{staticClass:"col"},[t._m(1),t._v(" "),s("div",{staticClass:"row"},t._l(t.vaults,function(t){return s("myVaults",{key:t.id,attrs:{vault:t}})})),t._v(" "),t._m(2)])]),t._v(" "),s("div",{staticClass:"row ml-4"},[s("div",{staticClass:"col"},[t._m(3),t._v(" "),s("div",{staticClass:"row keeps"},t._l(t.keeps,function(t){return s("myKeeps",{key:t.id,attrs:{keep:t}})}))])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-8"},[e("h1",{staticClass:"h3 text-light font-weight-bold "},[this._v("Dashboard")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("h3",{staticClass:"text-center text-light"},[this._v("My Vaults")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("h3",{staticClass:"text-center text-light"},[this._v("My Keeps")])])])}]};var F={name:"User",components:{bottom:c,topBar:V,keeps:f,dashboard:s("VU/8")(A,D,!1,function(t){s("fKd5")},null,null).exports},data:function(){return{showDashboard:!1,user:this.$store.state.user}},computed:{keeps:function(){return this.$store.state.allSharedKeeps}},methods:{closeDashboard:function(){this.showDashboard=!1}}},N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user"},[s("topBar",{attrs:{user:t.user},on:{showDashboard:function(e){t.showDashboard=!0}}}),t._v(" "),t.showDashboard?s("dashboard",{on:{close:function(e){t.showDashboard=!1},closeDashboard:function(e){t.closeDashboard(e)}}}):t._e(),t._v(" "),s("div",{staticClass:"row"},t._l(t.keeps,function(e){return s("keeps",{key:e.id,attrs:{user:t.user,keep:e}})})),t._v(" "),s("bottom")],1)},staticRenderFns:[]};var P=s("VU/8")(F,N,!1,function(t){s("3HWY")},"data-v-aba99b02",null).exports;a.a.use(r.a);var L=new r.a({mode:"history",routes:[{path:"/",name:"Home",component:w},{path:"/main",name:"User",component:P}]}),q=s("NYxO"),H=s("mtWM"),M=s.n(H),Y=(window.location.host.includes("localhost"),"//localhost:5000/"),O=M.a.create({baseURL:Y+"api/",timeout:3e3,withCredentials:!0}),W=M.a.create({baseURL:Y+"auth/",timeout:3e3,withCredentials:!0});M.a.create({baseURL:Y,timeout:3e3,withCredentials:!0});a.a.use(q.a);var j=new q.a.Store({state:{user:{},authError:{error:!1,message:""},allSharedKeeps:[],allUserKeeps:[],allUserVaults:[],userStoredVaultKeeps:{},userStatus:!1},mutations:{setUser:function(t,e){t.user=e},setUserStatus:function(t,e){t.userStatus=e},setAuthError:function(t,e){t.authError={error:e.error,message:e.message}},setSharedKeeps:function(t,e){t.allSharedKeeps=e},setUserKeeps:function(t,e){t.allUserKeeps=e},setVaults:function(t,e){t.allUserVaults=e},setUserVaultKeeps:function(t,e){t.userStoredVaultKeeps=e}},actions:{registerUser:function(t,e){var s=t.commit;t.dispatch;W.post("Account/Register",e).then(function(t){var e=t.data;s("setUser",e),s("setAuthError",{error:!1,message:""}),s("setUserStatus",!0),L.push({name:"User"})}).catch(function(t){s("setAuthError",{error:!0,message:"Register failed: Invalid username, email, or password given"})})},loginUser:function(t,e){var s=t.commit,a=t.dispatch;W.post("Account/Login",e).then(function(t){var e=t.data;s("setUser",e),""==e?(s("setAuthError",{error:!0,message:"Log-in failed: Invalid username or password"}),L.push({name:"Home"})):(s("setUserStatus",!0),a("getUserKeeps",e.id),a("getUserVaults",e.id),a("getAllSharedKeeps"),L.push({name:"User"}))}).catch(function(t){s("setAuthError",{error:!0,message:"Log-in failed: Invalid username or password"})})},authenticateUser:function(t){var e=t.commit,s=t.dispatch;W.get("Account/authenticate").then(function(t){var a=t.data;e("setUser",a),e("setUserStatus",!0),s("getUserKeeps",a.id),s("getUserVaults",a.id),s("getAllSharedKeeps"),L.push({name:"User"})}).catch(function(t){})},logoutUser:function(t){var e=t.commit;t.dispatch;W.delete("Account/Logout").then(function(){e("setUser",{}),e("setAuthError",{error:!1,message:""}),e("setUserStatus",!1),e("setUserKeeps",[]),e("setVaults",[]),e("setUserVaultKeeps",{}),L.push({name:"Home"})}).catch(function(t){})},getUserVaults:function(t,e){var s=t.commit;t.dispatch;O.get("/vaults/user/"+e).then(function(t){var e=t.data;s("setVaults",e)}).catch(function(t){})},createVault:function(t,e){t.commit;var s=t.dispatch;O.post("/vaults",e).then(function(t){s("getUserVaults",e.userId).catch(function(t){})})},removeVault:function(t,e){t.commit;var s=t.dispatch;O.delete("/vaults/"+e.id).then(function(t){s("getUserVaults",e.userId).catch(function(t){})})},addToVault:function(t,e){t.commit;var s=t.dispatch;O.post("/vaults/stored",e).then(function(t){var e=t.data;s("getUserStoredKeeps",e.vaultId).catch(function(t){})})},getUserStoredVaultKeeps:function(t,e){var s=t.commit;t.dispatch;O.get("/keeps/storedKeep/"+e).then(function(t){var e=t.data;s("setUserVaultKeeps",e)}).catch(function(t){})},getAllSharedKeeps:function(t){var e=t.commit;t.dispatch;O.get("/Keeps/sharedKeep").then(function(t){var s=t.data;e("setSharedKeeps",s)}).catch(function(t){})},getUserKeeps:function(t,e){var s=t.commit;t.dispatch;O.get("/Keeps/user/"+e).then(function(t){var e=t.data;s("setUserKeeps",e)}).catch(function(t){})},createKeep:function(t,e){t.commit;var s=t.dispatch;O.post("/Keeps",e).then(function(t){s("getUserKeeps",e.userId).catch(function(t){})})},updateKeep:function(t,e){t.commit;var s=t.dispatch;O.put("/Keeps/"+e.id,e).then(function(t){s("getUserKeeps",e.userId),s("getAllSharedKeeps").catch(function(t){})})},deleteKeep:function(t,e){t.commit;var s=t.dispatch;O.delete("/Keeps/"+e.id).then(function(t){s("getUserKeeps",e.userId).catch(function(t){})})}}});a.a.config.productionTip=!1,new a.a({el:"#app",router:L,store:j,components:{App:i},template:"<App/>"})},T28y:function(t,e){},fKd5:function(t,e){},kaas:function(t,e){},"o+zY":function(t,e){},oNe2:function(t,e){},tmxd:function(t,e){},wSul:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f2ede70b86bf4d84e7e4.js.map