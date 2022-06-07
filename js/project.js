window.addEventListener("DOMContentLoaded",function(){
    window.onscroll = function(){
        console.log(window.scrollY);
        if(window.scrollY>2950){
            document.getElementById("text_box").classList.add("active");
            document.getElementById("text_box1").classList.add("active");
        }else{
            document.getElementById("text_box").classList.remove("active");
            document.getElementById("text_box1").classList.remove("active");
        }
    }
});

var div2 = document.getElementsByClassName("section_10bt");

function handleClick(event) {
  console.log(event.target);
  console.log(event.target.classList);

  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
  } else {
    for (var i = 0; i < div2.length; i++) {
      div2[i].classList.remove("clicked");
    }

    event.target.classList.add("clicked");
  }
}

function init() {
  for (var i = 0; i < div2.length; i++) {
    div2[i].addEventListener("click", handleClick);
  }
}

init();

window.addEventListener("DOMContentLoaded", function () {
    window.onscroll = function(){
        console.log(window.scrollY);
        if(window.scrollY>800){
            document.getElementById("circle1").classList.add("active");
            document.getElementById("circle2").classList.add("active");
        }
    }
});

window.addEventListener("DOMContentLoaded", function(){
    window.onscroll = function(){
        console.log(window.scrollY);
        if(window.scrollY > 1200){
            document.getElementById("section_2_title").classList.add("active");
        }else{
            document.getElementById("section_2_title").classList.remove("active");
        }
        if(window.scrollY > 1300){
            document.getElementById("section_2_ct").classList.add("active");
        }else{
            document.getElementById("section_2_ct").classList.remove("active");
        }
        
    }
});
