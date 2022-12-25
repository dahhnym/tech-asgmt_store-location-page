import { FOOTER_TERMS } from '../../../../constants/Footer';
import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from '../../../../constants';
import SnsMenu from './SnsMenu';

const TermSection = () => {
  return (
    <Section>
      <h2 className="a11y-hidden">이용약관 및 회사SNS</h2>
      <div className="container-wrapper">
        <ul className="container_terms">
          <li className="hidden-in-mobile-view">{FOOTER_TERMS.ITEM_1}</li>
          <li>{FOOTER_TERMS.ITEM_2}</li>
          <li>{FOOTER_TERMS.ITEM_3}</li>
          <li>{FOOTER_TERMS.ITEM_4}</li>
          <li>{FOOTER_TERMS.ITEM_5}</li>
          <li>{FOOTER_TERMS.ITEM_6}</li>
        </ul>
        <SnsMenu />
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
      @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
        font-weight: normal;
        font-size: 0.7rem;
        text-align: center;
      }
    }
  }
  div.container-wrapper {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    height: 100%;
    align-items: center;
    @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
      justify-content: center;
    }
  }
  ul.container_terms {
    grid-template-columns: repeat(6, 1fr);
    @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
      grid-template-columns: repeat(5, 1fr);
    }
  }
  ul.container_sns {
    grid-template-columns: repeat(4, 1fr);
  }
  .hidden-in-mobile-view {
    @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
      display: none;
    }
  }
  @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    height: 45px;
  }
`;
