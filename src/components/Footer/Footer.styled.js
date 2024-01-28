import styled from 'styled-components';
import {
  PiInstagramLogo,
  PiTelegramLogo,
  PiPhone,
  PiMapPin,
  PiPen,
} from 'react-icons/pi';

export const Container = styled.div`
  padding-top: 50px;
  padding-bottom: 24px;

  text-align: center;
`;

export const Title = styled.h1`
  color: var(--txt-color-primary);
  @media screen and (max-width: 425px) {
    font-size: 48px;
    margin-bottom: 8px;
  }
  @media screen and (min-width: 426px) and (max-width: 767px) {
    font-size: 60px;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 64px;
    margin-bottom: 24px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 96px;
    margin-bottom: 24px;
  }
`;

export const ContactList = styled.ul`
  text-align: start;
  margin: 0 8px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
export const ContactItem = styled.li`
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    width: 364px;
  }
  @media screen and (min-width: 1024px) {
    width: 486px;
  }
`;
export const ContactLink = styled.a`
  display: flex;
  align-items: center;
`;

export const ContactTxt = styled.span`
  margin-left: 12px;
`;
export const InstagramIcon = styled(PiInstagramLogo)`
  width: 30px;
  height: 30px;
`;
export const TelegramIcon = styled(PiTelegramLogo)`
  width: 30px;
  height: 30px;
`;
export const PhoneIcon = styled(PiPhone)`
  width: 30px;
  height: 30px;
`;
export const MapIcon = styled(PiMapPin)`
  width: 30px;
  height: 30px;
`;
export const PenIcon = styled(PiPen)`
  width: 30px;
  height: 30px;
`;
