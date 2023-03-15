# 0314num

# React Image

**리액트 이미지 넣는 방법**

1. **src 폴더**
- css에서 background-image

```jsx
.back {
  height: 500px;
  background-image: url(./toy.jpg);
}
```

- html 태그에서 style

```jsx
style = {{backgroundImage: url() }}
```

1. import 작명 from ‘이미지 경로’; (import 문법) 작명된 이름으로 자유롭게 html 내에서 가져다 쓸 수 있다.
    
    ```jsx
    import back from './toy.jpg'
    ```
    
2. url(작명) / 작명한 이름도 하나의 변수 / 자바스크립트에서 문자열 사이에 변수 집어넣고 싶을 때는 문자와 변수를 분리 해준다. **(+기호, 백틱 사용)**
    
    ```jsx
    <div style={{backgroundImage : 'url(' + back + ')', height : '400px'}}></div>
    <div style={{backgroundImage :` url(${back})`, height : '400px'}}></div>
    ```
    
3. src 안에 있는 img를 html에서 가져다 쓸 때는 import 후 그 변수 이름으로 작성
    
    ```jsx
    <img src={back} alt="" />
    ```
    
- 로컬 폴더에 있는게 아니라 외부에 있는 이미지를 사용하고 싶을때는 절대주소 넣으면 됨.
    
    ```jsx
    <div style={{backgroundImage : 'url(https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_FMjpg_UX1000_.jpg)', height : '300px'}}></div>
    <img src="https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_FMjpg_UX1000_.jpg" alt="" />
    ```
    

1. **public 폴더**
    
    리액트 코드를 다 짜고 사이트를  발행할 때, src에 있는 소스코드를 그대로 가져다 쓰는 게 아니라, 이 코드들을 한 파일로 압축한다. (⇒ **bundling**) 하지만 public 폴더 안에 있는 것들은 압축되지 않음. 
    
    **public 폴더 사용시 주의점 :** 나중에 사이트를 발행할 때, [www.naver.com](http://www.naver.com) 메인 페이지에서는 상관 없는데, 서브 페이지에 발행 할 때는 이미지 경로를 잘 찾아오지 못할 수 도 있음.
    
    [Getting Started | Create React App](https://create-react-app.dev/docs/getting-started)
    
    공식 사이트에서 권장하는 public 폴더에서 이미지 사용하는 방법!
    
    - 내 사이트의 현재 경로를 의미
