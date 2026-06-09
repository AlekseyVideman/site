<script lang="ts">
    import {
        MAX_BOT_DEV_REVIEWS,
        MAX_BOT_DEV_REVIEWS_VIDEO,
    } from "$lib/reviews";
    import Player from "$lib/Player.svelte";

    let showModal = $state(false);
</script>

<svelte:head>
    <title>Разработка ботов MAX</title>
</svelte:head>
<section id="hero">
    <h1>Роботы не плачут и работают</h1>
    <div>
        <h2>Что?</h2>
        <p>
            Представьте, Вы, ложась спать, благодарите Бога за этот день и вдруг
            сообщение, всплывшее на экране телефона — «а завтра работаете?» —
            графиком работы поинтересовался клиент, который не знает, что у вас
            час ночи. Следует или нанять человека, устающего и, зараза, каждый
            месяц просящего денег, или так же самостоятельно отвечать. Вам
            поможет бот!
        </p>
    </div>
</section>
<section id="abilities">
    <h1>Способности бота</h1>

    <div class="ability">
        <p>
            Освободит сотрудника тех. поддержки от ответов на вопросы и даcт вам
            возможность эксплуатировать того парня по-новому.
        </p>
        <img src="/illustrations/chat_slave.jpeg" alt="" />
    </div>

    <div class="ability">
        <p>
            То же сделает и для человека, который для клиентов в календаре
            ставит слоты.
        </p>
        <img src="/illustrations/calendar_bitch.jpg" alt="" />
    </div>

    <div class="ability">
        <p>Всё что угодно, и это без зп.</p>
        <img src="/illustrations/all_is_possible.jpeg" alt="" />
    </div>

    <div id="cta">
        <h2>Перед тем как написать мне</h2>
        <p>
            01 Определите цель. Что бот должен делать: продавать, отвечать на
            вопросы или записывать?
        </p>
        <p>
            02 Пропишите сценарии. Продумайте, как будет выглядеть диалог: от
            первого сообщения до целевого действия (заказ, запись, заявка).
        </p>
        <a id="cta-btn" href="#contacts">Купить бота</a>
    </div>
</section>
<section id="faq">
    <h1>Вопросы и ответы</h1>

    <div>
        <h2>Может сделать приложение?</h2>
        <p>
            — Если у вас есть бюджет и время на разработку приложения, а также
            вам нужен сложный интерфейс, то конечно. Бота сделать быстрее и
            дешевле, да и пользователям легче начать работать, так как у них уже
            установлен MAX.
        </p>
    </div>

    <div>
        <h2>Панель управления есть?</h2>
        <p>— Сделаю всё что нужно.</p>
    </div>

    <div>
        <h2>Могу ли я редактировать ответы?</h2>
        <p>— Да, договоримся как именно.</p>
    </div>

    <div>
        <h2>Появилась ошибка, что делать?</h2>
        <p>
            — Описание ошибки, время и лог отправить мне, исправлю без доплат.
        </p>
    </div>
</section>
<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<section id="reviews">
    <h1>Отзывы</h1>
    {#snippet Review(content: string, source_url: string)}
        <div class="review">
            <p>{content}</p>
            <a href={source_url}>
                <p>Источник</p>
                <img src="/icons/arrowupright.svg" alt="" />
            </a>
        </div>
    {/snippet}
    {#snippet VideoReview(video_url: string)}
        <div class="video-review">
            <Player bind:showModal {video_url} />
            <button onclick={() => (showModal = true)}>
                <img src="/icons/play.svg" alt="" />
            </button>
        </div>
    {/snippet}

    {#each MAX_BOT_DEV_REVIEWS as review}
        {@render Review(review.review, review.source_url)}
    {/each}
    {#each MAX_BOT_DEV_REVIEWS_VIDEO as videoReview}
        {@render VideoReview(videoReview.video_url)}
    {/each}
</section>

<style lang="sass">
    #hero > div
        grid-column: 6 / 13

    #abilities
        overflow-x: hidden
        padding: 0
        row-gap: var(--h2-size-desktop)
        h1
            padding: 0 0 0 var(--global-left-right-padding-dekstop)
            font-size: 48px
        .ability
            grid-column: span 12
            display: grid
            grid-template-columns: repeat(12, 1fr)
            p
                grid-column: 2 / 5
                place-self: center
                text-align: center
            img
                grid-column: 6 / 13
                width: 100%
                object-fit: cover

        #cta
            padding: 0 0 0 var(--global-left-right-padding-dekstop)
            grid-column: span 7
            display: flex
            flex-direction: column
            p
                text-align: unset
            #cta-btn
                margin-top: var(--h2-size-desktop)
                width: 50%
                padding: 36px 0
                font-size: 36px
                text-align: center
                font-weight: bold
                background-color: white
                color: black
    #faq
        div
            grid-column: span 6

    #reviews
        grid-template-columns: max-content
        .review
            display: flex
            flex-direction: column
            a
                align-self: end
                display: flex
                color: white
                img
                    margin-left: var(--p-size-desktop)
                    width: var(--p-size-desktop)
        .video-review
            grid-row: span 2
            grid-column: span 3
            width: 330px
            height: 450px
            border: solid 3px white
            display: flex
            place-content: center
            &:hover
                cursor: pointer
            > img
                width: 150px

    @media (max-width: 391px)
        #abilities
            h1
                padding: 0 0 0 var(--global-left-right-padding-mobile)
            .ability
                display: flex
                flex-direction: column
            #cta
                padding: 0
                #cta-btn
                    width: 100%
                    padding: var(--h2-size-mobile) 0
                    font-size: var(--h2-size-mobile)
        #reviews
            grid-template-columns: max-content
            .review
                width: auto
                border: solid 1px white
                a
                    img
                        margin-left: var(--p-size-mobile)
                        width: var(--p-size-mobile)
            .video-review
                width: auto
                border: solid 1px white
                > img
                    width: 100px
</style>
