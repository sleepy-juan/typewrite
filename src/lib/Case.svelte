<script>
    import Row from "$lib/Row.svelte";

    let name = "대법원 1976. 4. 27. 선고 74다2151 판결";
    let fulltext = "이건 가처분의 피보전권리는 갑의 을에 대한 토지소유권이전등기청구권인데 반하여 이건 소송에서는 갑이 병을 대위하여 병의 을에 대한 토지소유권이전등기청구권을 행사하고 있어서 위 가처분의 피보전권리와 이건 소송물과는 동일성이 없으므로 위 가처분을 이건 소송에 유용할 수 없다.";
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
    }
</style>

<div class="wrapper">
    <h1>{name}</h1>
    <br />
    <div class="typewrite">
        {#each splited as text, idx}
            <Row {text} {idx} {activeIdx} {increaseActiveIdx} />
        {/each}
    </div>
</div>