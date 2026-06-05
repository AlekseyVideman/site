<script lang="ts">
  import { resolve } from "$app/paths";

  function greeting() {
    let hour = new Date().getHours();

    switch (true) {
      case hour >= 6 && hour <= 12:
        return "Доброе утро!";
      case hour >= 12 && hour <= 18:
        return "Добрый день!";
      case hour >= 18 && hour <= 23:
        return "Добрый вечер!";
      default:
        return "Здравствуйте!";
    }
  }

  const skills = [
    "java",
    "clojure",
    "typescript",
    "open api",
    "git",
    "gradle",
    "maven",
    "linux",
    "postgresql",
    "docker",
    "ddd",
    "sql",
    "spring framework",
    "liquibase",
    "kubernetes",
    "ci",
    "hibernate",
    "mybatis",
    "jooq",
    "junit",
    "mockito",
    "kafka",
    "grpc",
    "max api",
    "javafx",
    "вёрстка",
    "svelte",
  ];
  let skillsView = $state([...skills]);
</script>

<svelte:head>
  <title>Главная. Алексей Видеман</title>
  <meta name="yandex-verification" content="4b391af5948c5e63" />
</svelte:head>
<section id="hero">
  <h1>АЛЕКСЕЙ ВИДЕМАН</h1>
  <h3>— к вашим услугам</h3>
  <span id="intro">
    <p>
      {greeting()} Я — самозанятый программист-разработчик.
    </p>
    <p>Здесь, чтобы помочь вам.</p>
  </span>
  <a id="cta-btn" href="#contacts">Начать работать</a>
</section>
<section id="services">
  <h1>Услуги</h1>
  {#snippet Service(
    name: string,
    description: string,
    full_description_url: string,
  )}
    <div class="service">
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={full_description_url}>
        <p>Подробнее</p>
        <img src="/icons/arrowupright.svg" alt="" />
      </a>
    </div>
  {/snippet}

  {@render Service(
    "Бот Max",
    "Бездушная машина для печати денег.",
    resolve("/max-bot"),
  )}
  <!-- {@render service( пока фокус на одной услуге
    "Tg в Max",
    "Сделаю копию Телеграмм-бота для Max. Ваши клиенты не заметят разницы",
    "",
  )} -->
</section>
<section id="values">
  <h1>Ценности</h1>
  {#snippet Value(name: string, description: string)}
    <div class="value">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  {/snippet}

  {@render Value("Долгосрочное сотрудничество", "Делаю не на один раз.")}
  {@render Value("Довольный клиент", "— довольный я.")}
  {@render Value("Честность", "Сообщаю о проблемах, если они есть.")}
</section>
<section id="stages">
  <h1>Этапы сотрудничества</h1>
  <h2>01 Обсуждаем задачу (брифинг)</h2>
  <h2>02 Планируем этапы и сроки</h2>
  <h2>03 Подписываем договор</h2>
  <h2>
    04 В процессе я держу вас в курсе прогресса с помощью еженедельных отчётов
  </h2>
  <h2>05 По завершению провожу сдачу работ с демонстрацией по видеозвонку</h2>
  <h2>06 Оказываю поддержку после завершения работы</h2>
</section>
<section id="skills">
  <h1>Навыки</h1>
  <input
    type="search"
    placeholder="Поиск"
    oninput={(input) =>
      (skillsView = skills.filter((skill) =>
        skill.startsWith(input.currentTarget.value.toLowerCase()),
      ))}
  />
  <div id="skills-table">
    {#each skillsView as skill}
      <h2>{skill}</h2>
    {/each}
  </div>
</section>

<style lang="sass">
  #hero
    h3 
      grid-column: 7 / 13;
      font-family: var(--p-font-family);
      font-size: 40px;
      margin-top: -2em;
  
    p 
      font-size: 36px;
  
    #intro 
      grid-column: 7 / 12;
  
    #cta-btn 
      grid-column: 7 / 13;
      margin-top: 3em;
      padding: 36px 0;
      font-size: 36px;
      text-align: center;
      font-weight: bold;
      background-color: white;
      color: black;

  .service 
    width: 330px;
    height: 330px;
    a 
      display: flex;
      color: white;
      img 
        margin-left: var(--p-size-desktop);
        width: var(--p-size-desktop);
  
  .value 
    grid-column: span 4;
    height: 264px;
    &:not(:nth-child(2)) 
      grid-row: 3 / 4;
    &:nth-child(3) 
      grid-column: 5 / 9;
    &:nth-child(4) 
      grid-column: 9 / 13;

  #stages 
    grid-template-rows: 1fr 1fr 1fr;
    h2 
      grid-column: span 4;
      &:nth-child(odd) 
        grid-row: 3;

  #skills
    input 
      height: 79px;
      grid-column: span 12;
      padding: var(--p-size-desktop);
      background: none;
      font-size: var(--p-size-desktop);
      font-family: var(--p-font-family);
      border: solid 0.3rem white;
      color: white;
      &::placeholder 
        color: white;
    #skills-table 
      grid-column: span 12;

      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      column-gap: var(--column-gap);

  /* MOBILE */
  @media (max-width: 391px) 
    #hero
      h3 
        place-self: end;
        font-size: var(--h2-size-mobile);
      p 
        font-size: var(--p-size-mobile);
      #cta-btn 
        padding: var(--h2-size-mobile) 0;
        font-size: var(--h2-size-mobile);

    #services > .service 
      width: auto;
      border: solid 1px white;

    #values > .value 
      height: fit-content;

    #stages
      h1 
        font-size: var(--h2-size-desktop); /* для читаемости */

    #skills > input 
      height: 55px;
      padding: var(--p-size-mobile);
      font-size: var(--p-size-mobile);
      border: solid 0.1rem white;
      #skills-table 
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: var(--column-gap);
  
  @media (max-width: 360px) 
    #stages > h1 
      font-size: 2.5rem; /* для читаемости */
    
    #skills > #skills-table 
      grid-template-columns: 1fr 1fr;
</style>
