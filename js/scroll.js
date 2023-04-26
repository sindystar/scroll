const sections = document.querySelectorAll("section");
const lis = document.querySelectorAll("ul li");
let posArr = [];
const base = -200;

//section의 갯수 만큼 반복을 돌면서 해당 section 의 세로 위치값을 전역 변수 배열에 저장 
for (let el of sections) posArr.push(el.offsetTop);


//브라우저 스크롤시 버튼 활성화 
window.addEventListener("scroll", ()=> {
  let scroll = window.scrollY || window.pageYOffset;

  sections.forEach((el, index) => {
    //모든 박스의 세로 위치 영역에 공통 버튼, 박스 활성화   
    if (scroll >= posArr[index] + base) {
      for (let num=0; num<sections.length; num++) {
        lis[num].classList.remove("on");
        sections[num].classList.remove("on");
      } 
      lis[index].classList.add('on');
      sections[index].classList.add("on");
      //el.classList.add("on");
    }
  })

  //4번째 스크롤 박스 영역의 커스텀
  if(scroll >= posArr[3]) {
    //기본 스크롤 값에 현재 박스의 offsetTop값을 뺀 값을 cScroll에 저장 
    //scroll은 박스 4영역에 스크롤이 도달 하면서 다시 0부터 증가 되는 스크롤 값
    let cScroll  = scroll - posArr[3];

    //해당 4배 빠르게 증가 시켜서 선이 그어지는 속도를 4배 빠르게 처리
    cScroll = cScroll*4;

    if(cScroll>=2040) cScroll= 2040;

    //해당 패스에서 기존 offsetTop에서 cScroll값을 빼서 스크롤 내릴수록 선이 그어짐

    const path = sections[3].querySelector("path");
    path.style.strokeDashoffset = 2040 - cScroll;

    //스크롤이 해당 박스 영역을 벗어 나면 
    }else {
      //다시 패스를 찾아서 
      const path = sections[3].querySelector("path");
      // 패스의 strokeDashoffset값을 2040으로 고정해서 선을 사라지게 만듬
      // 이렇게 하지 않으면 스크롤 이벤트 빨리 발생을 할때 scroll값이 조금씩 누락이 되서 
      // 약간의 잔선들이 지저분하게 남으므로 강제로 스타일로 제거 
      path.style.strokeDashoffset = 2040;
    }
});

//버튼 클릭시 세로 스크롤 이동
lis.forEach((li, index) => {
  li.addEventListener("click", e => {
    new Anim(window, {
      prop: "scroll",
      value: posArr[index],
      duration: 500
    })
  })
})

