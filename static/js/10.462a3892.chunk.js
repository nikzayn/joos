(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{258:function(e,a,t){"use strict";var l=t(85),r=t(86),n=t(88),c=t(87),s=t(89),m=t(90),o=t(1),E=t.n(o),d=t(249),u=t(314),i=t(315),b=t(277),p=t(316),N=t(317),h=t(278),x=t(318),g=t(247),v=(t(248),{labels:["Myntra","Paytm","Amazon","Flipkart"],datasets:[{data:[96,12,32,24],backgroundColor:["#FF6384","#36A2EB","#FFCE56","#FFCC00"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56","#FFCC00"]}]}),y={tooltips:{enabled:!1,custom:g.CustomTooltips,intersect:!0,mode:"index",position:"nearest",labels:{render:"label"},callbacks:{labelColor:function(e,a){return{backgroundColor:a.data.datasets[e.datasetIndex].borderColor}}}},maintainAspectRatio:!0,legend:{display:!1}},k={labels:["Myntra","Paytm","Amazon","Flipkart"],datasets:[{data:[96,12,32,24],backgroundColor:["#FF6384","#36A2EB","#FFCE56","#FFCC00"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56","#FFCC00"]}]},f={tooltips:{enabled:!1,custom:g.CustomTooltips,intersect:!0,mode:"index",position:"nearest",labels:{render:"label"},callbacks:{labelColor:function(e,a){return{backgroundColor:a.data.datasets[e.datasetIndex].borderColor}}}},maintainAspectRatio:!0,legend:{display:!1}},F={labels:["Myntra","Paytm","Amazon","Flipkart"],datasets:[{data:[96,12,32,24],backgroundColor:["#FF6384","#36A2EB","#FFCE56","#FFCC00"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56","#FFCC00"]}]},j={tooltips:{enabled:!1,custom:g.CustomTooltips,intersect:!0,mode:"index",position:"nearest",callbacks:{labelColor:function(e,a){return{backgroundColor:a.data.datasets[e.datasetIndex].borderColor}}}},maintainAspectRatio:!0,legend:{display:!1}},C={labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],datasets:[{backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:[65,59,80,81,56,55,40]}]},O={responsive:!0,scales:{xAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Week"}}],yAxes:[{display:!0,scaleLabel:{display:!0,labelString:"Revenue(\u20b9)"}}]},legend:!1},A=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(n.a)(this,Object(c.a)(a).call(this,e))).onAcqData=t.onAcqData.bind(Object(m.a)(Object(m.a)(t))),t.monweek=t.monweek.bind(Object(m.a)(Object(m.a)(t))),t.state={acqData:1,monweek:1},t}return Object(s.a)(a,e),Object(r.a)(a,[{key:"onAcqData",value:function(e){this.setState({acqData:e})}},{key:"monweek",value:function(e){this.setState({monweek:e})}},{key:"render",value:function(){return E.a.createElement("div",null,E.a.createElement("br",null),E.a.createElement(u.a,{className:"justify-content-center"},E.a.createElement(i.a,{className:"m-4"},E.a.createElement(b.a,{className:"text-center"},"By Stores"),E.a.createElement(p.a,null,E.a.createElement("div",{className:"chart-wrapper",height:50},E.a.createElement(d.c,{data:v,options:y}))),E.a.createElement("br",null),E.a.createElement(N.a,null,E.a.createElement(h.a,{responsive:!0,bordered:!0},E.a.createElement("thead",null,E.a.createElement("tr",null,E.a.createElement("th",{className:"text-center"},"Store"),E.a.createElement("th",{className:"text-center"},"Revenue"))),E.a.createElement("tbody",null,E.a.createElement("tr",null,E.a.createElement("td",{className:"text-center"},"Mytnra"),E.a.createElement("td",{className:"text-center"},"48000")),E.a.createElement("tr",null,E.a.createElement("td",{className:"text-center"},"Amazon"),E.a.createElement("td",{className:"text-center"},"34000")),E.a.createElement("tr",null,E.a.createElement("td",{className:"text-center"},"Flipkart"),E.a.createElement("td",{className:"text-center"},"22000")),E.a.createElement("tr",null,E.a.createElement("td",{className:"text-center"},"Paytm"),E.a.createElement("td",{className:"text-center"},"45000")))))),E.a.createElement(i.a,{className:"m-4"},E.a.createElement(b.a,{className:"text-center"},"By Category"),E.a.createElement(p.a,null,E.a.createElement("div",{className:"chart-wrapper",height:50},E.a.createElement(d.c,{data:k,options:f}))),E.a.createElement(N.a,null,E.a.createElement(h.a,{responsive:!0,bordered:!0},E.a.createElement("thead",null,E.a.createElement("tr",null,E.a.createElement("th",{className:"text-center"},"Store"),E.a.createElement("th",{className:"text-center"},"Revenue"))),E.a.createElement("tbody",null,E.a.createElement("tr",null,E.a.createElement("td",{className:"text-center"},"Mytnra"),E.a.createElement("td",{className:"text-center"},"48000")),E.a.createElement("tr",null,E.a.createElement("td",{className:"text-center"},"Amazon"),E.a.createElement("td",{className:"text-center"},"34000")),E.a.createElement("tr",null,E.a.createElement("td",{className:"text-center"},"Flipkart"),E.a.createElement("td",{className:"text-center"},"22000")),E.a.createElement("tr",null,E.a.createElement("td",{className:"text-center"},"Paytm"),E.a.createElement("td",{className:"text-center"},"45000")))))),E.a.createElement(i.a,{className:"m-4"},E.a.createElement(b.a,{className:"text-center"},"By Order"),E.a.createElement(p.a,null,E.a.createElement("div",{className:"chart-wrapper",height:50},E.a.createElement(d.c,{data:F,options:j}))),E.a.createElement(N.a,null,E.a.createElement(h.a,{responsive:!0,bordered:!0},E.a.createElement("thead",null,E.a.createElement("tr",null,E.a.createElement("th",{className:"text-center"},"Store"),E.a.createElement("th",{className:"text-center"},"Revenue"))),E.a.createElement("tbody",null,E.a.createElement("tr",null,E.a.createElement("td",{className:"text-center"},"Mytnra"),E.a.createElement("td",{className:"text-center"},"48000")),E.a.createElement("tr",null,E.a.createElement("td",{className:"text-center"},"Amazon"),E.a.createElement("td",{className:"text-center"},"34000")),E.a.createElement("tr",null,E.a.createElement("td",{className:"text-center"},"Flipkart"),E.a.createElement("td",{className:"text-center"},"22000")),E.a.createElement("tr",null,E.a.createElement("td",{className:"text-center"},"Paytm"),E.a.createElement("td",{className:"text-center"},"45000"))))))),E.a.createElement("br",null),E.a.createElement("br",null),E.a.createElement("hr",null),E.a.createElement("br",null),E.a.createElement(i.a,null,E.a.createElement("br",null),E.a.createElement("h2",{className:"text-center display-4"},"Yoghurt Advantage"),E.a.createElement("p",{className:"text-center"},"(Last 6 months)"),E.a.createElement("br",null),E.a.createElement(u.a,{className:"justify-content-center"},E.a.createElement(x.a,{className:"m-2",color:"dark"},"All Stores"),E.a.createElement(x.a,{className:"m-2",color:"dark"},"Amazon"),E.a.createElement(x.a,{className:"m-2",color:"dark"},"Flipkart"),E.a.createElement(x.a,{className:"m-2",color:"dark"},"Paytm"),E.a.createElement(x.a,{className:"m-2",color:"dark"},"Myntra")),E.a.createElement("br",null),E.a.createElement("br",null),E.a.createElement("h5",{className:"text-center"},"Total Revenue(\u20b9): ",E.a.createElement("span",null,"1,24,000")),E.a.createElement("br",null),E.a.createElement(u.a,{className:"justify-content-center"},E.a.createElement(N.a,{className:"text-center",xs:"12",lg:"6"},E.a.createElement(b.a,null,"Additional Revenue from Yoghurt"),E.a.createElement(h.a,{responsive:!0,bordered:!0},E.a.createElement("tbody",null,E.a.createElement("tr",null,E.a.createElement("td",{className:"text-center"},"21000"),E.a.createElement("td",{className:"text-center"},"8%")))))),E.a.createElement("br",null),E.a.createElement(u.a,{className:"justify-content-center"},E.a.createElement(i.a,{className:"m-4"},E.a.createElement(b.a,{className:"text-center"},"Understocking"),E.a.createElement(p.a,null,E.a.createElement("div",{className:"chart-wrapper",height:50},E.a.createElement(d.b,{data:C,options:O}))),E.a.createElement(N.a,{className:"text-center"},E.a.createElement(b.a,null,"Additional Revenue from Yoghurt"),E.a.createElement(h.a,{responsive:!0,bordered:!0},E.a.createElement("tbody",null,E.a.createElement("tr",null,E.a.createElement("td",{className:"text-center"},"12000"),E.a.createElement("td",{className:"text-center"},"5%")))))),E.a.createElement(i.a,{className:"m-4"},E.a.createElement(b.a,{className:"text-center"},"Overstocking"),E.a.createElement(p.a,null,E.a.createElement("div",{className:"chart-wrapper",height:50},E.a.createElement(d.b,{data:C,options:O}))),E.a.createElement(N.a,{className:"text-center"},E.a.createElement(b.a,null,"Additional Revenue from Yoghurt"),E.a.createElement(h.a,{responsive:!0,bordered:!0},E.a.createElement("tbody",null,E.a.createElement("tr",null,E.a.createElement("td",{className:"text-center"},"9000"),E.a.createElement("td",{className:"text-center"},"3%")))))))),E.a.createElement("br",null),E.a.createElement("br",null),E.a.createElement("hr",null),E.a.createElement("br",null),E.a.createElement(i.a,null,E.a.createElement("br",null),E.a.createElement("h2",{className:"text-center display-4"},"Revenue Forecast"),E.a.createElement("p",{className:"text-center"},"(Last 5 months)"),E.a.createElement("br",null),E.a.createElement(u.a,{className:"justify-content-center"},E.a.createElement(x.a,{className:"m-2",color:"dark"},"All Stores"),E.a.createElement(x.a,{className:"m-2",color:"dark"},"Amazon"),E.a.createElement(x.a,{className:"m-2",color:"dark"},"Flipkart"),E.a.createElement(x.a,{className:"m-2",color:"dark"},"Paytm"),E.a.createElement(x.a,{className:"m-2",color:"dark"},"Myntra")),E.a.createElement("br",null),E.a.createElement("br",null),E.a.createElement(u.a,{className:"justify-content-center"},E.a.createElement("div",{className:"chart-wrapper",style:{height:300,width:500}},E.a.createElement(d.a,{data:C,options:O}))),E.a.createElement("br",null),E.a.createElement(u.a,{className:"p-3"},E.a.createElement(N.a,{xs:"12",sm:"6",lg:"4"},E.a.createElement(i.a,{className:"text-white bg-info"},E.a.createElement(p.a,{className:"pb-0"},E.a.createElement("div",{className:"text-center text-value"},"Next 7 Days"),E.a.createElement("div",{className:"text-center"},"(03 - 09 July)")),E.a.createElement("br",null),E.a.createElement("div",{className:"text-center"},E.a.createElement("h2",null,"55,000")),E.a.createElement("br",null),E.a.createElement("div",{className:"text-center"},E.a.createElement("h4",null,"Range"),E.a.createElement("p",null,"45,000 - 65,000")))),E.a.createElement(N.a,{xs:"12",sm:"6",lg:"4"},E.a.createElement(i.a,{className:"text-white bg-info"},E.a.createElement(p.a,{className:"pb-0"},E.a.createElement("div",{className:"text-center text-value"},"Next 7 Days"),E.a.createElement("div",{className:"text-center"},"(03 - 09 July)")),E.a.createElement("br",null),E.a.createElement("div",{className:"text-center"},E.a.createElement("h2",null,"55,000")),E.a.createElement("br",null),E.a.createElement("div",{className:"text-center"},E.a.createElement("h4",null,"Range"),E.a.createElement("p",null,"45,000 - 65,000")))),E.a.createElement(N.a,{xs:"12",sm:"6",lg:"4"},E.a.createElement(i.a,{className:"text-white bg-info"},E.a.createElement(p.a,{className:"pb-0"},E.a.createElement("div",{className:"text-center text-value"},"Next 7 Days"),E.a.createElement("div",{className:"text-center"},"(03 - 09 July)")),E.a.createElement("br",null),E.a.createElement("div",{className:"text-center"},E.a.createElement("h2",null,"55,000")),E.a.createElement("br",null),E.a.createElement("div",{className:"text-center"},E.a.createElement("h4",null,"Range"),E.a.createElement("p",null,"45,000 - 65,000")))))))}}]),a}(o.Component);a.a=A},277:function(e,a,t){"use strict";var l=t(33),r=t(244),n=t(1),c=t.n(n),s=t(0),m=t.n(s),o=t(243),E=t.n(o),d=t(245),u={tag:d.i,className:m.a.string,cssModule:m.a.object},i=function(e){var a=e.className,t=e.cssModule,n=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),m=Object(d.f)(E()(a,"card-header"),t);return c.a.createElement(n,Object(l.a)({},s,{className:m}))};i.propTypes=u,i.defaultProps={tag:"div"},a.a=i},278:function(e,a,t){"use strict";var l=t(33),r=t(244),n=t(1),c=t.n(n),s=t(0),m=t.n(s),o=t(243),E=t.n(o),d=t(245),u={className:m.a.string,cssModule:m.a.object,size:m.a.string,bordered:m.a.bool,borderless:m.a.bool,striped:m.a.bool,inverse:Object(d.d)(m.a.bool,'Please use the prop "dark"'),dark:m.a.bool,hover:m.a.bool,responsive:m.a.oneOfType([m.a.bool,m.a.string]),tag:d.i,responsiveTag:d.i,innerRef:m.a.oneOfType([m.a.func,m.a.string,m.a.object])},i=function(e){var a=e.className,t=e.cssModule,n=e.size,s=e.bordered,m=e.borderless,o=e.striped,u=e.inverse,i=e.dark,b=e.hover,p=e.responsive,N=e.tag,h=e.responsiveTag,x=e.innerRef,g=Object(r.a)(e,["className","cssModule","size","bordered","borderless","striped","inverse","dark","hover","responsive","tag","responsiveTag","innerRef"]),v=Object(d.f)(E()(a,"table",!!n&&"table-"+n,!!s&&"table-bordered",!!m&&"table-borderless",!!o&&"table-striped",!(!i&&!u)&&"table-dark",!!b&&"table-hover"),t),y=c.a.createElement(N,Object(l.a)({},g,{ref:x,className:v}));if(p){var k=!0===p?"table-responsive":"table-responsive-"+p;return c.a.createElement(h,{className:k},y)}return y};i.propTypes=u,i.defaultProps={tag:"table",responsiveTag:"div"},a.a=i},491:function(e,a,t){"use strict";t.r(a);var l=t(85),r=t(86),n=t(88),c=t(87),s=t(89),m=t(1),o=t.n(m),E=t(247),d=t(248),u=t(258),i=t(288),b=t(290),p=t(291),N=t(292),h=t(293),x=Object(d.getStyle)("--primary"),g=Object(d.getStyle)("--success"),v=Object(d.getStyle)("--info"),y=Object(d.getStyle)("--warning"),k=Object(d.getStyle)("--danger");function f(e,a){return Math.floor(Math.random()*(a-e+1)+e)}for(var F=6,j=[],C=[],O=[],A=[],R=[],T=0;T<=F;T++)j.push(f(50,200)),C.push(f(60,190)),O.push(f(70,160)),A.push(f(80,140)),R.push(f(90,120));function w(e,a){return Math.floor(Math.random()*(a-e+1)+e)}F=6;var M=[],S=[],B=[],z=[],P=[];for(T=0;T<=F;T++)M.push(w(30,180)),S.push(w(70,220)),B.push(w(66,122)),z.push(w(22,160)),P.push(w(40,110));Object(d.hexToRgba)(x),Object(d.hexToRgba)(g),Object(d.hexToRgba)(k),Object(d.hexToRgba)(y),Object(d.hexToRgba)(v),E.CustomTooltips,Math.ceil(50),Object(d.hexToRgba)(x,0),Object(d.hexToRgba)(g,0),Object(d.hexToRgba)(k,0),Object(d.hexToRgba)(y,0),Object(d.hexToRgba)(v,0),E.CustomTooltips,Math.ceil(50);var D=function(e){function a(){return Object(l.a)(this,a),Object(n.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(u.a,null),o.a.createElement(i.a,null),o.a.createElement(b.a,null),o.a.createElement(p.a,null),o.a.createElement(N.a,null),o.a.createElement(h.a,null))}}]),a}(m.Component);a.default=D}}]);
//# sourceMappingURL=10.462a3892.chunk.js.map