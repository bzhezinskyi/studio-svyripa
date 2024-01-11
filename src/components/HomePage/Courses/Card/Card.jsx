import * as SC from './Card.styled';

export default function Card({ details: { name, txt, duration, price, id } }) {
  return (
    <SC.Container>
      <SC.Title>{name}</SC.Title>
      <SC.Txt>{txt}</SC.Txt>
      <br />
      <SC.Box>
        <SC.Txt>
          Тривалість курсу: {duration} <br />
          Вартість: {price}
        </SC.Txt>
        <SC.Txt></SC.Txt>
        <SC.Btn to={`course/${id}`}>Про курс</SC.Btn>
      </SC.Box>
    </SC.Container>
  );
}
