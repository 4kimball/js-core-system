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

- `webpack.config.js` 파일을 통해 build에 필요한 요소들을 나열하고 해당 설정들을 통해 build가 진행될 수 있도록 할 수 있다.
- 결론적으로 `webpack.config.js`를 통해 자동으로 번들화 과정을 진행할 수 있다.
- 기본적인 구성은 다음과 같다.

```javascript
const { resolve } = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist')
    }
}
```

- `entry` : build의 대상이 될 파일을 의미한다.
- `output` : build 결과를 저장할 경로를 의미한다.



### Webpack의 구성요소



#### :rocket:Entry

- entry는 webpack에서 웹의 자원들을 변환하기 위해 필요한 최초 진입점이 된다.
- entry에 정의한 파일에는 다음처럼 구성할 수 있다.

```javascript
// ~/src/index.js

import Login from './Login.js';
import Home from './Home.js';

function init() {
    Login.init();
    Home.init();
}

init();
```

- 로그인과 홈 화면으로 구성된 싱글 페이지 애플리케이션이 있을 때 위와 같이 구성한다면 webpack을 실행했을 때 해당 파일들의 내용까지 해석하여 빌드한다.
- 위처럼 entry point가 한 개일 수도 있지만 여러 개가 될 수 있다. 여러개의 entry point가 존재할 때는 아래와 같이 구성할 수 있다.

```javascript
module.exports = {
    entry: {
        login: './src/Login.js',
        home: './src/Home.js'
    }
}
```



#### :rocket:Output

- output은 webpack으로 빌드 후에 생긴 결과물이 저장될 파일 경로를 의미한다.
- entry 속성과 다르게 객체 형태로 옵션을 추가해야 한다.
- 기본적으로 output은 다음과 같이 구성할 수 있다.

```javascript
import path = require('path');

module.exports = {
	output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    }   
}
```

- 먼저 `filename`속성은 webpack으로 빌드한 파일의 이름을 의미한다.
- `path` 속성은 build 후에 생성된 파일이 저장된 경로를 의미한다.
- 이때 `path.resolve()`는 인자로 넘어온 경로들을 유효한 파일 경로로 만들어주는 Node.js API다.
  - `output: './dist/bundle.js'`과 같다.
- **output에는 파일 이름에 옵션을 추가하 수 있다.**

```javascript
// 빌드 결과 파일 이름에 entry 속성을 포함하는 옵션
filename: '[name].js'

// 빌드 결과 파일 이름에 webpack 내부적으로 사용하는 ID를 포함하는 옵션
filename: '[id].bundle.js'

// 빌드를 할 때마다 고유 해시 값을 붙이는 옵션
filename: '[name].[hash].bundle.js'

// webpack의 각 모듈 내용을 기준으로 생성된 해시 값을 붙이는 옵션
filename: '[chunkhash].bundle.js'
```



#### :rocket:Loader

- loader는 자바스크립트가 아닌 파일(html, css, images 등)들을 변환할 수 있도록 도와주는 속성이다.
- 자바스크립트에서 import한 css 등의 파일을 해석하기 위해 해당 파일에 맞는 loader를 추가해야 한다.



#### :crescent_moon:CSS Loader

- `css`를 위해 `style-loader`와 `css-loader`를 사용한다. 따라서 npm을 통해 아래와 같이 설치를 진행한다.

```shell
npm install -D style-loader css-loader
```

- 이후 아래와 같이 `webpack.config.js`의 `module` 속성에 추가한다. 정규식 표현을 통해 loader가 인식될 파일을 잡아주고 어떠한 loader를 사용하는지 user에 정의한다.

```javascript
module.exports = {
    modele: {
        rules: [
            test: /\.css$/,
            use: [
            'style-loader',
            'css-loader'
        	]
        ]
    }
}
```



#### :crescent_moon:File Loader

- 이지미 파일 또는 폰트와 같은 파일 등을 위해 `file-loader`를 추가한다.

```shell
npm install -D file-loader
```

- 이후 아래와 같이 `webpack.config.js`의 `module`속성에 추가한다. 

```javascript
module.exports = {
    modele: {
        rules: [
            test: /\.(png|svg|jpe?g|gif)$/,
        	loader: 'file-loader'
        ]
    }
}
```

- css와 달리 `use`를 사용하지 않았는데 `use`는 여러 개의 loader를 사용할 때 쓰이며 한 개의 loader가 쓰일 때는 위와 같이 `loader` 속성을 사용할 수 있다.



#### :rocket:Plug In

- plug in은 webpack의 기본적인 동작에 추가적인 기능을 제공하는 속성이다. loader는 파일을 해석하고 변환하는 과정에 관여하지만 **plug in은 결과물의 형태를 변환하는 역할을 한다.**
- `plugins` 속성을 통해 정의할 수 있으며 배열 내에 생성자 함수로 생성한 객체 인스턴스만 추가할 수 있다.

```javascript
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.ProgressPlugin()
  ]
}
```

- `HtmlWebpackPlugIn` : 웹팩으로 빌드한 결과물로 HTML 파일을 생성해주는 플러그인이다.
- `ProgressPlugIn` : 웹팩의 빌드 진행율을 표시해주는 플러그인이다.
