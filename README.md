# js-study202307

- 태그 감싸기 crtl + shift + p    => 약어로 래핑 => .wrap과 같은 클래스지정


### ajax 실습시 JSON Server 설치(가상 Rest Api)
```shell script
$ mkdir json-fake-server && cd json-fake-server
$ npm init -y
$ npm install json-server -D
```

- package.json에 추가
```json
"scripts": {
    "start": "json-server --watch db.json --port 5000"    
  },
```
`$ npm start`로 서버실행

—