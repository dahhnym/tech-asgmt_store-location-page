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
        <ul>
          {CUSTOMER_SERVICE.map(content => {
            return (
              <li key={content.ID}>
                <FooterCard {...content} />
              </li>
            );
          })}
        </ul>
      </CSSection>
      <section>
        <h2 className="a11y-hidden">이용약관 및 SNS</h2>
        <ul>
          <li>회사소개</li>
          <li>이용약관</li>
          <li>개인정보처리방침</li>
          <li>멤버십 약관</li>
          <li>공지사항</li>
          <li>고객센터</li>
        </ul>
        <ul>
          <li>네이버블로그</li>
          <li>페이스북</li>
          <li>인스타</li>
        </ul>
      </section>
      <section>
        <h2 className="a11y-hidden">사업자정보</h2>
        <dl>
          <dt></dt>
          <dd></dd>
        </dl>
        <div>
          <Image src={Logo} width={100} height={30} alt="" />
          <p>CAFE de JuRA all rights reserved.</p>
        </div>
      </section>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  border: solid 1px red;
  margin-top: 150px;
  @media screen and (max-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    margin-top: 52px;
  }
`;

const CSSection = styled.section`
  & > ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: ${CONTENT_MAX_WIDTH};
    margin: 0 auto;
    & > li {
      padding: 1rem;
    }
  }
`;
