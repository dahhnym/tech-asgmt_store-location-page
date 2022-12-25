import Image from 'next/image';
import Back from './../../../../public/icon/goback.svg';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from '../../../../constants';

const Title = () => {
  const router = useRouter();
  let title = '';
  if (router.pathname === '/location') {
    title = '매장안내';
  } else {
    title = '알라카르테';
  }
  return (
    <Wrapper>
      <button>
        <Image src={Back} width={25} height={25} alt="뒤로가기" />
      </button>
      <Heading>{title}</Heading>
    </Wrapper>
  );
};

export default Title;

const Wrapper = styled.div`
  position: relative;
  button {
    position: absolute;
    left: 1rem;
  }
`;

const Heading = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  margin: 3.75rem 0;
  @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    margin: 0;
    font-size: 1.5rem;
  }
`;
