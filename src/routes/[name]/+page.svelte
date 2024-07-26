<script>
    /** @type {import('./$types').PageData} */
	export let data;
    import Row from "$lib/Row.svelte";
    let {name, fulltext} = data;
    
    let splitedText = fulltext.split(' ');

    let splited = [];
    let fragment = "";
    let i = 0;
    while(i < splitedText.length) {
        if(fragment.length > 30){
            splited.push(fragment);
            fragment = "";
        }

        fragment += splitedText[i] + " ";
        i++;
    }
    if(fragment.length > 0) {
        splited.push(fragment)
    }

    let activeIdx = 0;
    function increaseActiveIdx() {
        activeIdx++;
    }
</script>

<style>
    .wrapper {
        max-width: 1000px;
        margin: 5% auto;

        border: 2px solid black;
    }

    .wrapper header {
        border-bottom: 2px solid black;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
    }

    .wrapper .typewrite {
        padding: 10px 20px;
    }

    .wrapper .btn {
        width: 32px;
        height: 32px;
        line-height: 26px;
        font-weight: bold;
        font-size: 1.2em;
        background-color: black;
        color: white;
        text-align: center;
    }
</style>

<div class="wrapper">
    <header>
        <h2>{name}</h2>
        <a href="/"><div class="btn">x</div></a>
    </header>
    <br />
    <div class="typewrite">
        {#each splited as text, idx}
            <Row {text} {idx} {activeIdx} {increaseActiveIdx} />
        {/each}
    </div>
</div>