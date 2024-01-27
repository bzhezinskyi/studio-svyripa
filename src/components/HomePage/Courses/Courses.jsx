import Card from './Card/Card';
import * as SC from './Courses.styled';
import coursesList from 'contents/curses.json';

export default function Courses() {
  return (
    <SC.Container id="Courses">
      <SC.Title>Курси</SC.Title>
      <SC.ListCard>
        {coursesList.map(item => (
          <SC.Item key={item.id}>
            <Card details={item} />
          </SC.Item>
        ))}
      </SC.ListCard>
    </SC.Container>
  );
}
