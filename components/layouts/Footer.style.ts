import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT, CONTENT_MAX_WIDTH } from '../../constants';

const Container = styled.footer`
  margin-top: 150px;
  @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    margin-top: 52px;
  }
`;

const MaxWidthContainer = styled.div`
  max-width: ${CONTENT_MAX_WIDTH};
  margin: 0 auto;
`;

const UlElement = MaxWidthContainer.withComponent('ul');

const CSSection = styled.section`
  padding-bottom: 50px;
  & > ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 auto;
    & > li {
      padding: 1rem;
    }
  }
`;

const TermSection = styled.section`
  height: 80px;
  background-color: #f5f5f5;
  ul {
    display: grid;
    gap: 1rem;
    li {
      font-weight: bold;
      font-size: 0.875rem;
    }
  }
  div.container-wrapper {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    height: 100%;
    align-items: center;
  }
  ul.container_terms {
    grid-template-columns: repeat(6, 1fr);
  }
  ul.container_sns {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const CompanyInfoSection = styled.section`
  height: 165px;
  font-size: 0.875rem;
  dl > div {
    display: flex;
  }
  div.wrapper {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }
  div.contact {
    display: flex;
    div {
      display: flex;
    }
  }
`;

const CopyrightContainer = styled.div`
  text-align: right;
  p {
    margin-top: 0.5rem;
    font-size: 0.875rem;
  }
`;

export {
  Container,
  MaxWidthContainer,
  UlElement,
  CSSection,
  TermSection,
  CompanyInfoSection,
  CopyrightContainer,
};
