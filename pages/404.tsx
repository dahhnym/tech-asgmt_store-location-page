import styled from '@emotion/styled';

const NotFoundPage = () => {
  return <Container>요청하신 페이지를 찾을 수 없습니다.</Container>;
};

export default NotFoundPage;

const Container = styled.div`
  font-size: 1.4rem;
  font-weight: bold;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
