<script lang="ts">
    let { children } = $props();
</script>

{@render children()}

<style>
    :root {
        --h1-size-desktop: 8rem; /* 128px / 16px = 8rem */
        --h1-size-mobile: 4rem; /* 64px / 16px = 4rem */
        --h2-size-desktop: 3rem; /* 48px / 16px = 3rem */
        --h2-size-mobile: 1.25rem; /* 20px / 16px = 1.25rem */
        --p-size-desktop: 1.5rem; /* 24px / 16px = 1.5rem */
        --p-size-mobile: 1.125rem; /* 18px / 16px = 1.125rem */

        --p-font-family: "Noto Sans", Arial, Helvetica, Roboto, Open Sans,
            Liberation Sans, Fira Sans, sans-serif;
        --column-gap: 20px;
        --global-left-right-padding-dekstop: 2.5rem;
        --global-left-right-padding-mobile: 1.5rem;
    }
    :global(body) {
        min-height: 100vh;
        padding: 0;
        margin: 0;
        background-color: black;
        color: white;
        display: flex;
        flex-direction: column;
    }
    :global(
            input[type="search"]::-webkit-search-decoration,
            input[type="search"]::-webkit-search-cancel-button,
            input[type="search"]::-webkit-search-results-button,
            input[type="search"]::-webkit-search-results-decoration
        ) {
        display: none;
    }
    :global(input[type="search"]:focus) {
        outline: none;
    }
    :global(a:focus) {
        outline: none;
    }
    :global(h1) {
        font-size: var(--h1-size-desktop);
        grid-column: span 12;
    }
    :global(h2) {
        font-size: var(--h2-size-desktop);
        font-weight: bold;
        font-family: var(--p-font-family);
    }
    :global(p, a) {
        font-family: var(--p-font-family);
        font-size: var(--p-size-desktop);
        text-decoration: none;
    }

    /* MOBILE */
    @media (max-width: 391px) {
        :global(h1) {
            font-size: var(--h1-size-mobile);
            padding: 0 var(--global-left-right-padding-mobile);
        }
        :global(h2) {
            font-size: var(--h2-size-mobile);
        }
        :global(p, a) {
            font-size: var(--p-size-mobile);
        }
    }
    @media (max-width: 360px) {
        :global(h1) {
            font-size: var(--h2-size-desktop);
        }
    }
</style>
