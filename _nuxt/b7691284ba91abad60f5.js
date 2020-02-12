(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{414:function(t,e,n){},415:function(t,e,n){},483:function(t,e,n){"use strict";var l=n(414);n.n(l).a},484:function(t,e,n){"use strict";var l=n(415);n.n(l).a},511:function(t,e,n){"use strict";n.r(e);n(134);var l={components:{SInputBase:n(365).a},props:{name:{type:String,default:null},label:{type:String,default:null},note:{type:String,default:null},help:{type:String,default:null},type:{type:String,default:"text"},mode:{type:String,default:"default"},placeholder:{type:String,default:null},rows:{type:Number,default:3},value:{type:[String,Number],default:null},validation:{type:Object,default:null}},computed:{classes:function(){return{default:"default"===this.mode,clear:"clear"===this.mode}}},methods:{emitInput:function(t){this.$emit("input",t.target.value)},emitBlur:function(t){this.validation&&this.validation.$touch(),this.$emit("blur",t.target.value)}}},r=(n(483),n(2)),o=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SInputBase",{staticClass:"SInputTextarea",attrs:{name:t.name,label:t.label,note:t.note,help:t.help,validation:t.validation}},[n("div",{staticClass:"container"},[n("textarea",{staticClass:"input",class:t.classes,attrs:{id:t.name,placeholder:t.placeholder,rows:t.rows},domProps:{value:t.value},on:{input:t.emitInput,blur:t.emitBlur}})])])}),[],!1,null,"0e3b9102",null).exports,v=n(354),c={components:{SInputTextarea:o,StoryBase:v.a},data:function(){return{form:{input:""}}}},_=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("StoryBase",[n("SInputTextarea",{attrs:{name:"input",label:"Label",note:"Note text",help:"This is a help text.",placeholder:"Placeholder text.",rows:5},model:{value:t.form.input,callback:function(e){t.$set(t.form,"input",e)},expression:"form.input"}})],1),t._v(" "),t._m(0)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"hljs"},[n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("SInputTextarea")]),t._v("\n    "),n("span",{staticClass:"hljs-attr"},[t._v("name")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"input"')]),t._v("\n    "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Label"')]),t._v("\n    "),n("span",{staticClass:"hljs-attr"},[t._v("note")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Note text"')]),t._v("\n    "),n("span",{staticClass:"hljs-attr"},[t._v("help")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"This is a help text."')]),t._v("\n    "),n("span",{staticClass:"hljs-attr"},[t._v("placeholder")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"Placeholder text."')]),t._v("\n    "),n("span",{staticClass:"hljs-attr"},[t._v(":rows")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"5"')]),t._v("\n    "),n("span",{staticClass:"hljs-attr"},[t._v("v-model")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"form.input"')]),t._v("\n  />")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),n("span",{staticClass:"javascript"},[t._v("\n"),n("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" SInputTextarea "),n("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),n("span",{staticClass:"hljs-string"},[t._v("'@globalbrain/sefirot/lib/components/inputs/SInputTextarea'")]),t._v("\n\n"),n("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),n("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  "),n("span",{staticClass:"hljs-attr"},[t._v("components")]),t._v(": {\n    SInputTextarea\n  },\n\n  data () {\n    "),n("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),n("span",{staticClass:"hljs-attr"},[t._v("form")]),t._v(": {\n        "),n("span",{staticClass:"hljs-attr"},[t._v("input")]),t._v(": "),n("span",{staticClass:"hljs-string"},[t._v("''")]),t._v("\n      }\n    }\n  }\n}\n")]),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")])])])}],!1,null,null,null).exports,h={components:{SInputTextarea:o,StoryBase:v.a},data:function(){return{input:""}}},d=(n(484),Object(r.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("StoryBase",{attrs:{title:"Button Modes"}},[n("SInputTextarea",{attrs:{mode:"clear",placeholder:"Placeholder text",rows:10},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})],1),t._v(" "),t._m(0)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",{staticClass:"hljs"},[n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("SButton")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"NEUTRAL"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("mode")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"neutral"')]),t._v(" />")]),t._v("\n  "),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("SButton")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"INFO"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("mode")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"info"')]),t._v(" />")]),t._v("\n  "),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("SButton")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"SUCCESS"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("mode")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"success"')]),t._v(" />")]),t._v("\n  "),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("SButton")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"WARNING"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("mode")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"warning"')]),t._v(" />")]),t._v("\n  "),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("SButton")]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("label")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"DANGER"')]),t._v(" "),n("span",{staticClass:"hljs-attr"},[t._v("mode")]),t._v("="),n("span",{staticClass:"hljs-string"},[t._v('"danger"')]),t._v(" />")]),t._v("\n"),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),n("span",{staticClass:"hljs-tag"},[t._v("<"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),n("span",{staticClass:"javascript"},[t._v("\n"),n("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" SButton "),n("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),n("span",{staticClass:"hljs-string"},[t._v("'@globalbrains/sefirot/lib/components/buttons/SButton'")]),t._v("\n\n"),n("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),n("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  "),n("span",{staticClass:"hljs-attr"},[t._v("components")]),t._v(": {\n    SButton\n  }\n}\n")]),n("span",{staticClass:"hljs-tag"},[t._v("</"),n("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")])])])}],!1,null,"27d43231",null).exports),m=n(358),C=n(361),j={components:{StoryInputTextareaShowcase:_,StoryInputTextareaEXClear:d,SpecProps:m.a,SpecEvents:C.a},data:function(){return{props:[{name:"name",type:"String",required:!1,default:"null",description:"The name for the field. It will be set to `for` attribute at label, and `id` attribute at input so that when user clicks the label, the input will get focus."},{name:"label",type:"String",required:!1,default:"null",description:"The label for the input."},{name:"note",type:"String",required:!1,default:"null",description:"The small note text that will be displayed next to label. The note should be short for example `Optional` or `Max length 160`."},{name:"help",type:"String",required:!1,default:"null",description:"The help text that will be displayed under the input. Useful to add a little detailed information about the input."},{name:"placeholder",type:"String",required:!1,default:"null",description:"The placeholder text for the input."},{name:"rows",type:"Number",required:!1,default:"3",description:"The rows of the textarea. The minimum height is set to 3 rows, so passing lower value than 3 would not take effect."},{name:"value",type:"String | Number",required:!1,default:"null",description:"The value of the input. You may also use `v-model` to bind a value to the input."},{name:"validation",type:"Vuelidate",required:!1,default:"null",description:"You can pass Vuelidate validation object to let input display any errors."}],events:[{name:"input",description:"Fires when a user input any value to the filed."},{name:"blur",description:"Fires when a user blur focus from the filed."}]}},head:{title:"Inputs: Textarea"},scrollToTop:!0},f=Object(r.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h1",[t._v("Inputs: Textarea")]),t._v(" "),n("p",[t._v("Textarea input let users enter and edit multi line text.")]),t._v(" "),n("StoryInputTextareaShowcase"),t._v(" "),n("h2",[t._v("Examples")]),t._v(" "),n("h3",[t._v("Clear Mode")]),t._v(" "),t._m(0),t._v(" "),n("StoryInputTextareaEXClear"),t._v(" "),n("h2",[t._v("API")]),t._v(" "),n("SpecProps",{attrs:{props:t.props}}),t._v(" "),n("SpecEvents",{attrs:{events:t.events}})],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You can remove the border and background color by setting the "),e("code",[this._v("mode")]),this._v(" option to "),e("code",[this._v("clear")]),this._v(".")])}],!1,null,null,null);e.default=f.exports}}]);