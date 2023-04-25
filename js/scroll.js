const sections = document.querySelectorAll("section");
const lis = document.querySelectorAll("ul li");
let posArr = [];//빈배열을 만듦
const base = -500;
//offsetTop - 해당 요소의 세로 위치값, 요소의 윗면 경계가 최상위 요소의 윗면 경계(브라우저 화면의 맨위)에서 얼만큼 떨어져 있는지를 그 거리를 반환 해줌 
for (let el of sections) {
  posArr.push(el.offsetTop);
}

//posArr = [0, 1000, 1700, 2600]
window.addEventListener("scroll", ()=> {
  let scroll = window.scrollY || window.pageYOffset;

  sections.forEach((el, index) => {
    if (scroll >= posArr[index] + base) {
      // for (let el of lis) el.classList.remove("on");
      // lis[index].classList.add("on");

      // 모든 li, section을 비활성화 
      lis.forEach((el, index) => {
        el.classList.remove("on");
        sections[index].classList.remove("on");
      })
      //해당 순번의 li와 section을 활성화 
      lis[index].classList.add('on');
      sections[index].classList.add("on");
      //el.classList.add("on");
    }
  })

  
 
  })
  


//ul li 를 클릭 하면 해당 순번의 section 으로 이동 
//이쪽은 클릭으로 스크롤을 이동 시키는 쪽 

lis.forEach((el, index) => {
  el.addEventListener("click", (e) => {
    new Anim(window, {
      prop: "scroll",
      value: posArr[index],
      duration: 500,
    });

    Active(lis, index);
    //모든 버튼을 반복을 돌면서 on을 제거하여 비활성화 
    for (let el of lis) el.classList.remove("on");
    //클릭한 버튼만 on을 추가 하여 활성화 
    el.classList.add("on");
    //e.currentTarget.classList.add("on")
  })
})

// function active(arr, index) {
//   for (let el of arr) el.classList.remove("on");
//   arr[index].classList.add("on");
// }
