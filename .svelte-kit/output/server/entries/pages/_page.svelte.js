import { c as create_ssr_component, d as each, e as escape, f as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const css$1 = {
  code: "@font-face{font-family:'DungGeunMo';src:url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff');font-weight:normal;font-style:normal}.row.svelte-1wieask.svelte-1wieask{margin-bottom:1em;box-sizing:border-box}.row.svelte-1wieask.svelte-1wieask,.row.svelte-1wieask input.svelte-1wieask{font-family:DungGeunMo, sans-serif;font-optical-sizing:auto;font-weight:400;font-style:normal;font-size:1.6rem;line-height:1.2rem}.guide.svelte-1wieask>div.svelte-1wieask{display:inline-block;min-width:0.8rem;opacity:0.7}.write.svelte-1wieask.svelte-1wieask{font-size:1rem;width:100%;margin:auto;background:transparent;border:0;box-shadow:none;outline:none;padding:0;text-align:left}",
  map: `{"version":3,"file":"Row.svelte","sources":["Row.svelte"],"sourcesContent":["<script>\\n    import { onMount } from \\"svelte\\";\\n    export let text, idx, activeIdx, increaseActiveIdx;\\n\\n    function inputAction(el, activeIdx) {\\n        el.focus();\\n\\n        return {\\n            update(activeIdx) {\\n                el.focus();\\n            }\\n        }\\n    }\\n\\n    let input = '';\\n    let isSame = new Array(text.length).fill(false);\\n\\n    $: {\\n        if(text === input){\\n            increaseActiveIdx();\\n        }\\n\\n        for(let i = 0; i < text.length; i++){\\n            if(i >= input.length) break;\\n            isSame[i] = text[i] === input[i];\\n        }\\n    }\\n<\/script>\\n\\n<style>\\n    @font-face {\\n        font-family: 'DungGeunMo';\\n        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff');\\n        font-weight: normal;\\n        font-style: normal;\\n    }\\n\\n    .row {\\n        margin-bottom: 1em;\\n        box-sizing: border-box;\\n    }\\n\\n    .row, .row input {\\n        font-family: DungGeunMo, sans-serif;\\n        font-optical-sizing: auto;\\n        font-weight: 400;\\n        font-style: normal;\\n\\n        font-size: 1.6rem;\\n        line-height: 1.2rem;\\n    }\\n\\n    .guide > div {\\n        display: inline-block;\\n        min-width: 0.8rem;\\n        opacity: 0.7;\\n    }\\n\\n    .write {\\n        font-size: 1rem;\\n        width: 100%;\\n        margin: auto;\\n        background: transparent;\\n        border: 0;\\n        box-shadow: none;\\n        outline: none;\\n        padding: 0;\\n        text-align: left;\\n    }\\n</style>\\n\\n<div class=\\"row\\">\\n    <div class=\\"guide\\">\\n        {#each [...text] as ch, i}\\n            {#if isSame[i]}                    \\n                <div>{ch}</div>\\n            {:else}\\n                <div style=\\"color: red\\">{ch}</div>\\n            {/if}\\n        {/each}\\n    </div>\\n    <input use:inputAction={activeIdx} bind:value={input} type=\\"text\\" class=\\"write\\" autocapitalize=\\"off\\" autocorrect=\\"off\\" autocomplete=\\"off\\" spellcheck=\\"false\\" disabled={idx !== activeIdx}>\\n</div>"],"names":[],"mappings":"AA8BI,UAAW,CACP,WAAW,CAAE,YAAY,CACzB,GAAG,CAAE,qFAAqF,CAAC,OAAO,MAAM,CAAC,CACzG,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,MAChB,CAEA,kCAAK,CACD,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,UAChB,CAEA,kCAAI,CAAE,mBAAI,CAAC,oBAAM,CACb,WAAW,CAAE,UAAU,CAAC,CAAC,UAAU,CACnC,mBAAmB,CAAE,IAAI,CACzB,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MAAM,CAElB,SAAS,CAAE,MAAM,CACjB,WAAW,CAAE,MACjB,CAEA,qBAAM,CAAG,kBAAI,CACT,OAAO,CAAE,YAAY,CACrB,SAAS,CAAE,MAAM,CACjB,OAAO,CAAE,GACb,CAEA,oCAAO,CACH,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,WAAW,CACvB,MAAM,CAAE,CAAC,CACT,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,IAChB"}`
};
const Row = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text, idx, activeIdx, increaseActiveIdx } = $$props;
  let input = "";
  let isSame = new Array(text.length).fill(false);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  if ($$props.idx === void 0 && $$bindings.idx && idx !== void 0) $$bindings.idx(idx);
  if ($$props.activeIdx === void 0 && $$bindings.activeIdx && activeIdx !== void 0) $$bindings.activeIdx(activeIdx);
  if ($$props.increaseActiveIdx === void 0 && $$bindings.increaseActiveIdx && increaseActiveIdx !== void 0) $$bindings.increaseActiveIdx(increaseActiveIdx);
  $$result.css.add(css$1);
  {
    {
      if (text === input) {
        increaseActiveIdx();
      }
      for (let i = 0; i < text.length; i++) {
        if (i >= input.length) break;
        isSame[i] = text[i] === input[i];
      }
    }
  }
  return `<div class="row svelte-1wieask"><div class="guide svelte-1wieask">${each([...text], (ch, i) => {
    return `${isSame[i] ? `<div class="svelte-1wieask">${escape(ch)}</div>` : `<div style="color: red" class="svelte-1wieask">${escape(ch)}</div>`}`;
  })}</div> <input type="text" class="write svelte-1wieask" autocapitalize="off" autocorrect="off" autocomplete="off" spellcheck="false" ${idx !== activeIdx ? "disabled" : ""}${add_attribute("value", input)}></div>`;
});
const css = {
  code: ".wrapper.svelte-w1xyud{max-width:1000px;margin:5% auto}",
  map: `{"version":3,"file":"Case.svelte","sources":["Case.svelte"],"sourcesContent":["<script>\\n    import Row from \\"$lib/Row.svelte\\";\\n\\n    let name = \\"대법원 1976. 4. 27. 선고 74다2151 판결\\";\\n    let fulltext = \\"이건 가처분의 피보전권리는 갑의 을에 대한 토지소유권이전등기청구권인데 반하여 이건 소송에서는 갑이 병을 대위하여 병의 을에 대한 토지소유권이전등기청구권을 행사하고 있어서 위 가처분의 피보전권리와 이건 소송물과는 동일성이 없으므로 위 가처분을 이건 소송에 유용할 수 없다.\\";\\n    let splitedText = fulltext.split(' ');\\n\\n    let splited = [];\\n    let fragment = \\"\\";\\n    let i = 0;\\n    while(i < splitedText.length) {\\n        if(fragment.length > 30){\\n            splited.push(fragment);\\n            fragment = \\"\\";\\n        }\\n\\n        fragment += splitedText[i] + \\" \\";\\n        i++;\\n    }\\n    if(fragment.length > 0) {\\n        splited.push(fragment)\\n    }\\n\\n    let activeIdx = 0;\\n    function increaseActiveIdx() {\\n        activeIdx++;\\n    }\\n<\/script>\\n\\n<style>\\n    .wrapper {\\n        max-width: 1000px;\\n        margin: 5% auto;\\n    }\\n</style>\\n\\n<div class=\\"wrapper\\">\\n    <h1>{name}</h1>\\n    <br />\\n    <div class=\\"typewrite\\">\\n        {#each splited as text, idx}\\n            <Row {text} {idx} {activeIdx} {increaseActiveIdx} />\\n        {/each}\\n    </div>\\n</div>"],"names":[],"mappings":"AA8BI,sBAAS,CACL,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,EAAE,CAAC,IACf"}`
};
let name = "대법원 1976. 4. 27. 선고 74다2151 판결";
let fulltext = "이건 가처분의 피보전권리는 갑의 을에 대한 토지소유권이전등기청구권인데 반하여 이건 소송에서는 갑이 병을 대위하여 병의 을에 대한 토지소유권이전등기청구권을 행사하고 있어서 위 가처분의 피보전권리와 이건 소송물과는 동일성이 없으므로 위 가처분을 이건 소송에 유용할 수 없다.";
const Case = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let splitedText = fulltext.split(" ");
  let splited = [];
  let fragment = "";
  let i = 0;
  while (i < splitedText.length) {
    if (fragment.length > 30) {
      splited.push(fragment);
      fragment = "";
    }
    fragment += splitedText[i] + " ";
    i++;
  }
  if (fragment.length > 0) {
    splited.push(fragment);
  }
  let activeIdx = 0;
  function increaseActiveIdx() {
    activeIdx++;
  }
  $$result.css.add(css);
  return `<div class="wrapper svelte-w1xyud"><h1>${escape(name)}</h1> <br> <div class="typewrite">${each(splited, (text, idx) => {
    return `${validate_component(Row, "Row").$$render($$result, { text, idx, activeIdx, increaseActiveIdx }, {}, {})}`;
  })}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Case, "Case").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
