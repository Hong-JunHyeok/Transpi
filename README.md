# Transpi

카카오 번역 API를 사용한 번역 웹 애플리케이션

# 프로젝트 링크

[링크](https://hong-junhyeok.github.io/Transpi/)

# 완성된 모습

![image](https://user-images.githubusercontent.com/48292190/107934891-f5518b80-6fc3-11eb-8a4b-8916494d99d9.png)

# 추가된 기능

-   (언어 토글) - 2021-02-16
    ![image](https://user-images.githubusercontent.com/48292190/108014480-52475300-7051-11eb-8d68-742e6eada14f.png)

-   (언어 토글 개선) - 2021-02-16
    textarea의 값도 함께 변경되도록 개선하였습니다.

# API사용

```javascript

번역 API의 양식은
`https://dapi.kakao.com/v2/translation/translate?src_lang=${바뀔 언어}&target_lang=${바꿀 언어}&query=${바뀔 언어의 텍스트}`
이렇게 됩니다.

그리고 GET 요청을 할떄 header에는

"key" : "Authorization"
"value" : `KakaoAK ${발급받은 REST API KEY}`
이렇게 요청을 하시면 됩니다.

src_lang , target_lang , query모두 require value이므로 공백이 와서는 안됩니다.

```

# 사용 기술 스택

![React](https://img.shields.io/badge/-React-blue)
![Styled-component](https://img.shields.io/badge/-Styled--components-red)
![Kakao API](https://img.shields.io/badge/-Kakao%20API-yellow)
![Axios](https://img.shields.io/badge/-axios-lightgrey)
![prop-types](https://img.shields.io/badge/-prop--types-blue)

# 느낀 점

맨날 JsonPlaceholder라는 걸로 fetch연습을 해왔었는데, 이번에 카카오에서 만든 번역API를 사용해보면서, 뭔가 "만든다는" 느낌이 들었다.
그리고 styled-components의 사용법을 어느정도 감을 잡은것 같고, 스타일링에 대한 자신감이 높아졌다.(외부 자료 한 개도 안보고 개발한 내가 너무 자랑스럽다!)

여기서 멈추지 않고, 카카오의 음성인식 API를 써서, 내가 만든 프로젝트에 도입할 예정이다.

완성도가 높은 느낌이 있어서 굉장히 만족스러운 프로젝트중 하나였다.
