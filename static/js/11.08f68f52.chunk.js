(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{259:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},277:function(e,t,a){"use strict";var s=a(33),c=a(244),r=a(1),n=a.n(r),l=a(0),i=a.n(l),o=a(243),m=a.n(o),h=a(245),u={tag:h.i,className:i.a.string,cssModule:i.a.object},p=function(e){var t=e.className,a=e.cssModule,r=e.tag,l=Object(c.a)(e,["className","cssModule","tag"]),i=Object(h.f)(m()(t,"card-header"),a);return n.a.createElement(r,Object(s.a)({},l,{className:i}))};p.propTypes=u,p.defaultProps={tag:"div"},t.a=p},278:function(e,t,a){"use strict";var s=a(33),c=a(244),r=a(1),n=a.n(r),l=a(0),i=a.n(l),o=a(243),m=a.n(o),h=a(245),u={className:i.a.string,cssModule:i.a.object,size:i.a.string,bordered:i.a.bool,borderless:i.a.bool,striped:i.a.bool,inverse:Object(h.d)(i.a.bool,'Please use the prop "dark"'),dark:i.a.bool,hover:i.a.bool,responsive:i.a.oneOfType([i.a.bool,i.a.string]),tag:h.i,responsiveTag:h.i,innerRef:i.a.oneOfType([i.a.func,i.a.string,i.a.object])},p=function(e){var t=e.className,a=e.cssModule,r=e.size,l=e.bordered,i=e.borderless,o=e.striped,u=e.inverse,p=e.dark,d=e.hover,f=e.responsive,E=e.tag,N=e.responsiveTag,j=e.innerRef,b=Object(c.a)(e,["className","cssModule","size","bordered","borderless","striped","inverse","dark","hover","responsive","tag","responsiveTag","innerRef"]),g=Object(h.f)(m()(t,"table",!!r&&"table-"+r,!!l&&"table-bordered",!!i&&"table-borderless",!!o&&"table-striped",!(!p&&!u)&&"table-dark",!!d&&"table-hover"),a),x=n.a.createElement(E,Object(s.a)({},b,{ref:j,className:g}));if(f){var v=!0===f?"table-responsive":"table-responsive-"+f;return n.a.createElement(N,{className:v},x)}return x};p.propTypes=u,p.defaultProps={tag:"table",responsiveTag:"div"},t.a=p},314:function(e,t,a){"use strict";var s=a(33),c=a(244),r=a(1),n=a.n(r),l=a(0),i=a.n(l),o=a(243),m=a.n(o),h=a(245),u={tag:h.i,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool},p=function(e){var t=e.className,a=e.cssModule,r=e.noGutters,l=e.tag,i=e.form,o=Object(c.a)(e,["className","cssModule","noGutters","tag","form"]),u=Object(h.f)(m()(t,r?"no-gutters":null,i?"form-row":"row"),a);return n.a.createElement(l,Object(s.a)({},o,{className:u}))};p.propTypes=u,p.defaultProps={tag:"div"},t.a=p},315:function(e,t,a){"use strict";var s=a(33),c=a(244),r=a(1),n=a.n(r),l=a(0),i=a.n(l),o=a(243),m=a.n(o),h=a(245),u={tag:h.i,inverse:i.a.bool,color:i.a.string,block:Object(h.d)(i.a.bool,'Please use the props "body"'),body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},p=function(e){var t=e.className,a=e.cssModule,r=e.color,l=e.block,i=e.body,o=e.inverse,u=e.outline,p=e.tag,d=e.innerRef,f=Object(c.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),E=Object(h.f)(m()(t,"card",!!o&&"text-white",!(!l&&!i)&&"card-body",!!r&&(u?"border":"bg")+"-"+r),a);return n.a.createElement(p,Object(s.a)({},f,{className:E,ref:d}))};p.propTypes=u,p.defaultProps={tag:"div"},t.a=p},316:function(e,t,a){"use strict";var s=a(33),c=a(244),r=a(1),n=a.n(r),l=a(0),i=a.n(l),o=a(243),m=a.n(o),h=a(245),u={tag:h.i,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},p=function(e){var t=e.className,a=e.cssModule,r=e.innerRef,l=e.tag,i=Object(c.a)(e,["className","cssModule","innerRef","tag"]),o=Object(h.f)(m()(t,"card-body"),a);return n.a.createElement(l,Object(s.a)({},i,{className:o,ref:r}))};p.propTypes=u,p.defaultProps={tag:"div"},t.a=p},317:function(e,t,a){"use strict";var s=a(33),c=a(244),r=a(259),n=a.n(r),l=a(1),i=a.n(l),o=a(0),m=a.n(o),h=a(243),u=a.n(h),p=a(245),d=m.a.oneOfType([m.a.number,m.a.string]),f=m.a.oneOfType([m.a.bool,m.a.number,m.a.string,m.a.shape({size:m.a.oneOfType([m.a.bool,m.a.number,m.a.string]),push:Object(p.d)(d,'Please use the prop "order"'),pull:Object(p.d)(d,'Please use the prop "order"'),order:d,offset:d})]),E={tag:p.i,xs:f,sm:f,md:f,lg:f,xl:f,className:m.a.string,cssModule:m.a.object,widths:m.a.array},N={tag:"div",widths:["xs","sm","md","lg","xl"]},j=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},b=function(e){var t=e.className,a=e.cssModule,r=e.widths,l=e.tag,o=Object(c.a)(e,["className","cssModule","widths","tag"]),m=[];r.forEach(function(t,s){var c=e[t];if(delete o[t],c||""===c){var r=!s;if(n()(c)){var l,i=r?"-":"-"+t+"-",h=j(r,t,c.size);m.push(Object(p.f)(u()(((l={})[h]=c.size||""===c.size,l["order"+i+c.order]=c.order||0===c.order,l["offset"+i+c.offset]=c.offset||0===c.offset,l)),a))}else{var d=j(r,t,c);m.push(d)}}}),m.length||m.push("col");var h=Object(p.f)(u()(t,m),a);return i.a.createElement(l,Object(s.a)({},o,{className:h}))};b.propTypes=E,b.defaultProps=N,t.a=b},318:function(e,t,a){"use strict";var s=a(33),c=a(244),r=a(254),n=a(255),l=a(1),i=a.n(l),o=a(0),m=a.n(o),h=a(243),u=a.n(h),p=a(245),d={active:m.a.bool,"aria-label":m.a.string,block:m.a.bool,color:m.a.string,disabled:m.a.bool,outline:m.a.bool,tag:p.i,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),onClick:m.a.func,size:m.a.string,children:m.a.node,className:m.a.string,cssModule:m.a.object,close:m.a.bool},f=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(n.a)(Object(n.a)(a))),a}Object(r.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],r=e.block,n=e.className,l=e.close,o=e.cssModule,m=e.color,h=e.outline,d=e.size,f=e.tag,E=e.innerRef,N=Object(c.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&"undefined"===typeof N.children&&(N.children=i.a.createElement("span",{"aria-hidden":!0},"\xd7"));var j="btn"+(h?"-outline":"")+"-"+m,b=Object(p.f)(u()(n,{close:l},l||"btn",l||j,!!d&&"btn-"+d,!!r&&"btn-block",{active:t,disabled:this.props.disabled}),o);N.href&&"button"===f&&(f="a");var g=l?"Close":null;return i.a.createElement(f,Object(s.a)({type:"button"===f&&N.onClick?"button":void 0},N,{className:b,ref:E,onClick:this.onClick,"aria-label":a||g}))},t}(i.a.Component);f.propTypes=d,f.defaultProps={color:"secondary",tag:"button"},t.a=f},328:function(e,t,a){"use strict";var s=a(33),c=a(244),r=a(1),n=a.n(r),l=a(0),i=a.n(l),o=a(243),m=a.n(o),h=a(245),u={tag:h.i,"aria-label":i.a.string,className:i.a.string,cssModule:i.a.object,role:i.a.string,size:i.a.string,vertical:i.a.bool},p=function(e){var t=e.className,a=e.cssModule,r=e.size,l=e.vertical,i=e.tag,o=Object(c.a)(e,["className","cssModule","size","vertical","tag"]),u=Object(h.f)(m()(t,!!r&&"btn-group-"+r,l?"btn-group-vertical":"btn-group"),a);return n.a.createElement(i,Object(s.a)({},o,{className:u}))};p.propTypes=u,p.defaultProps={tag:"div",role:"group"},t.a=p},492:function(e,t,a){"use strict";a.r(t);var s=a(85),c=a(86),r=a(88),n=a(87),l=a(89),i=a(90),o=a(1),m=a.n(o),h=a(314),u=a(317),p=a(315),d=a(328),f=a(318),E=a(277),N=a(316),j=a(278),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(n.a)(t).call(this,e))).projectionChange=a.projectionChange.bind(Object(i.a)(Object(i.a)(a))),a.metricChange=a.metricChange.bind(Object(i.a)(Object(i.a)(a))),a.state={projection:1,metric:1},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"projectionChange",value:function(e){this.setState({projection:e})}},{key:"metricChange",value:function(e){this.setState({metric:e})}},{key:"render",value:function(){var e=this;return m.a.createElement("div",null,m.a.createElement("br",null),m.a.createElement("h4",{className:"display-4 text-center"},"Monthly Projection"),m.a.createElement("br",null),m.a.createElement(h.a,null,m.a.createElement(u.a,{xs:"12",sm:"6",lg:"2",className:"p-3 transparent"},m.a.createElement(p.a,{className:"transparent"},m.a.createElement(d.a,{vertical:!0},m.a.createElement(f.a,{color:"primary",onClick:function(){return e.projectionChange(1)},active:1===this.state.projection},"Overall"),m.a.createElement(f.a,{color:"primary",onClick:function(){return e.projectionChange(2)},active:2===this.state.projection},"Mobile"),m.a.createElement(f.a,{color:"primary",onClick:function(){return e.projectionChange(3)},active:3===this.state.projection},"Desktop")),m.a.createElement("br",null),m.a.createElement(d.a,{vertical:!0},m.a.createElement(f.a,{color:"primary",onClick:function(){return e.metricChange(1)},active:1===this.state.metric},"Users"),m.a.createElement(f.a,{color:"primary",onClick:function(){return e.metricChange(2)},active:2===this.state.metric},"New Users"),m.a.createElement(f.a,{color:"primary",onClick:function(){return e.metricChange(3)},active:3===this.state.metric},"Registration"),m.a.createElement(f.a,{color:"primary",onClick:function(){return e.metricChange(4)},active:4===this.state.metric},"Order"),m.a.createElement(f.a,{color:"primary",onClick:function(){return e.metricChange(5)},active:5===this.state.metric},"Revenue")))),m.a.createElement(u.a,{md:"10"},m.a.createElement("br",null),m.a.createElement(p.a,null,m.a.createElement(E.a,null,1===this.state.metric&&1===this.state.projection?m.a.createElement("h4",{className:"text-center"},"Overall Users"):1===this.state.metric&&2===this.state.projection?m.a.createElement("h4",{className:"text-center"},"Mobile Users"):1===this.state.metric&&3===this.state.projection?m.a.createElement("h4",{className:"text-center"},"Desktop Users"):null,2===this.state.metric&&1===this.state.projection?m.a.createElement("h4",{className:"text-center"},"Overall New Users"):2===this.state.metric&&2===this.state.projection?m.a.createElement("h4",{className:"text-center"},"Mobile New Users"):2===this.state.metric&&3===this.state.projection?m.a.createElement("h4",{className:"text-center"},"Desktop New Users"):null,3===this.state.metric&&1===this.state.projection?m.a.createElement("h4",{className:"text-center"},"Overall Registration"):3===this.state.metric&&2===this.state.projection?m.a.createElement("h4",{className:"text-center"},"Mobile Registration"):3===this.state.metric&&3===this.state.projection?m.a.createElement("h4",{className:"text-center"},"Desktop Registration"):null,4===this.state.metric&&1===this.state.projection?m.a.createElement("h4",{className:"text-center"},"Overall Order"):4===this.state.metric&&2===this.state.projection?m.a.createElement("h4",{className:"text-center"},"Mobile Order"):4===this.state.metric&&3===this.state.projection?m.a.createElement("h4",{className:"text-center"},"Desktop Order"):null,5===this.state.metric&&1===this.state.projection?m.a.createElement("h4",{className:"text-center"},"Overall Revenue"):5===this.state.metric&&2===this.state.projection?m.a.createElement("h4",{className:"text-center"},"Mobile Revenue"):5===this.state.metric&&3===this.state.projection?m.a.createElement("h4",{className:"text-center"},"Desktop Revenue"):null),m.a.createElement(N.a,null,m.a.createElement(o.Fragment,null,m.a.createElement("div",{className:"table-responsive"},m.a.createElement(j.a,{className:"table-hover table-bordered tablesorter"},m.a.createElement("thead",{className:"thead-light"},m.a.createElement("tr",null,m.a.createElement("th",{className:"text-center"},"Metrics"),m.a.createElement("th",{className:"text-center"},"Projection"),m.a.createElement("th",{className:"text-center"},"Monthly Projection Growth Rate"))),m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("td",{className:"text-center"},"Overall Traffic"),1===this.state.projection&&1===this.state.metric?m.a.createElement("td",{className:"text-center"},"56953"):null,1===this.state.projection&&1===this.state.metric?m.a.createElement("td",{className:"growth text-center"},m.a.createElement("i",{className:"fas fa-caret-up"})," 14%"):null,2===this.state.projection&&1===this.state.metric?m.a.createElement("td",{className:"text-center"},"23553"):null,2===this.state.projection&&1===this.state.metric?m.a.createElement("td",{className:"down text-center"},m.a.createElement("i",{className:"fas fa-caret-down"})," 5%"):null,3===this.state.projection&&1===this.state.metric?m.a.createElement("td",{className:"text-center"},"63853"):null,3===this.state.projection&&1===this.state.metric?m.a.createElement("td",{className:"growth text-center"},m.a.createElement("i",{className:"fas fa-caret-up"})," 15%"):null,1===this.state.projection&&2===this.state.metric?m.a.createElement("td",{className:"text-center"},"68391"):null,1===this.state.projection&&2===this.state.metric?m.a.createElement("td",{className:"growth text-center"},m.a.createElement("i",{className:"fas fa-caret-up"})," 14%"):null,2===this.state.projection&&2===this.state.metric?m.a.createElement("td",{className:"text-center"},"86621"):null,2===this.state.projection&&2===this.state.metric?m.a.createElement("td",{className:"down text-center"},m.a.createElement("i",{className:"fas fa-caret-down"})," 5%"):null,3===this.state.projection&&2===this.state.metric?m.a.createElement("td",{className:"text-center"},"44721"):null,3===this.state.projection&&2===this.state.metric?m.a.createElement("td",{className:"growth text-center"},m.a.createElement("i",{className:"fas fa-caret-up"})," 15%"):null,1===this.state.projection&&3===this.state.metric?m.a.createElement("td",{className:"text-center"},"95713"):null,1===this.state.projection&&3===this.state.metric?m.a.createElement("td",{className:"growth text-center"},m.a.createElement("i",{className:"fas fa-caret-up"})," 14%"):null,2===this.state.projection&&3===this.state.metric?m.a.createElement("td",{className:"text-center"},"56361"):null,2===this.state.projection&&3===this.state.metric?m.a.createElement("td",{className:"down text-center"},m.a.createElement("i",{className:"fas fa-caret-down"})," 5%"):null,3===this.state.projection&&3===this.state.metric?m.a.createElement("td",{className:"text-center"},"32513"):null,3===this.state.projection&&3===this.state.metric?m.a.createElement("td",{className:"growth text-center"},m.a.createElement("i",{className:"fas fa-caret-up"})," 15%"):null,1===this.state.projection&&4===this.state.metric?m.a.createElement("td",{className:"text-center"},"87517"):null,1===this.state.projection&&4===this.state.metric?m.a.createElement("td",{className:"growth text-center"},m.a.createElement("i",{className:"fas fa-caret-up"})," 14%"):null,2===this.state.projection&&4===this.state.metric?m.a.createElement("td",{className:"text-center"},"44123"):null,2===this.state.projection&&4===this.state.metric?m.a.createElement("td",{className:"down text-center"},m.a.createElement("i",{className:"fas fa-caret-down"})," 5%"):null,3===this.state.projection&&4===this.state.metric?m.a.createElement("td",{className:"text-center"},"54342"):null,3===this.state.projection&&4===this.state.metric?m.a.createElement("td",{className:"growth text-center"},m.a.createElement("i",{className:"fas fa-caret-up"})," 15%"):null,1===this.state.projection&&5===this.state.metric?m.a.createElement("td",{className:"text-center"},"87517"):null,1===this.state.projection&&5===this.state.metric?m.a.createElement("td",{className:"growth text-center"},m.a.createElement("i",{className:"fas fa-caret-up"})," 14%"):null,2===this.state.projection&&5===this.state.metric?m.a.createElement("td",{className:"text-center"},"44123"):null,2===this.state.projection&&5===this.state.metric?m.a.createElement("td",{className:"down text-center"},m.a.createElement("i",{className:"fas fa-caret-down"})," 5%"):null,3===this.state.projection&&5===this.state.metric?m.a.createElement("td",{className:"text-center"},"54342"):null,3===this.state.projection&&5===this.state.metric?m.a.createElement("td",{className:"growth text-center"},m.a.createElement("i",{className:"fas fa-caret-up"})," 15%"):null),m.a.createElement("tr",null,m.a.createElement("td",{className:"text-center"},"Organic Traffic"),1===this.state.projection&&1===this.state.metric?m.a.createElement("td",{className:"text-center"},"56953"):null,1===this.state.projection&&1===this.state.metric?m.a.createElement("td",{className:"growth text-center"},m.a.createElement("i",{className:"fas fa-caret-up"})," 14%"):null,2===this.state.projection&&1===this.state.metric?m.a.createElement("td",{className:"text-center"},"23553"):null,2===this.state.projection&&1===this.state.metric?m.a.createElement("td",{className:"down text-center"},m.a.createElement("i",{className:"fas fa-caret-down"})," 5%"):null,3===this.state.projection&&1===this.state.metric?m.a.createElement("td",{className:"text-center"},"63853"):null,3===this.state.projection&&1===this.state.metric?m.a.createElement("td",{className:"growth text-center"},m.a.createElement("i",{className:"fas fa-caret-up"})," 15%"):null,1===this.state.projection&&2===this.state.metric?m.a.createElement("td",{className:"text-center"},"68391"):null,1===this.state.projection&&2===this.state.metric?m.a.createElement("td",{className:"growth text-center"},m.a.createElement("i",{className:"fas fa-caret-up"})," 14%"):null,2===this.state.projection&&2===this.state.metric?m.a.createElement("td",{className:"text-center"},"86621"):null,2===this.state.projection&&2===this.state.metric?m.a.createElement("td",{className:"down text-center"},m.a.createElement("i",{className:"fas fa-caret-down"})," 5%"):null,3===this.state.projection&&2===this.state.metric?m.a.createElement("td",{className:"text-center"},"44721"):null,3===this.state.projection&&2===this.state.metric?m.a.createElement("td",{className:"growth text-center"},m.a.createElement("i",{className:"fas fa-caret-up"})," 15%"):null,1===this.state.projection&&3===this.state.metric?m.a.createElement("td",{className:"text-center"},"95713"):null,1===this.state.projection&&3===this.state.metric?m.a.createElement("td",{className:"growth text-center"},m.a.createElement("i",{className:"fas fa-caret-up"})," 14%"):null,2===this.state.projection&&3===this.state.metric?m.a.createElement("td",{className:"text-center"},"56361"):null,2===this.state.projection&&3===this.state.metric?m.a.createElement("td",{className:"down text-center"},m.a.createElement("i",{className:"fas fa-caret-down"})," 5%"):null,3===this.state.projection&&3===this.state.metric?m.a.createElement("td",{className:"text-center"},"32513"):null,3===this.state.projection&&3===this.state.metric?m.a.createElement("td",{className:"growth text-center"},m.a.createElement("i",{className:"fas fa-caret-up"})," 15%"):null,1===this.state.projection&&4===this.state.metric?m.a.createElement("td",{className:"text-center"},"87517"):null,1===this.state.projection&&4===this.state.metric?m.a.createElement("td",{className:"growth text-center"},m.a.createElement("i",{className:"fas fa-caret-up"})," 14%"):null,2===this.state.projection&&4===this.state.metric?m.a.createElement("td",{className:"text-center"},"44123"):null,2===this.state.projection&&4===this.state.metric?m.a.createElement("td",{className:"down text-center"},m.a.createElement("i",{className:"fas fa-caret-down"})," 5%"):null,3===this.state.projection&&4===this.state.metric?m.a.createElement("td",{className:"text-center"},"54342"):null,3===this.state.projection&&4===this.state.metric?m.a.createElement("td",{className:"growth text-center"},m.a.createElement("i",{className:"fas fa-caret-up"})," 15%"):null,1===this.state.projection&&5===this.state.metric?m.a.createElement("td",{className:"text-center"},"87517"):null,1===this.state.projection&&5===this.state.metric?m.a.createElement("td",{className:"growth text-center"},m.a.createElement("i",{className:"fas fa-caret-up"})," 14%"):null,2===this.state.projection&&5===this.state.metric?m.a.createElement("td",{className:"text-center"},"44123"):null,2===this.state.projection&&5===this.state.metric?m.a.createElement("td",{className:"down text-center"},m.a.createElement("i",{className:"fas fa-caret-down"})," 5%"):null,3===this.state.projection&&5===this.state.metric?m.a.createElement("td",{className:"text-center"},"54342"):null,3===this.state.projection&&5===this.state.metric?m.a.createElement("td",{className:"growth text-center"},m.a.createElement("i",{className:"fas fa-caret-up"})," 15%"):null),m.a.createElement("tr",null,m.a.createElement("td",{className:"text-center"},"Direct Traffic"),1===this.state.projection&&1===this.state.metric?m.a.createElement("td",{className:"text-center"},"56953"):null,1===this.state.projection&&1===this.state.metric?m.a.createElement("td",{className:"growth text-center"},m.a.createElement("i",{className:"fas fa-caret-up"})," 14%"):null,2===this.state.projection&&1===this.state.metric?m.a.createElement("td",{className:"text-center"},"23553"):null,2===this.state.projection&&1===this.state.metric?m.a.createElement("td",{className:"down text-center"},m.a.createElement("i",{className:"fas fa-caret-down"})," 5%"):null,3===this.state.projection&&1===this.state.metric?m.a.createElement("td",{className:"text-center"},"63853"):null,3===this.state.projection&&1===this.state.metric?m.a.createElement("td",{className:"growth text-center"},m.a.createElement("i",{className:"fas fa-caret-up"})," 15%"):null,1===this.state.projection&&2===this.state.metric?m.a.createElement("td",{className:"text-center"},"68391"):null,1===this.state.projection&&2===this.state.metric?m.a.createElement("td",{className:"growth text-center"},m.a.createElement("i",{className:"fas fa-caret-up"})," 14%"):null,2===this.state.projection&&2===this.state.metric?m.a.createElement("td",{className:"text-center"},"86621"):null,2===this.state.projection&&2===this.state.metric?m.a.createElement("td",{className:"down text-center"},m.a.createElement("i",{className:"fas fa-caret-down"})," 5%"):null,3===this.state.projection&&2===this.state.metric?m.a.createElement("td",{className:"text-center"},"44721"):null,3===this.state.projection&&2===this.state.metric?m.a.createElement("td",{className:"growth text-center"},m.a.createElement("i",{className:"fas fa-caret-up"})," 15%"):null,1===this.state.projection&&3===this.state.metric?m.a.createElement("td",{className:"text-center"},"95713"):null,1===this.state.projection&&3===this.state.metric?m.a.createElement("td",{className:"growth text-center"},m.a.createElement("i",{className:"fas fa-caret-up"})," 14%"):null,2===this.state.projection&&3===this.state.metric?m.a.createElement("td",{className:"text-center"},"56361"):null,2===this.state.projection&&3===this.state.metric?m.a.createElement("td",{className:"down text-center"},m.a.createElement("i",{className:"fas fa-caret-down"})," 5%"):null,3===this.state.projection&&3===this.state.metric?m.a.createElement("td",{className:"text-center"},"32513"):null,3===this.state.projection&&3===this.state.metric?m.a.createElement("td",{className:"growth text-center"},m.a.createElement("i",{className:"fas fa-caret-up"})," 15%"):null,1===this.state.projection&&4===this.state.metric?m.a.createElement("td",{className:"text-center"},"87517"):null,1===this.state.projection&&4===this.state.metric?m.a.createElement("td",{className:"growth text-center"},m.a.createElement("i",{className:"fas fa-caret-up"})," 14%"):null,2===this.state.projection&&4===this.state.metric?m.a.createElement("td",{className:"text-center"},"44123"):null,2===this.state.projection&&4===this.state.metric?m.a.createElement("td",{className:"down text-center"},m.a.createElement("i",{className:"fas fa-caret-down"})," 5%"):null,3===this.state.projection&&4===this.state.metric?m.a.createElement("td",{className:"text-center"},"54342"):null,3===this.state.projection&&4===this.state.metric?m.a.createElement("td",{className:"growth text-center"},m.a.createElement("i",{className:"fas fa-caret-up"})," 15%"):null,1===this.state.projection&&5===this.state.metric?m.a.createElement("td",{className:"text-center"},"87517"):null,1===this.state.projection&&5===this.state.metric?m.a.createElement("td",{className:"growth text-center"},m.a.createElement("i",{className:"fas fa-caret-up"})," 14%"):null,2===this.state.projection&&5===this.state.metric?m.a.createElement("td",{className:"text-center"},"44123"):null,2===this.state.projection&&5===this.state.metric?m.a.createElement("td",{className:"down text-center"},m.a.createElement("i",{className:"fas fa-caret-down"})," 5%"):null,3===this.state.projection&&5===this.state.metric?m.a.createElement("td",{className:"text-center"},"54342"):null,3===this.state.projection&&5===this.state.metric?m.a.createElement("td",{className:"growth text-center"},m.a.createElement("i",{className:"fas fa-caret-up"})," 15%"):null))))))))))}}]),t}(o.Component);t.default=b}}]);
//# sourceMappingURL=11.08f68f52.chunk.js.map