import * as SC from "./AboutMe.styled";

import AboutImg from "images/about_me.jpg";

export default function AboutMe() {
  return (
    <SC.Container>
      <SC.Img src={AboutImg} />
      <SC.Box>
        <SC.Title>Про мене</SC.Title>
        <SC.Txt>
          Я Бжезінська Валентина.
          <br />
          <br /> Розвиваюся у nail-сфері більше 5-ти років.
          <br /> Відпиляла більше 3000 клієнтів.
          <br /> Вклала у своє навчання близько 50 тис. грн.
          <br /> Навчаю секретів у нігтьовій професії.
          <br /> Закохаю тебе у професію майстра манікюрк
        </SC.Txt>
      </SC.Box>
    </SC.Container>
  );
}
