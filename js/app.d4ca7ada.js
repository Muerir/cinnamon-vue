(function(t){function e(e){for(var r,s,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/cinnamon-vue/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"30d9":function(t,e,n){},5486:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],s=n("2877"),i={},c=Object(s["a"])(i,a,o,!1,null,null,null),l=c.exports,u=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t._v(" No deberías estar aquí ")])},p=[],m={name:"Home",components:{}},h=m,f=Object(s["a"])(h,d,p,!1,null,null,null),v=f.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("LoginForm")],1)},b=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("figure",{staticClass:"img is-square",staticStyle:{"text-align":"center","padding-top":"10%"}},[r("img",{attrs:{src:n("e9ac"),width:"200",height:"200",alt:"Logo"}})])}],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column"}),n("div",{staticClass:"column"},[n("section",[t.alert?n("b-message",{staticClass:"alert-login",attrs:{type:"is-danger","has-icon":"",size:"is-small"}},[t._v(" Usuario o contraseña incorrecta ")]):t._e()],1),n("section",{staticClass:"section"},[n("b-field",{attrs:{label:"Nombre de Usuario:"}},[n("b-input",{attrs:{icon:"account",placeholder:"Username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),n("b-field",{attrs:{label:"Contraseña:"}},[n("b-input",{attrs:{type:"password","password-reveal":"",icon:"lock",placeholder:"Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("section",{staticClass:"section"},[n("b-button",{attrs:{type:"is-primary",expanded:"","icon-left":t.icon},on:{click:t.submitLogin}},[t.loading?n("Spinner",{attrs:{size:"30"}}):n("p",[t._v(" Login ")])],1)],1)],1)]),n("div",{staticClass:"column"})])])},C=[],_=(n("96cf"),n("1da1")),y=n("bc3a"),x=n.n(y),k="https://muerir.pythonanywhere.com",O=n("5b7e"),j=n.n(O),P={components:{Spinner:j.a},name:"LoginForm.vue",data:function(){return{username:"",password:"",loading:!1,alert:!1,icon:"login"}},methods:{submitLogin:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,t.icon="",n=t,e.next=5,x()({method:"post",url:k+"/log-in",data:{username:t.username,password:t.password},withCredentials:!0,headers:{crossDomain:!0,"Content-Type":"application/json"}}).then((function(t){console.log(t),n.loading=!1,n.alert=!1,n.$router.push({path:"/orders/today"})})).catch((function(t){console.log(t),n.alert=!0,n.loading=!1,this.icon="login"}));case 5:case"end":return e.stop()}}),e)})))()}}},Y=P,D=(n("ae36"),Object(s["a"])(Y,w,C,!1,null,"4a3fc77b",null)),$=D.exports,M={name:"Login",components:{LoginForm:$}},T=M,E=Object(s["a"])(T,g,b,!1,null,null,null),R=E.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar"),n("b-field",{attrs:{label:"Seleccionar Fecha"}},[n("b-datepicker",{attrs:{"show-week-number":!0,placeholder:"Click to select...",icon:"calendar-today","trap-focus":""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),n("b",[t._v("Ganancia Total: "+t._s(t.totals)+" Bs")]),t.loading?n("Spinner",{attrs:{size:"30"}}):n("Today",{key:t.smoll,attrs:{data:t.orders},on:{success:function(e){t.smoll++}}})],1)},N=[],L=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-navbar",{attrs:{shadow:""}},[r("template",{slot:"brand"},[r("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/orders"}}},[r("img",{attrs:{src:n("7f88"),alt:"Nicoleta's logo"}})])],1),r("template",{slot:"start"},[r("b-navbar-item",[r("router-link",{attrs:{to:{path:"/orders/today"}}},[t._v(" Hoy ")])],1),r("b-navbar-item",[r("router-link",{attrs:{to:{path:"/orders/all"}}},[t._v(" Historia ")])],1),r("b-navbar-item",[r("router-link",{attrs:{to:{path:"/products"}}},[t._v(" Productos ")])],1)],1),r("template",{slot:"end"},[r("b-navbar-item",{attrs:{tag:"div"}},[r("div",{staticClass:"buttons"},[r("a",{staticClass:"button is-primary",on:{click:t.logOutFunction}},[t._v(" Log Out ")])])])],1)],2)},z=[],A={name:"Navbar",methods:{logOutFunction:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,e.next=3,x()({method:"delete",url:k+"/log-in",withCredentials:!0,headers:{crossDomain:!0,"Content-Type":"application/json"}}).then((function(t){console.log(t),n.$router.push({path:"/login"})})).catch((function(t){console.log(t)}));case 3:case"end":return e.stop()}}),e)})))()}}},F=A,V=Object(s["a"])(F,L,z,!1,null,null,null),q=V.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("section",{staticClass:"section"},[n("router-link",{attrs:{to:{path:"/orders/new"}}},[n("b-button",{staticClass:"is-primary",attrs:{expanded:""}},[t._v(" Nueva orden ")])],1)],1),n("section",{staticClass:"section"},[n("b-table",{ref:"table",attrs:{data:t.data,paginated:"","per-page":"5",detailed:"","detail-key":"id","show-detail-icon":!0,"aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},scopedSlots:t._u([{key:"detail",fn:function(e){return[n("div",{staticClass:"container"},[n("section",{staticClass:"section"},[t._l(e.row.order,(function(e,r){return n("div",{key:r},[n("h1",{staticClass:"title is-3"},[t._v("Producto: "),n("p",[t._v(t._s(e.product))])]),n("h1",{staticClass:"title is-3"},[t._v(" Cantidad: "),n("p",[t._v(t._s(e.quantity))])]),n("hr")])})),n("b-button",{attrs:{type:"is-danger",expanded:""},on:{click:function(n){return t.deleteOrder(e.row.id)}}},[t._v(" Eliminar ")])],2)])]}}])},[n("b-table-column",{attrs:{field:"id",label:"Número de Orden",centered:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.id)+" ")]}}])}),n("b-table-column",{attrs:{field:"date",label:"Fecha y Hora",sortable:"",centered:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t.dayjs(e.row.date).format("DD/MM/YYYY - hh:mm"))+" ")]}}])}),n("b-table-column",{attrs:{field:"total",label:"Monto total",sortable:"",centered:""},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.total)+" "),n("strong",[t._v("Bs. ")])]}}])})],1)],1)])},B=[],U=n("5a0c"),I=n.n(U),J={name:"Today",props:["data"],data:function(){return{dayjs:I.a}},methods:{deleteOrder:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=this,t.next=3,x()({method:"delete",url:k+"/order",withCredentials:!0,data:{id:e},headers:{crossDomain:!0,"Content-Type":"application/json"}}).then((function(t){console.log(t),n.$emit("success"),this.$forceUpdate()})).catch((function(t){console.log(t)}));case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},G=J,K=(n("cf12"),Object(s["a"])(G,H,B,!1,null,"9a3a761a",null)),Q=K.exports,W={name:"TodayOrders",components:{Navbar:q,Today:Q,Spinner:j.a},data:function(){return{loading:!0,orders:[],smoll:0,totals:0,selected:new Date}},mounted:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){var n,r,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,n=t,r=I()(),a=r.format("YYYY-MM-DD"),o=r.add(1,"day").format("YYYY-MM-DD"),e.next=7,x()({method:"get",url:k+"/order/by-date",params:{today:a,tomorrow:o},withCredentials:!0,headers:{crossDomain:!0,"Content-Type":"application/json"}}).then((function(t){console.log(t),n.loading=!1,n.orders=t.data;for(var e=0;e<n.orders.length;e++)n.totals+=n.orders[e].total})).catch((function(t){console.log(t),n.loading=!1,console.log(r.format("YYYY-MM-DD")),console.log(r.add(1,"day").format("YYYY-MM-DD"))}));case 7:case"end":return e.stop()}}),e)})))()},watch:{smoll:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(e){var n,r,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e),n=this,r=I()(),a=r.format("YYYY-MM-DD"),o=r.add(1,"day").format("YYYY-MM-DD"),t.next=7,x()({method:"get",url:k+"/order/by-date",params:{today:a,tomorrow:o},withCredentials:!0,headers:{crossDomain:!0,"Content-Type":"application/json"}}).then((function(t){console.log(t),n.loading=!1,n.orders=t.data})).catch((function(t){console.log(t),n.loading=!1,console.log(r.format("YYYY-MM-DD")),console.log(r.add(1,"day").format("YYYY-MM-DD"))}));case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},methods:{reset:function(){}}},X=W,Z=Object(s["a"])(X,S,N,!1,null,null,null),tt=Z.exports,et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar"),n("ProductsList")],1)},nt=[],rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("section",{staticClass:"section"},[n("b-button",{staticClass:"is-primary",attrs:{expanded:""},on:{click:function(e){t.isComponentModalActive=!0}}},[t._v(" Agregar Producto ")]),n("b-modal",{attrs:{"has-modal-card":"","trap-focus":"","destroy-on-hide":!0,"aria-role":"dialog","aria-modal":""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("new-product-modal",t._b({on:{close:e.close,success:function(e){t.smoll++}}},"new-product-modal",t.formProps,!1))]}}]),model:{value:t.isComponentModalActive,callback:function(e){t.isComponentModalActive=e},expression:"isComponentModalActive"}})],1),t.loading?n("Spinner",{attrs:{size:"30"}}):n("ProductTable",{key:t.smoll,attrs:{products:t.products},on:{success:function(e){t.smoll++}}})],1)},at=[],ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[n("header",{staticClass:"modal-card-head"},[n("p",{staticClass:"modal-card-title"},[t._v("Crear Producto")]),n("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(e){return t.$emit("close")}}})]),n("section",{staticClass:"modal-card-body"},[n("b-field",{attrs:{label:"Producto"}},[n("b-input",{attrs:{type:"text",placeholder:"Tu producto",required:""},model:{value:t.product,callback:function(e){t.product=e},expression:"product"}})],1),n("b-field",{attrs:{label:"Precio"}},[n("b-input",{attrs:{type:"number",placeholder:"Precio",required:""},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1)],1),n("footer",{staticClass:"modal-card-foot"},[n("button",{staticClass:"button",attrs:{type:"button"},on:{click:function(e){return t.$emit("close")}}},[t._v(" Close ")]),n("button",{staticClass:"button is-primary",on:{click:t.createProduct}},[t.loading?n("Spinner",{attrs:{size:"30"}}):n("p",[t._v(" Crear ")])],1)])])])},st=[],it={name:"NewProductModal",data:function(){return{product:"",price:null,loading:!1}},components:{Spinner:j.a},methods:{createProduct:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,n=t,e.next=4,x()({method:"post",url:k+"/product",data:{product:t.product,price:t.price},withCredentials:!0,headers:{crossDomain:!0,"Content-Type":"application/json"}}).then((function(t){console.log(t),n.loading=!1,n.$emit("success"),n.$emit("close")})).catch((function(t){console.log(t),n.loading=!1}));case 4:case"end":return e.stop()}}),e)})))()}}},ct=it,lt=Object(s["a"])(ct,ot,st,!1,null,null,null),ut=lt.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section"},[n("hr"),t._l(t.products,(function(e,r){return n("div",{key:r},[n("div",{staticClass:"level is-mobile"},[n("div",{staticClass:"level-left"},[n("div",{staticClass:"level-item"},[n("p",{staticClass:"subtitle"},[n("strong",[t._v(" Producto: ")]),t._v(t._s(e.product)+" ")])]),n("div",{staticClass:"level-item"},[n("p",{staticClass:"subtitle"},[n("strong",[t._v(" Precio: ")]),t._v(t._s(e.price)+" "),n("strong",[t._v(" Bs. ")])])])])]),n("div",{staticClass:"level-right"},[n("div",{staticClass:"level-item"},[n("b-button",{attrs:{type:"is-danger",expanded:""},on:{click:function(n){return t.deleteProduct(e.id)}}},[t._v(" Eliminar ")])],1),n("div",{staticClass:"level-item"},[n("router-link",{attrs:{to:{path:"/products/"+e.id}}},[n("b-button",{attrs:{type:"is-warning",expanded:""}},[t._v(" Editar ")])],1)],1)]),n("hr")])})),n("b-pagination",{attrs:{total:t.products.length,"per-page":t.perPage,"aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}})],2)},pt=[],mt=(n("fb6a"),{name:"ProductTable",props:["products"],data:function(){return{showDetailIcon:!0,current:1,perPage:10,isComponentModalActive:!1}},methods:{deleteProduct:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=this,t.next=3,x()({method:"delete",url:k+"/product",withCredentials:!0,data:{id:e},headers:{crossDomain:!0,"Content-Type":"application/json"}}).then((function(t){console.log(t),n.$emit("success"),this.$forceUpdate()})).catch((function(t){console.log(t)}));case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},computed:{total:function(){return this.products.length},paginatedItems:function(){var t=this.current-1;return this.products.slice(t*this.perPage,(t+1)*this.perPage)}}}),ht=mt,ft=(n("ad2e"),Object(s["a"])(ht,dt,pt,!1,null,"28624c07",null)),vt=ft.exports,gt={name:"ProductsList",components:{ProductTable:vt,Spinner:j.a,NewProductModal:ut},methods:{cardModal:function(){this.$buefy.modal.open({parent:this,component:ut,hasModalCard:!0,customClass:"custom-class custom-class-2",trapFocus:!0,destroyOnHide:!1})}},data:function(){return{loading:!0,products:[],smoll:0,isComponentModalActive:!1}},method:{prueba:function(){this.smoll++}},mounted:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,n=t,e.next=4,x()({method:"get",url:k+"/product",withCredentials:!0,headers:{crossDomain:!0,"Content-Type":"application/json"}}).then((function(t){console.log(t),n.loading=!1,n.products=t.data})).catch((function(t){console.log(t),n.loading=!1}));case 4:case"end":return e.stop()}}),e)})))()},watch:{smoll:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e),this.loading=!0,n=this,t.next=5,x()({method:"get",url:k+"/product",withCredentials:!0,headers:{crossDomain:!0,"Content-Type":"application/json"}}).then((function(t){console.log(t),n.loading=!1,n.products=t.data})).catch((function(t){console.log(t),n.loading=!1}));case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},bt=gt,wt=Object(s["a"])(bt,rt,at,!1,null,null,null),Ct=wt.exports,_t={name:"Products",components:{Navbar:q,ProductsList:Ct}},yt=_t,xt=Object(s["a"])(yt,et,nt,!1,null,null,null),kt=xt.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("EditProduct",{attrs:{id:t.id}})],1)},jt=[],Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"column"}),n("div",{staticClass:"column"},[n("section",[t.alert?n("b-message",{staticClass:"alert-login",attrs:{type:"is-danger","has-icon":"",size:"is-small"}},[t._v(" Error inesperado ")]):t._e()],1),n("section",{staticClass:"section"},[n("b-field",{attrs:{label:"Nombre del Producto:"}},[n("b-input",{attrs:{placeholder:"Producto"},model:{value:t.product,callback:function(e){t.product=e},expression:"product"}})],1),n("b-field",{attrs:{label:"Precio:"}},[n("b-input",{attrs:{type:"number",placeholder:"Precio"},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1),n("section",{staticClass:"section"},[n("b-button",{attrs:{type:"is-primary",expanded:""},on:{click:t.editProduct}},[t.loading?n("Spinner",{attrs:{size:"30"}}):n("p",[t._v(" Actualizar ")])],1)],1)],1)]),n("div",{staticClass:"column"})])},Yt=[],Dt={name:"EditProduct",props:["id"],data:function(){return{product:"",price:null,loading:!1}},components:{Spinner:j.a},methods:{editProduct:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,n=t,e.next=4,x()({method:"put",url:k+"/product",data:{id:t.id,product:t.product,price:t.price},withCredentials:!0,headers:{crossDomain:!0,"Content-Type":"application/json"}}).then((function(t){console.log(t),n.loading=!1,n.$router.push({path:"/products"})})).catch((function(t){console.log(t),n.loading=!1}));case 4:case"end":return e.stop()}}),e)})))()}}},$t=Dt,Mt=Object(s["a"])($t,Pt,Yt,!1,null,null,null),Tt=Mt.exports,Et={name:"EditProducts",components:{EditProduct:Tt},data:function(){return{id:this.$route.params.id}}},Rt=Et,St=Object(s["a"])(Rt,Ot,jt,!1,null,null,null),Nt=St.exports,Lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar"),t.loading?n("Spinner",{attrs:{size:"30"}}):n("Today",{key:t.smoll,attrs:{data:t.orders},on:{success:function(e){t.smoll++}}})],1)},zt=[],At={name:"AllOrders",components:{Navbar:q,Spinner:j.a,Today:Q},data:function(){return{loading:!0,orders:[],smoll:0}},mounted:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,n=t,e.next=4,x()({method:"get",url:k+"/order",withCredentials:!0,headers:{crossDomain:!0,"Content-Type":"application/json"}}).then((function(t){console.log(t),n.loading=!1,n.orders=t.data})).catch((function(t){console.log(t),n.loading=!1}));case 4:case"end":return e.stop()}}),e)})))()},watch:{smoll:function(){var t=Object(_["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e),n=this,t.next=4,x()({method:"get",url:k+"/order",withCredentials:!0,headers:{crossDomain:!0,"Content-Type":"application/json"}}).then((function(t){console.log(t),n.loading=!1,n.orders=t.data})).catch((function(t){console.log(t),n.loading=!1}));case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},Ft=At,Vt=Object(s["a"])(Ft,Lt,zt,!1,null,null,null),qt=Vt.exports,Ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Navbar"),n("NewOrderForm")],1)},Bt=[],Ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("section",{staticClass:"section"},[n("h1",{staticClass:"title is-3"},[t._v("Nueva Venta:")]),t._l(t.products,(function(e,r){return n("div",{key:r},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("b",[t._v(t._s(e.product))])]),n("div",{staticClass:"column"},[n("div",[n("number-input",{attrs:{min:0,max:1e3,inline:"",controls:"",value:"0"},on:{"~click":function(n){return t.getVal(e.id,e.price)}},model:{value:t.ord[r],callback:function(e){t.$set(t.ord,r,e)},expression:"ord[index]"}})],1)])])])})),n("div",[n("b-field",{attrs:{label:"Efectivo"}},[n("b-input",{attrs:{type:"number"},model:{value:t.cash,callback:function(e){t.cash=t._n(e)},expression:"cash"}})],1)],1),n("div",{staticClass:"columns"},[n("div",{staticClass:"column"},[n("button",{staticClass:"button is-primary",on:{click:function(e){return t.setVal(t.orde,t.ord)}}},[t.loading?n("Spinner",{attrs:{size:"30"}}):n("p",[t._v(" Agregar Venta ")])],1)]),n("div",{staticClass:"column"},[n("button",{staticClass:"button is-primary",on:{click:t.removeVal}},[t.loading?n("Spinner",{attrs:{size:"30"}}):n("p",[t._v(" Eliminar Venta ")])],1)]),n("div",{staticClass:"column"},[n("button",{staticClass:"button is-primary",on:{click:t.createOrder}},[t.loading?n("Spinner",{attrs:{size:"30"}}):n("p",[t._v(" Registrar Venta ")])],1),t.alert?n("b-message",{staticClass:"alert-login",attrs:{type:"is-success","has-icon":"",size:"is-small"}},[t._v(" Venta Agregada con Éxito! ")]):t._e()],1)]),t.value>0?n("div",[n("b",[t._v("Total: "+t._s(t.value)+" Bs.")]),t._v(" "),n("br"),n("b",[t._v("Cambio: "+t._s(t.cash-t.value)+" Bs.")])]):t._e()],2)])},It=[],Jt=n("8203"),Gt=n.n(Jt);r["a"].use(Gt.a);var Kt={name:"NewOrderForm",data:function(){return{products:[],loading:!1,ord:[],orde:[],order:[],prices:[],cash:0,value:0,id:1,alert:!1}},mounted:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,n=t,e.next=4,x()({method:"get",url:k+"/product",withCredentials:!0,headers:{crossDomain:!0,"Content-Type":"application/json"}}).then((function(t){console.log(t),n.loading=!1,n.products=t.data})).catch((function(t){console.log(t),n.loading=!1}));case 4:case"end":return e.stop()}}),e)})))()},methods:{createOrder:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.loading=!0,n=t,e.next=4,x()({method:"post",url:k+"/order",data:{id:t.id,cash:t.cash,ord:t.order},withCredentials:!0,headers:{crossDomain:!0,"Content-Type":"application/json"}}).then((function(t){console.log(t),n.loading=!1,n.alert=!0,n.$emit("success"),n.$emit("close")})).catch((function(t){console.log(t),n.loading=!1}));case 4:case"end":return e.stop()}}),e)})))()},getVal:function(t,e){this.orde.push(t),this.prices.push(e)},setVal:function(t,e){var n=0;t.sort();for(var r=0;r<e.length;r++)if(null!=e[r]){if(this.order.push({id_product:t[r],quantity:e[r]}),this.value+=e[r]*this.prices[r],0!=n&&r==e.length-1){for(var a=0;a<n;a++)t.pop(),this.prices.pop();n=0}}else t.push(t[r]),this.prices.push(this.prices[r]),n++},removeVal:function(){this.value=0,this.order=[]}}},Qt=Kt,Wt=Object(s["a"])(Qt,Ut,It,!1,null,null,null),Xt=Wt.exports,Zt={name:"NewOrder",components:{Navbar:q,NewOrderForm:Xt}},te=Zt,ee=Object(s["a"])(te,Ht,Bt,!1,null,null,null),ne=ee.exports;r["a"].use(u["a"]);var re=[{path:"/",name:"Home",component:v,beforeEnter:function(t,e,n){n({name:"Login"})}},{path:"/login",name:"Login",component:R},{path:"/orders/today",name:"TodayOrders",component:tt},{path:"/orders/all",name:"AllOrders",component:qt},{path:"/orders/new",name:"NewOrder",component:ne},{path:"/products",name:"Products",component:kt},{path:"/products/:id",name:"EditProducts",component:Nt}],ae=new u["a"]({mode:"history",base:"/cinnamon-vue/",routes:re}),oe=ae,se=n("289d"),ie=(n("5abe"),n("f617"));n("dac4");r["a"].use(ie["a"]),r["a"].config.productionTip=!1,r["a"].use(se["a"]),new r["a"]({router:oe,render:function(t){return t(l)}}).$mount("#app")},"7f88":function(t,e,n){t.exports=n.p+"img/logo-of.825645a7.png"},ad2e:function(t,e,n){"use strict";n("30d9")},ae36:function(t,e,n){"use strict";n("5486")},c853:function(t,e,n){},cf12:function(t,e,n){"use strict";n("c853")},e9ac:function(t,e,n){t.exports=n.p+"img/cinnamon-roll.52d5b8fd.svg"}});
//# sourceMappingURL=app.d4ca7ada.js.map