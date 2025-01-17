import{a as append,t as template}from"../chunks/disclose-version.CCy301RS.js";import{A as set_active_reaction,B as set_active_effect,C as active_reaction,e as active_effect,k as block,p as hydrating,L as hydrate_next,i as is_array,Q as array_from,a4 as HYDRATION_START_ELSE,a5 as remove_nodes,K as set_hydrate_node,J as set_hydrating,q as hydrate_node,M as HYDRATION_END,ar as INERT,a6 as resume_effect,l as branch,a7 as pause_effect,as as pause_children,P as clear_text_content,at as run_out_transitions,m as destroy_effect,am as mutable_source,s as source,au as EACH_INDEX_REACTIVE,av as EACH_ITEM_REACTIVE,aw as EACH_ITEM_IMMUTABLE,G as get_next_sibling,ax as queue_idle_task,ay as LOADING_ATTR_SYMBOL,h as get_prototype_of,az as get_descriptors,aA as is_runes,y as untrack,a9 as render_effect,r as push,t as first_child,_ as template_effect,u as pop,d as get,c as set,aq as state,$ as child,a1 as sibling,a0 as reset}from"../chunks/runtime.Bu0T94yf.js";import{d as delegate,s as set_text}from"../chunks/render.MIjZPBaa.js";import{p as proxy}from"../chunks/proxy.BbzCVI0w.js";import"../chunks/legacy.BhblzL2c.js";let listening_to_form_reset=!1;function add_form_reset_listener(){listening_to_form_reset||(listening_to_form_reset=!0,document.addEventListener("reset",t=>{Promise.resolve().then(()=>{var e;if(!t.defaultPrevented)for(const s of t.target.elements)(e=s.__on_r)==null||e.call(s)})},{capture:!0}))}function without_reactive_context(t){var e=active_reaction,s=active_effect;set_active_reaction(null),set_active_effect(null);try{return t()}finally{set_active_reaction(e),set_active_effect(s)}}function listen_to_event_and_reset_event(t,e,s,a=s){t.addEventListener(e,()=>without_reactive_context(s));const n=t.__on_r;n?t.__on_r=()=>{n(),a(!0)}:t.__on_r=()=>a(!0),add_form_reset_listener()}function index(t,e){return e}function pause_effects(t,e,s,a){for(var n=[],i=e.length,u=0;u<i;u++)pause_children(e[u].e,n,!0);var b=i>0&&n.length===0&&s!==null;if(b){var d=s.parentNode;clear_text_content(d),d.append(s),a.clear(),link(t,e[0].prev,e[i-1].next)}run_out_transitions(n,()=>{for(var p=0;p<i;p++){var g=e[p];b||(a.delete(g.k),link(t,g.prev,g.next)),destroy_effect(g.e,!b)}})}function each(t,e,s,a,n,i=null){var u=t,b={flags:e,items:new Map,first:null};hydrating&&hydrate_next();var d=null,p=!1;block(()=>{var g=s(),l=is_array(g)?g:g==null?[]:array_from(g),f=l.length;if(p&&f===0)return;p=f===0;let c=!1;if(hydrating){var o=u.data===HYDRATION_START_ELSE;o!==(f===0)&&(u=remove_nodes(),set_hydrate_node(u),set_hydrating(!1),c=!0)}if(hydrating){for(var k=null,E,h=0;h<f;h++){if(hydrate_node.nodeType===8&&hydrate_node.data===HYDRATION_END){u=hydrate_node,c=!0,set_hydrating(!1);break}var v=l[h],y=a(v,h);E=create_item(hydrate_node,b,k,null,v,y,h,n,e),b.items.set(y,E),k=E}f>0&&set_hydrate_node(remove_nodes())}if(!hydrating){var A=active_reaction;reconcile(l,b,u,n,e,(A.f&INERT)!==0,a)}i!==null&&(f===0?d?resume_effect(d):d=branch(()=>i(u)):d!==null&&pause_effect(d,()=>{d=null})),c&&set_hydrating(!0)}),hydrating&&(u=hydrate_node)}function reconcile(t,e,s,a,n,i,u,b){var d=t.length,p=e.items,g=e.first,l=g,f,c=null,o=[],k=[],E,h,v,y;for(y=0;y<d;y+=1){if(E=t[y],h=u(E,y),v=p.get(h),v===void 0){var A=l?l.e.nodes_start:s;c=create_item(A,e,c,c===null?e.first:c.next,E,h,y,a,n),p.set(h,c),o=[],k=[],l=c.next;continue}if(v.e.f&INERT&&resume_effect(v.e),v!==l){if(f!==void 0&&f.has(v)){if(o.length<k.length){var T=k[0],m;c=T.prev;var $=o[0],x=o[o.length-1];for(m=0;m<o.length;m+=1)move(o[m],T,s);for(m=0;m<k.length;m+=1)f.delete(k[m]);link(e,$.prev,x.next),link(e,c,$),link(e,x,T),l=T,c=x,y-=1,o=[],k=[]}else f.delete(v),move(v,l,s),link(e,v.prev,v.next),link(e,v,c===null?e.first:c.next),link(e,c,v),c=v;continue}for(o=[],k=[];l!==null&&l.k!==h;)(i||!(l.e.f&INERT))&&(f??(f=new Set)).add(l),k.push(l),l=l.next;if(l===null)continue;v=l}o.push(v),c=v,l=v.next}if(l!==null||f!==void 0){for(var N=f===void 0?[]:array_from(f);l!==null;)(i||!(l.e.f&INERT))&&N.push(l),l=l.next;var w=N.length;if(w>0){var R=null;pause_effects(e,N,R,p)}}active_effect.first=e.first&&e.first.e,active_effect.last=c&&c.e}function create_item(t,e,s,a,n,i,u,b,d,p){var g=(d&EACH_ITEM_REACTIVE)!==0,l=(d&EACH_ITEM_IMMUTABLE)===0,f=g?l?mutable_source(n):source(n):n,c=d&EACH_INDEX_REACTIVE?source(u):u,o={i:c,v:f,k:i,a:null,e:null,prev:s,next:a};try{return o.e=branch(()=>b(t,f,c),hydrating),o.e.prev=s&&s.e,o.e.next=a&&a.e,s===null?e.first=o:(s.next=o,s.e.next=o.e),a!==null&&(a.prev=o,a.e.prev=o.e),o}finally{}}function move(t,e,s){for(var a=t.next?t.next.e.nodes_start:s,n=e?e.e.nodes_start:s,i=t.e.nodes_start;i!==a;){var u=get_next_sibling(i);n.before(i),i=u}}function link(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function r(t){var e,s,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var n=t.length;for(e=0;e<n;e++)t[e]&&(s=r(t[e]))&&(a&&(a+=" "),a+=s)}else for(s in t)t[s]&&(a&&(a+=" "),a+=s);return a}function clsx$1(){for(var t,e,s=0,a="",n=arguments.length;s<n;s++)(t=arguments[s])&&(e=r(t))&&(a&&(a+=" "),a+=e);return a}function clsx(t){return typeof t=="object"?clsx$1(t):t??""}function remove_input_defaults(t){if(hydrating){var e=!1,s=()=>{if(!e){if(e=!0,t.hasAttribute("value")){var a=t.value;set_attribute(t,"value",null),t.value=a}if(t.hasAttribute("checked")){var n=t.checked;set_attribute(t,"checked",null),t.checked=n}}};t.__on_r=s,queue_idle_task(s),add_form_reset_listener()}}function set_attribute(t,e,s,a){var n=t.__attributes??(t.__attributes={});hydrating&&(n[e]=t.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&t.nodeName==="LINK")||n[e]!==(n[e]=s)&&(e==="style"&&"__styles"in t&&(t.__styles={}),e==="loading"&&(t[LOADING_ATTR_SYMBOL]=s),s==null?t.removeAttribute(e):typeof s!="string"&&get_setters(t).includes(e)?t[e]=s:t.setAttribute(e,s))}var setters_cache=new Map;function get_setters(t){var e=setters_cache.get(t.nodeName);if(e)return e;setters_cache.set(t.nodeName,e=[]);for(var s,a=t,n=Element.prototype;n!==a;){s=get_descriptors(a);for(var i in s)s[i].set&&e.push(i);a=get_prototype_of(a)}return e}function set_class(t,e,s){var a=t.__className,n=to_class(e,s);hydrating&&t.className===n?t.__className=n:(a!==n||hydrating&&t.className!==n)&&(e==null&&!s?t.removeAttribute("class"):t.className=n,t.__className=n)}function to_class(t,e){return(t??"")+(e?" "+e:"")}function bind_value(t,e,s=e){var a=is_runes();listen_to_event_and_reset_event(t,"input",n=>{var i=n?t.defaultValue:t.value;if(i=is_numberlike_input(t)?to_number(i):i,s(i),a&&i!==(i=e())){var u=t.selectionStart,b=t.selectionEnd;t.value=i??"",b!==null&&(t.selectionStart=u,t.selectionEnd=Math.min(b,t.value.length))}}),(hydrating&&t.defaultValue!==t.value||untrack(e)==null&&t.value)&&s(is_numberlike_input(t)?to_number(t.value):t.value),render_effect(()=>{var n=e();is_numberlike_input(t)&&n===to_number(t.value)||t.type==="date"&&!n&&!t.value||n!==t.value&&(t.value=n??"")})}function is_numberlike_input(t){var e=t.type;return e==="number"||e==="range"}function to_number(t){return t===""?null:+t}var root$1=template(`<div class="attribution svelte-8436jk">Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" class="svelte-8436jk">Frontend Mentor</a>. 
	Coded by <a href="https://github.com/SkaiLyhnne" class="svelte-8436jk">Skaï LYHNNE</a>.</div>`);function Fileby(t){var e=root$1();append(t,e)}function solve(_,onScreen){get(onScreen)===""?alert("Cannot solve empty expression"):set(onScreen,proxy(eval(get(onScreen)).toString(10)))}function remove(t,e){set(e,proxy(get(e).slice(0,get(e).length-1)))}var root_1=template('<button><span class="flyingTxt svelte-1v2g48k"> </span></button>'),on_click=(t,e)=>set(e,get(e)+"7"),on_click_1=(t,e)=>set(e,get(e)+"8"),on_click_2=(t,e)=>set(e,get(e)+"9"),on_click_3=(t,e)=>set(e,get(e)+"4"),on_click_4=(t,e)=>set(e,get(e)+"5"),on_click_5=(t,e)=>set(e,get(e)+"6"),on_click_6=(t,e)=>set(e,get(e)+"+"),on_click_7=(t,e)=>set(e,get(e)+"1"),on_click_8=(t,e)=>set(e,get(e)+"2"),on_click_9=(t,e)=>set(e,get(e)+"3"),on_click_10=(t,e)=>set(e,get(e)+"-"),on_click_11=(t,e)=>set(e,get(e)+"."),on_click_12=(t,e)=>set(e,get(e)+"0"),on_click_13=(t,e)=>set(e,get(e)+"/"),on_click_14=(t,e)=>{set(e,get(e)+"*")},on_click_15=(t,e)=>{set(e,"")},root=template('<div id="body"><section id="calculator" class="svelte-1v2g48k"><section id="header" class="svelte-1v2g48k"><div class="svelte-1v2g48k">calc</div> <div id="themePannel" class="svelte-1v2g48k">theme <!></div></section> <input type="text" id="screen" disabled> <section id="keyboard"><div class="divKeyboard svelte-1v2g48k"><button>7</button> <button>8</button> <button>9</button> <button>DEL</button></div> <div class="divKeyboard svelte-1v2g48k"><button>4</button> <button>5</button> <button>6</button> <button>+</button></div> <div class="divKeyboard svelte-1v2g48k"><button>1</button> <button>2</button> <button>3</button> <button>-</button></div> <div class="divKeyboard svelte-1v2g48k"><button>.</button> <button>0</button> <button>/</button> <button>×</button></div> <div class="divKeyboard svelte-1v2g48k"><button>RESET</button> <button>=</button></div></section></section></div> <!>',1);function _page(t,e){push(e,!0);let s=state(""),a=state(0);var n=root(),i=first_child(n),u=child(i),b=child(u),d=sibling(child(b),2),p=sibling(child(d));each(p,16,()=>[1,2,3],index,(H,P,O)=>{var I=root_1();I.__click=()=>set(a,proxy(O));var V=child(I),F=child(V,!0);reset(V),reset(I),template_effect(()=>{set_class(I,clsx(O==get(a)?"themeActif"+(get(a)+1):"themeInactif"+(get(a)+1)),"svelte-1v2g48k"),set_attribute(I,"aria-current",get(a)===O),set_text(F,P)}),append(H,I)}),reset(d),reset(b);var g=sibling(b,2);remove_input_defaults(g);var l=sibling(g,2),f=child(l),c=child(f);c.__click=[on_click,s];var o=sibling(c,2);o.__click=[on_click_1,s];var k=sibling(o,2);k.__click=[on_click_2,s];var E=sibling(k,2);E.__click=[remove,s],reset(f);var h=sibling(f,2),v=child(h);v.__click=[on_click_3,s];var y=sibling(v,2);y.__click=[on_click_4,s];var A=sibling(y,2);A.__click=[on_click_5,s];var T=sibling(A,2);T.__click=[on_click_6,s],reset(h);var m=sibling(h,2),$=child(m);$.__click=[on_click_7,s];var x=sibling($,2);x.__click=[on_click_8,s];var N=sibling(x,2);N.__click=[on_click_9,s];var w=sibling(N,2);w.__click=[on_click_10,s],reset(m);var R=sibling(m,2),C=child(R);C.__click=[on_click_11,s];var L=sibling(C,2);L.__click=[on_click_12,s];var M=sibling(L,2);M.__click=[on_click_13,s];var K=sibling(M,2);K.__click=[on_click_14,s],reset(R);var Y=sibling(R,2),D=child(Y);D.__click=[on_click_15,s];var B=sibling(D,2);B.__click=[solve,s],reset(Y),reset(l),reset(u),reset(i);var q=sibling(i,2);Fileby(q),template_effect(()=>{set_class(i,`${"colorBody"+(get(a)+1)} svelte-1v2g48k`),set_class(g,`${"colorScreen"+(get(a)+1)} svelte-1v2g48k`),set_class(l,`${"keyboardColor"+(get(a)+1)} svelte-1v2g48k`),set_class(c,`${"touch"+(get(a)+1)} svelte-1v2g48k`),set_class(o,`${"touch"+(get(a)+1)} svelte-1v2g48k`),set_class(k,`${"touch"+(get(a)+1)} svelte-1v2g48k`),set_class(E,`${"delete"+(get(a)+1)} svelte-1v2g48k`),set_class(v,`${"touch"+(get(a)+1)} svelte-1v2g48k`),set_class(y,`${"touch"+(get(a)+1)} svelte-1v2g48k`),set_class(A,`${"touch"+(get(a)+1)} svelte-1v2g48k`),set_class(T,`${"touch"+(get(a)+1)} svelte-1v2g48k`),set_class($,`${"touch"+(get(a)+1)} svelte-1v2g48k`),set_class(x,`${"touch"+(get(a)+1)} svelte-1v2g48k`),set_class(N,`${"touch"+(get(a)+1)} svelte-1v2g48k`),set_class(w,`${"touch"+(get(a)+1)} svelte-1v2g48k`),set_class(C,`${"touch"+(get(a)+1)} svelte-1v2g48k`),set_class(L,`${"touch"+(get(a)+1)} svelte-1v2g48k`),set_class(M,`${"touch"+(get(a)+1)} svelte-1v2g48k`),set_class(K,`${"touch"+(get(a)+1)} svelte-1v2g48k`),set_class(D,`${"reset"+(get(a)+1)} svelte-1v2g48k`),set_class(B,`${"equals"+(get(a)+1)} svelte-1v2g48k`)}),bind_value(g,()=>get(s),H=>set(s,H)),append(t,n),pop()}delegate(["click"]);export{_page as component};
