import { CUSTOMER_SERVICE } from '../../../../constants/Footer';
import FooterCard from './FooterCard';
import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from '../../../../constants';

const CSSection = () => {
  return (
    <Section>
      <h2 className="a11y-hidden">고객지원 서비스</h2>
      <ul className="container-wrapper">
        {CUSTOMER_SERVICE.map(content => {
          return (
            <li key={content.ID}>
              <FooterCard {...content} />
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default CSSection;

const Section = styled.section`
  padding-bottom: 50px;
  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 0 auto;
    li {
      padding: 1rem;
    }
  }
  @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    padding-bottom: 25px;
    ul li {
      text-align: center;
      padding: 0;
    }
  }
`;
