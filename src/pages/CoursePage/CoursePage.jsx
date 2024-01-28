import { useParams } from 'react-router';

import Header from 'components/Header/Header';

import * as SC from './CoursePage.styled';

import coursesList from 'contents/curses.json';
import Footer from 'components/Footer/Footer';

export default function CoursePage() {
  const { id } = useParams();
  const {
    title: { type, name },
    content: { txt, list },
    duration,
    price,
  } = coursesList[coursesList.findIndex(i => i.id === id)];

  return (
    <>
      <Header />
      <SC.Container>
        <SC.Subtitle> {type}</SC.Subtitle>
        <SC.Title>{name}</SC.Title>
        <SC.Txt>{txt}</SC.Txt>
        <SC.List>
          {list.map(i => (
            <SC.Item key={i}>{i}</SC.Item>
          ))}
        </SC.List>
        <SC.Txt>{duration}</SC.Txt>
        <SC.Txt>{price}</SC.Txt>
      </SC.Container>
      <Footer />
    </>
  );
}
