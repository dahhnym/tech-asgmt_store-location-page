import Image from 'next/image';
import LogoImage from './../../../../public/ala_logo.png';
import styled from '@emotion/styled';

const Logo = () => {
  return (
    <Container>
      <Image
        src={LogoImage}
        fill={true}
        sizes="(max-width: 768px) 90vw"
        alt="알라카르테"
      />
    </Container>
  );
};

export default Logo;

const Container = styled.div`
  position: relative; // Image 컴포넌트의 fill 속성 사용하기 위해 설정
  min-width: 124px;
  height: 28px;
`;
