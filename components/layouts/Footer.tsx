import Image from 'next/image';
import {
  COPYRIGHT,
  CUSTOMER_SERVICE,
  FOOTER_TERMS,
} from '../../constants/Footer';
import Logo from './../../public/ala_logo.png';
import FooterCard from './FooterCard';
import * as S from './Footer.style';

const Footer = () => {
  return (
    <S.Container>
      <S.CSSection>
        <h2 className="a11y-hidden">고객지원 서비스</h2>
        <S.UlElement>
          {CUSTOMER_SERVICE.map(content => {
            return (
              <li key={content.ID}>
                <FooterCard {...content} />
              </li>
            );
          })}
        </S.UlElement>
      </S.CSSection>
      <S.TermSection>
        <h2 className="a11y-hidden">이용약관 및 회사SNS</h2>
        <S.MaxWidthContainer className="container-wrapper">
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
        </S.MaxWidthContainer>
      </S.TermSection>
      <S.CompanyInfoSection>
        <h2 className="a11y-hidden">사업자정보</h2>
        <S.MaxWidthContainer className="wrapper">
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
          <S.CopyrightContainer>
            <Image src={Logo} width={160} height={36} alt="" />
            <p>{COPYRIGHT}</p>
          </S.CopyrightContainer>
        </S.MaxWidthContainer>
      </S.CompanyInfoSection>
    </S.Container>
  );
};

export default Footer;
