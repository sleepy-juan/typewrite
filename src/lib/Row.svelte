<script>
    import { onMount } from "svelte";
    export let text, idx, activeIdx, increaseActiveIdx;

    function inputAction(el, activeIdx) {
        el.focus();

        return {
            update(activeIdx) {
                el.focus();
            }
        }
    }

    let input = '';
    let isSame = new Array(text.length).fill(false);

    $: {
        if(text === input){
            increaseActiveIdx();
        }

        for(let i = 0; i < text.length; i++){
            if(i >= input.length) break;
            isSame[i] = text[i] === input[i];
        }
    }
</script>

<style>
    @font-face {
        font-family: 'DungGeunMo';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    .row {
        margin-bottom: 1em;
        box-sizing: border-box;
    }

    .row, .row input {
        font-family: DungGeunMo, sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;

        font-size: 1.6rem;
        line-height: 1.2rem;
    }

    .guide > div {
        display: inline-block;
        min-width: 0.8rem;
        opacity: 0.7;
    }

    .write {
        font-size: 1rem;
        width: 100%;
        margin: auto;
        background: transparent;
        border: 0;
        box-shadow: none;
        outline: none;
        padding: 0;
        text-align: left;
    }
</style>

<div class="row">
    <div class="guide">
        {#each [...text] as ch, i}
            {#if isSame[i]}                    
                <div>{ch}</div>
            {:else}
                <div style="color: red">{ch}</div>
            {/if}
        {/each}
    </div>
    <input use:inputAction={activeIdx} bind:value={input} type="text" class="write" autocapitalize="off" autocorrect="off" autocomplete="off" spellcheck="false" disabled={idx !== activeIdx}>
</div>