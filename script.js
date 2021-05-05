function isElementUnderBottom(elem, triggerDiff) {
    const { top } = elem.getBoundingClientRect();
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
  }
  
  function handleScroll() {
    const elems = document.querySelectorAll('.up-on-scroll');
    elems.forEach(elem => {
      if (isElementUnderBottom(elem, -150)) {
        elem.style.opacity = "0";
        elem.style.transform = 'translateY(150px)';
      } else {
        elem.style.opacity = "1";
        elem.style.transform = 'translateY(0px)';
      }
    })
  }
  
  window.addEventListener('scroll', handleScroll);


window.onload = function() {
    //  타이핑 효과
    var i = 0;
    var j = 0;
    var txt = 'Front-End Developer를 꿈꾸는 '; /* The text */
    var txt2 = '장윤지 입니다. '; /* The text */
    var speed = 100; /* The speed/duration of the effect in milliseconds */
    var t1 = document.getElementById('title');
    var t2 = document.getElementById('title2');
    
    function typing() {
        var end = 0;
        if (i < txt.length) {
            t1.innerHTML += txt.charAt(i);
            i++
            setTimeout(typing, speed);
        } else {
            end = 1;
            t1.classList.remove('bordercursor');
        }
        if (end == 1) {
            typing2();
        }
    }
    setTimeout(typing, speed);

    function typing2() {
        if (j < txt2.length) {
            t2.classList.add('bordercursor');
            t2.innerHTML += txt2.charAt(j);
            j++
            setTimeout(typing2, speed);
        }
    }
}

$(document).ready(function(){
  $('.slider').slick({
    slide: 'div',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    dots: true,
    arrows: true,
    prevArrow : "<button type='button' class='slick-prev'>Previous</button>",
    nextArrow : "<button type='button' class='slick-next'>Next</button>",
  });
});

window.addEventListener('scroll', () => {
	let scrollLocation = document.documentElement.scrollTop; // 현재 스크롤바 위치
  let vh = document.documentElement.offsetHeight;
  let li = document.getElementsByClassName('li-menu');

	if (scrollLocation < 0.7*vh){
		li[0].classList.add('li-menu-h');
    for (let i=1; i<5; i++) {
      li[i].classList.remove('li-menu-h');
    }
	} else if (scrollLocation >= 0.7*vh && scrollLocation < vh*1.6) {
    li[1].classList.add('li-menu-h');
    for (let i=0; i<5; i++) {
      if (i !== 1) {
        li[i].classList.remove('li-menu-h');
      }
    }
  } else if (scrollLocation >= 1.6*vh && scrollLocation < vh*2.1) {
    li[2].classList.add('li-menu-h');
    for (let i=0; i<5; i++) {
      if (i !== 2) {
        li[i].classList.remove('li-menu-h');
      }
    }
  } else if (scrollLocation >= 2.1*vh && scrollLocation < vh*2.6) {
    li[3].classList.add('li-menu-h');
    for (let i=0; i<5; i++) {
      if (i !== 3) {
        li[i].classList.remove('li-menu-h');
      }
    }
  } else if (scrollLocation >= 2.6*vh) {
    li[4].classList.add('li-menu-h');
    for (let i=0; i<5; i++) {
      if (i !== 4) {
        li[i].classList.remove('li-menu-h');
      }
    }
  }
})

function go(num) {
  switch (num) {
    case 1:
      location.href="#page1";
      break;
    case 2:
      location.href="#page2";
      break;
    case 3:
      location.href="#page3";
      break;
    case 4:
      location.href="#page4";
      break;
    case 5:
      location.href="#page5";
      break;
  }
}