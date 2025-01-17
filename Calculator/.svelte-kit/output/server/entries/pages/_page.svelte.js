import { e as ensure_array_like, c as pop, d as stringify, p as push } from "../../chunks/index.js";
import { clsx as clsx$1 } from "clsx";
import { e as escape_html } from "../../chunks/escaping.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function clsx(value) {
  if (typeof value === "object") {
    return clsx$1(value);
  } else {
    return value ?? "";
  }
}
function Fileby($$payload) {
  $$payload.out += `<div class="attribution svelte-8436jk">Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" class="svelte-8436jk">Frontend Mentor</a>. 
	Coded by <a href="https://github.com/SkaiLyhnne" class="svelte-8436jk">Skaï LYHNNE</a>.</div>`;
}
function _page($$payload, $$props) {
  push();
  let onScreen = "", current = 0;
  const each_array = ensure_array_like([1, 2, 3]);
  $$payload.out += `<div id="body"${attr("class", `${stringify("colorBody" + (current + 1))} svelte-1v2g48k`)}><section id="calculator" class="svelte-1v2g48k"><section id="header" class="svelte-1v2g48k"><div class="svelte-1v2g48k">calc</div> <div id="themePannel" class="svelte-1v2g48k">theme <!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let item = each_array[index];
    $$payload.out += `<button${attr("class", clsx(index == current ? "themeActif" + (current + 1) : "themeInactif" + (current + 1)) + " svelte-1v2g48k")}${attr("aria-current", current === index)}><span class="flyingTxt svelte-1v2g48k">${escape_html(item)}</span></button>`;
  }
  $$payload.out += `<!--]--></div></section> <input type="text" id="screen"${attr("class", `${stringify("colorScreen" + (current + 1))} svelte-1v2g48k`)}${attr("value", onScreen)} disabled> <section id="keyboard"${attr("class", `${stringify("keyboardColor" + (current + 1))} svelte-1v2g48k`)}><div class="divKeyboard svelte-1v2g48k"><button${attr("class", `${stringify("touch" + (current + 1))} svelte-1v2g48k`)}>7</button> <button${attr("class", `${stringify("touch" + (current + 1))} svelte-1v2g48k`)}>8</button> <button${attr("class", `${stringify("touch" + (current + 1))} svelte-1v2g48k`)}>9</button> <button${attr("class", `${stringify("delete" + (current + 1))} svelte-1v2g48k`)}>DEL</button></div> <div class="divKeyboard svelte-1v2g48k"><button${attr("class", `${stringify("touch" + (current + 1))} svelte-1v2g48k`)}>4</button> <button${attr("class", `${stringify("touch" + (current + 1))} svelte-1v2g48k`)}>5</button> <button${attr("class", `${stringify("touch" + (current + 1))} svelte-1v2g48k`)}>6</button> <button${attr("class", `${stringify("touch" + (current + 1))} svelte-1v2g48k`)}>+</button></div> <div class="divKeyboard svelte-1v2g48k"><button${attr("class", `${stringify("touch" + (current + 1))} svelte-1v2g48k`)}>1</button> <button${attr("class", `${stringify("touch" + (current + 1))} svelte-1v2g48k`)}>2</button> <button${attr("class", `${stringify("touch" + (current + 1))} svelte-1v2g48k`)}>3</button> <button${attr("class", `${stringify("touch" + (current + 1))} svelte-1v2g48k`)}>-</button></div> <div class="divKeyboard svelte-1v2g48k"><button${attr("class", `${stringify("touch" + (current + 1))} svelte-1v2g48k`)}>.</button> <button${attr("class", `${stringify("touch" + (current + 1))} svelte-1v2g48k`)}>0</button> <button${attr("class", `${stringify("touch" + (current + 1))} svelte-1v2g48k`)}>/</button> <button${attr("class", `${stringify("touch" + (current + 1))} svelte-1v2g48k`)}>×</button></div> <div class="divKeyboard svelte-1v2g48k"><button${attr("class", `${stringify("reset" + (current + 1))} svelte-1v2g48k`)}>RESET</button> <button${attr("class", `${stringify("equals" + (current + 1))} svelte-1v2g48k`)}>=</button></div></section></section></div> `;
  Fileby($$payload);
  $$payload.out += `<!---->`;
  pop();
}
export {
  _page as default
};
