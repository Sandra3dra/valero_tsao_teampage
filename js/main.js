(() => {
	let toSnadra = document.querySelector(".changebiotoS"),
		toLuisa = document.querySelector(".changebiotoL");

	function changetoS() {
		document.getElementById("memberImg").src="images/sandra_tsao.png";
		document.querySelector(".lPart").classList.add("hidden");
		document.querySelector(".sPart").classList.remove("hidden");
		document.querySelector(".name").textContent="SANDRA TSAO";
		document.querySelector(".name").classList.add("forS");
		document.querySelector(".question").classList.add("qforS");
		document.querySelector(".buttontoS").classList.add("hidden");
		document.querySelector(".buttontoL").classList.remove("hidden");
	}

	toSnadra.addEventListener("click", changetoS);

	function changetoL() {
		document.getElementById("memberImg").src="images/luisa_valero.png";
		document.querySelector(".sPart").classList.add("hidden");
		document.querySelector(".lPart").classList.remove("hidden");
		document.querySelector(".name").textContent="LUISA VALERO";
		document.querySelector(".name").classList.remove("forS");
		document.querySelector(".question").classList.remove("qforS");
		document.querySelector(".buttontoS").classList.remove("hidden");
		document.querySelector(".buttontoL").classList.add("hidden");
	}

	toLuisa.addEventListener("click", changetoL);


})();