import * as SC from './Card.styled';

export default function Card({
  details: {
    title: { type, name },
    content: { description },
    duration,
    price,
    id,
  },
}) {
  return (
    <SC.Container>
      <SC.Title>{type}</SC.Title>
      <SC.Title>{name}</SC.Title>
      <SC.Txt>{description}</SC.Txt>
      <br />
      <SC.Box>
        <SC.Txt>
          {duration} <br />
          {price}
        </SC.Txt>
        <SC.Btn to={`course/${id}`}>Про курс</SC.Btn>
      </SC.Box>
    </SC.Container>
  );
}
