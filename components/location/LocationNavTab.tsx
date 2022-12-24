import * as S from './LocationNavTab.style';
import Link from 'next/link';

const LocationNavTab = () => {
  return (
    <S.Nav>
      <ul>
        <li>
          <Link href="">전체</Link>
        </li>
        <li>
          <Link href="">서울</Link>
        </li>
        <li>
          <Link href="" className="tab_link">
            경기
          </Link>
        </li>
        <li>
          <Link href="">대전/충청</Link>
        </li>
        <li>
          <Link href="">전라</Link>
        </li>
        <li>
          <Link href="">경상</Link>
        </li>
      </ul>
    </S.Nav>
  );
};

export default LocationNavTab;
