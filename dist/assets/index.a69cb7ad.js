import{S as G,i as K,s as W,e as h,t as H,a as v,b as _,c as k,d as c,f as V,g as w,h as U,j as se,l as E,n as L,k as _e,r as he,m as me,o as ye,p as ge,u as be,q as y,v as Z,w as F,x as z,y as ve,z as $e,L as xe,A as B,B as I,C as P,D as ce,E as ke,F as we,G as ze,H as Te,I as Q,J as ee,R as Le,K as ne}from"./vendor.8f8c97a0.js";const De=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))t(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(l){if(l.ep)return;l.ep=!0;const o=n(l);fetch(l.href,o)}};De();function ue(a,e,n){const t=a.slice();return t[6]=e[n],t}function fe(a){let e,n=a[6].name+"",t,l,o;return{c(){e=h("option"),t=H(n),l=v(),_(e,"class","text-white"),e.__value=o=a[6].id,e.value=e.__value},m(i,s){k(i,e,s),c(e,t),c(e,l)},p(i,s){s&2&&n!==(n=i[6].name+"")&&V(t,n),s&2&&o!==(o=i[6].id)&&(e.__value=o,e.value=e.__value)},d(i){i&&w(e)}}}function He(a){let e,n,t,l,o,i,s,r,u,f,g=a[1],d=[];for(let m=0;m<g.length;m+=1)d[m]=fe(ue(a,g,m));return{c(){e=h("div"),n=h("div"),t=h("select"),l=h("option"),l.textContent="Select a Coin...";for(let m=0;m<d.length;m+=1)d[m].c();o=v(),i=h("div"),i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="white" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"></path></svg>',s=v(),r=h("input"),l.__value="",l.value=l.__value,_(l,"class","text-white"),_(t,"class","appearance-none border-none outline-none w-full py-2 px-4 rounded-l-full bg-zinc-700 text-white"),_(t,"name","coin-select"),_(t,"id","coin-select"),a[0]===void 0&&U(()=>a[4].call(t)),_(i,"class","absolute top-0 bottom-0 right-4 w-4"),_(n,"class","relative w-full"),_(r,"class","text-white bg-gradient-to-tr from-cyan-700 to-fuchsia-700 px-8 rounded-r-full cursor-pointer hover:from-cyan-600 hover:to-fuchsia-600"),_(r,"type","button"),r.value="Add",_(e,"class","flex flex-row relative min-w-fit w-1/2")},m(m,b){k(m,e,b),c(e,n),c(n,t),c(t,l);for(let p=0;p<d.length;p+=1)d[p].m(t,null);se(t,a[0]),c(n,o),c(n,i),c(e,s),c(e,r),u||(f=[E(t,"change",a[4]),E(t,"change",a[2]),E(r,"click",a[3])],u=!0)},p(m,[b]){if(b&2){g=m[1];let p;for(p=0;p<g.length;p+=1){const $=ue(m,g,p);d[p]?d[p].p($,b):(d[p]=fe($),d[p].c(),d[p].m(t,null))}for(;p<d.length;p+=1)d[p].d(1);d.length=g.length}b&3&&se(t,m[0])},i:L,o:L,d(m){m&&w(e),_e(d,m),u=!1,he(f)}}}function Se(a,e,n){const t=me();let{coins:l}=e,{selectedCoin:o}=e,i=()=>{t("change-selected-coin",{coin:o})},s=()=>{t("addCoin")};function r(){o=ye(this),n(0,o),n(1,l)}return a.$$set=u=>{"coins"in u&&n(1,l=u.coins),"selectedCoin"in u&&n(0,o=u.selectedCoin)},[o,l,i,s,r]}class je extends G{constructor(e){super();K(this,e,Se,He,W,{coins:1,selectedCoin:0})}}function Be(a){let e;return{c(){e=h("h1"),e.textContent="could not load chart data"},m(n,t){k(n,e,t)},p:L,i:L,o:L,d(n){n&&w(e)}}}function Ie(a){let e,n;return e=new xe({props:{data:a[0].market_chart,options:a[1],height:250,width:400}}),{c(){B(e.$$.fragment)},m(t,l){I(e,t,l),n=!0},p(t,l){const o={};l&1&&(o.data=t[0].market_chart),e.$set(o)},i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function Pe(a){let e;return{c(){e=h("h1"),e.textContent="loading chart..."},m(n,t){k(n,e,t)},p:L,i:L,o:L,d(n){n&&w(e)}}}function Ae(a){let e,n,t,l={ctx:a,current:null,token:null,hasCatch:!0,pending:Pe,then:Ie,catch:Be,blocks:[,,,]};return ge(a[2],l),{c(){e=h("div"),l.block.c(),_(e,"id","chart"),_(e,"class","flex flex-col justify-center items-center p-2 my-2 rounded-2xl bg-zinc-800 svelte-16imcr4")},m(o,i){k(o,e,i),l.block.m(e,l.anchor=null),l.mount=()=>e,l.anchor=null,t=!0},p(o,[i]){a=o,be(l,a,i)},i(o){t||(y(l.block),U(()=>{n||(n=Z(e,F,{},!0)),n.run(1)}),t=!0)},o(o){for(let i=0;i<3;i+=1){const s=l.blocks[i];z(s)}n||(n=Z(e,F,{},!1)),n.run(0),t=!1},d(o){o&&w(e),l.block.d(),l.token=null,l=null,o&&n&&n.end()}}}function Me(a,e,n){let{coin:t}=e,{formatPrice:l}=e;t.market_chart={labels:[],datasets:[{label:"",fill:!1,lineTension:.3,color:"rgb(255,255,255)",backgroundColor:"rgba(204, 153, 0, 0.3)",borderColor:"rgb(205, 130, 158)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgb(205, 130,158)",pointBackgroundColor:"rgb(255, 255, 255)",pointBorderWidth:1,pointHoverRadius:2,pointHoverBackgroundColor:"rgb(0, 0, 0)",pointHoverBorderColor:"rgba(220, 220, 220,1)",pointHoverBorderWidth:1,pointRadius:0,pointHitRadius:10,data:[]}]};let o={responsive:!0,maintainAspectRation:!1,plugins:{tooltip:{callbacks:{label(r){let u=r.dataset.label||"";return u&&(u+=": "),r.parsed.y!==null&&(u+=l(r.parsed.y)),u}}}},scales:{x:{ticks:{color:"white"}},y:{ticks:{color:"white",callback(r,u,f){return l(r)}}}}},s=(async()=>{await ve.get(`https://api.coingecko.com/api/v3/coins/${t.id}/market_chart`,{params:{vs_currency:"usd",days:1}}).then(g=>{let d=g.data.prices;n(0,t.market_chart.datasets[0].label=t.name,t),d.forEach(m=>{let b=m[0],p=m[1],$=new Date(b).toLocaleTimeString();n(0,t.market_chart.labels=[...t.market_chart.labels,$],t),n(0,t.market_chart.datasets[0].data=[...t.market_chart.datasets[0].data,p],t)})}).catch(g=>console.log(g));let r={coin:{image:t.image}},f=(await $e(r.coin.image))[0].color;n(0,t.market_chart.datasets[0].borderColor=f,t),n(0,t.market_chart.datasets[0].backgroundColor=f,t),n(0,t.market_chart.datasets[0].pointBorderColor=f,t),n(0,t.market_chart.datasets[0].pointBackgroundColor=f,t)})();return a.$$set=r=>{"coin"in r&&n(0,t=r.coin),"formatPrice"in r&&n(3,l=r.formatPrice)},[t,o,s,l]}class Ze extends G{constructor(e){super();K(this,e,Me,Ae,W,{coin:0,formatPrice:3})}}function pe(a,e,n){const t=a.slice();return t[6]=e[n],t[8]=n,t}function Fe(a){let e,n=a[1](a[6].price_change_24h)+"",t,l,o=a[6].price_change_percentage_24h.toFixed(2)+"",i,s;return{c(){e=h("span"),t=H(n),l=H(`
								(`),i=H(o),s=H("%)"),_(e,"class","text-red-500")},m(r,u){k(r,e,u),c(e,t),c(e,l),c(e,i),c(e,s)},p(r,u){u&1&&n!==(n=r[1](r[6].price_change_24h)+"")&&V(t,n),u&1&&o!==(o=r[6].price_change_percentage_24h.toFixed(2)+"")&&V(i,o)},d(r){r&&w(e)}}}function Re(a){let e,n=a[1](a[6].price_change_24h)+"",t,l,o=a[6].price_change_percentage_24h.toFixed(2)+"",i,s;return{c(){e=h("span"),t=H(n),l=H(`
								(+`),i=H(o),s=H("%)"),_(e,"class","text-green-500")},m(r,u){k(r,e,u),c(e,t),c(e,l),c(e,i),c(e,s)},p(r,u){u&1&&n!==(n=r[1](r[6].price_change_24h)+"")&&V(t,n),u&1&&o!==(o=r[6].price_change_percentage_24h.toFixed(2)+"")&&V(i,o)},d(r){r&&w(e)}}}function de(a){let e,n,t,l=a[6].name+"",o,i,s,r,u,f,g,d,m,b,p,$,D,C=a[1](a[6].current_price)+"",S,x,j,T,q,le,J,ae,Y,N,O,te,re;function oe(A,R){return A[6].price_change_24h>=0?Re:Fe}let X=oe(a),M=X(a);J=new Ze({props:{coin:a[6],formatPrice:a[1]}});function Ce(){return a[4](a[8])}return{c(){e=h("div"),n=h("div"),t=h("span"),o=H(l),i=v(),s=h("div"),r=h("div"),u=h("img"),d=v(),m=h("div"),b=h("div"),p=h("p"),p.textContent="Current Price:",$=v(),D=h("span"),S=H(C),x=v(),j=h("div"),T=h("p"),T.textContent="24h change:",q=v(),M.c(),le=v(),B(J.$$.fragment),ae=v(),Y=h("input"),_(t,"class","text-white text-xl"),_(u,"class","w-36"),ce(u.src,f=a[6].image)||_(u,"src",f),_(u,"alt",g=a[6].name),_(r,"class","flex flex-col justify-center items-center"),_(D,"class","text-green-500 text-xl"),_(m,"class","flex flex-col flex-grow justify-center items-center"),_(s,"class","w-full flex flex-row justify-center items-center gap-2"),_(Y,"class","w-24 bg-rose-600 hover:bg-rose-500 cursor-pointer rounded-full text-white px-4 py-2"),_(Y,"type","button"),Y.value="Remove",_(e,"class","bg-zinc-700 shadow-2xl flex flex-col justify-center items-center gap-2 rounded-2xl p-4")},m(A,R){k(A,e,R),c(e,n),c(n,t),c(t,o),c(e,i),c(e,s),c(s,r),c(r,u),c(s,d),c(s,m),c(m,b),c(b,p),c(b,$),c(b,D),c(D,S),c(m,x),c(m,j),c(j,T),c(j,q),M.m(j,null),c(e,le),I(J,e,null),c(e,ae),c(e,Y),O=!0,te||(re=E(Y,"click",Ce),te=!0)},p(A,R){a=A,(!O||R&1)&&l!==(l=a[6].name+"")&&V(o,l),(!O||R&1&&!ce(u.src,f=a[6].image))&&_(u,"src",f),(!O||R&1&&g!==(g=a[6].name))&&_(u,"alt",g),(!O||R&1)&&C!==(C=a[1](a[6].current_price)+"")&&V(S,C),X===(X=oe(a))&&M?M.p(a,R):(M.d(1),M=X(a),M&&(M.c(),M.m(j,null)));const ie={};R&1&&(ie.coin=a[6]),J.$set(ie)},i(A){O||(y(J.$$.fragment,A),U(()=>{N||(N=Z(e,F,{},!0)),N.run(1)}),O=!0)},o(A){z(J.$$.fragment,A),N||(N=Z(e,F,{},!1)),N.run(0),O=!1},d(A){A&&w(e),M.d(),P(J),A&&N&&N.end(),te=!1,re()}}}function Ee(a){let e,n,t,l,o,i,s=a[0],r=[];for(let f=0;f<s.length;f+=1)r[f]=de(pe(a,s,f));const u=f=>z(r[f],1,1,()=>{r[f]=null});return{c(){e=h("div");for(let f=0;f<r.length;f+=1)r[f].c();n=v(),t=h("input"),_(t,"class","text-2xl rounded-2xl cursor-pointer p-8 bg-zinc-700 hover:bg-zinc-600"),_(t,"type","button"),t.value="+",_(e,"class","flex flex-row gap-4 flex-wrap justify-center items-center py-4 text-white")},m(f,g){k(f,e,g);for(let d=0;d<r.length;d+=1)r[d].m(e,null);c(e,n),c(e,t),l=!0,o||(i=E(t,"click",a[3]),o=!0)},p(f,[g]){if(g&7){s=f[0];let d;for(d=0;d<s.length;d+=1){const m=pe(f,s,d);r[d]?(r[d].p(m,g),y(r[d],1)):(r[d]=de(m),r[d].c(),y(r[d],1),r[d].m(e,n))}for(ke(),d=s.length;d<r.length;d+=1)u(d);we()}},i(f){if(!l){for(let g=0;g<s.length;g+=1)y(r[g]);l=!0}},o(f){r=r.filter(Boolean);for(let g=0;g<r.length;g+=1)z(r[g]);l=!1},d(f){f&&w(e),_e(r,f),o=!1,i()}}}function qe(a,e,n){const t=me();let{dashboardCoins:l}=e,o=u=>{let f={style:"currency",currency:"usd"};return u<1&&(f.minimumFractionDigits=4),u.toLocaleString("en-us",f)},i=u=>{l.splice(u,1),n(0,l)},s=()=>{t("addCoin")};const r=u=>i(u);return a.$$set=u=>{"dashboardCoins"in u&&n(0,l=u.dashboardCoins)},[l,o,i,s,r]}class Ne extends G{constructor(e){super();K(this,e,qe,Ee,W,{dashboardCoins:0})}}function Oe(a){let e;return{c(){e=h("code"),e.textContent="Could not load CryptoIndex",_(e,"class","text-red-500 text-2xl")},m(n,t){k(n,e,t)},p:L,i:L,o:L,d(n){n&&w(e)}}}function Ge(a){let e,n,t,l,o,i;return t=new je({props:{coins:a[0],selectedCoin:a[1]}}),t.$on("addCoin",a[3]),t.$on("change-selected-coin",a[4]),o=new Ne({props:{dashboardCoins:a[2]}}),o.$on("addCoin",a[3]),{c(){e=h("div"),e.innerHTML='<h1 class="text-2xl text-white">CryptoIndex</h1>',n=v(),B(t.$$.fragment),l=v(),B(o.$$.fragment),_(e,"class","py-4")},m(s,r){k(s,e,r),k(s,n,r),I(t,s,r),k(s,l,r),I(o,s,r),i=!0},p(s,r){const u={};r&1&&(u.coins=s[0]),r&2&&(u.selectedCoin=s[1]),t.$set(u);const f={};r&4&&(f.dashboardCoins=s[2]),o.$set(f)},i(s){i||(y(t.$$.fragment,s),y(o.$$.fragment,s),i=!0)},o(s){z(t.$$.fragment,s),z(o.$$.fragment,s),i=!1},d(s){s&&w(e),s&&w(n),P(t,s),s&&w(l),P(o,s)}}}function Ke(a){let e;return{c(){e=h("div"),e.innerHTML='<h1 class="text-2xl text-white">Loading...</h1>'},m(n,t){k(n,e,t)},p:L,i:L,o:L,d(n){n&&w(e)}}}function We(a){let e,n,t={ctx:a,current:null,token:null,hasCatch:!0,pending:Ke,then:Ge,catch:Oe,blocks:[,,,]};return ge(a[5],t),{c(){e=ze(),t.block.c()},m(l,o){k(l,e,o),t.block.m(l,t.anchor=o),t.mount=()=>e.parentNode,t.anchor=e,n=!0},p(l,[o]){a=l,be(t,a,o)},i(l){n||(y(t.block),n=!0)},o(l){for(let o=0;o<3;o+=1){const i=t.blocks[o];z(i)}n=!1},d(l){l&&w(e),t.block.d(l),t.token=null,t=null}}}function Je(a,e,n){let t=[],l="",o=[{id:"bitcoin",symbol:"btc",name:"Bitcoin",image:"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",current_price:41845,market_cap:795518215745,market_cap_rank:1,fully_diluted_valuation:878440118454,total_volume:26209342876,high_24h:42142,low_24h:40959,price_change_24h:419.07,price_change_percentage_24h:1.01161,market_cap_change_24h:8584323733,market_cap_change_percentage_24h:1.09086,circulating_supply:19017668,total_supply:21e6,max_supply:21e6,ath:69045,ath_change_percentage:-39.41703,ath_date:"2021-11-10T14:24:11.849Z",atl:67.81,atl_change_percentage:61587.05158,atl_date:"2013-07-06T00:00:00.000Z",roi:null,last_updated:"2022-04-21T08:24:49.445Z"},{id:"ethereum",symbol:"eth",name:"Ethereum",image:"https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",current_price:3100.4,market_cap:373521450544,market_cap_rank:2,fully_diluted_valuation:null,total_volume:16085598979,high_24h:3160.59,low_24h:3046.01,price_change_24h:.198128,price_change_percentage_24h:.00639,market_cap_change_24h:747094130,market_cap_change_percentage_24h:.20041,circulating_supply:120466304999e-3,total_supply:null,max_supply:null,ath:4878.26,ath_change_percentage:-36.43492,ath_date:"2021-11-10T14:24:19.604Z",atl:.432979,atl_change_percentage:716071.24584,atl_date:"2015-10-20T00:00:00.000Z",roi:{times:98.07887255281041,currency:"btc",percentage:9807.88725528104},last_updated:"2022-04-21T08:24:58.817Z"},{id:"dogecoin",symbol:"doge",name:"Dogecoin",image:"https://assets.coingecko.com/coins/images/5/large/dogecoin.png?1547792256",current_price:.140344,market_cap:18624105220,market_cap_rank:12,fully_diluted_valuation:null,total_volume:819049058,high_24h:.146332,low_24h:.139376,price_change_24h:-.004711630646,price_change_percentage_24h:-3.24816,market_cap_change_24h:-5740622638864021e-7,market_cap_change_percentage_24h:-2.99019,circulating_supply:132670764299894e-3,total_supply:null,max_supply:null,ath:.731578,ath_change_percentage:-80.81229,ath_date:"2021-05-08T05:08:23.458Z",atl:869e-7,atl_change_percentage:161427.04572,atl_date:"2015-05-06T00:00:00.000Z",roi:null,last_updated:"2022-04-21T08:24:33.196Z"}],i=async()=>{if(o.length>0&&o.some(d=>d.id===l))return;let f=t.find(d=>d.id===l);const g=await $e(f.image);f.logoColor=g[0].color,n(2,o=[...o,f])},s=f=>{n(1,l=f.detail.coin)},u=(async()=>{await ve.get("https://api.coingecko.com/api/v3/coins/markets",{params:{vs_currency:"usd"}}).then(f=>n(0,t=f.data)).catch(f=>console.log(f))})();return[t,l,o,i,s,u]}class Ve extends G{constructor(e){super();K(this,e,Je,We,W,{})}}function Ye(a){let e,n,t,l,o,i,s,r,u,f,g,d,m,b,p,$,D,C,S,x,j;return{c(){e=h("div"),n=h("h1"),n.textContent="Contact",t=v(),l=h("label"),l.textContent="Name",o=v(),i=h("input"),s=v(),r=h("label"),r.textContent="Email",u=v(),f=h("input"),g=v(),d=h("label"),d.textContent="Message",m=v(),b=h("textarea"),p=v(),$=h("div"),D=h("input"),_(n,"class","text-2xl text-white"),_(l,"class","text-left"),_(l,"for","name"),_(i,"class","appearance-none border-none outline-none w-full py-2 px-4 rounded-full bg-zinc-800 text-white"),_(i,"type","text"),_(i,"name","name"),_(i,"id","name"),_(r,"class","text-left"),_(r,"for","email"),_(f,"class","appearance-none border-none outline-none w-full py-2 px-4 rounded-full bg-zinc-800 text-white"),_(f,"type","email"),_(d,"class","text-left"),_(d,"for","Message"),_(b,"class","appearance-none border-none resize-none outline-none w-full py-2 px-4 rounded-2xl bg-zinc-800 text-white h-36"),_(b,"name","message"),_(b,"id","message"),_(D,"class","w-24 text-white bg-gradient-to-tr from-cyan-700 to-fuchsia-700 px-8 py-2 rounded-full cursor-pointer hover:from-cyan-600 hover:to-fuchsia-600"),_(D,"type","button"),D.value="Send",_(e,"class","flex flex-col gap-2 w-96 bg-zinc-700 rounded-2xl p-4 shadow-xl")},m(T,q){k(T,e,q),c(e,n),c(e,t),c(e,l),c(e,o),c(e,i),Q(i,a[0]),c(e,s),c(e,r),c(e,u),c(e,f),Q(f,a[1]),c(e,g),c(e,d),c(e,m),c(e,b),Q(b,a[2]),c(e,p),c(e,$),c($,D),S=!0,x||(j=[E(i,"input",a[5]),E(f,"input",a[6]),E(b,"input",a[7]),E(D,"click",a[4])],x=!0)},p(T,q){q&1&&i.value!==T[0]&&Q(i,T[0]),q&2&&f.value!==T[1]&&Q(f,T[1]),q&4&&Q(b,T[2])},i(T){S||(U(()=>{C||(C=Z(e,F,{},!0)),C.run(1)}),S=!0)},o(T){C||(C=Z(e,F,{},!1)),C.run(0),S=!1},d(T){T&&w(e),T&&C&&C.end(),x=!1,he(j)}}}function Qe(a){let e,n,t;return{c(){e=h("div"),e.innerHTML='<h1 class="text-2xl">Thanks for reaching out!</h1>'},m(l,o){k(l,e,o),t=!0},p:L,i(l){t||(U(()=>{n||(n=Z(e,F,{},!0)),n.run(1)}),t=!0)},o(l){n||(n=Z(e,F,{},!1)),n.run(0),t=!1},d(l){l&&w(e),l&&n&&n.end()}}}function Ue(a){let e,n,t,l;const o=[Qe,Ye],i=[];function s(r,u){return r[3]?0:1}return n=s(a),t=i[n]=o[n](a),{c(){e=h("div"),t.c()},m(r,u){k(r,e,u),i[n].m(e,null),l=!0},p(r,[u]){let f=n;n=s(r),n===f?i[n].p(r,u):(ke(),z(i[f],1,1,()=>{i[f]=null}),we(),t=i[n],t?t.p(r,u):(t=i[n]=o[n](r),t.c()),y(t,1),t.m(e,null))},i(r){l||(y(t),l=!0)},o(r){z(t),l=!1},d(r){r&&w(e),i[n].d()}}}function Xe(a,e,n){let t,l,o,i=!1,s=()=>{let g="service_63g86zc",d="template_i0qd5dw",m={name:t,email:l,message:o},b="937HPZdRVzM8PS565";Te.send(g,d,m,b).then(p=>{console.log(p.status,p.text)},p=>{console.log(p)}),n(3,i=!0)};function r(){t=this.value,n(0,t)}function u(){l=this.value,n(1,l)}function f(){o=this.value,n(2,o)}return[t,l,o,i,s,r,u,f]}class et extends G{constructor(e){super();K(this,e,Xe,Ue,W,{})}}function tt(a){let e;return{c(){e=H("Contact")},m(n,t){k(n,e,t)},d(n){n&&w(e)}}}function nt(a){let e,n,t,l,o,i,s,r,u,f,g,d,m,b,p,$,D,C,S;return $=new ee({props:{class:"text-zinc-400 hover:underline",to:"contact",$$slots:{default:[tt]},$$scope:{ctx:a}}}),{c(){e=h("div"),n=h("h1"),n.textContent="About",t=v(),l=h("span"),l.textContent=`CryptoIndex is project created by Nicko Goodwin for the Systems Analysis
		and Design course at College of Western Idaho.`,o=v(),i=h("span"),i.textContent=`The project consisted of pitching a prototype of an app and then
		implementing it.`,s=v(),r=h("span"),r.textContent="CryptoIndex is that app.",u=v(),f=h("span"),f.textContent=`CryptoIndex is designed to be a research tool that allows users to get
		up-to-date information about their favorite cryptocurrencies in order to
		make well-informed purchase decisions.`,g=v(),d=h("span"),d.textContent="I hope you like it!",m=v(),b=h("span"),p=H("Please feel free to "),B($.$$.fragment),D=H(" me and leave a message!"),_(n,"class","text-2xl text-white"),_(e,"class","min-w-fit w-3/4 flex flex-col justify-center items-center gap-4 bg-zinc-700 p-4 rounded-xl")},m(x,j){k(x,e,j),c(e,n),c(e,t),c(e,l),c(e,o),c(e,i),c(e,s),c(e,r),c(e,u),c(e,f),c(e,g),c(e,d),c(e,m),c(e,b),c(b,p),I($,b,null),c(b,D),S=!0},p(x,[j]){const T={};j&1&&(T.$$scope={dirty:j,ctx:x}),$.$set(T)},i(x){S||(y($.$$.fragment,x),U(()=>{C||(C=Z(e,F,{},!0)),C.run(1)}),S=!0)},o(x){z($.$$.fragment,x),C||(C=Z(e,F,{},!1)),C.run(0),S=!1},d(x){x&&w(e),P($),x&&C&&C.end()}}}class lt extends G{constructor(e){super();K(this,e,null,nt,W,{})}}function at(a){let e,n,t,l;return{c(){e=h("div"),n=h("span"),n.textContent=`CryptoIndex - Copyright \xA9 ${a[0]}`,t=v(),l=h("span"),l.innerHTML='Data provided by <a class="hover:underline" href="https://www.coingecko.com/">CoinGecko</a>',_(e,"class","flex flex-col p-4")},m(o,i){k(o,e,i),c(e,n),c(e,t),c(e,l)},p:L,i:L,o:L,d(o){o&&w(e)}}}function rt(a){return[new Date().getFullYear()]}class ot extends G{constructor(e){super();K(this,e,rt,at,W,{})}}function it(a){let e;return{c(){e=H("Home")},m(n,t){k(n,e,t)},d(n){n&&w(e)}}}function st(a){let e;return{c(){e=H("About")},m(n,t){k(n,e,t)},d(n){n&&w(e)}}}function ct(a){let e;return{c(){e=H("Contact")},m(n,t){k(n,e,t)},d(n){n&&w(e)}}}function ut(a){let e,n;return e=new Ve({}),{c(){B(e.$$.fragment)},m(t,l){I(e,t,l),n=!0},i(t){n||(y(e.$$.fragment,t),n=!0)},o(t){z(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function ft(a){let e,n,t,l,o,i,s,r,u,f,g,d,m,b;return n=new ee({props:{class:"hover:underline",to:"/",$$slots:{default:[it]},$$scope:{ctx:a}}}),l=new ee({props:{class:"hover:underline",to:"about",$$slots:{default:[st]},$$scope:{ctx:a}}}),i=new ee({props:{class:"hover:underline",to:"contact",$$slots:{default:[ct]},$$scope:{ctx:a}}}),u=new ne({props:{path:"contact",component:et}}),g=new ne({props:{path:"about",component:lt}}),m=new ne({props:{path:"/",$$slots:{default:[ut]},$$scope:{ctx:a}}}),{c(){e=h("nav"),B(n.$$.fragment),t=v(),B(l.$$.fragment),o=v(),B(i.$$.fragment),s=v(),r=h("div"),B(u.$$.fragment),f=v(),B(g.$$.fragment),d=v(),B(m.$$.fragment),_(e,"class","bg-zinc-700 font-bold flex gap-8 top-0 text-zinc-100 rounded-full shadow-lg p-4 my-2 svelte-eflbq9"),_(r,"class","flex flex-grow flex-col justify-center items-center w-full")},m(p,$){k(p,e,$),I(n,e,null),c(e,t),I(l,e,null),c(e,o),I(i,e,null),k(p,s,$),k(p,r,$),I(u,r,null),c(r,f),I(g,r,null),c(r,d),I(m,r,null),b=!0},p(p,$){const D={};$&4&&(D.$$scope={dirty:$,ctx:p}),n.$set(D);const C={};$&4&&(C.$$scope={dirty:$,ctx:p}),l.$set(C);const S={};$&4&&(S.$$scope={dirty:$,ctx:p}),i.$set(S);const x={};$&4&&(x.$$scope={dirty:$,ctx:p}),m.$set(x)},i(p){b||(y(n.$$.fragment,p),y(l.$$.fragment,p),y(i.$$.fragment,p),y(u.$$.fragment,p),y(g.$$.fragment,p),y(m.$$.fragment,p),b=!0)},o(p){z(n.$$.fragment,p),z(l.$$.fragment,p),z(i.$$.fragment,p),z(u.$$.fragment,p),z(g.$$.fragment,p),z(m.$$.fragment,p),b=!1},d(p){p&&w(e),P(n),P(l),P(i),p&&w(s),p&&w(r),P(u),P(g),P(m)}}}function pt(a){let e,n,t,l,o;return n=new Le({props:{basepath:a[1],url:a[0],$$slots:{default:[ft]},$$scope:{ctx:a}}}),l=new ot({}),{c(){e=h("main"),B(n.$$.fragment),t=v(),B(l.$$.fragment),_(e,"class","min-h-screen min-w-fit text-white flex flex-col justify-center items-center bg-zinc-800 overflow-auto svelte-eflbq9")},m(i,s){k(i,e,s),I(n,e,null),c(e,t),I(l,e,null),o=!0},p(i,[s]){const r={};s&2&&(r.basepath=i[1]),s&1&&(r.url=i[0]),s&4&&(r.$$scope={dirty:s,ctx:i}),n.$set(r)},i(i){o||(y(n.$$.fragment,i),y(l.$$.fragment,i),o=!0)},o(i){z(n.$$.fragment,i),z(l.$$.fragment,i),o=!1},d(i){i&&w(e),P(n),P(l)}}}function dt(a,e,n){let{url:t=""}=e,{basepath:l="/crypto-index"}=e;return a.$$set=o=>{"url"in o&&n(0,t=o.url),"basepath"in o&&n(1,l=o.basepath)},[t,l]}class _t extends G{constructor(e){super();K(this,e,dt,pt,W,{url:0,basepath:1})}}new _t({target:document.getElementById("app")});
