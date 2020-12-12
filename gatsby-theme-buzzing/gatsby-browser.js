export const onInitialClientRender = _ => {
  var s = document.createElement("script")
  s.type = "text/javascript"
  s.innerText =
    'var a2a_config=a2a_config||{};function my_addtoany_onready(){for(var a=document.getElementsByClassName("share-button"),n=0;n<a.length;n++)a[n].classList.add("a2a_dd");a2a.init("page",{target:".share-this"})}function initShare(){a2a_config.callbacks=a2a_config.callbacks||[],a2a_config.callbacks.push({ready:my_addtoany_onready})}navigator.share||initShare();'
  document.body.appendChild(s)
  const addThisScript = document.createElement("script")
  addThisScript.src = `//static.addtoany.com/menu/page.js`
  addThisScript.async = true
  document.body.appendChild(addThisScript)
}
export { wrapPageElement } from "./src/components/wrap-page-element"
