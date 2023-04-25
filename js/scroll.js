const sections = document.querySelectorAll("section");
const lis = document.querySelectorAll("ul li");
let posArr = [];//빈배열을 만듦
//offsetTop - 해당 요소의 세로 위치값, 요소의 윗면 경계가 최상위 요소의 윗면 경계(브라우저 화면의 맨위)에서 얼만큼 떨어져 있는지를 그 거리를 반환 해줌 
for (let el of sections) {
  posArr.push(el.offsetTop);
}

//posArr = [0, 1000, 1700, 2600]
window.addEventListener("scroll", ()=> {
  let scroll = window.scrollY || window.pageYOffset;

  // 섹션에 해당하는 버튼을 활성화 코드 
  // posArr[0] <= scroll < posArr[1]
  // if (scroll >= posArr[0] && scroll < posArr[1]) {
  //   for (let el of lis) el.classList.remove("on");
  //   lis[0].classList.add("on");
  // };
  // posArr[1]<= scroll <=posArr[2]
  // if (scroll >= posArr[1] && scroll< posArr[2]) {
  //   for (let el of lis) el.classList.remove("on");
  //   lis[1].classListadd("on");
  // };
  // posArr[2]<= scroll <=posArr[3]
  // if (scroll >= posArr[2] && scroll < posArr[3]) {
  //   for (let el of lis) el.classList.remove("on");
  // };

  // if (scroll >= posArr[3]) {
  //   for (let el of lis) el.classList.remove("on");
  //   lis[3].classList.add("on");
  // };

  sections.forEach((el, index) => {
    if (scroll >= posArr[index]) {
      for (let el of lis)el.classList.remove("on");
      lis[index].classList.add("on");
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
