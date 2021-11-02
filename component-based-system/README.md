# 컴포넌트 기반 개발

> [컴포넌트 기반 개발 참고](https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Component/#_2-%E1%84%8F%E1%85%A5%E1%86%B7%E1%84%91%E1%85%A9%E1%84%82%E1%85%A5%E1%86%AB%E1%84%90%E1%85%B3)



### :bulb:상태 관리

- `JSP`, `PHP`등이 주가 되어 웹 개발을 진행할 때에는 `Server Side`에서 웹 페이지를 만들어서 브라우저(클라이언트)에 전달을 하였다. 
- 이후 브라우저와 자바스크립트가 발전하면서 브라우저(클라이언트)에서 렌더링을 하는 `Client Side Rendering`이 주가 되었다.
- 이때 각각의 `DOM`들은 상태가 변경될 때에만 렌더링하도록 발전하였다. 
- 이 과정에서 `상태 관리`라는 개념이 탄생하였다.



### :bulb:컴포넌트

- React는 컴포넌트 기반으로 개발이 진행된다.
- 여기서 컴포넌트는 하나의 기능을 하는 독립적인 모듈이 된다
- [이 부븐은 조금 더 공부를 해봐야겠다.]

---



### :one: 상태에 따라 렌더링하기

> 상태가 업데이트 될 때마다 렌더링하는 것을 구현해보자.

- 먼저 HTML에는 아래와 같이 작성되어져 있다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Component</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="./app.js"></script>
  </body>
</html>
```

- `app.js`파일에 아래와 같이 코드를 작성하였다.

```javascript
const $app = document.querySelector("#app");

let state = {
  items: ["item1", "item2", "item3", "item4"],
};

const render = () => {
  const { items } = state;
  $app.innerHTML = `
    <ul>
    ${items.map((item) => `<li>${item}</li>`).join("")}
    </ul>
    <button id="append">추가</button>
  `;
  document.querySelector("#append").addEventListener("click", () => {
    setState({ items: [...items, `itesm${items.length + 1}`] });
  });
};

const setState = (newState) => {
  state = { ...state, ...newState };
  render();
};

window.onload = () => {
  render();
};
```

- `render`
  - render는 `div`태그에 요소들을 렌더링하는 역할을 한다.
  - 상태의 `items`에 있는 요소들을 렌더링하고 있다.
  - 이때 추가버튼을 누르면 item이 추가되어 `items`에 저장된다.
  - 이를 `setState`함수에 전달하여 상태를 변경한다.
- `setState`
  - 변경된 상태를 적용 후에
  - 다시 `render()`를 통해 렌더링한다.
  - 그렇다면 현재 상태를 기준으로 다시 렌더링하게 된다.