import Header from 'components/Header/Header';

import * as SC from './HomePage.styled';
import HeroImg from 'images/hero.jpg';
import AboutImg from 'images/about_me.jpg';

import coursesList from 'contents/curses.json';
import Footer from 'components/Footer/Footer';
const nav = [
  { href: '#AboutMe', name: 'Про мене' },
  { href: '#Courses', name: 'Курси' },
  { href: '#Contacts', name: 'Контакти' },
];

export default function HomePage() {
  return (
    <>
      <Header navList={nav} />

      <SC.Section>
        <SC.Box>
          <SC.Title>
            Beauty studio <br />
            та курси для <br />
            Nail-майстрів
          </SC.Title>
          <SC.Subtitle>by valentyna Bzhezinska</SC.Subtitle>
        </SC.Box>
        <SC.Img src={HeroImg} />
      </SC.Section>

      <SC.Section id="AboutMe">
        <SC.Box>
          <SC.Title>Про мене</SC.Title>
          <SC.Txt>
            Я Бжезінська Валентина.
            <br />
            <br /> Розвиваюся у nail-сфері більше 5-ти років.
            <br /> Відпиляла більше 3000 клієнтів.
            <br /> Вклала у своє навчання близько 50 тис. грн.
            <br /> Навчаю секретів у нігтьовій професії.
            <br /> Закохаю тебе у професію майстра манікюру.
          </SC.Txt>
        </SC.Box>
        <SC.Img src={AboutImg} />
      </SC.Section>

      <SC.Container id="Courses">
        <SC.Title>Курси</SC.Title>
        <SC.CardList>
          {coursesList.map(
            ({
              id,
              title: { type, name },
              content: { description },
              duration,
              price,
            }) => (
              <SC.CardItem key={id}>
                <SC.CardTitle>
                  {type}
                  <br />
                  {name}
                </SC.CardTitle>
                <SC.CardTxt>{description}</SC.CardTxt>
                <br />
                <SC.CardBox>
                  <SC.CardTxt>
                    {duration}
                    <br />
                    {price}
                  </SC.CardTxt>
                  <SC.CardBtn to={`course/${id}`}>Про курс</SC.CardBtn>
                </SC.CardBox>
              </SC.CardItem>
            )
          )}
        </SC.CardList>
      </SC.Container>

      <Footer />
    </>
  );
}
