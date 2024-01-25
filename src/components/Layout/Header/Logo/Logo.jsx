import * as SC from './Logo.styled';
import logoIcon from 'images/logo-2.png';

export default function Logo({ click }) {
  return (
    <SC.LogoLink to="/" onClick={click}>
      <SC.LogoIcon src={logoIcon} />
    </SC.LogoLink>
  );
}
