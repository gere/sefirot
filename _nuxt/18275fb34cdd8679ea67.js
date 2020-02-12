(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{368:function(t,e,n){},372:function(t,e,n){"use strict";var l=n(2),component=Object(l.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M9,18c-0.3,0-0.5-0.1-0.7-0.3l-5-5c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0L9,15.6L19.3,5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-11,11C9.5,17.9,9.3,18,9,18z"}})])}),[],!1,null,null,null);e.a=component.exports},399:function(t,e,n){"use strict";var l=n(368);n.n(l).a},435:function(t,e,n){"use strict";var l=n(372),r=n(365),o={components:{SIconCheck:l.a,SInputBase:r.a},model:{prop:"value",event:"change"},props:{name:{type:String,default:null},label:{type:String,default:null},note:{type:String,default:null},help:{type:String,default:null},text:{type:String,required:!0},value:{type:Boolean,required:!0}},methods:{emitChange:function(){this.$emit("change",!this.value)}}},c=(n(399),n(2)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SInputBase",{staticClass:"SInputCheckbox",attrs:{name:t.name,label:t.label,note:t.note,help:t.help}},[n("div",{staticClass:"container"},[n("div",{staticClass:"input",class:{on:t.value},attrs:{role:"button"},on:{click:t.emitChange}},[n("div",{staticClass:"box"},[n("div",{staticClass:"check"},[n("SIconCheck",{staticClass:"check-icon"})],1)]),t._v(" "),n("p",{staticClass:"text"},[t._v(t._s(t.text))])])])])}),[],!1,null,"f0e270f2",null);e.a=component.exports},519:function(t,e,n){"use strict";n.r(e);var l=n(435),r=n(354),o={components:{SInputCheckbox:l.a,StoryBase:r.a},data:function(){return{form:{input:!1}}}},c=n(2),h=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("StoryBase",[n("SInputCheckbox",{attrs:{name:"input01",label:"Label",note:"Note text",text:"Text for the checkbox",help:"This is a help text."},model:{value:t.form.input,callback:function(e){t.$set(t.form,"input",e)},expression:"form.input"}})],1),t._v(" "),t._m(0)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"hljs"},[n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("SInputCheckbox")]),t._v("\n    "),n("span",{staticClass:"hljs-attr"},[t._v("name")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"input01"')]),t._v("\n    "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Label"')]),t._v("\n    "),n("span",{staticClass:"hljs-attr"},[t._v("note")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Note text"')]),t._v("\n    "),n("span",{staticClass:"hljs-attr"},[t._v("text")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Text for the checkbox"')]),t._v("\n    "),n("span",{staticClass:"hljs-attr"},[t._v("help")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"This is a help text."')]),t._v("\n    "),n("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"form.input"')]),t._v("\n  />")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),n("span",{staticClass:"javascript"},[t._v("\n"),n("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" SInputCheckbox "),n("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),n("span",{staticClass:"hljs-string"},[t._v("'@globalbrains/sefirot/lib/components/SInputCheckbox'")]),t._v("\n\n"),n("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),n("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  "),n("span",{staticClass:"hljs-attr"},[t._v("components")]),t._v(": {\n    SInputCheckbox\n  },\n\n  data () {\n    "),n("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),n("span",{staticClass:"hljs-attr"},[t._v("form")]),t._v(": {\n        "),n("span",{staticClass:"hljs-attr"},[t._v("input")]),t._v(": "),n("span",{staticClass:"hljs-literal"},[t._v("false")]),t._v("\n      }\n    }\n  }\n}\n")]),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")])])])}],!1,null,null,null).exports,v=n(358),_=n(361),d={components:{StoryInputCheckboxShowcase:h,SpecProps:v.a,SpecEvents:_.a},data:function(){return{props:[{name:"name",type:"String",required:!1,default:"null",description:"The name for the field. It will be set to `for` attribute at label, and `id` attribute at input so that when user clicks the label, the input will get focus."},{name:"label",type:"String",required:!1,default:"null",description:"The label for the input."},{name:"note",type:"String",required:!1,default:"null",description:"The small note text that will be displayed next to label. The note should be short for example `Optional` or `Max length 160`."},{name:"text",type:"String",required:!1,default:"null",description:"The label text for the checkbox."},{name:"help",type:"String",required:!1,default:"null",description:"The help text that will be displayed under the input. Useful to add a little detailed information about the input."},{name:"value",type:"Boolean",required:!1,default:"null",description:"The value of the input. It must be `true` or `false`."}],events:[{name:"change",description:"Fires when a user clicks the checkbox."}]}},head:{title:"Inputs: Checkbox"},scrollToTop:!0},C=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Inputs: Checkbox")]),t._v(" "),n("p",[t._v("Checkbox allow the user to select one item. Checkbox can be used to turn an option on or off.")]),t._v(" "),n("StoryInputCheckboxShowcase"),t._v(" "),n("h2",[t._v("API")]),t._v(" "),n("SpecProps",{attrs:{props:t.props}}),t._v(" "),n("SpecEvents",{attrs:{events:t.events}})],1)}),[],!1,null,null,null);e.default=C.exports}}]);