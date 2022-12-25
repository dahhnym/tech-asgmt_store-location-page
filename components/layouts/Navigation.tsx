import Link from 'next/link';
import * as S from './Navigation.style';
import Logo from './components/Navigation/Logo';
import MainMenu from './components/Navigation/MainMenu';
import IconMenu from './components/Navigation/IconMenu';

const Navigation = () => {
  return (
    <S.Header>
      <Link href="/">
        <Logo />
      </Link>
      <S.Nav>
        <MainMenu />
        <IconMenu />
      </S.Nav>
    </S.Header>
  );
};

export default Navigation;
