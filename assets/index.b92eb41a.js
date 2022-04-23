import{S as J,i as K,s as V,e as _,t as L,a as b,b as d,c as v,d as c,f as W,g as k,h as U,j as se,l as O,n as D,k as _e,r as he,m as me,o as ye,p as ge,u as be,q as C,v as q,w as N,x,y as ve,L as Ce,z as B,A,B as M,C as ce,D as ke,E as $e,F as xe,G as ze,H as Q,I as te,R as Te,J as le}from"./vendor.3c60a396.js";const Le=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerpolicy&&(r.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?r.credentials="include":l.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(l){if(l.ep)return;l.ep=!0;const r=t(l);fetch(l.href,r)}};Le();function ue(a,e,t){const n=a.slice();return n[6]=e[t],n}function fe(a){let e,t=a[6].name+"",n,l,r;return{c(){e=_("option"),n=L(t),l=b(),d(e,"class","text-white"),e.__value=r=a[6].id,e.value=e.__value},m(i,s){v(i,e,s),c(e,n),c(e,l)},p(i,s){s&2&&t!==(t=i[6].name+"")&&W(n,t),s&2&&r!==(r=i[6].id)&&(e.__value=r,e.value=e.__value)},d(i){i&&k(e)}}}function De(a){let e,t,n,l,r,i,s,o,u,p,h=a[1],m=[];for(let g=0;g<h.length;g+=1)m[g]=fe(ue(a,h,g));return{c(){e=_("div"),t=_("div"),n=_("select"),l=_("option"),l.textContent="Select a Coin...";for(let g=0;g<m.length;g+=1)m[g].c();r=b(),i=_("div"),i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="white" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"></path></svg>',s=b(),o=_("input"),l.__value="",l.value=l.__value,d(l,"class","text-white"),d(n,"class","appearance-none border-none outline-none w-full py-2 px-4 rounded-l-full bg-zinc-700 text-white"),d(n,"name","coin-select"),d(n,"id","coin-select"),a[0]===void 0&&U(()=>a[4].call(n)),d(i,"class","absolute top-0 bottom-0 right-4 w-4"),d(t,"class","relative w-full"),d(o,"class","text-white bg-gradient-to-tr from-cyan-700 to-fuchsia-700 px-8 rounded-r-full cursor-pointer hover:from-cyan-600 hover:to-fuchsia-600"),d(o,"type","button"),o.value="Add",d(e,"class","flex flex-row relative min-w-fit w-1/2")},m(g,$){v(g,e,$),c(e,t),c(t,n),c(n,l);for(let f=0;f<m.length;f+=1)m[f].m(n,null);se(n,a[0]),c(t,r),c(t,i),c(e,s),c(e,o),u||(p=[O(n,"change",a[4]),O(n,"change",a[2]),O(o,"click",a[3])],u=!0)},p(g,[$]){if($&2){h=g[1];let f;for(f=0;f<h.length;f+=1){const w=ue(g,h,f);m[f]?m[f].p(w,$):(m[f]=fe(w),m[f].c(),m[f].m(n,null))}for(;f<m.length;f+=1)m[f].d(1);m.length=h.length}$&3&&se(n,g[0])},i:D,o:D,d(g){g&&k(e),_e(m,g),u=!1,he(p)}}}function je(a,e,t){const n=me();let{coins:l}=e,{selectedCoin:r}=e,i=()=>{n("change-selected-coin",{coin:r})},s=()=>{n("addCoin")};function o(){r=ye(this),t(0,r),t(1,l)}return a.$$set=u=>{"coins"in u&&t(1,l=u.coins),"selectedCoin"in u&&t(0,r=u.selectedCoin)},[r,l,i,s,o]}class He extends J{constructor(e){super();K(this,e,je,De,V,{coins:1,selectedCoin:0})}}function Se(a){let e;return{c(){e=_("h1"),e.textContent="could not load chart data"},m(t,n){v(t,e,n)},p:D,i:D,o:D,d(t){t&&k(e)}}}function Ie(a){let e,t;return e=new Ce({props:{data:a[0].market_chart,options:a[1],height:250,width:400}}),{c(){B(e.$$.fragment)},m(n,l){A(e,n,l),t=!0},p(n,l){const r={};l&1&&(r.data=n[0].market_chart),e.$set(r)},i(n){t||(C(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){M(e,n)}}}function Pe(a){let e;return{c(){e=_("h1"),e.textContent="loading chart..."},m(t,n){v(t,e,n)},p:D,i:D,o:D,d(t){t&&k(e)}}}function Be(a){let e,t,n,l={ctx:a,current:null,token:null,hasCatch:!0,pending:Pe,then:Ie,catch:Se,blocks:[,,,]};return ge(a[2],l),{c(){e=_("div"),l.block.c(),d(e,"id","chart"),d(e,"class","flex flex-col justify-center items-center p-2 my-2 rounded-2xl bg-zinc-800 svelte-16imcr4")},m(r,i){v(r,e,i),l.block.m(e,l.anchor=null),l.mount=()=>e,l.anchor=null,n=!0},p(r,[i]){a=r,be(l,a,i)},i(r){n||(C(l.block),U(()=>{t||(t=q(e,N,{},!0)),t.run(1)}),n=!0)},o(r){for(let i=0;i<3;i+=1){const s=l.blocks[i];x(s)}t||(t=q(e,N,{},!1)),t.run(0),n=!1},d(r){r&&k(e),l.block.d(),l.token=null,l=null,r&&t&&t.end()}}}function Ae(a,e,t){let{coin:n}=e,{formatPrice:l}=e;n.market_chart={labels:[],datasets:[{label:"",fill:!1,lineTension:.3,color:"rgb(255,255,255)",backgroundColor:"rgba(204, 153, 0, 0.3)",borderColor:"#0e7490",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgb(205, 130,158)",pointBackgroundColor:"rgb(255, 255, 255)",pointBorderWidth:1,pointHoverRadius:2,pointHoverBackgroundColor:"rgb(0, 0, 0)",pointHoverBorderColor:"rgba(220, 220, 220,1)",pointHoverBorderWidth:1,pointRadius:0,pointHitRadius:10,data:[]}]};let r={responsive:!0,maintainAspectRation:!1,plugins:{tooltip:{callbacks:{label(o){let u=o.dataset.label||"";return u&&(u+=": "),o.parsed.y!==null&&(u+=l(o.parsed.y)),u}}}},scales:{x:{ticks:{color:"white"}},y:{ticks:{color:"white",callback(o,u,p){return l(o)}}}}},s=(async()=>{await ve.get(`https://api.coingecko.com/api/v3/coins/${n.id}/market_chart`,{params:{vs_currency:"usd",days:1}}).then(o=>{let u=o.data.prices;t(0,n.market_chart.datasets[0].label=n.name,n),u.forEach(p=>{let h=p[0],m=p[1],g=new Date(h).toLocaleTimeString();t(0,n.market_chart.labels=[...n.market_chart.labels,g],n),t(0,n.market_chart.datasets[0].data=[...n.market_chart.datasets[0].data,m],n)})}).catch(o=>console.log(o)),n.price_change_24h<0?(t(0,n.market_chart.datasets[0].borderColor="rgb(239, 68, 68)",n),t(0,n.market_chart.datasets[0].backgroundColor="rgb(239, 68, 68)",n)):(t(0,n.market_chart.datasets[0].borderColor="rgb(34,197,94)",n),t(0,n.market_chart.datasets[0].backgroundColor="rgb(34,197,94)",n))})();return a.$$set=o=>{"coin"in o&&t(0,n=o.coin),"formatPrice"in o&&t(3,l=o.formatPrice)},[n,r,s,l]}class Me extends J{constructor(e){super();K(this,e,Ae,Be,V,{coin:0,formatPrice:3})}}function pe(a,e,t){const n=a.slice();return n[6]=e[t],n[8]=t,n}function Ze(a){let e,t=a[1](a[6].current_price)+"",n;return{c(){e=_("span"),n=L(t),d(e,"class","text-red-500 text-xl")},m(l,r){v(l,e,r),c(e,n)},p(l,r){r&1&&t!==(t=l[1](l[6].current_price)+"")&&W(n,t)},d(l){l&&k(e)}}}function Fe(a){let e,t=a[1](a[6].current_price)+"",n;return{c(){e=_("span"),n=L(t),d(e,"class","text-green-500 text-xl")},m(l,r){v(l,e,r),c(e,n)},p(l,r){r&1&&t!==(t=l[1](l[6].current_price)+"")&&W(n,t)},d(l){l&&k(e)}}}function Re(a){let e,t=a[1](a[6].price_change_24h)+"",n,l,r=a[6].price_change_percentage_24h.toFixed(2)+"",i,s;return{c(){e=_("span"),n=L(t),l=L(`
								(`),i=L(r),s=L("%)"),d(e,"class","text-red-500")},m(o,u){v(o,e,u),c(e,n),c(e,l),c(e,i),c(e,s)},p(o,u){u&1&&t!==(t=o[1](o[6].price_change_24h)+"")&&W(n,t),u&1&&r!==(r=o[6].price_change_percentage_24h.toFixed(2)+"")&&W(i,r)},d(o){o&&k(e)}}}function Ee(a){let e,t=a[1](a[6].price_change_24h)+"",n,l,r=a[6].price_change_percentage_24h.toFixed(2)+"",i,s;return{c(){e=_("span"),n=L(t),l=L(`
								(+`),i=L(r),s=L("%)"),d(e,"class","text-green-500")},m(o,u){v(o,e,u),c(e,n),c(e,l),c(e,i),c(e,s)},p(o,u){u&1&&t!==(t=o[1](o[6].price_change_24h)+"")&&W(n,t),u&1&&r!==(r=o[6].price_change_percentage_24h.toFixed(2)+"")&&W(i,r)},d(o){o&&k(e)}}}function de(a){let e,t,n,l=a[6].name+"",r,i,s,o,u,p,h,m,g,$,f,w,j,z,y,S,H,I,T,Z,G,Y,ne,ae;function re(P,E){return P[6].price_change_24h>=0?Fe:Ze}let X=re(a),F=X(a);function oe(P,E){return P[6].price_change_24h>=0?Ee:Re}let ee=oe(a),R=ee(a);I=new Me({props:{coin:a[6],index:a[8],formatPrice:a[1]}});function we(){return a[4](a[8])}return{c(){e=_("div"),t=_("div"),n=_("span"),r=L(l),i=b(),s=_("div"),o=_("div"),u=_("img"),m=b(),g=_("div"),$=_("div"),f=_("p"),f.textContent="Current Price:",w=b(),F.c(),j=b(),z=_("div"),y=_("p"),y.textContent="24h change:",S=b(),R.c(),H=b(),B(I.$$.fragment),T=b(),Z=_("input"),d(n,"class","text-white text-xl"),d(u,"class","w-36"),ce(u.src,p=a[6].image)||d(u,"src",p),d(u,"alt",h=a[6].name),d(o,"class","flex flex-col justify-center items-center"),d(g,"class","flex flex-col flex-grow justify-center items-center"),d(s,"class","w-full flex flex-row justify-center items-center gap-2"),d(Z,"class","w-24 bg-rose-600 hover:bg-rose-500 cursor-pointer rounded-full text-white px-4 py-2"),d(Z,"type","button"),Z.value="Remove",d(e,"class","bg-zinc-700 shadow-2xl flex flex-col justify-center items-center gap-2 rounded-2xl p-4")},m(P,E){v(P,e,E),c(e,t),c(t,n),c(n,r),c(e,i),c(e,s),c(s,o),c(o,u),c(s,m),c(s,g),c(g,$),c($,f),c($,w),F.m($,null),c(g,j),c(g,z),c(z,y),c(z,S),R.m(z,null),c(e,H),A(I,e,null),c(e,T),c(e,Z),Y=!0,ne||(ae=O(Z,"click",we),ne=!0)},p(P,E){a=P,(!Y||E&1)&&l!==(l=a[6].name+"")&&W(r,l),(!Y||E&1&&!ce(u.src,p=a[6].image))&&d(u,"src",p),(!Y||E&1&&h!==(h=a[6].name))&&d(u,"alt",h),X===(X=re(a))&&F?F.p(a,E):(F.d(1),F=X(a),F&&(F.c(),F.m($,null))),ee===(ee=oe(a))&&R?R.p(a,E):(R.d(1),R=ee(a),R&&(R.c(),R.m(z,null)));const ie={};E&1&&(ie.coin=a[6]),I.$set(ie)},i(P){Y||(C(I.$$.fragment,P),U(()=>{G||(G=q(e,N,{},!0)),G.run(1)}),Y=!0)},o(P){x(I.$$.fragment,P),G||(G=q(e,N,{},!1)),G.run(0),Y=!1},d(P){P&&k(e),F.d(),R.d(),M(I),P&&G&&G.end(),ne=!1,ae()}}}function qe(a){let e,t,n,l,r,i,s=a[0],o=[];for(let p=0;p<s.length;p+=1)o[p]=de(pe(a,s,p));const u=p=>x(o[p],1,1,()=>{o[p]=null});return{c(){e=_("div");for(let p=0;p<o.length;p+=1)o[p].c();t=b(),n=_("input"),d(n,"class","text-2xl rounded-2xl cursor-pointer p-8 bg-zinc-700 hover:bg-zinc-600"),d(n,"type","button"),n.value="+",d(e,"class","flex flex-row gap-4 flex-wrap justify-center items-center py-4 text-white")},m(p,h){v(p,e,h);for(let m=0;m<o.length;m+=1)o[m].m(e,null);c(e,t),c(e,n),l=!0,r||(i=O(n,"click",a[3]),r=!0)},p(p,[h]){if(h&7){s=p[0];let m;for(m=0;m<s.length;m+=1){const g=pe(p,s,m);o[m]?(o[m].p(g,h),C(o[m],1)):(o[m]=de(g),o[m].c(),C(o[m],1),o[m].m(e,t))}for(ke(),m=s.length;m<o.length;m+=1)u(m);$e()}},i(p){if(!l){for(let h=0;h<s.length;h+=1)C(o[h]);l=!0}},o(p){o=o.filter(Boolean);for(let h=0;h<o.length;h+=1)x(o[h]);l=!1},d(p){p&&k(e),_e(o,p),r=!1,i()}}}function Ne(a,e,t){const n=me();let{dashboardCoins:l}=e,r=u=>{let p={style:"currency",currency:"usd"};return u<1&&(p.minimumFractionDigits=4),u.toLocaleString("en-us",p)},i=u=>{l.splice(u,1),t(0,l)},s=()=>{n("addCoin")};const o=u=>i(u);return a.$$set=u=>{"dashboardCoins"in u&&t(0,l=u.dashboardCoins)},[l,r,i,s,o]}class Oe extends J{constructor(e){super();K(this,e,Ne,qe,V,{dashboardCoins:0})}}function Ge(a){let e;return{c(){e=_("code"),e.textContent="Could not load CryptoIndex",d(e,"class","text-red-500 text-2xl")},m(t,n){v(t,e,n)},p:D,i:D,o:D,d(t){t&&k(e)}}}function We(a){let e,t,n,l,r,i;return n=new He({props:{coins:a[0],selectedCoin:a[1]}}),n.$on("addCoin",a[3]),n.$on("change-selected-coin",a[4]),r=new Oe({props:{dashboardCoins:a[2]}}),r.$on("addCoin",a[3]),{c(){e=_("div"),e.innerHTML='<h1 class="text-2xl text-white">CryptoIndex</h1>',t=b(),B(n.$$.fragment),l=b(),B(r.$$.fragment),d(e,"class","py-4")},m(s,o){v(s,e,o),v(s,t,o),A(n,s,o),v(s,l,o),A(r,s,o),i=!0},p(s,o){const u={};o&1&&(u.coins=s[0]),o&2&&(u.selectedCoin=s[1]),n.$set(u);const p={};o&4&&(p.dashboardCoins=s[2]),r.$set(p)},i(s){i||(C(n.$$.fragment,s),C(r.$$.fragment,s),i=!0)},o(s){x(n.$$.fragment,s),x(r.$$.fragment,s),i=!1},d(s){s&&k(e),s&&k(t),M(n,s),s&&k(l),M(r,s)}}}function Je(a){let e;return{c(){e=_("div"),e.innerHTML='<h1 class="text-2xl text-white">Loading...</h1>'},m(t,n){v(t,e,n)},p:D,i:D,o:D,d(t){t&&k(e)}}}function Ke(a){let e,t,n={ctx:a,current:null,token:null,hasCatch:!0,pending:Je,then:We,catch:Ge,blocks:[,,,]};return ge(a[5],n),{c(){e=xe(),n.block.c()},m(l,r){v(l,e,r),n.block.m(l,n.anchor=r),n.mount=()=>e.parentNode,n.anchor=e,t=!0},p(l,[r]){a=l,be(n,a,r)},i(l){t||(C(n.block),t=!0)},o(l){for(let r=0;r<3;r+=1){const i=n.blocks[r];x(i)}t=!1},d(l){l&&k(e),n.block.d(l),n.token=null,n=null}}}function Ve(a,e,t){let n=[],l="",r=[{id:"bitcoin",symbol:"btc",name:"Bitcoin",image:"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",current_price:41845,market_cap:795518215745,market_cap_rank:1,fully_diluted_valuation:878440118454,total_volume:26209342876,high_24h:42142,low_24h:40959,price_change_24h:419.07,price_change_percentage_24h:1.01161,market_cap_change_24h:8584323733,market_cap_change_percentage_24h:1.09086,circulating_supply:19017668,total_supply:21e6,max_supply:21e6,ath:69045,ath_change_percentage:-39.41703,ath_date:"2021-11-10T14:24:11.849Z",atl:67.81,atl_change_percentage:61587.05158,atl_date:"2013-07-06T00:00:00.000Z",roi:null,last_updated:"2022-04-21T08:24:49.445Z"},{id:"ethereum",symbol:"eth",name:"Ethereum",image:"https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",current_price:3100.4,market_cap:373521450544,market_cap_rank:2,fully_diluted_valuation:null,total_volume:16085598979,high_24h:3160.59,low_24h:3046.01,price_change_24h:.198128,price_change_percentage_24h:.00639,market_cap_change_24h:747094130,market_cap_change_percentage_24h:.20041,circulating_supply:120466304999e-3,total_supply:null,max_supply:null,ath:4878.26,ath_change_percentage:-36.43492,ath_date:"2021-11-10T14:24:19.604Z",atl:.432979,atl_change_percentage:716071.24584,atl_date:"2015-10-20T00:00:00.000Z",roi:{times:98.07887255281041,currency:"btc",percentage:9807.88725528104},last_updated:"2022-04-21T08:24:58.817Z"},{id:"dogecoin",symbol:"doge",name:"Dogecoin",image:"https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256",current_price:.140344,market_cap:18624105220,market_cap_rank:12,fully_diluted_valuation:null,total_volume:819049058,high_24h:.146332,low_24h:.139376,price_change_24h:-.004711630646,price_change_percentage_24h:-3.24816,market_cap_change_24h:-5740622638864021e-7,market_cap_change_percentage_24h:-2.99019,circulating_supply:132670764299894e-3,total_supply:null,max_supply:null,ath:.731578,ath_change_percentage:-80.81229,ath_date:"2021-05-08T05:08:23.458Z",atl:869e-7,atl_change_percentage:161427.04572,atl_date:"2015-05-06T00:00:00.000Z",roi:null,last_updated:"2022-04-21T08:24:33.196Z"}],i=async()=>{if(r.length>0&&r.some(h=>h.id===l))return;let p=n.find(h=>h.id===l);t(2,r=[...r,p])},s=p=>{t(1,l=p.detail.coin)},u=(async()=>{await ve.get("https://api.coingecko.com/api/v3/coins/markets",{params:{vs_currency:"usd"}}).then(p=>t(0,n=p.data)).catch(p=>console.log(p))})();return[n,l,r,i,s,u]}class Ye extends J{constructor(e){super();K(this,e,Ve,Ke,V,{})}}function Qe(a){let e,t,n,l,r,i,s,o,u,p,h,m,g,$,f,w,j,z,y,S,H,I;return{c(){e=_("div"),t=_("h1"),t.textContent="Contact",n=b(),l=_("div"),r=_("label"),r.textContent="Name",i=b(),s=_("input"),o=b(),u=_("label"),u.textContent="Email",p=b(),h=_("input"),m=b(),g=_("label"),g.textContent="Message",$=b(),f=_("textarea"),w=b(),j=_("div"),z=_("input"),d(t,"class","text-2xl text-white"),d(r,"class","text-left"),d(r,"for","name"),d(s,"class","appearance-none border-none outline-none w-full py-2 px-4 rounded-full bg-zinc-900 text-white"),d(s,"type","text"),d(s,"name","name"),d(s,"id","name"),d(u,"class","text-left"),d(u,"for","email"),d(h,"class","appearance-none border-none outline-none w-full py-2 px-4 rounded-full bg-zinc-900 text-white"),d(h,"type","email"),d(g,"class","text-left"),d(g,"for","Message"),d(f,"class","appearance-none border-none resize-none outline-none w-full py-2 px-4 rounded-2xl bg-zinc-900 text-white h-36"),d(f,"name","message"),d(f,"id","message"),d(z,"class","w-24 text-white bg-gradient-to-tr from-cyan-700 to-fuchsia-700 px-8 py-2 rounded-full cursor-pointer hover:from-cyan-600 hover:to-fuchsia-600"),d(z,"type","button"),z.value="Send",d(l,"class","flex flex-col gap-2 w-96 bg-zinc-700 rounded-2xl p-4 shadow-xl"),d(e,"class","flex flex-col items-center justify-center gap-4")},m(T,Z){v(T,e,Z),c(e,t),c(e,n),c(e,l),c(l,r),c(l,i),c(l,s),Q(s,a[0]),c(l,o),c(l,u),c(l,p),c(l,h),Q(h,a[1]),c(l,m),c(l,g),c(l,$),c(l,f),Q(f,a[2]),c(l,w),c(l,j),c(j,z),S=!0,H||(I=[O(s,"input",a[5]),O(h,"input",a[6]),O(f,"input",a[7]),O(z,"click",a[4])],H=!0)},p(T,Z){Z&1&&s.value!==T[0]&&Q(s,T[0]),Z&2&&h.value!==T[1]&&Q(h,T[1]),Z&4&&Q(f,T[2])},i(T){S||(U(()=>{y||(y=q(e,N,{},!0)),y.run(1)}),S=!0)},o(T){y||(y=q(e,N,{},!1)),y.run(0),S=!1},d(T){T&&k(e),T&&y&&y.end(),H=!1,he(I)}}}function Ue(a){let e,t,n;return{c(){e=_("div"),e.innerHTML='<h1 class="text-2xl">Thanks for reaching out!</h1>'},m(l,r){v(l,e,r),n=!0},p:D,i(l){n||(U(()=>{t||(t=q(e,N,{},!0)),t.run(1)}),n=!0)},o(l){t||(t=q(e,N,{},!1)),t.run(0),n=!1},d(l){l&&k(e),l&&t&&t.end()}}}function Xe(a){let e,t,n,l;const r=[Ue,Qe],i=[];function s(o,u){return o[3]?0:1}return t=s(a),n=i[t]=r[t](a),{c(){e=_("div"),n.c()},m(o,u){v(o,e,u),i[t].m(e,null),l=!0},p(o,[u]){let p=t;t=s(o),t===p?i[t].p(o,u):(ke(),x(i[p],1,1,()=>{i[p]=null}),$e(),n=i[t],n?n.p(o,u):(n=i[t]=r[t](o),n.c()),C(n,1),n.m(e,null))},i(o){l||(C(n),l=!0)},o(o){x(n),l=!1},d(o){o&&k(e),i[t].d()}}}function et(a,e,t){let n,l,r,i=!1,s=()=>{let h="service_63g86zc",m="template_i0qd5dw",g={name:n,email:l,message:r},$="937HPZdRVzM8PS565";ze.send(h,m,g,$).then(f=>{console.log(f.status,f.text)},f=>{console.log(f)}),t(3,i=!0)};function o(){n=this.value,t(0,n)}function u(){l=this.value,t(1,l)}function p(){r=this.value,t(2,r)}return[n,l,r,i,s,o,u,p]}class tt extends J{constructor(e){super();K(this,e,et,Xe,V,{})}}function nt(a){let e;return{c(){e=L("Contact")},m(t,n){v(t,e,n)},d(t){t&&k(e)}}}function lt(a){let e,t,n,l,r,i,s,o,u,p,h,m,g,$,f,w,j,z,y,S;return j=new te({props:{class:"text-zinc-400 hover:underline",to:"contact",$$slots:{default:[nt]},$$scope:{ctx:a}}}),{c(){e=_("div"),t=_("h1"),t.textContent="About",n=b(),l=_("div"),r=_("span"),r.textContent=`CryptoIndex is project created by Nicko Goodwin for the Systems Analysis
			and Design course at College of Western Idaho.`,i=b(),s=_("span"),s.textContent=`The project consisted of pitching a prototype of an app and then
			implementing it.`,o=b(),u=_("span"),u.textContent="CryptoIndex is that app.",p=b(),h=_("span"),h.textContent=`CryptoIndex is designed to be a research tool that allows users to get
			up-to-date information about their favorite cryptocurrencies in order to
			make well-informed purchase decisions.`,m=b(),g=_("span"),g.textContent="I hope you like it!",$=b(),f=_("span"),w=L("Please feel free to "),B(j.$$.fragment),z=L(" me and leave a message!"),d(t,"class","text-2xl text-white"),d(l,"class","min-w-fit w-1/4 flex flex-col justify-center items-center gap-4 bg-zinc-700 p-4 rounded-xl"),d(e,"class","flex flex-col justify-center items-center gap-4")},m(H,I){v(H,e,I),c(e,t),c(e,n),c(e,l),c(l,r),c(l,i),c(l,s),c(l,o),c(l,u),c(l,p),c(l,h),c(l,m),c(l,g),c(l,$),c(l,f),c(f,w),A(j,f,null),c(f,z),S=!0},p(H,[I]){const T={};I&1&&(T.$$scope={dirty:I,ctx:H}),j.$set(T)},i(H){S||(C(j.$$.fragment,H),U(()=>{y||(y=q(e,N,{},!0)),y.run(1)}),S=!0)},o(H){x(j.$$.fragment,H),y||(y=q(e,N,{},!1)),y.run(0),S=!1},d(H){H&&k(e),M(j),H&&y&&y.end()}}}class at extends J{constructor(e){super();K(this,e,null,lt,V,{})}}function rt(a){let e,t,n,l;return{c(){e=_("div"),t=_("span"),t.textContent=`CryptoIndex - Copyright \xA9 ${a[0]}`,n=b(),l=_("span"),l.innerHTML='Data provided by <a class="hover:underline" href="https://www.coingecko.com/">CoinGecko</a>',d(e,"class","flex flex-col p-4")},m(r,i){v(r,e,i),c(e,t),c(e,n),c(e,l)},p:D,i:D,o:D,d(r){r&&k(e)}}}function ot(a){return[new Date().getFullYear()]}class it extends J{constructor(e){super();K(this,e,ot,rt,V,{})}}function st(a){let e;return{c(){e=L("Home")},m(t,n){v(t,e,n)},d(t){t&&k(e)}}}function ct(a){let e;return{c(){e=L("About")},m(t,n){v(t,e,n)},d(t){t&&k(e)}}}function ut(a){let e;return{c(){e=L("Contact")},m(t,n){v(t,e,n)},d(t){t&&k(e)}}}function ft(a){let e,t;return e=new Ye({}),{c(){B(e.$$.fragment)},m(n,l){A(e,n,l),t=!0},i(n){t||(C(e.$$.fragment,n),t=!0)},o(n){x(e.$$.fragment,n),t=!1},d(n){M(e,n)}}}function pt(a){let e,t,n,l,r,i,s,o,u,p,h,m,g,$;return t=new te({props:{class:"hover:underline",to:"/",$$slots:{default:[st]},$$scope:{ctx:a}}}),l=new te({props:{class:"hover:underline",to:"about",$$slots:{default:[ct]},$$scope:{ctx:a}}}),i=new te({props:{class:"hover:underline",to:"contact",$$slots:{default:[ut]},$$scope:{ctx:a}}}),u=new le({props:{path:"contact",component:tt}}),h=new le({props:{path:"about",component:at}}),g=new le({props:{path:"/",$$slots:{default:[ft]},$$scope:{ctx:a}}}),{c(){e=_("nav"),B(t.$$.fragment),n=b(),B(l.$$.fragment),r=b(),B(i.$$.fragment),s=b(),o=_("div"),B(u.$$.fragment),p=b(),B(h.$$.fragment),m=b(),B(g.$$.fragment),d(e,"class","bg-zinc-700 font-bold flex gap-8 top-0 text-zinc-100 rounded-full shadow-lg p-4 my-2 svelte-eflbq9"),d(o,"class","flex flex-grow flex-col justify-center items-center w-full")},m(f,w){v(f,e,w),A(t,e,null),c(e,n),A(l,e,null),c(e,r),A(i,e,null),v(f,s,w),v(f,o,w),A(u,o,null),c(o,p),A(h,o,null),c(o,m),A(g,o,null),$=!0},p(f,w){const j={};w&4&&(j.$$scope={dirty:w,ctx:f}),t.$set(j);const z={};w&4&&(z.$$scope={dirty:w,ctx:f}),l.$set(z);const y={};w&4&&(y.$$scope={dirty:w,ctx:f}),i.$set(y);const S={};w&4&&(S.$$scope={dirty:w,ctx:f}),g.$set(S)},i(f){$||(C(t.$$.fragment,f),C(l.$$.fragment,f),C(i.$$.fragment,f),C(u.$$.fragment,f),C(h.$$.fragment,f),C(g.$$.fragment,f),$=!0)},o(f){x(t.$$.fragment,f),x(l.$$.fragment,f),x(i.$$.fragment,f),x(u.$$.fragment,f),x(h.$$.fragment,f),x(g.$$.fragment,f),$=!1},d(f){f&&k(e),M(t),M(l),M(i),f&&k(s),f&&k(o),M(u),M(h),M(g)}}}function dt(a){let e,t,n,l,r;return t=new Te({props:{basepath:a[1],url:a[0],$$slots:{default:[pt]},$$scope:{ctx:a}}}),l=new it({}),{c(){e=_("main"),B(t.$$.fragment),n=b(),B(l.$$.fragment),d(e,"class","min-h-screen min-w-fit text-white flex flex-col justify-center items-center bg-zinc-800 overflow-auto svelte-eflbq9")},m(i,s){v(i,e,s),A(t,e,null),c(e,n),A(l,e,null),r=!0},p(i,[s]){const o={};s&2&&(o.basepath=i[1]),s&1&&(o.url=i[0]),s&4&&(o.$$scope={dirty:s,ctx:i}),t.$set(o)},i(i){r||(C(t.$$.fragment,i),C(l.$$.fragment,i),r=!0)},o(i){x(t.$$.fragment,i),x(l.$$.fragment,i),r=!1},d(i){i&&k(e),M(t),M(l)}}}function _t(a,e,t){let{url:n=""}=e,{basepath:l="/crypto-index"}=e;return a.$$set=r=>{"url"in r&&t(0,n=r.url),"basepath"in r&&t(1,l=r.basepath)},[n,l]}class ht extends J{constructor(e){super();K(this,e,_t,dt,V,{url:0,basepath:1})}}new ht({target:document.getElementById("app")});
