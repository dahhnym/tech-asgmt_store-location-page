import { useRouter } from 'next/router';
import React from 'react';
import Navigation from './Navigation';
import styled from '@emotion/styled';

export const Layout = ({ children }: any) => {
  const router = useRouter();
  let title = '';
  if (router.pathname === '/location') {
    title = '매장안내';
  } else {
    title = '';
  }

  return (
    <div>
      <Navigation />
      <Title>{title}</Title>
      <Container>{children}</Container>
    </div>
  );
};

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  margin-top: 3.75rem;
`;

const Container = styled.main`
  max-width: 1280px;
  margin: auto;
`;
