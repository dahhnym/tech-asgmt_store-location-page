import styled from '@emotion/styled';
import Image from 'next/image';
import Logo from './../../../../public/ala_logo.png';
import { COPYRIGHT } from '../../../../constants/Footer';

const CompanyInfoSection = () => {
  return (
    <Section>
      <h2 className="a11y-hidden">사업자정보</h2>
      <div className="container-wrapper">
        <dl>
          <div>
            <dt>카페드유라 대표이사 :</dt>
            <dd>조현주</dd>
          </div>
          <div>
            <dt>주소</dt>
            <dd>경기도 용인시 수지구 대지로 15번길 88-1 (죽전동, 파인창고)</dd>
          </div>
          <div className="contact">
            <div>
              <dt>TEL : </dt>
              <dd>031.272.2126</dd>
            </div>
            <div>
              <dt>&nbsp;FAX : </dt>
              <dd>031.272.2161</dd>
            </div>
          </div>
          <div>
            <dt>사업자등록번호 : </dt>
            <dd>220-07-90070</dd>
          </div>
          <div>
            <dt>통신판매번호 : </dt>
            <dd>제2013-용인수지-00107호</dd>
          </div>
        </dl>
        <CopyrightContainer>
          <Image src={Logo} width={160} height={36} alt="" />
          <p>{COPYRIGHT}</p>
        </CopyrightContainer>
      </div>
    </Section>
  );
};

export default CompanyInfoSection;

const Section = styled.section`
  height: 165px;
  font-size: 0.875rem;
  dl > div {
    display: flex;
  }
  div.container-wrapper {
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
