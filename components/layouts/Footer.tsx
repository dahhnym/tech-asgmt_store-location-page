import CompanyInfoSection from './components/Footer/CompanyInfoSection';
import CSSection from './components/Footer/CSSection';
import TermSection from './components/Footer/TermSection';
import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT, CONTENT_MAX_WIDTH } from '../../constants';

const Footer = () => {
  return (
    <Container>
      <CSSection />
      <TermSection />
      <CompanyInfoSection />
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  margin-top: 150px;
  @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    margin-top: 52px;
  }
  .container-wrapper {
    max-width: ${CONTENT_MAX_WIDTH};
    margin: 0 auto;
  }
`;
