const h1 = document.querySelector('h1');

window.addEventListener("scroll", () => {
  let scroll = window.scrolly || window.pageYOffset;
  //||은 둘중 하나라도  그 값이 있다면 변수에 넣겠다 

  /*
  scrolly 문서가 수직으로 얼마나 스크롤 되었는지를 픽 셀 단위로 반환해 준다 

  window.scrolly === window.pageyOffset
  익스플로러에서는 scrollly 가 적용이 안됨 

  */

  h1.innerText = scroll;
})