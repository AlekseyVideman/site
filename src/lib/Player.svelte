<script>
    let { showModal = $bindable(), video_url } = $props();
    let dialog = $state(); // HTMLDialogElement
    let paused = $state(false);

    $effect(() => {
        if (showModal) dialog.showModal();
    });
</script>

<dialog
    class="player-box"
    bind:this={dialog}
    onclose={() => {
        showModal = false;
        paused = true;
    }}
    onclick={(e) => {
        if (e.target === dialog) {
            dialog.close();
            paused = true;
        }
    }}
>
    <div id="player">
        <video bind:paused controls src={video_url}
            ><track kind="captions" />
        </video>
        <button id="close"
            onclick={() => {
                dialog.close();
                paused = true;
            }}
        >
            <img src="/icons/close.svg" alt="" />
        </button>
    </div>
</dialog>

<style lang="sass">
    dialog
        justify-content: center
        border: none
        padding: 0
        &::backdrop
            background-color: black 
        #player
            background-color: black 
            width: 90vw
            height: 90vh
            display: flex
            justify-content: center
            video
                width: 90vw
            button
                place-self: start
                img
                    width: 80px
                &:hover
                    cursor: pointer

    @media (max-width: 391px)
        $close-btn-size: 40px

        dialog
            #player
                flex-direction: column
                gap: $close-btn-size
                video
                    width: auto
                button
                    place-self: center
                    img
                        width: $close-btn-size
</style>
