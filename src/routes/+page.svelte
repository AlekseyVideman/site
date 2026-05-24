<script lang="ts">
  import { base } from "$app/paths";
  import Footer from "./Footer.svelte";

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
    "git",
    "gradle",
    "linux",
    "postgresql",
    "docker",
    "ddd",
    "sql",
    "spring framework",
    "liquibase",
    "kubernetes",
    "gitlab ci",
    "hibernate",
    "mybatis",
    "junit5",
    "mockito",
    "kafka",
    "grpc",
  ];
  let skillsView = $state([...skills]);
</script>

<svelte:head>
  <title>Главная</title>
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
  {#snippet service(
    name: string,
    description: string,
    full_description_url: string,
  )}
    <div class="service">
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={full_description_url}>
        <p>Подробнее</p>
        <img src="icons/arrowupright.svg" alt="" />
      </a>
    </div>
  {/snippet}

  {@render service("Бот Max", "Автоматизируйте обработку заявок от лидов", "")}
  {@render service(
    "Tg в Max",
    "Сделаю копию Телеграмм-бота для Max. Ваши клиенты не заметят разницы",
    "",
  )}
</section>
<section id="values">
  <h1>Ценности</h1>
  {#snippet value(name: string, description: string)}
    <div class="value">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  {/snippet}

  {@render value("Долгосрочное сотрудничество", "Делаю не на один раз.")}
  {@render value("Довольный клиент", "— довольный я.")}
  {@render value("Честность", "Сообщаю о проблемах, если они есть.")}
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
<section id="contacts">
  <h1>Контакты</h1>

  <div id="contact-list">
    {#snippet contact(name: string, url: string)}
      <div class="contact">
        <h2>{name}</h2>
        <a href={url}>
          <p>Перейти</p>
          <img src="icons/arrowupright.svg" alt="" />
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
<Footer />

<style>
  section {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: var(--column-gap);
    padding: 0 var(--global-left-right-padding-dekstop);
  }
  section:not(#hero) {
    margin-top: 50vh;
  }

  #hero h3 {
    grid-column: 7 / 13;
    font-family: var(--p-font-family);
    font-size: 40px;
    margin-top: -2em;
  }
  #hero p {
    font-size: 36px;
  }
  #hero #intro {
    grid-column: 7 / 12;
  }
  #hero #cta-btn {
    grid-column: 7 / 13;
    margin-top: 3em;
    padding: 36px 0;
    font-size: 36px;
    text-align: center;
    font-weight: bold;
    background-color: white;
    color: black;
  }

  .service {
    width: 330px;
    height: 330px;
  }
  .service > p {
    height: 126px;
  }
  .service > a {
    display: flex;
    color: white;
  }
  .service > a > img {
    margin-left: var(--p-size-desktop);
    width: var(--p-size-desktop);
  }

  .value {
    grid-column: span 4;
    height: 264px;
  }
  .value:not(:nth-child(2)) {
    grid-row: 3 / 4;
  }
  .value:nth-child(3) {
    grid-column: 5 / 9;
  }
  .value:nth-child(4) {
    grid-column: 9 / 13;
  }

  #stages {
    grid-template-rows: 1fr 1fr 1fr;
  }
  #stages > h2 {
    grid-column: span 4;
  }
  #stages > h2:nth-child(odd) {
    grid-row: 3;
  }

  #skills > input {
    height: 79px;
    grid-column: span 12;
    padding: var(--p-size-desktop);
    background: none;
    font-size: var(--p-size-desktop);
    font-family: var(--p-font-family);
    border: solid 0.3rem white;
    color: white;
  }
  #skills > input::placeholder {
    color: white;
  }
  #skills > #skills-table {
    grid-column: span 12;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    column-gap: var(--column-gap);
  }

  #contacts > #contact-list {
    grid-column: span 6;

    display: grid;
    grid-template-columns: repeat(6, 1fr);
  }
  .contact {
    grid-column: span 3;
  }
  .contact > a {
    margin-top: -1.5em;

    display: flex;
    color: white;
  }
  .contact > a > img {
    margin-left: var(--p-size-desktop);
    width: var(--p-size-desktop);
  }
  #contacts > #message-example {
    grid-column: 7 / 13;
    grid-row: 3;
  }

  /* MOBILE */
  @media (max-width: 391px) {
    section {
      display: flex;
      flex-direction: column;
      padding: 0;
      gap: var(--column-gap);
    }
    section:not(#hero) {
      margin-top: 20vh;
    }

    #hero > h3 {
      place-self: end;
      font-size: var(--h2-size-mobile);
    }
    #hero p {
      font-size: var(--p-size-mobile);
      padding: 0 var(--global-left-right-padding-mobile);
    }
    #hero #cta-btn {
      padding: var(--h2-size-mobile) 0;
      font-size: var(--h2-size-mobile);
    }

    #services > .service {
      width: auto;
      border: solid 1px white;
      padding: 0 var(--global-left-right-padding-mobile);
    }

    #values > .value {
      height: fit-content;
      padding: 0 var(--global-left-right-padding-mobile);
    }

    #contacts > #contact-list {
      gap: var(--column-gap);
    }

    #stages > h1 {
      font-size: var(--h2-size-desktop); /* для читаемости */
    }
    #stages > h2 {
      padding: 0 var(--global-left-right-padding-mobile);
    }

    #skills > input {
      height: 55px;
      padding: var(--p-size-mobile);
      font-size: var(--p-size-mobile);
      border: solid 0.1rem white;
    }
    #skills > #skills-table {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      column-gap: var(--column-gap);
      padding: 0 var(--global-left-right-padding-mobile);
    }

    .contact {
      grid-column: span 6;

      display: grid;
      grid-template-columns: 1fr 1fr;
      border: solid 1px white;
      padding: 0 var(--global-left-right-padding-mobile);
    }
    .contact > a > img {
      margin-left: var(--p-size-mobile);
      width: var(--p-size-mobile);
    }
    .contact > a {
      margin-top: 0;
    }
    #contacts > #message-example {
      padding: 0 var(--global-left-right-padding-mobile);
    }
  }
  @media (max-width: 360px) {
    #stages > h1 {
      font-size: 2.5rem; /* для читаемости */
    }

    #skills > #skills-table {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
