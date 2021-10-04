# Webpack 개념잡기



### Webpack 이전

Webpack이 등장하기 전에는 어떠한 상황이었는지 알면 Webpack을 이해하는데 많은 도움이 된다. 

웹 페이지를 개발하기 위해 HTML 태그에 `<script>` 태그를 추가하여 Javascript 코드를 불러왔다. 하지만 이렇게 불러온 Javascript 코드는 같은 스코프를 공유하기 때문에 다른 파일에서 선언한 변수끼리 겹치는 상황이 발생한다. 

이를 해결하기 위해 모듈이 등장하였고 **CommonJS**와 **AMD**를 통해 모듈을 구현하였다. 특히 ES6에서는 `import`, `export`와 같은 모듈의 개념이 표준화 되었다. 이렇게 모듈이 등장하면서 웹 페이지를 로딩하기 위해 많은 수의 파일을 요청해야 했지만 하나의 파일을 요청하면서 성능이 개선되었다.

또한 Javascript 코드가 최신 버전의 브라우저에서만 유효할 수 있으며 구버전의 브라우저에서는 동작하지 않는 문제가 생길 수 있었다. 

위와 같은 문제들을 해결하기 위해 Webpack과 같은 `Package Bundler`가 등장하였다.



### Webpack 설치 및 Build

- 먼저 Webpack을 설치한다.
- `-y`는 `npm init`을 했을 때 설정해야되는 부분을 모두 `yes`로 하는 옵션이다.
- `-D` 또는 `--save-dev`는 개발환경과 관련된 dependency에 추가하는 옵션이다.

```shell
npm init -y
npm install -D webpack webpack-cli
```



### config를 통한 Build

- `webpack.config.js` 를 통해 build
