<script lang="ts">
    let { children } = $props();
</script>

{@render children()}

<section id="contacts">
    <h1>Контакты</h1>

    <div id="contact-list">
        {#snippet contact(name: string, url: string)}
            <div class="contact">
                <h2>{name}</h2>
                <a href={url}>
                    <p>Написать</p>
                    <img src="/icons/arrowupright.svg" alt="" />
                </a>
            </div>
        {/snippet}

        {@render contact(
            "MAX",
            "https://max.ru/u/f9LHodD0cOIp7Qwm0oQzOVfnZEBLgDIZnQRJ2mo6_Gr1iofVB0M8_evdOzE",
        )}
        {@render contact("VK", "https://vk.com/alvideman")}
        {@render contact("Tenchat", "https://tenchat.ru/videman")}
    </div>
    <div id="message-example">
        <h2>Шаблон сообщения</h2>
        <p>
            Добрый день, Алексей! Нужен бот MAX: уведомления, заявки, вопросы,
            интеграция с CRM.
        </p>
    </div>
</section>
<footer>
    <p>
        ИП Видеман Алексей Валентинович | ИНН 244501489528 | ОГРНИП
        326246800086773
    </p>
</footer>

<style lang="sass">
    :root 
        --h1-size-desktop: 8rem; /* 128px / 16px = 8rem */
        --h1-size-mobile: 4rem; /* 64px / 16px = 4rem */
        --h2-size-desktop: 3rem; /* 48px / 16px = 3rem */
        --h2-size-mobile: 1.25rem; /* 20px / 16px = 1.25rem */
        --p-size-desktop: 1.5rem; /* 24px / 16px = 1.5rem */
        --p-size-mobile: 1.125rem; /* 18px / 16px = 1.125rem */
        --p-font-family: "Noto Sans", Arial, Helvetica, Roboto, Open Sans, Liberation Sans, Fira Sans, sans-serif;
        --column-gap: 20px;
        --global-left-right-padding-dekstop: 2.5rem;
        --global-left-right-padding-mobile: 1.5rem;
    
    :global(body) 
        min-height: 100vh;
        padding: 0;
        margin: 0;
        background-color: black;
        color: white;
        display: flex;
        flex-direction: column;
    
    :global(section) 
        padding: 0 var(--global-left-right-padding-dekstop);
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        column-gap: var(--column-gap);
        &:not(#hero)
            margin-top: 50vh;
    
    :global(
            input[type="search"]::-webkit-search-decoration,
            input[type="search"]::-webkit-search-cancel-button,
            input[type="search"]::-webkit-search-results-button,
            input[type="search"]::-webkit-search-results-decoration
        ) 
            display: none;
    
    :global(input[type="search"]:focus) 
        outline: none;
    
    :global(a:focus) 
        outline: none;
    
    :global(h1)
        font-size: var(--h1-size-desktop);
        grid-column: span 12;
    
    :global(h2) 
        font-size: var(--h2-size-desktop);
        font-weight: bold;
        font-family: var(--p-font-family);
    
    :global(p, a) 
        font-family: var(--p-font-family);
        font-size: var(--p-size-desktop);
        text-decoration: none;
    :global(button)
        padding: 0
        border: 0
        background: none

    #contacts
        #contact-list 
            grid-column: span 6;

            display: grid;
            grid-template-columns: repeat(6, 1fr);
        #message-example 
            grid-column: 7 / 13;
            grid-row: 3;
  
    .contact 
        grid-column: span 3;
        a
            margin-top: -1.5em;
            display: flex;
            color: white;
            img 
                margin-left: var(--p-size-desktop);
                width: var(--p-size-desktop);
    footer
        height: 150px;
        margin-top: auto;
        padding: 0 0 0 var(--global-left-right-padding-dekstop);
        border-top: solid 1px #939393;

    /* MOBILE */
    @media (max-width: 391px) 
        :global(section) 
            padding: 0;
            display: flex;
            flex-direction: column;
            padding: 0;
            gap: var(--column-gap);
            &:not(#hero) 
                margin-top: 20vh;
        
        :global(h1) 
            font-size: var(--h1-size-mobile);
            padding: 0 var(--global-left-right-padding-mobile);
        
        :global(h2) 
            font-size: var(--h2-size-mobile);
            padding: 0 var(--global-left-right-padding-mobile);
        
        :global(p, a) 
            font-size: var(--p-size-mobile);
            padding: 0 var(--global-left-right-padding-mobile);

        #contacts
            #contact-list 
                gap: var(--column-gap);
            
        .contact
            grid-column: span 6;

            display: grid;
            grid-template-columns: 1fr 1fr;
            border: solid 1px white;
            a
                margin-top: 0;
                img 
                    margin-left: var(--p-size-mobile);
                    width: var(--p-size-mobile);

        footer
            padding: 0
    
    @media (max-width: 360px) 
        :global(h1) 
            font-size: var(--h2-size-desktop);
</style>
