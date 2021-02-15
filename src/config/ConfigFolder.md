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
