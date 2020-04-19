# react-inflearn-reactjs-web
리액트 연습 (https://www.inflearn.com/course/reactjs-web)

# 알아야 할 내용
* 트랜스파일러 :: 리액트 코드를 자바스크립트 코드로 바꿔주는 툴. 트랜스포머 등등으로도 불림. (사용할 트랜스파일러 : 웹팩)

* 그러나 트랜스파일러를 사용하기엔 이 강의에서는 복잡하다고 하므로 Facebook의 'create react app'을 사용한다고 함 (https://github.com/facebook/create-react-app)

* this.props :: 부모 컴포넌트가 자식 컴포넌트에 정보를 주기 (ex. Movie의 title)

* propTypes :: props로 넘어오는 변수의 자료형을 지정해야할 때 사용 

* 컴포넌트 생명주기 (몇몇은 deprecated 되었으므러 주의해야함)

        // 렌더 생명주기
        // componentWillMount -> render -> componentDidMount
        
        // 업데이트 생명주기
        // componentWillReceiveProps -> shouldComponentUpdate ->
        // componentWillUpdate -> render -> componentDisUpdate

# 설치
* node.js 설치 (http://nodejs.org)
* \# npx create-react-app movie_app
* \# npm add prop-types