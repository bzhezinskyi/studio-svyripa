import { useParams } from 'react-router';

import * as SC from './CourseDetails.styled';
import coursesList from 'contents/curses.json';

export default function CourseDetails() {
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
