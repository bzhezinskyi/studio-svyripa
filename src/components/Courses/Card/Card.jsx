import * as SC from './Card.styled';

export default function Card({ details }) {
  console.log(details);
  return (
    <SC.Container>
      <SC.Title>{details.name}</SC.Title>
      <SC.Txt>{details.txt}</SC.Txt>
      <SC.Txt>Тривалість курсу: {details.duration}</SC.Txt>
      <SC.Txt>Вартість: {details.price}</SC.Txt>
      <SC.Btn to={`course/${details.id}`}>Про курс</SC.Btn>
    </SC.Container>
  );
}
