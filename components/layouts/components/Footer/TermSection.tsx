import { FOOTER_TERMS } from '../../../../constants/Footer';
import styled from '@emotion/styled';

const TermSection = () => {
  return (
    <Section>
      <h2 className="a11y-hidden">이용약관 및 회사SNS</h2>
      <div className="container-wrapper">
        <ul className="container_terms">
          <li>{FOOTER_TERMS.ITEM_1}</li>
          <li>{FOOTER_TERMS.ITEM_2}</li>
          <li>{FOOTER_TERMS.ITEM_3}</li>
          <li>{FOOTER_TERMS.ITEM_4}</li>
          <li>{FOOTER_TERMS.ITEM_5}</li>
          <li>{FOOTER_TERMS.ITEM_6}</li>
        </ul>
        <ul className="container_sns">
          <li>네이버블로그</li>
          <li>페이스북</li>
          <li>인스타</li>
          <li>유튜브</li>
        </ul>
      </div>
    </Section>
  );
};

export default TermSection;

const Section = styled.section`
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
