(function(){var h=this,l=function(a){return"string"==typeof a},aa=Date.now||function(){return+new Date};var m=function(a){a=parseFloat(a);return isNaN(a)||1<a||0>a?0:a};var ba=m("0.20"),ca=m("1.0"),da=m("0.0");var ea=/^true$/.test("false");var fa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(l(a))return l(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ha=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=l(a)?a.split(""):a,k=0;k<d;k++)if(k in g){var n=g[k];b.call(c,n,k,a)&&(e[f++]=n)}return e},ia=Array.prototype.map?
function(a,b,c){return Array.prototype.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=l(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},ja=function(a){return Array.prototype.concat.apply([],arguments)};var p=function(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b};var r=function(a){r[" "](a);return a};r[" "]=function(){};var v=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};var w=null,la=function(){var a=p(ka);this.i={};this.b={};a=a||[];for(var b=0,c=a.length;b<c;++b)this.b[a[b]]=""},y=function(){if(null===w){w="";try{var a=h.top.location.hash;if(a){var b=a.match(/\bdeid=([\d,]+)/);w=b?b[1]:""}}catch(c){}}return w},B=function(a,b,c){var d=z;if(c?d.b.hasOwnProperty(c)&&""==d.b[c]:1){var e;e=(e=y())?(e=e.match(new RegExp("\\b("+a.join("|")+")\\b")))?e[0]:null:null;if(e)a=e;else a:{if(!(1E-4>Math.random())&&(e=Math.random(),e<b)){try{var f=new Uint32Array(1);h.crypto.getRandomValues(f);
e=f[0]/65536/65536}catch(g){e=Math.random()}a=a[Math.floor(e*a.length)];break a}a=null}a&&""!=a&&(c?d.b.hasOwnProperty(c)&&(d.b[c]=a):d.i[a]=!0)}},C=function(a){var b=z;return b.b.hasOwnProperty(a)?b.b[a]:""},ma=function(){var a=z,b=[];v(a.i,function(a,d){b.push(d)});v(a.b,function(a){""!=a&&b.push(a)});return b};var ka={f:2,g:3,h:4},D={g:{c:"27391101",a:"27391102"},f:{c:"376635470",a:"376635471"},h:{c:"659234980",a:"659234981"}},z=null,na=function(){var a=ja.apply([],ia(p(D),function(a){return p(a)},void 0)),b=ha(y().split(","),function(b){return""!=b&&!(0<=fa(a,b))});return 0<b.length?"&debug_experiment_id="+b.join(","):""};var E=function(a,b,c){for(;0<=(b=a.indexOf("fmt",b))&&b<c;){var d=a.charCodeAt(b-1);if(38==d||63==d)if(d=a.charCodeAt(b+3),!d||61==d||38==d||35==d)return b;b+=4}return-1},F=/#|$/,oa=/[?&]($|#)/;var G="google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_evaluemrc google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_enable_display_cookie_match google_remarketing_only google_remarketing_for_search google_conversion_items google_conversion_merchant_id google_user_id google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_conversion_page_url google_conversion_referrer_url".split(" "),
H=["google_conversion_first_time","google_conversion_snippets"],J=function(a){return null!=a?encodeURIComponent(a.toString()):""},K=function(a){if(null!=a){a=a.toString().substring(0,512);var b=a.indexOf("#");return-1==b?a:a.substring(0,b)}return""},L=function(a,b){b=J(b);return""!=b&&(a=J(a),""!=a)?"&".concat(a,"=",b):""},M=function(a){var b=typeof a;return null==a||"object"==b||"function"==b?null:String(a).replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/=/g,"\\=")},pa=function(a){if((a=a.google_custom_params)&&
"object"==typeof a&&"function"!=typeof a.join){var b=[];for(g in a)if(Object.prototype.hasOwnProperty.call(a,g)){var c=a[g];if(c&&"function"==typeof c.join){for(var d=[],e=0;e<c.length;++e){var f=M(c[e]);null!=f&&d.push(f)}c=0==d.length?null:d.join(",")}else c=M(c);(d=M(g))&&null!=c&&b.push(d+"="+c)}var g=b.join(";")}else g="";return""==g?"":"&".concat("data=",encodeURIComponent(g))},qa=function(a){if(null!=a){a=a.toString();if(2==a.length)return L("hl",a);if(5==a.length)return L("hl",a.substring(0,
2))+L("gl",a.substring(3,5))}return""};function N(a){return"number"!=typeof a&&"string"!=typeof a?"":J(a.toString())}
var ra=function(a){if(!a)return"";a=a.google_conversion_items;if(!a)return"";for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=[];e&&(f.push(N(e.value)),f.push(N(e.quantity)),f.push(N(e.item_id)),f.push(N(e.adwords_grouping)),f.push(N(e.sku)),b.push("("+f.join("*")+")"))}return 0<b.length?"&item="+b.join(""):""},sa=function(a,b,c){var d=[];if(a){var e=a.screen;e&&(d.push(L("u_h",e.height)),d.push(L("u_w",e.width)),d.push(L("u_ah",e.availHeight)),d.push(L("u_aw",e.availWidth)),d.push(L("u_cd",e.colorDepth)));
a.history&&d.push(L("u_his",a.history.length))}c&&"function"==typeof c.getTimezoneOffset&&d.push(L("u_tz",-c.getTimezoneOffset()));b&&("function"==typeof b.javaEnabled&&d.push(L("u_java",b.javaEnabled())),b.plugins&&d.push(L("u_nplug",b.plugins.length)),b.mimeTypes&&d.push(L("u_nmime",b.mimeTypes.length)));return d.join("")};
function ta(a){a=a?a.title:"";if(void 0==a||""==a)return"";var b=function(a){try{return decodeURIComponent(a),!0}catch(e){return!1}};a=encodeURIComponent(a);for(var c=256;!b(a.substr(0,c));)c--;return"&tiba="+a.substr(0,c)}
var O=function(a,b,c,d){var e="";if(b){if(a.top==a)var f=0;else{var g=a.location.ancestorOrigins;if(g)f=g[g.length-1]==a.location.origin?1:2;else{g=a.top;try{var k;if(k=!!g&&null!=g.location.href)c:{try{r(g.foo);k=!0;break c}catch(n){}k=!1}f=k}catch(n){f=!1}f=f?1:2}}a=c?c:1==f?a.top.location.href:a.location.href;e+=L("frm",f);e+=L("url",K(a));e+=L("ref",K(d||b.referrer))}return e},P=function(a,b){return!(ea||b&&ua.test(navigator.userAgent))||a&&a.location&&a.location.protocol&&"https:"==a.location.protocol.toString().toLowerCase()?
"https:":"http:"},Q=function(a,b,c){c=c.google_remarketing_only?"googleads.g.doubleclick.net":c.google_conversion_domain||"www.googleadservices.com";return P(a,/www[.]googleadservices[.]com/i.test(c))+"//"+c+"/pagead/"+b},va=function(a,b,c,d){var e="/?";"landing"==d.google_conversion_type&&(e="/extclk?");e=[d.google_remarketing_only?"viewthroughconversion/":"conversion/",J(d.google_conversion_id),e,"random=",J(d.google_conversion_time)].join("");e=Q(a,e,d);a=[L("cv",d.google_conversion_js_version),
L("fst",d.google_conversion_first_time),L("num",d.google_conversion_snippets),L("fmt",d.google_conversion_format),L("userId",d.google_user_id),L("value",d.google_conversion_value),L("evaluemrc",d.google_conversion_evaluemrc),L("currency_code",d.google_conversion_currency),L("label",d.google_conversion_label),L("oid",d.google_conversion_order_id),L("bg",d.google_conversion_color),qa(d.google_conversion_language),L("guid","ON"),L("disvt",d.google_disable_viewthrough),L("eid",ma().join()),ra(d),sa(a,
b,d.google_conversion_date),pa(d),O(a,c,d.google_conversion_page_url,d.google_conversion_referrer_url),d.google_remarketing_for_search&&!d.google_conversion_domain?"&srr=n":"",ta(c)].join("")+na();return e+a},R=function(a,b,c,d,e,f){return'<iframe name="'+a+'" title="'+b+'" width="'+d+'" height="'+e+'" src="'+c+'" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true"'+(f?' style="display:none"':"")+' scrolling="no"></iframe>'},wa=function(a){return{ar:1,bg:1,
cs:1,da:1,de:1,el:1,en_AU:1,en_US:1,en_GB:1,es:1,et:1,fi:1,fr:1,hi:1,hr:1,hu:1,id:1,is:1,it:1,iw:1,ja:1,ko:1,lt:1,nl:1,no:1,pl:1,pt_BR:1,pt_PT:1,ro:1,ru:1,sk:1,sl:1,sr:1,sv:1,th:1,tl:1,tr:1,vi:1,zh_CN:1,zh_TW:1}[a]?a+".html":"en_US.html"},ua=/Android ([01]\.|2\.[01])/i,xa=function(a,b){if(!b.google_remarketing_only||!b.google_enable_display_cookie_match||!z||C(2)!=D.f.a)return"";a=P(a,!1)+"//bid.g.doubleclick.net/xbbe/pixel?d=KAE";return R("google_cookie_match_frame","Google cookie match frame",a,
1,1,!0)};function S(a,b){return'<img height="1" width="1" border="0" alt="" src="'+a.replace("gen204Type",b)+'" style="display:none" />'}
var ya=function(a){if(z&&C(4)==D.h.a){var b=Math.floor(1E9*Math.random()),c=P(a,!1)+"//pagead2.googlesyndication.com/pagead/gen_204?id=beacon-api-web-survey&type=gen204Type";c+=L("random",b);c+=L("time",aa());if(a.navigator&&a.navigator.sendBeacon){try{var d=c.replace("gen204Type","send-beacon");a.navigator.sendBeacon(d,"")}catch(e){}return S(c,"img")}return S(c,"beacon-undefined")}return""},T=function(a,b,c,d){var e="";d.google_remarketing_only&&d.google_enable_display_cookie_match&&(z&&B([D.f.c,
D.f.a],ba,2),e=xa(a,d));3!=d.google_conversion_format||d.google_remarketing_only||d.google_conversion_domain||z&&B([D.g.c,D.g.a],ca,3);z&&B([D.h.c,D.h.a],da,4);b=va(a,b,c,d);var f=function(a,b,c,d){return'<img height="'+c+'" width="'+b+'" border="0" alt="" src="'+a+'"'+(d?' style="display:none"':"")+" />"};return 0==d.google_conversion_format&&null==d.google_conversion_domain?'<a href="'+(P(a,!1)+"//services.google.com/sitestats/"+wa(d.google_conversion_language)+"?cid="+J(d.google_conversion_id))+
'" target="_blank">'+f(b,135,27,!1)+"</a>"+e:1<d.google_conversion_snippets||3==d.google_conversion_format?za(c,b)?e:f(b,1,1,!0)+e+ya(a):R("google_conversion_frame","Google conversion frame",b,2==d.google_conversion_format?200:300,2==d.google_conversion_format?26:13,!1)+e};function Aa(){return new Image}
function za(a,b){if(z&&C(3)===D.g.a)try{var c=b.search(F),d=E(b,0,c);if(0>d)var e=null;else{var f=b.indexOf("&",d);if(0>f||f>c)f=c;d+=4;e=decodeURIComponent(b.substr(d,f-d).replace(/\+/g," "))}if(3!=e)var g=!1;else{var k=b.search(F);e=0;var n;for(c=[];0<=(n=E(b,e,k));)c.push(b.substring(e,n)),e=Math.min(b.indexOf("&",n)+1||k,k);c.push(b.substr(e));var q=c.join("").replace(oa,"$1");var A="fmt="+encodeURIComponent("4");if(A){var t=q.indexOf("#");0>t&&(t=q.length);var x=q.indexOf("?");if(0>x||x>t){x=
t;var U=""}else U=q.substring(x+1,t);var u=[q.substr(0,x),U,q.substr(t)];var I=u[1];u[1]=A?I?I+"&"+A:A:I;var V=u[0]+(u[1]?"?"+u[1]:"")+u[2]}else V=q;var W=a.createElement("script");W.src=V;a.getElementsByTagName("script")[0].parentElement.appendChild(W);g=!0}return g}catch(Ka){}return!1}
var Ba=function(a,b){var c=a.opt_image_generator&&a.opt_image_generator.call;b+=L("async","1");var d=Aa;c&&(d=a.opt_image_generator);a=d();a.src=b;a.onload=function(){}},X=function(a,b,c){var d=Math.floor(1E9*Math.random());d=[J(c.google_conversion_id),"/?random=",d].join("");d=P(a,!1)+"//www.google.com/ads/user-lists/"+d;a=[L("label",c.google_conversion_label),L("fmt","3"),O(a,b,c.google_conversion_page_url,c.google_conversion_referrer_url)].join("");Ba(c,d+a)},Ca=function(a,b){for(var c=document.createElement("iframe"),
d=[],e=[],f=0;f<b.google_conversion_items.length;f++){var g=b.google_conversion_items[f];g&&g.quantity&&g.sku&&(d.push(g.sku),e.push(g.quantity))}a=P(a,!1)+"//www.google.com/ads/mrc";c.src=a+"?sku="+d.join(",")+"&qty="+e.join(",")+"&oid="+b.google_conversion_order_id+"&mcid="+b.google_conversion_merchant_id;c.style.width="1px";c.style.height="1px";c.style.display="none";return c},Da=function(a){if("landing"==a.google_conversion_type||!a.google_conversion_id||a.google_remarketing_only&&a.google_disable_viewthrough)return!1;
a.google_conversion_date=new Date;a.google_conversion_time=a.google_conversion_date.getTime();a.google_conversion_snippets="number"==typeof a.google_conversion_snippets&&0<a.google_conversion_snippets?a.google_conversion_snippets+1:1;"number"!=typeof a.google_conversion_first_time&&(a.google_conversion_first_time=a.google_conversion_time);a.google_conversion_js_version="8";0!=a.google_conversion_format&&1!=a.google_conversion_format&&2!=a.google_conversion_format&&3!=a.google_conversion_format&&(a.google_conversion_format=
1);!1!==a.google_enable_display_cookie_match&&(a.google_enable_display_cookie_match=!0);z=new la;return!0},Ea=function(a){for(var b=0;b<G.length;b++)a[G[b]]=null},Fa=function(a){for(var b={},c=0;c<G.length;c++)b[G[c]]=a[G[c]];for(c=0;c<H.length;c++)b[H[c]]=a[H[c]];return b},Ga=function(a){var b=document.getElementsByTagName("head")[0];b||(b=document.createElement("head"),document.getElementsByTagName("html")[0].insertBefore(b,document.getElementsByTagName("body")[0]));var c=document.createElement("script");
c.src=Q(window,"conversion_debug_overlay.js",a);b.appendChild(c)};var Ha=function(a,b,c){a.addEventListener?a.addEventListener(b,c,void 0):a.attachEvent&&a.attachEvent("on"+b,c)};var Y=function(a){return{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.webkitVisibilityState||a.mozVisibilityState||a.visibilityState||""]||0},Ia=function(a){var b;a.mozVisibilityState?b="mozvisibilitychange":a.webkitVisibilityState?b="webkitvisibilitychange":a.visibilityState&&(b="visibilitychange");return b},Z=function(a,b){if(3==Y(b))return!1;a();return!0},Ja=function(a,b){if(!Z(a,b)){var c=!1,d=Ia(b),e=function(){if(!c&&Z(a,b)){c=!0;var f=e;b.removeEventListener?b.removeEventListener(d,
f,void 0):b.detachEvent&&b.detachEvent("on"+d,f)}};d&&Ha(b,d,e)}};(function(a,b,c){if(a)if(/[\?&;]google_debug/.exec(document.URL))Ga(a);else{try{if(Da(a))if(3==Y(c)){var d=Fa(a),e="google_conversion_"+Math.floor(1E9*Math.random());c.write('<span id="'+e+'"></span>');Ja(function(){try{var f=c.getElementById(e);f&&(f.innerHTML=T(a,b,c,d),d.google_remarketing_for_search&&!d.google_conversion_domain&&X(a,c,d))}catch(g){}},c)}else c.write(T(a,b,c,a)),a.google_remarketing_for_search&&!a.google_conversion_domain&&X(a,c,a);a.google_conversion_merchant_id&&a.google_conversion_order_id&&
a.google_conversion_items&&c.documentElement.appendChild(Ca(a,a))}catch(f){}Ea(a)}})(window,navigator,document);}).call(this);
