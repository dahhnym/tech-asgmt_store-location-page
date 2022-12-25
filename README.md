# 프론트엔드 기술과제 - 매장안내 페이지

> ## 목차<br>
>
> - [기간](#기간)
> - [사용기술](#사용기술)
> - [실행방법](#실행방법)
> - [접속 URL](#접속-url)
> - [디렉토리 구조](#디렉토리-구조)
> - [요구사항](#요구사항)
> - [주요기능](#주요기능)
> - [트러블슈팅](#트러블슈팅)
> - [데모](#데모)

## 기간

2022-12-23 ~ 2022-12-26

## 사용기술

- Next.js 13.1.0
- TypeScript 4.9.4
- Emotion
- Axios
- SWR

## 실행방법

```
$ git clone https://github.com/dahhnym/tech-asgmt_store-location-page.git
$ npm install
$ node server.js // 서버 실행
$ npm run dev
```

## 접속 URL

http://localhost:3000/location

## 디렉토리 구조

```
 ┣ 📂components
 ┃ ┣ 📂layouts
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┃ ┃ ┣ CompanyInfoSection.tsx
 ┃ ┃ ┃ ┃ ┣ CSSection.tsx
 ┃ ┃ ┃ ┃ ┣ FooterCard.tsx
 ┃ ┃ ┃ ┃ ┣ SnsMenu.tsx
 ┃ ┃ ┃ ┃ ┗ TermSection.tsx
 ┃ ┃ ┃ ┣ 📂Layout
 ┃ ┃ ┃ ┃ ┗ Title.tsx
 ┃ ┃ ┃ ┗ 📂Navigation
 ┃ ┃ ┃ ┃ ┣ IconMenu.tsx
 ┃ ┃ ┃ ┃ ┣ Logo.tsx
 ┃ ┃ ┃ ┃ ┗ MainMenu.tsx
 ┃ ┃ ┣ Footer.tsx
 ┃ ┃ ┣ Layout.tsx
 ┃ ┃ ┣ Navigation.style.ts
 ┃ ┃ ┗ Navigation.tsx
 ┃ ┗ 📂location
 ┃ ┃ ┣ FilterButton.tsx
 ┃ ┃ ┣ LocationNavTab.style.ts
 ┃ ┃ ┣ LocationNavTab.tsx
 ┃ ┃ ┣ NavControl.tsx
 ┃ ┃ ┣ StoreCard.style.ts
 ┃ ┃ ┗ StoreCard.tsx
 ┣ 📂constants
 ┃ ┣ Footer.ts
 ┃ ┣ Gnb.ts
 ┃ ┗ index.ts
 ┣ 📂hooks
 ┃ ┗ useStoreData.ts
 ┣ 📂pages
 ┃ ┣ 📂location
 ┃ ┃ ┗ index.tsx
 ┃ ┣ 404.tsx
 ┃ ┣ index.tsx
 ┃ ┣ _app.tsx
 ┃ ┗ _document.tsx
 ┣ 📂public
 ┃ ┣ 📂icon
 ┃ ┣ ala_logo.png
 ┃ ┗ favicon.ico
 ┣ 📂styles
 ┃ ┣ global.css
 ┃ ┗ reset.css
 ┣ 📂utils
 ┃ ┗ fetchers.ts
 ┣ .eslintrc.json
 ┣ .prettierrc
 ┣ next-env.d.ts
 ┣ next.config.js
 ┣ package.json
 ┣ server.js
 ┗ tsconfig.json
```

## 요구사항

- [x] API에서 매장 정보 불러오기
- [x] 매장 이미지, 매장명, 매장 주소, 매장 전화번호 표시
- [x] 지역별 매장 탭 구현
- [x] 모바일 대응 반응형 디자인 적용 (모바일 화면 너비 768px)
- [x] header, footer 구현
- [x] 필터 구현

## 주요기능

### SWR 이용하여 데이터 가져오기

**useSWR** <br>

- 클라이언트 사이드에서 data fetching 하는데 최적화되어있는 리액트훅 라이브러리
- 기본적으로 loading, error, data 상태를 반환해서 쉽게 API 요청응답 상태에 따라 로직 처리를 할 수 있다.
- SWR의 고유한 키를 갖고 있고 키를 캐싱해서 공유하여 자동으로 API 중복 요청을 하지 않게 한다.
- 네트워크 연결이 끊어졌다가 다시 연결되거나 브라우저 탭을 스위치했을때 자동으로 refetch를 한다.

**지역별 매장 데이터 보여주기** <br>
filter를 이용해 유저가 클릭한 탭의 지역이름과 동일한 데이터만 `filteredData`에 담아 map을 사용해 `StoreCard` 컴포넌트를 렌더링함으로서 지역별 매장만 표시<br>
https://github.com/dahhnym/tech-asgmt_store-location-page/blob/533005acceaa1098a5dc7b7e77288f53e7105a26/pages/location/index.tsx#L24-L37

https://github.com/dahhnym/tech-asgmt_store-location-page/blob/533005acceaa1098a5dc7b7e77288f53e7105a26/pages/location/index.tsx#L48-L55

### 필터 하단 탭 UI 구현

리액트 `createPortal` 이용. html 문서의 상단에 필터 하단 탭을 렌더링할 div를 만들고 브라우저 width가 모바일 스크린 사이즈(768px) 이하일 경우 해당 div에 렌더<br>
https://github.com/dahhnym/tech-asgmt_store-location-page/blob/533005acceaa1098a5dc7b7e77288f53e7105a26/pages/_document.tsx#L12-L16

https://github.com/dahhnym/tech-asgmt_store-location-page/blob/533005acceaa1098a5dc7b7e77288f53e7105a26/components/location/LocationNavTab.tsx#L88-L96

## 트러블슈팅

### CORS 이슈

**문제상황**

서버 요청은 포트넘버 4000, 클라이언트는 포트넘버 3000으로 사용 중에 CORS 이슈 발생
![Untitled](https://user-images.githubusercontent.com/74545780/209484697-8eaebc3b-d9c2-497a-ae6d-5c234775be92.png)

**CORS(Cross-Origin Resource Sharing)**

다른 출처의 리소스를 공유할 수 있는 것, SOP(Same Origin Policy)에서 허용하는 출처를 설정한다.

- 여기서 출처란 프로토콜(http, https), host(domain), port를 의미. 하나라도 다르면 다른 출처로 인식한다

서버에서 Origin Allow에 클라이언트에서 보내는 출처를 추가해야하지만 서버측에서 이러한 해결 불가능할 경우, 클라이언트 측에서 프록시 서버 설정하여 해결가능

**해결방법**

Next.js에서 제공하는 기능인 [Rewrites](https://nextjs.org/docs/api-reference/next.config.js/rewrites) 사용하여 해결 <br>
Rewrites는 proxy 처럼 기능한다.

https://github.com/dahhnym/tech-asgmt_store-location-page/blob/533005acceaa1098a5dc7b7e77288f53e7105a26/next.config.js#L6-L13

## 데모

### 데스크탑

|                                                            전체 페이지                                                            |
| :-------------------------------------------------------------------------------------------------------------------------------: |
| ![desktop-view_compressed](https://user-images.githubusercontent.com/74545780/209479820-e414ba9e-4b81-47cc-bed4-a09d2cc631ca.gif) |

|                                                   지역별 매장 탭                                                    |
| :-----------------------------------------------------------------------------------------------------------------: |
| ![store-tab](https://user-images.githubusercontent.com/74545780/209479844-b40d223b-a733-46a1-86fd-7e72b99f62f3.gif) |

### 모바일

|                                                             전체페이지                                                              |                                                         지역별 매장 필터                                                          |
| :---------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------: |
| ![responsive_compressed_cut](https://user-images.githubusercontent.com/74545780/209480069-57a38237-60fc-46ca-bc98-47a3217dd299.gif) | <img src="https://user-images.githubusercontent.com/74545780/209480070-22112662-900b-4f70-807b-9ca238f64f0c.gif" width="400px" /> |
