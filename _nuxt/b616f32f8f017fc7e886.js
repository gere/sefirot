(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{354:function(t,l,n){"use strict";var e=n(3),v=Object(e.b)({props:{title:{type:String,default:null}}}),c=(n(359),n(2)),component=Object(c.a)(v,(function(){var t=this.$createElement,l=this._self._c||t;return l("article",{staticClass:"StoryBase"},[this.title?l("h1",{staticClass:"title"},[this._v(this._s(this.title))]):this._e(),this._v(" "),l("div",{staticClass:"component"},[this._t("default")],2)])}),[],!1,null,"ecaac85c",null);l.a=component.exports},355:function(t,l,n){},359:function(t,l,n){"use strict";var e=n(355);n.n(e).a},417:function(t,l,n){},486:function(t,l,n){"use strict";var e=n(417);n.n(e).a},522:function(t,l,n){"use strict";n.r(l);var e=n(38),v=n(354),c={components:{SButton:e.a,StoryBase:v.a},data:function(){return{interval:null}},methods:{openDialog01:function(){this.$store.dispatch("dialog/open",{title:"The dialog title.",text:"This is the dialog message.",actions:[{type:"mute",label:"DISMISS",callback:this.close},{label:"CLOSE DIALOG",callback:this.close}]})},openDialog02:function(){var t=this;this.$store.dispatch("dialog/open",{type:"loading",title:"The dialog title.",text:"This is the dialog message. The dialog will be closed after 5 sec for this demo."}),setTimeout((function(){t.close()}),5e3)},openDialog03:function(){var t=this,l=0;this.$store.dispatch("dialog/open",{type:"progress",title:"The dialog title.",text:"This is the dialog message.",progress:{now:l,max:100}}),this.interval=setInterval((function(){(l+=2.125)<100?t.$store.dispatch("dialog/update",{progress:{now:l,max:100}}):(clearInterval(t.interval),t.close())}),250)},close:function(){this.$store.dispatch("modal/close")}}},_=(n(486),n(2)),o={components:{StoryDialogsShowcase:Object(_.a)(c,(function(){var t=this.$createElement,l=this._self._c||t;return l("section",[l("StoryBase",[l("div",{staticClass:"list"},[l("div",{staticClass:"item"},[l("SButton",{attrs:{label:"CONFIRM"},on:{click:this.openDialog01}})],1),this._v(" "),l("div",{staticClass:"item"},[l("SButton",{attrs:{label:"LOADING"},on:{click:this.openDialog02}})],1),this._v(" "),l("div",{staticClass:"item"},[l("SButton",{attrs:{label:"PROGRESS"},on:{click:this.openDialog03}})],1)])]),this._v(" "),this._m(0)],1)}),[function(){var t=this,l=t.$createElement,n=t._self._c||l;return n("pre",[n("code",{staticClass:"hljs"},[n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("SButton")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"CONFIRM"')]),t._v(" @"),n("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"openDialog01"')]),t._v(" />")]),t._v("\n  "),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("SButton")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"LOADING"')]),t._v(" @"),n("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"openDialog02"')]),t._v(" />")]),t._v("\n  "),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("SButton")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"PROGRESS"')]),t._v(" @"),n("span",{staticClass:"hljs-attr"},[t._v("click")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"openDialog03"')]),t._v(" />")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),n("span",{staticClass:"javascript"},[t._v("\n"),n("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" SButton "),n("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),n("span",{staticClass:"hljs-string"},[t._v("'@globalbrain/sefirot/lib/components/buttons/SButton'")]),t._v("\n\n"),n("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),n("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  "),n("span",{staticClass:"hljs-attr"},[t._v("components")]),t._v(": {\n    SButton\n  },\n\n  data () {\n    "),n("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),n("span",{staticClass:"hljs-attr"},[t._v("interval")]),t._v(": "),n("span",{staticClass:"hljs-literal"},[t._v("null")]),t._v("\n    }\n  },\n\n  "),n("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    openDialog01 () {\n      "),n("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".$store.dispatch("),n("span",{staticClass:"hljs-string"},[t._v("'dialog/open'")]),t._v(", {\n        "),n("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v(": "),n("span",{staticClass:"hljs-string"},[t._v("'The dialog title.'")]),t._v(",\n        "),n("span",{staticClass:"hljs-attr"},[t._v("text")]),t._v(": "),n("span",{staticClass:"hljs-string"},[t._v("'This is the dialog message.'")]),t._v(",\n        "),n("span",{staticClass:"hljs-attr"},[t._v("actions")]),t._v(": [\n          { "),n("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v(": "),n("span",{staticClass:"hljs-string"},[t._v("'mute'")]),t._v(", "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v(": "),n("span",{staticClass:"hljs-string"},[t._v("'DISMISS'")]),t._v(", "),n("span",{staticClass:"hljs-attr"},[t._v("callback")]),t._v(": "),n("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".close },\n          { "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v(": "),n("span",{staticClass:"hljs-string"},[t._v("'CLOSE DIALOG'")]),t._v(", "),n("span",{staticClass:"hljs-attr"},[t._v("callback")]),t._v(": "),n("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".close }\n        ]\n      })\n    },\n\n    openDialog02 () {\n      "),n("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".$store.dispatch("),n("span",{staticClass:"hljs-string"},[t._v("'dialog/open'")]),t._v(", {\n        "),n("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v(": "),n("span",{staticClass:"hljs-string"},[t._v("'loading'")]),t._v(",\n        "),n("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v(": "),n("span",{staticClass:"hljs-string"},[t._v("'The dialog title.'")]),t._v(",\n        "),n("span",{staticClass:"hljs-attr"},[t._v("text")]),t._v(": "),n("span",{staticClass:"hljs-string"},[t._v("'This is the dialog message. The dialog will be closed after 5 sec for this demo.'")]),t._v("\n      })\n\n      setTimeout("),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-params"},[t._v("()")]),t._v(" =>")]),t._v(" { "),n("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".close() }, "),n("span",{staticClass:"hljs-number"},[t._v("5000")]),t._v(")\n    },\n\n    openDialog03 () {\n      "),n("span",{staticClass:"hljs-keyword"},[t._v("let")]),t._v(" now = "),n("span",{staticClass:"hljs-number"},[t._v("0")]),t._v("\n\n      "),n("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".$store.dispatch("),n("span",{staticClass:"hljs-string"},[t._v("'dialog/open'")]),t._v(", {\n        "),n("span",{staticClass:"hljs-attr"},[t._v("type")]),t._v(": "),n("span",{staticClass:"hljs-string"},[t._v("'progress'")]),t._v(",\n        "),n("span",{staticClass:"hljs-attr"},[t._v("title")]),t._v(": "),n("span",{staticClass:"hljs-string"},[t._v("'The dialog title.'")]),t._v(",\n        "),n("span",{staticClass:"hljs-attr"},[t._v("text")]),t._v(": "),n("span",{staticClass:"hljs-string"},[t._v("'This is the dialog message.'")]),t._v(",\n        "),n("span",{staticClass:"hljs-attr"},[t._v("progress")]),t._v(": { now, "),n("span",{staticClass:"hljs-attr"},[t._v("max")]),t._v(": "),n("span",{staticClass:"hljs-number"},[t._v("100")]),t._v(" }\n      })\n\n      "),n("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".interval = setInterval("),n("span",{staticClass:"hljs-function"},[n("span",{staticClass:"hljs-params"},[t._v("()")]),t._v(" =>")]),t._v(" {\n        now = now + "),n("span",{staticClass:"hljs-number"},[t._v("2.125")]),t._v("\n\n        "),n("span",{staticClass:"hljs-keyword"},[t._v("if")]),t._v(" (now < "),n("span",{staticClass:"hljs-number"},[t._v("100")]),t._v(") {\n          "),n("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".$store.dispatch("),n("span",{staticClass:"hljs-string"},[t._v("'dialog/update'")]),t._v(", {\n            "),n("span",{staticClass:"hljs-attr"},[t._v("progress")]),t._v(": { now, "),n("span",{staticClass:"hljs-attr"},[t._v("max")]),t._v(": "),n("span",{staticClass:"hljs-number"},[t._v("100")]),t._v(" }\n          })\n\n          "),n("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v("\n        }\n\n        clearInterval("),n("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".interval)\n\n        "),n("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".close()\n      }, "),n("span",{staticClass:"hljs-number"},[t._v("250")]),t._v(")\n    },\n\n    close () {\n      "),n("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".$store.dispatch("),n("span",{staticClass:"hljs-string"},[t._v("'modal/close'")]),t._v(")\n    }\n  }\n}\n")]),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")])])])}],!1,null,"5f0b5e56",null).exports},head:{title:"Modals: Dialog"},scrollToTop:!0},h=Object(_.a)(o,(function(){var t=this.$createElement,l=this._self._c||t;return l("section",[l("h1",[this._v("Modals: Dialog")]),this._v(" "),l("p",[this._v("Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks.")]),this._v(" "),l("StoryDialogsShowcase")],1)}),[],!1,null,null,null);l.default=h.exports}}]);