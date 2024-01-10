import { useParams } from 'react-router';

import * as SC from './CoursePage.styled';
import coursesList from 'contents/curses.json';

export default function CoursePage() {
  const { id } = useParams();
  const course = coursesList[coursesList.findIndex(i => i.id === id)];

  const { name, txt } = course;

  return (
    <SC.Container>
      <SC.Title>{name}</SC.Title>
      <SC.Txt>{txt}</SC.Txt>
    </SC.Container>
  );
}
