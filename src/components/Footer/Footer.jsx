import * as SC from './Footer.styled';

export default function Footer() {
  return (
    <>
      <SC.Container id="Contacts">
        <SC.Title>Контакти</SC.Title>
        <SC.ContactList>
          <SC.ContactItem>
            <SC.ContactLink href="https://www.instagram.com/svyripa_nails">
              <SC.InstagramIcon />
              <SC.ContactTxt>Svyripa_nails</SC.ContactTxt>
            </SC.ContactLink>
          </SC.ContactItem>
          <SC.ContactItem>
            <SC.ContactLink href="https://t.me/svyripa_nails">
              <SC.TelegramIcon />
              <SC.ContactTxt>@svyripa_nails</SC.ContactTxt>
            </SC.ContactLink>
          </SC.ContactItem>
          <SC.ContactItem>
            <SC.ContactLink href="tel:+380667470833">
              <SC.PhoneIcon />
              <SC.ContactTxt>+380 66 747 0833</SC.ContactTxt>
            </SC.ContactLink>
          </SC.ContactItem>
          <SC.ContactItem>
            <SC.ContactLink href="https://maps.app.goo.gl/8mELKRtgBqCrJuzu5">
              <SC.MapIcon />
              <SC.ContactTxt>м.Луцьк вул.Крилова 1</SC.ContactTxt>
            </SC.ContactLink>
          </SC.ContactItem>
          <SC.ContactItem>
            <SC.ContactLink href="https://widget.easyweek.io/svyripa-nails/63873">
              <SC.PenIcon />
              <SC.ContactTxt>Запис на послуги</SC.ContactTxt>
            </SC.ContactLink>
          </SC.ContactItem>
        </SC.ContactList>
      </SC.Container>
    </>
  );
}
