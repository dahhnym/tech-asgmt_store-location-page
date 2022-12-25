import styled from '@emotion/styled';
import React from 'react';
import Link from 'next/link';

type Props = {
  ID: number;
  TITLE: string;
  CONTACT?: string;
  DESC_1: string;
  DESC_2?: string;
};

const FooterCard: React.FC<Props> = content => {
  return (
    <Card>
      <div>
        <h3>{content.TITLE}</h3>
        {content.CONTACT && <p>{content.CONTACT}</p>}
        <p>{content.DESC_1}</p>
        {content.DESC_2 && <p>{content.DESC_2}</p>}
      </div>
      {content.ID !== 1 && <Link href="/location">자세히 보기 →</Link>}
    </Card>
  );
};

export default FooterCard;

const Card = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  h3 {
    font-size: 1.125rem;
    font-weight: 900;
    margin-bottom: 18px;
  }
  p {
    font-size: 0.875rem;
  }
  a {
    font-size: 0.875rem;
    font-weight: 900;
    margin-top: 0.7rem;
  }
`;
