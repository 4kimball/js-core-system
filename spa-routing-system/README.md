# SPA를 위한 Routing System	



### :last_quarter_moon_with_face: SPA

SPA(단일 페이지 어플리케이션)는 최초한 모든 리소스를 브라우저에 로드하여 이후에 특정 부분만 Ajax를 통해 데이터를 바인딩하는 방식이다. 기존의 웹 서비스는 새로운 페이지를 탐색하기 위해서 해당 페이지의 리소스를 서버에 요청해야 했다. 이 과정에서 렌더링이 늦어진다면 사용자는 빈 화면을 응시할 수 밖에 없을 것이며 모바일 이용이 늘어나면서 사용자의 경험을 고려하여 SPA가 탄생했다.



SPA를 구현하기 위해서는 `index.html` 파일에 Javascript, CSS, Image와 같은 리소스 파일들을 로드하여 페이지 이동 없이 특정영역에서 변경되는 부분만 새롭게 바인딩 될 수 있도록 한다.



### :last_quarter_moon_with_face: Browser History VS Hash History

