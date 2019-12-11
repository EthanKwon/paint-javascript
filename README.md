# :art: paint-javascript

painting App을 통해 Javascript 기초 복습!

### :tv: 참고 영상 : 바닐라 JS로 게임 만들기 (Nomad Coders - 노마드 코더)

### :date: 공부 기간 : 19. 12. 10

---

### Paint UI (19. 12. 10)

### Paint Drawing (19. 12. 10)

1. **Drawing Event** 설정하기 
    - **canvas** element를 통해 element안에 pixel 들을 다룰 수 있는 기능 제공
    - js파일에서 **canvas**가 얼마만큼의 pixel을 다룰 수 있는지 명시해 주어야 함.
    - **context strokeStyle**을 통해서 색을 지정할 수 있다.
    - **context lineWidth**를 통해 선의 두께를 지정 할 수 있다.
    - **context beginPath**를 통해 새로운 시작시점을 만든다.(변수생성 후 초기화 하지 않는 것 과 같음)
    - **context moveTo**를 통해 시작지점에 값을 넣어 준다. (beginPath로 생성된 시작지점에 해당 값을 넣어준다.)
    - 계속 새로운 beginPath를 만들면서 이전 값는 사라지고 마우스가 움직일 때 마다 새로운 시작지점을 만든다. ( 사용하지 않은 값은 사라진다.)
    - **context lineTo**를 통해 시작지점부터 현재 값 까지 라인을 선으로 잇는다.(선만 연결 했을 뿐, 색과 두께를 입히지 않음)
    - **context stroke**를 통해 이어진 선에 색과 두께를 입힌다. (stroke가 선언 됬을 때 비로소 선이 보이게 된다.)
    - 계속 새로운 lineTo를 선언하면서 짧은 직선을 통해 이어지는 선을 만들어 하나의 선으로 보이게 된다.
    - **addEventListener** 를 통해 canvas에 마우스 이벤트를 추가하기

2. **Stroke Color** 설정하기 
    - **Array.from**을 통해 Color element 객체를 배열로 변환 해준다.
    - Color element별 이벤트 리스너를 통해 **click**시 stroke의 색상을 변경시켜 준다.
