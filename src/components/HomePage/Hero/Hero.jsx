import * as SC from "./Hero.styled";

import HeroImg from "images/hero.jpg";

export default function Hero() {
  return (
    <SC.Container>
      <SC.Box>
        <SC.Title>
          Beauty studio <br />
          та курси для <br />
          Nail-майстрів
        </SC.Title>
        <SC.Txt>by valentyna Bzhezinska</SC.Txt>
      </SC.Box>
      <SC.Img src={HeroImg} />
    </SC.Container>
  );
}
