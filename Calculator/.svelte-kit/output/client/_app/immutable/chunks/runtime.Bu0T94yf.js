var bn=Array.isArray,Wt=Array.prototype.indexOf,qn=Array.from,Pn=Object.defineProperty,vt=Object.getOwnPropertyDescriptor,Xt=Object.getOwnPropertyDescriptors,Fn=Object.prototype,Ln=Array.prototype,Jt=Object.getPrototypeOf;const Mn=()=>{};function Yn(t){return t()}function yt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,wt=4,Z=8,ut=16,T=32,z=64,nt=128,I=256,U=512,E=1024,x=2048,W=4096,C=8192,b=16384,Qt=32768,Tt=65536,jn=1<<17,tn=1<<19,mt=1<<20,pt=Symbol("$state"),Hn=Symbol("legacy props"),Bn=Symbol("");function gt(t){return t===this.v}function nn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function At(t){return!nn(t,this.v)}function rn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function en(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ln(t){throw new Error("https://svelte.dev/e/effect_orphan")}function sn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Un(){throw new Error("https://svelte.dev/e/hydration_failed")}function Vn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Gn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Kn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function an(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function un(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let X=!1;function $n(){X=!0}const Zn=1,zn=2,Wn=16,Xn=1,Jn=2,Qn=4,tr=8,nr=16,rr=1,er=2,on="[",fn="[!",_n="]",kt={},lr=Symbol();function ot(t,n){var r={f:0,v:t,reactions:null,equals:gt,version:0};return r}function sr(t){return cn(ot(t))}function ar(t,n=!1){var e;const r=ot(t);return n||(r.equals=At),X&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function cn(t){return o!==null&&o.f&y&&(w===null?Rn([t]):w.push(t)),t}function ur(t,n){return o!==null&&_t()&&o.f&(y|ut)&&(w===null||!w.includes(t))&&un(),vn(t,n)}function vn(t,n){return t.equals(n)||(t.v,t.v=n,t.version=Vt(),Rt(t,x),_t()&&u!==null&&u.f&E&&!(u.f&T)&&(h!==null&&h.includes(t)?(g(u,x),tt(u)):A===null?xn([t]):A.push(t))),n}function Rt(t,n){var r=t.reactions;if(r!==null)for(var e=_t(),l=r.length,s=0;s<l;s++){var a=r[s],i=a.f;i&x||!e&&a===u||(g(a,n),i&(E|I)&&(i&y?Rt(a,W):tt(a)))}}function xt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let N=!1;function or(t){N=t}let m;function P(t){if(t===null)throw xt(),kt;return m=t}function ir(){return P(q(m))}function fr(t){if(N){if(q(m)!==null)throw xt(),kt;m=t}}function _r(){for(var t=0,n=m;;){if(n.nodeType===8){var r=n.data;if(r===_n){if(t===0)return n;t-=1}else(r===on||r===fn)&&(t+=1)}var e=q(n);n.remove(),n=e}}var ht,Dt,It;function cr(){if(ht===void 0){ht=window;var t=Element.prototype,n=Node.prototype;Dt=vt(n,"firstChild").get,It=vt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function rt(t=""){return document.createTextNode(t)}function et(t){return Dt.call(t)}function q(t){return It.call(t)}function vr(t,n){if(!N)return et(t);var r=et(m);if(r===null)r=m.appendChild(rt());else if(n&&r.nodeType!==3){var e=rt();return r==null||r.before(e),P(e),e}return P(r),r}function pr(t,n){if(!N){var r=et(t);return r instanceof Comment&&r.data===""?q(r):r}return m}function hr(t,n=1,r=!1){let e=N?m:t;for(var l;n--;)l=e,e=q(e);if(!N)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=rt();return e===null?l==null||l.after(a):e.before(a),P(a),a}return P(e),e}function dr(t){t.textContent=""}function pn(t){var n=y|x;u===null?n|=I:u.f|=mt;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:gt,f:n,fn:t,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function Er(t){const n=pn(t);return n.equals=At,n}function St(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?it(e):D(e)}}}function hn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Ot(t){var n,r=u;$(hn(t));try{St(t),n=Gt(t)}finally{$(r)}return n}function Ct(t){var n=Ot(t),r=(R||t.f&I)&&t.deps!==null?W:E;g(t,r),t.equals(n)||(t.v=n,t.version=Vt())}function it(t){St(t),M(t,0),g(t,b),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Nt(t){u===null&&o===null&&ln(),o!==null&&o.f&I&&en(),ft&&rn()}function dn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function Y(t,n,r,e=!0){var l=(t&z)!==0,s=u,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var i=S;try{dt(!0),Q(a),a.f|=Qt}catch(c){throw D(a),c}finally{dt(i)}}else n!==null&&tt(a);var _=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&mt)===0;if(!_&&!l&&e&&(s!==null&&dn(a,s),o!==null&&o.f&y)){var p=o;(p.children??(p.children=[])).push(a)}return a}function yr(t){Nt();var n=u!==null&&(u.f&T)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=bt(t);return e}}function wr(t){return Nt(),En(t)}function Tr(t){const n=Y(z,t,!0);return(r={})=>new Promise(e=>{r.outro?Tn(n,()=>{D(n),e(void 0)}):(D(n),e(void 0))})}function bt(t){return Y(wt,t,!1)}function En(t){return Y(Z,t,!0)}function mr(t){return yn(t)}function yn(t,n=0){return Y(Z|ut|n,t,!0)}function gr(t,n=!0){return Y(Z|T,t,!0,n)}function qt(t){var n=t.teardown;if(n!==null){const r=ft,e=o;Et(!0),K(null);try{n.call(null)}finally{Et(r),K(e)}}}function Pt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)it(n[r])}}function Ft(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;D(r,n),r=e}}function wn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&T||D(n),n=r}}function D(t,n=!0){var r=!1;if((n||t.f&tn)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:q(e);e.remove(),e=s}r=!0}Ft(t,n&&!r),Pt(t),M(t,0),g(t,b);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();qt(t);var i=t.parent;i!==null&&i.first!==null&&Lt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Lt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Tn(t,n){var r=[];Mt(t,r,!0),mn(r,()=>{D(t),n&&n()})}function mn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Mt(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&Tt)!==0||(e.f&T)!==0;Mt(e,n,s?r:!1),e=l}}}function Ar(t){Yt(t,!0)}function Yt(t,n){if(t.f&C){j(t)&&Q(t),t.f^=C;for(var r=t.first;r!==null;){var e=r.next,l=(r.f&Tt)!==0||(r.f&T)!==0;Yt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}const gn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let V=!1,G=!1,lt=[],st=[];function jt(){V=!1;const t=lt.slice();lt=[],yt(t)}function Ht(){G=!1;const t=st.slice();st=[],yt(t)}function kr(t){V||(V=!0,queueMicrotask(jt)),lt.push(t)}function Rr(t){G||(G=!0,gn(Ht)),st.push(t)}function An(){V&&jt(),G&&Ht()}const Bt=0,kn=1;let H=!1,B=Bt,F=!1,L=null,S=!1,ft=!1;function dt(t){S=t}function Et(t){ft=t}let k=[],O=0;let o=null;function K(t){o=t}let u=null;function $(t){u=t}let w=null;function Rn(t){w=t}let h=null,d=0,A=null;function xn(t){A=t}let Ut=1,R=!1,f=null;function Vt(){return++Ut}function _t(){return!X||f!==null&&f.l===null}function j(t){var p;var n=t.f;if(n&x)return!0;if(n&W){var r=t.deps,e=(n&I)!==0;if(r!==null){var l,s,a=(n&U)!==0,i=e&&u!==null&&!R,_=r.length;if(a||i){for(l=0;l<_;l++)s=r[l],(a||!((p=s==null?void 0:s.reactions)!=null&&p.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);a&&(t.f^=U)}for(l=0;l<_;l++)if(s=r[l],j(s)&&Ct(s),s.version>t.version)return!0}(!e||u!==null&&!R)&&g(t,E)}return!1}function Dn(t,n){for(var r=n;r!==null;){if(r.f&nt)try{r.fn(t);return}catch{r.f^=nt}r=r.parent}throw H=!1,t}function In(t){return(t.f&b)===0&&(t.parent===null||(t.parent.f&nt)===0)}function J(t,n,r,e){if(H){if(r===null&&(H=!1),In(n))throw t;return}r!==null&&(H=!0);{Dn(t,n);return}}function Gt(t){var ct;var n=h,r=d,e=A,l=o,s=R,a=w,i=f,_=t.f;h=null,d=0,A=null,o=_&(T|z)?null:t,R=!S&&(_&I)!==0,w=null,f=t.ctx;try{var p=(0,t.fn)(),c=t.deps;if(h!==null){var v;if(M(t,d),c!==null&&d>0)for(c.length=d+h.length,v=0;v<h.length;v++)c[d+v]=h[v];else t.deps=c=h;if(!R)for(v=d;v<c.length;v++)((ct=c[v]).reactions??(ct.reactions=[])).push(t)}else c!==null&&d<c.length&&(M(t,d),c.length=d);return p}finally{h=n,d=r,A=e,o=l,R=s,w=a,f=i}}function Sn(t,n){let r=n.reactions;if(r!==null){var e=Wt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&y&&(h===null||!h.includes(n))&&(g(n,W),n.f&(I|U)||(n.f^=U),M(n,0))}function M(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Sn(t,r[e])}function Q(t){var n=t.f;if(!(n&b)){g(t,E);var r=u,e=f;u=t;try{n&ut?wn(t):Ft(t),Pt(t),qt(t);var l=Gt(t);t.teardown=typeof l=="function"?l:null,t.version=Ut;var s=t.deps,a}catch(i){J(i,t,r,e||t.ctx)}finally{u=r}}}function Kt(){if(O>1e3){O=0;try{sn()}catch(t){if(L!==null)J(t,L,null);else throw t}}O++}function $t(t){var n=t.length;if(n!==0){Kt();var r=S;S=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&E||(l.f^=E);var s=[];Zt(l,s),On(s)}}finally{S=r}}}function On(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(b|C)))try{j(e)&&(Q(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Lt(e):e.fn=null))}catch(l){J(l,e,null,e.ctx)}}}function Cn(){if(F=!1,O>1001)return;const t=k;k=[],$t(t),F||(O=0,L=null)}function tt(t){B===Bt&&(F||(F=!0,queueMicrotask(Cn))),L=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(z|T)){if(!(r&E))return;n.f^=E}}k.push(n)}function Zt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&T)!==0,a=s&&(l&E)!==0,i=r.next;if(!a&&!(l&C))if(l&Z){if(s)r.f^=E;else try{j(r)&&Q(r)}catch(v){J(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else l&wt&&e.push(r);if(i===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var p=v.next;if(p!==null){r=p;continue t}v=v.parent}}r=i}for(var c=0;c<e.length;c++)_=e[c],n.push(_),Zt(_,n)}function zt(t){var n=B,r=k;try{Kt();const l=[];B=kn,k=l,F=!1,$t(r);var e=t==null?void 0:t();return An(),(k.length>0||l.length>0)&&zt(),O=0,L=null,e}finally{B=n,k=r}}async function xr(){await Promise.resolve(),zt()}function Dr(t){var c;var n=t.f,r=(n&y)!==0;if(r&&n&b){var e=Ot(t);return it(t),e}if(o!==null){w!==null&&w.includes(t)&&an();var l=o.deps;h===null&&l!==null&&l[d]===t?d++:h===null?h=[t]:h.push(t),A!==null&&u!==null&&u.f&E&&!(u.f&T)&&A.includes(t)&&(g(u,x),tt(u))}else if(r&&t.deps===null)for(var s=t,a=s.parent,i=s;a!==null;)if(a.f&y){var _=a;i=_,a=_.parent}else{var p=a;(c=p.deriveds)!=null&&c.includes(i)||(p.deriveds??(p.deriveds=[])).push(i);break}return r&&(s=t,j(s)&&Ct(s)),t.v}function Ir(t){const n=o;try{return o=null,t()}finally{o=n}}const Nn=-7169;function g(t,n){t.f=t.f&Nn|n}function Sr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},X&&!n&&(f.l={s:null,u:null,r1:[],r2:ot(!1)})}function Or(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];$(s.effect),K(s.reaction),bt(s.fn)}}finally{$(r),K(e)}}f=n.p,n.m=!0}return{}}function Cr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(pt in t)at(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&pt in r&&at(r)}}}function at(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{at(t[e],n)}catch{}const r=Jt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Xt(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{vr as $,K as A,$ as B,o as C,cr as D,Tt as E,et as F,q as G,on as H,kt as I,or as J,P as K,ir as L,_n as M,xt as N,Un as O,dr as P,qn as Q,Tr as R,pt as S,rt as T,lr as U,wr as V,Yn as W,yt as X,Cr as Y,pn as Z,mr as _,Ln as a,fr as a0,hr as a1,rr as a2,er as a3,fn as a4,_r as a5,Ar as a6,Tn as a7,bt as a8,En as a9,_t as aA,nn as aB,kr as aa,Vn as ab,jn as ac,Qn as ad,At as ae,T as af,z as ag,Xn as ah,Jn as ai,tr as aj,Hn as ak,Er as al,ar as am,nr as an,zt as ao,xr as ap,sr as aq,C as ar,Mt as as,mn as at,zn as au,Zn as av,Wn as aw,Rr as ax,Bn as ay,Xt as az,Gn as b,ur as c,Dr as d,u as e,Kn as f,vt as g,Jt as h,bn as i,$n as j,yn as k,gr as l,D as m,Mn as n,Fn as o,N as p,m as q,Sr as r,ot as s,pr as t,Or as u,f as v,X as w,yr as x,Ir as y,Pn as z};
