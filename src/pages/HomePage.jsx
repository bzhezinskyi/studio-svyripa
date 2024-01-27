import Hero from 'components/HomePage/Hero/Hero';
import AboutMe from 'components/HomePage/AboutMe/AboutMe';
import Courses from 'components/HomePage/Courses/Courses';
import Header from 'components/Layout/Header/Header';

const nav = [
  { href: '#AboutMe', name: 'Про мене' },
  { href: '#Courses', name: 'Курси' },
  {
    href: 'https://widget.easyweek.io/svyripa-nails/63873',
    name: 'Запис на послуги',
  },
];

export default function HomePage() {
  return (
    <>
      <Header navList={nav} />
      <Hero />
      <AboutMe />
      <Courses />
    </>
  );
}
