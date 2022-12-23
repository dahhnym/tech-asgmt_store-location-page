import * as S from './../header.style';
import Image from 'next/image';
import Logo from './../../public/assets/ala_logo.png';

const Navigation = () => {
  return (
    <S.Header>
      <S.ImgContainer>
        <Image
          src={Logo}
          fill={true}
          sizes="(max-width: 768px) 90vw"
          alt="알라카르테"
        />
      </S.ImgContainer>
      <S.Nav>
        <ul>
          <li>About</li>
          <li>유라</li>
          <li>알라카르테</li>
          <li>공지사항</li>
          <li>멤버십</li>
          <li>장바구니</li>
          <li>나의계정</li>
        </ul>
      </S.Nav>
    </S.Header>
  );
};

export default Navigation;
