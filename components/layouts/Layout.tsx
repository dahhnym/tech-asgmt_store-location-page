import React from 'react';
import Navigation from './Navigation';
import styled from '@emotion/styled';
import Footer from './Footer';
import { MEDIA_QUERY_END_POINT } from '../../constants';
import Title from './components/Layout/Title';

export const Layout = ({ children }: any) => {
  return (
    <Container>
      <Navigation />
      <Title />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  min-width: 390px;
  button {
    display: none;
    @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
      display: block;
    }
  }
`;

const ContentContainer = styled.main`
  max-width: 1280px;
  margin: auto;
  padding: 0 2rem;
  @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    pading: 0 0.5rem;
  }
`;
