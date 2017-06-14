"use strict";define("ember-render-test/app",["exports","ember","ember-render-test/resolver","ember-load-initializers","ember-render-test/config/environment"],function(e,t,n,l,a){Object.defineProperty(e,"__esModule",{value:!0});var s=void 0;t.default.MODEL_FACTORY_INJECTIONS=!0,s=t.default.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:n.default}),(0,l.default)(s,a.default.modulePrefix),e.default=s}),define("ember-render-test/components/ember-collection",["exports","ember-collection/components/ember-collection"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-render-test/components/ember-native-scrollable",["exports","ember-collection/components/ember-native-scrollable"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-render-test/components/fork-me",["exports","ember-fork-me/components/fork-me"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-render-test/helpers/app-version",["exports","ember","ember-render-test/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,n,l){function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.hideSha?s.match(l.versionRegExp)[0]:t.hideVersion?s.match(l.shaRegExp)[0]:s}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=a;var s=n.default.APP.version;e.default=t.default.Helper.helper(a)}),define("ember-render-test/helpers/array",["exports","ember-helper"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=(0,t.helper)(function(e){return e})}),define("ember-render-test/helpers/fixed-grid-layout",["exports","ember","ember-collection/layouts/grid"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Helper.helper(function(e,t){return new n.default(e[0],e[1])})}),define("ember-render-test/helpers/mixed-grid-layout",["exports","ember","ember-collection/layouts/mixed-grid"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Helper.helper(function(e,t){return new n.default(e[0])})}),define("ember-render-test/helpers/percentage-columns-layout",["exports","ember","ember-collection/layouts/percentage-columns"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Helper.helper(function(e,t){return new n.default(e[0],e[1],e[2])})}),define("ember-render-test/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-render-test/config/environment"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0});var l=n.default.APP,a=l.name,s=l.version;e.default={name:"App Version",initialize:(0,t.default)(a,s)}}),define("ember-render-test/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("ember-render-test/initializers/export-application-global",["exports","ember","ember-render-test/config/environment"],function(e,t,n){function l(){var e=arguments[1]||arguments[0];if(!1!==n.default.exportApplicationGlobal){var l;if("undefined"!=typeof window)l=window;else if("undefined"!=typeof global)l=global;else{if("undefined"==typeof self)return;l=self}var a,s=n.default.exportApplicationGlobal;a="string"==typeof s?s:t.default.String.classify(n.default.modulePrefix),l[a]||(l[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete l[a]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=l,e.default={name:"export-application-global",initialize:l}}),define("ember-render-test/pods/application/route",["exports","ember-route","ember-string"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.extend({queryParams:{count:{refreshModel:!0}},model:function(e){var t=e.count;if(t=this._parseCount(t)){var n=this._produceItems(t);return{count:t,items:n,html:this._produceHtml({items:n,callback:this._produceHtmlItem}),styledHtml:this._produceHtml({items:n,callback:this._produceStyledHtmlItem})}}},_parseCount:function(e){return e=parseInt(e,10),"number"!=typeof e||isNaN(e)||e<1?void this.transitionTo("index",{queryParams:{count:1e4}}):e},_produceItems:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e4;return Array(e).fill(null).map(function(e,t){return{index:t,name:Math.random().toString(36).substr(2)}})},_produceHtml:function(e){var t=e.items,l=e.callback,a=t.map(l).join("");return(0,n.htmlSafe)(a)},_produceHtmlItem:function(e){return"<li>"+e.index+": "+e.name+"</li>"},_produceStyledHtmlItem:function(e){return'\n      <li>\n        <section class="todoapp">\n          <header class="header">\n            <h1>'+e.index+": "+e.name+'</h1>\n            <input class="new-todo" placeholder="What needs to be done?" autofocus>\n          </header>\n          \x3c!-- This section should be hidden by default and shown when there are todos --\x3e\n          <section class="main">\n            <input class="toggle-all" type="checkbox">\n            <label for="toggle-all">Mark all as complete</label>\n            <ul class="todo-list">\n              \x3c!-- These are here just to show the structure of the list items --\x3e\n              \x3c!-- List items should get the class `editing` when editing and `completed` when marked as completed --\x3e\n              <li class="completed">\n                <div class="view">\n                  <input class="toggle" type="checkbox" checked>\n                  <label>Taste JavaScript</label>\n                  <button class="destroy"></button>\n                </div>\n                <input class="edit" value="Create a TodoMVC template">\n              </li>\n              <li>\n                <div class="view">\n                  <input class="toggle" type="checkbox">\n                  <label>Buy a unicorn</label>\n                  <button class="destroy"></button>\n                </div>\n                <input class="edit" value="Rule the web">\n              </li>\n            </ul>\n          </section>\n          \x3c!-- This footer should hidden by default and shown when there are todos --\x3e\n          <footer class="footer">\n            \x3c!-- This should be `0 items left` by default --\x3e\n            <span class="todo-count"><strong>0</strong> items left</span>\n            \x3c!-- Remove this if you don\'t implement routing --\x3e\n            <ul class="filters">\n              <li>\n                <a class="selected" href="#/">All</a>\n              </li>\n              <li>\n                <a href="#/active">Active</a>\n              </li>\n              <li>\n                <a href="#/completed">Completed</a>\n              </li>\n            </ul>\n            \x3c!-- Hidden if no completed items are left ↓ --\x3e\n            <button class="clear-completed">Clear completed</button>\n          </footer>\n        </section>\n      </li>\n    '}})}),define("ember-render-test/pods/application/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"72DA0yf0",block:'{"statements":[[11,"p",[]],[13],[0,"\\n  "],[6,["link-to"],["index"],null,{"statements":[[0,"Index"]],"locals":[]},null],[0,",\\n"],[14],[0,"\\n\\n"],[11,"p",[]],[13],[0,"\\n  Simple:\\n  "],[6,["link-to"],["multiple"],null,{"statements":[[0,"Multiple components"]],"locals":[]},null],[0,",\\n  "],[6,["link-to"],["template"],null,{"statements":[[0,"Single template"]],"locals":[]},null],[0,",\\n  "],[6,["link-to"],["html"],null,{"statements":[[0,"HTML string"]],"locals":[]},null],[0,",\\n  "],[6,["link-to"],["incremental"],null,{"statements":[[0,"Incremental"]],"locals":[]},null],[0,"\\n"],[14],[0,"\\n\\n"],[11,"p",[]],[13],[0,"\\n  Styled:\\n  "],[6,["link-to"],["multiple-styled"],null,{"statements":[[0,"Multiple components"]],"locals":[]},null],[0,",\\n  "],[6,["link-to"],["template-styled"],null,{"statements":[[0,"Single template"]],"locals":[]},null],[0,",\\n  "],[6,["link-to"],["html-styled"],null,{"statements":[[0,"HTML string"]],"locals":[]},null],[0,",\\n  "],[6,["link-to"],["incremental-styled"],null,{"statements":[[0,"Incremental"]],"locals":[]},null],[0,"\\n"],[14],[0,"\\n\\n"],[11,"hr",[]],[13],[14],[0,"\\n\\n"],[1,[26,["outlet"]],false],[0,"\\n\\n"],[1,[33,["fork-me"],["https://github.com/Deveo/ember-render-test"],null],false]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"ember-render-test/pods/application/template.hbs"}})}),define("ember-render-test/pods/components/x-item-styled/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"4R6rlJRn",block:'{"statements":[[11,"section",[]],[15,"class","todoapp"],[13],[0,"\\n  "],[11,"header",[]],[15,"class","header"],[13],[0,"\\n    "],[11,"h1",[]],[13],[1,[26,["index"]],false],[0,": "],[1,[26,["name"]],false],[14],[0,"\\n    "],[11,"input",[]],[15,"class","new-todo"],[15,"placeholder","What needs to be done?"],[15,"autofocus",""],[13],[14],[0,"\\n  "],[14],[0,"\\n  "],[4," This section should be hidden by default and shown when there are todos "],[0,"\\n  "],[11,"section",[]],[15,"class","main"],[13],[0,"\\n    "],[11,"input",[]],[15,"class","toggle-all"],[15,"type","checkbox"],[13],[14],[0,"\\n    "],[11,"label",[]],[15,"for","toggle-all"],[13],[0,"Mark all as complete"],[14],[0,"\\n    "],[11,"ul",[]],[15,"class","todo-list"],[13],[0,"\\n      "],[4," These are here just to show the structure of the list items "],[0,"\\n      "],[4," List items should get the class `editing` when editing and `completed` when marked as completed "],[0,"\\n      "],[11,"li",[]],[15,"class","completed"],[13],[0,"\\n        "],[11,"div",[]],[15,"class","view"],[13],[0,"\\n          "],[11,"input",[]],[15,"class","toggle"],[15,"type","checkbox"],[15,"checked",""],[13],[14],[0,"\\n          "],[11,"label",[]],[13],[0,"Taste JavaScript"],[14],[0,"\\n          "],[11,"button",[]],[15,"class","destroy"],[13],[14],[0,"\\n        "],[14],[0,"\\n        "],[11,"input",[]],[15,"class","edit"],[15,"value","Create a TodoMVC template"],[13],[14],[0,"\\n      "],[14],[0,"\\n      "],[11,"li",[]],[13],[0,"\\n        "],[11,"div",[]],[15,"class","view"],[13],[0,"\\n          "],[11,"input",[]],[15,"class","toggle"],[15,"type","checkbox"],[13],[14],[0,"\\n          "],[11,"label",[]],[13],[0,"Buy a unicorn"],[14],[0,"\\n          "],[11,"button",[]],[15,"class","destroy"],[13],[14],[0,"\\n        "],[14],[0,"\\n        "],[11,"input",[]],[15,"class","edit"],[15,"value","Rule the web"],[13],[14],[0,"\\n      "],[14],[0,"\\n    "],[14],[0,"\\n  "],[14],[0,"\\n  "],[4," This footer should hidden by default and shown when there are todos "],[0,"\\n  "],[11,"footer",[]],[15,"class","footer"],[13],[0,"\\n    "],[4," This should be `0 items left` by default "],[0,"\\n    "],[11,"span",[]],[15,"class","todo-count"],[13],[11,"strong",[]],[13],[0,"0"],[14],[0," items left"],[14],[0,"\\n    "],[4," Remove this if you don\'t implement routing "],[0,"\\n    "],[11,"ul",[]],[15,"class","filters"],[13],[0,"\\n      "],[11,"li",[]],[13],[0,"\\n        "],[11,"a",[]],[15,"class","selected"],[15,"href","#/"],[13],[0,"All"],[14],[0,"\\n      "],[14],[0,"\\n      "],[11,"li",[]],[13],[0,"\\n        "],[11,"a",[]],[15,"href","#/active"],[13],[0,"Active"],[14],[0,"\\n      "],[14],[0,"\\n      "],[11,"li",[]],[13],[0,"\\n        "],[11,"a",[]],[15,"href","#/completed"],[13],[0,"Completed"],[14],[0,"\\n      "],[14],[0,"\\n    "],[14],[0,"\\n    "],[4," Hidden if no completed items are left ↓ "],[0,"\\n    "],[11,"button",[]],[15,"class","clear-completed"],[13],[0,"Clear completed"],[14],[0,"\\n  "],[14],[0,"\\n"],[14]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"ember-render-test/pods/components/x-item-styled/template.hbs"}})}),define("ember-render-test/pods/components/x-item/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"3SO9r8Bd",block:'{"statements":[[1,[26,["index"]],false],[0,": "],[1,[26,["name"]],false]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"ember-render-test/pods/components/x-item/template.hbs"}})}),define("ember-render-test/pods/html-styled/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"SAAKeLqC",block:'{"statements":[[11,"h2",[]],[13],[0,"HTML string"],[14],[0,"\\n\\n"],[11,"ul",[]],[13],[0,"\\n  "],[1,[28,["model","styledHtml"]],true],[0,"\\n"],[14]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"ember-render-test/pods/html-styled/template.hbs"}})}),define("ember-render-test/pods/html/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"c+V/txjH",block:'{"statements":[[11,"h2",[]],[13],[0,"HTML string"],[14],[0,"\\n\\n"],[11,"ul",[]],[13],[0,"\\n  "],[1,[28,["model","html"]],true],[0,"\\n"],[14]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"ember-render-test/pods/html/template.hbs"}})}),define("ember-render-test/pods/incremental-styled/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"uzTti8K+",block:'{"statements":[[11,"h2",[]],[13],[0,"Incremental Styled"],[14],[0,"\\n\\n"],[11,"div",[]],[15,"class","incremental"],[13],[0,"\\n"],[6,["ember-collection"],null,[["items","cell-layout"],[[28,["model","items"]],[33,["percentage-columns-layout"],[[28,["model","items","length"]],[33,["array"],[100],null],394],null]]],{"statements":[[0,"    "],[1,[33,["x-item-styled"],null,[["index","name"],[[28,["item","index"]],[28,["item","name"]]]]],false],[0,"\\n"]],"locals":["item"]},null],[14]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"ember-render-test/pods/incremental-styled/template.hbs"}})}),define("ember-render-test/pods/incremental/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"W4uVQXaX",block:'{"statements":[[11,"h2",[]],[13],[0,"Incremental Unstyled"],[14],[0,"\\n\\n"],[11,"div",[]],[15,"class","incremental"],[13],[0,"\\n"],[6,["ember-collection"],null,[["items","cell-layout"],[[28,["model","items"]],[33,["percentage-columns-layout"],[[28,["model","items","length"]],[33,["array"],[100],null],18],null]]],{"statements":[[0,"    "],[1,[33,["x-item"],null,[["index","name"],[[28,["item","index"]],[28,["item","name"]]]]],false],[0,"\\n"]],"locals":["item"]},null],[14]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"ember-render-test/pods/incremental/template.hbs"}})}),define("ember-render-test/pods/index/controller",["exports","ember-controller","ember-computed"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.extend({countUserInput:(0,n.reads)("model.count"),actions:{updateCount:function(){var e=this.get("countUserInput");this.transitionToRoute("index",{queryParams:{count:e}})}}})}),define("ember-render-test/pods/index/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"WPhkz8hM",block:'{"statements":[[11,"p",[]],[13],[0,"\\n  Count:\\n\\n  "],[1,[33,["input"],null,[["type","value"],["number",[28,["countUserInput"]]]]],false],[0,"\\n\\n  "],[11,"button",[]],[5,["action"],[[28,[null]],"updateCount"]],[13],[0,"\\n    Update\\n  "],[14],[0,"\\n"],[14]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"ember-render-test/pods/index/template.hbs"}})}),define("ember-render-test/pods/multiple-styled/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"s9j/B0Ix",block:'{"statements":[[11,"h2",[]],[13],[0,"Multiple components"],[14],[0,"\\n\\n"],[11,"ul",[]],[13],[0,"\\n"],[6,["each"],[[28,["model","items"]]],null,{"statements":[[0,"    "],[1,[33,["x-item-styled"],null,[["index","name","tagName"],[[28,["item","index"]],[28,["item","name"]],"li"]]],false],[0,"\\n"]],"locals":["item"]},null],[14],[0,"\\n\\n"],[1,[33,["log"],[[28,["model"]]],null],false]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"ember-render-test/pods/multiple-styled/template.hbs"}})}),define("ember-render-test/pods/multiple/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"NDpnggZO",block:'{"statements":[[11,"h2",[]],[13],[0,"Multiple components"],[14],[0,"\\n\\n"],[11,"ul",[]],[13],[0,"\\n"],[6,["each"],[[28,["model","items"]]],null,{"statements":[[0,"    "],[1,[33,["x-item"],null,[["index","name","tagName"],[[28,["item","index"]],[28,["item","name"]],"li"]]],false],[0,"\\n"]],"locals":["item"]},null],[14]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"ember-render-test/pods/multiple/template.hbs"}})}),define("ember-render-test/pods/template-styled/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"8NCzsKC9",block:'{"statements":[[11,"h2",[]],[13],[0,"Single template with {{#each}}"],[14],[0,"\\n\\n"],[11,"ul",[]],[13],[0,"\\n"],[6,["each"],[[28,["model","items"]]],null,{"statements":[[0,"    "],[11,"li",[]],[13],[0,"\\n      "],[11,"section",[]],[15,"class","todoapp"],[13],[0,"\\n        "],[11,"header",[]],[15,"class","header"],[13],[0,"\\n          "],[11,"h1",[]],[13],[1,[28,["item","index"]],false],[0,": "],[1,[28,["item","name"]],false],[14],[0,"\\n          "],[11,"input",[]],[15,"class","new-todo"],[15,"placeholder","What needs to be done?"],[15,"autofocus",""],[13],[14],[0,"\\n        "],[14],[0,"\\n        "],[4," This section should be hidden by default and shown when there are todos "],[0,"\\n        "],[11,"section",[]],[15,"class","main"],[13],[0,"\\n          "],[11,"input",[]],[15,"class","toggle-all"],[15,"type","checkbox"],[13],[14],[0,"\\n          "],[11,"label",[]],[15,"for","toggle-all"],[13],[0,"Mark all as complete"],[14],[0,"\\n          "],[11,"ul",[]],[15,"class","todo-list"],[13],[0,"\\n            "],[4," These are here just to show the structure of the list items "],[0,"\\n            "],[4," List items should get the class `editing` when editing and `completed` when marked as completed "],[0,"\\n            "],[11,"li",[]],[15,"class","completed"],[13],[0,"\\n              "],[11,"div",[]],[15,"class","view"],[13],[0,"\\n                "],[11,"input",[]],[15,"class","toggle"],[15,"type","checkbox"],[15,"checked",""],[13],[14],[0,"\\n                "],[11,"label",[]],[13],[0,"Taste JavaScript"],[14],[0,"\\n                "],[11,"button",[]],[15,"class","destroy"],[13],[14],[0,"\\n              "],[14],[0,"\\n              "],[11,"input",[]],[15,"class","edit"],[15,"value","Create a TodoMVC template"],[13],[14],[0,"\\n            "],[14],[0,"\\n            "],[11,"li",[]],[13],[0,"\\n              "],[11,"div",[]],[15,"class","view"],[13],[0,"\\n                "],[11,"input",[]],[15,"class","toggle"],[15,"type","checkbox"],[13],[14],[0,"\\n                "],[11,"label",[]],[13],[0,"Buy a unicorn"],[14],[0,"\\n                "],[11,"button",[]],[15,"class","destroy"],[13],[14],[0,"\\n              "],[14],[0,"\\n              "],[11,"input",[]],[15,"class","edit"],[15,"value","Rule the web"],[13],[14],[0,"\\n            "],[14],[0,"\\n          "],[14],[0,"\\n        "],[14],[0,"\\n        "],[4," This footer should hidden by default and shown when there are todos "],[0,"\\n        "],[11,"footer",[]],[15,"class","footer"],[13],[0,"\\n          "],[4," This should be `0 items left` by default "],[0,"\\n          "],[11,"span",[]],[15,"class","todo-count"],[13],[11,"strong",[]],[13],[0,"0"],[14],[0," items left"],[14],[0,"\\n          "],[4," Remove this if you don\'t implement routing "],[0,"\\n          "],[11,"ul",[]],[15,"class","filters"],[13],[0,"\\n            "],[11,"li",[]],[13],[0,"\\n              "],[11,"a",[]],[15,"class","selected"],[15,"href","#/"],[13],[0,"All"],[14],[0,"\\n            "],[14],[0,"\\n            "],[11,"li",[]],[13],[0,"\\n              "],[11,"a",[]],[15,"href","#/active"],[13],[0,"Active"],[14],[0,"\\n            "],[14],[0,"\\n            "],[11,"li",[]],[13],[0,"\\n              "],[11,"a",[]],[15,"href","#/completed"],[13],[0,"Completed"],[14],[0,"\\n            "],[14],[0,"\\n          "],[14],[0,"\\n          "],[4," Hidden if no completed items are left ↓ "],[0,"\\n          "],[11,"button",[]],[15,"class","clear-completed"],[13],[0,"Clear completed"],[14],[0,"\\n        "],[14],[0,"\\n      "],[14],[0,"\\n    "],[14],[0,"\\n"]],"locals":["item"]},null],[14]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"ember-render-test/pods/template-styled/template.hbs"}})}),define("ember-render-test/pods/template/template",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"mlSvhlm6",block:'{"statements":[[11,"h2",[]],[13],[0,"Single template with {{#each}}"],[14],[0,"\\n\\n"],[11,"ul",[]],[13],[0,"\\n"],[6,["each"],[[28,["model","items"]]],null,{"statements":[[0,"    "],[11,"li",[]],[13],[1,[28,["item","index"]],false],[0,": "],[1,[28,["item","name"]],false],[14],[0,"\\n"]],"locals":["item"]},null],[14]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"ember-render-test/pods/template/template.hbs"}})}),define("ember-render-test/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("ember-render-test/router",["exports","ember","ember-render-test/config/environment"],function(e,t,n){Object.defineProperty(e,"__esModule",{value:!0});var l=t.default.Router.extend({location:n.default.locationType,rootURL:n.default.rootURL});l.map(function(){this.route("multiple"),this.route("template"),this.route("html"),this.route("multiple-styled"),this.route("template-styled"),this.route("html-styled"),this.route("incremental"),this.route("incremental-styled")}),e.default=l}),define("ember-render-test/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-render-test/config/environment",["ember"],function(e){try{var t="ember-render-test/config/environment",n=document.querySelector('meta[name="'+t+'"]').getAttribute("content"),l=JSON.parse(unescape(n)),a={default:l};return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(e){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("ember-render-test/app").default.create({name:"ember-render-test",version:"0.0.0+f4ec0514"});