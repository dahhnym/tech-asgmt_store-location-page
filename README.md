# 프론트엔드 기술과제 - 매장안내 페이지

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
