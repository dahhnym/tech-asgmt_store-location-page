import styled from '@emotion/styled';
import Image from 'next/image';
import { CONTENT_MAX_WIDTH, MEDIA_QUERY_END_POINT } from '../../constants';
import { CUSTOMER_SERVICE } from '../../constants/Footer';
import Logo from './../../public/ala_logo.png';
import FooterCard from './FooterCard';

const Footer = () => {
  return (
    <Container>
      <CSSection>
        <h2 className="a11y-hidden">고객지원 서비스</h2>
        <UlElement>
          {CUSTOMER_SERVICE.map(content => {
            return (
              <li key={content.ID}>
                <FooterCard {...content} />
              </li>
            );
          })}
        </UlElement>
      </CSSection>
      <TermSection>
        <h2 className="a11y-hidden">이용약관 및 회사SNS</h2>
        <MaxWidthContainer className="container-wrapper">
          <ul className="container_terms">
            <li>회사소개</li>
            <li>이용약관</li>
            <li>개인정보처리방침</li>
            <li>멤버십 약관</li>
            <li>공지사항</li>
            <li>고객센터</li>
          </ul>
          <ul className="container_sns">
            <li>네이버블로그</li>
            <li>페이스북</li>
            <li>인스타</li>
            <li>유튜브</li>
          </ul>
        </MaxWidthContainer>
      </TermSection>
      <CompanyInfoSection>
        <h2 className="a11y-hidden">사업자정보</h2>
        <MaxWidthContainer className="wrapper">
          <dl>
            <div>
              <dt>카페드유라 대표이사 :</dt>
              <dd>조현주</dd>
            </div>
            <div>
              <dt>주소</dt>
              <dd>
                경기도 용인시 수지구 대지로 15번길 88-1 (죽전동, 파인창고)
              </dd>
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
            <p>&copy; CAFE de JuRA all rights reserved.</p>
          </CopyrightContainer>
        </MaxWidthContainer>
      </CompanyInfoSection>
    </Container>
  );
};

export default Footer;

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
