/* strat */
const body = document.querySelector("body");
const poop = document.querySelector('.poop');
const display_none = document.querySelector(".display_none")


function startTransparency(){
	poop.style.transition="0.7s";
	poop.style.opacity=0;
	display_none.style.display="block";
	body.style.overflow="auto";
	setTimeout(function(){
		poop.style.display="none";
	},700)
}

/* skill */
let skill_div = document.querySelectorAll(".skill_div");
let test = false;

window.addEventListener("scroll", function () {
	let scrollY = window.scrollY;
	skill_div.forEach(function (ed) {
		ed.style.opacity = 0;
	});



	if (scrollY > 850 && !test) {

		skill_div.forEach(function (ed) { ed.style.display = "block"; });

		skill_div[0].style.animation="motion1 1.5s 0.0s forwards"
		skill_div[1].style.animation="motion2 1.5s 0.2s forwards"
		skill_div[2].style.animation="motion3 1.5s 0.4s forwards"
		skill_div[3].style.animation="motion4 1.5s 0.6s forwards"
		skill_div[4].style.animation="motion5 1.5s 0.8s forwards"

		test = true;

	}
});

/* 팝업 */
const menu = document.querySelectorAll(".menu");
const pop = document.querySelectorAll(".pop");
const close = document.querySelectorAll(".close");
let i=0;

/* 클릭시 팝업 창이 뜸*/
menu.forEach(function(menu){
	menu.addEventListener("click", function(e){
		e.preventDefault();
		i = this.getAttribute("data-idx");
		pop[i].style.display="block";
		body.style.overflow="hidden";
	})
});

/* 클릭시 팝업 창이 사라짐*/
close.forEach(function(close){ 
	close.addEventListener("click",function(e){// 각각의 close클릭했을때
		e.preventDefault();
		pop.forEach(function(pop){
			pop.style.display="none"; //팝업 다 안보이게함
		})
		body.style.overflow="auto"; //body스크롤 생김
	});
})