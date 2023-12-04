const setupListeners = () => {
	const selectInnings = document.getElementById("select-innings");
	selectInnings.addEventListener("change", (e) => {
		localStorage.setItem("innings", e.target.value);
		showScoreboardInnings(e.target.value);
	});

	// show Extra Innings
	const checkboxShowExtraInnings =
		document.getElementById("extraInningsSwitch");

	checkboxShowExtraInnings.addEventListener("change", function () {
		if (this.checked) {
			localStorage.setItem("extraInnings", "show");
		} else {
			localStorage.setItem("extraInnings", "hide");
		}

		showScoreboardInnings(localStorage.getItem("innings"));
	});
};

const setupScoreSheet = () => {
	// get data from localStorage or set to 9 if not found
	let scoreboard_innings = localStorage.getItem("innings") || 9;

	// set dropdown to number of innings
	const selectInnings = document.getElementById("select-innings");
	selectInnings.value = scoreboard_innings;

	// show Extra Innings
	let extraInnings = localStorage.getItem("extraInnings");
	const checkboxShowExtraInnings =
		document.getElementById("extraInningsSwitch");
	checkboxShowExtraInnings.checked = extraInnings;

	// show total number of innings
	showScoreboardInnings(scoreboard_innings);
};

const showScoreboardInnings = (innings) => {
	const scoreboardInningElements =
		document.querySelectorAll(".scoreboard-inning");
	const scoreboardVisitorInningElements = document.querySelectorAll(
		".scoreboard-visitor-inning"
	);
	const scoreboardHomeInningElements = document.querySelectorAll(
		".scoreboard-home-inning"
	);
	const scoreboardExtraInnings = document.querySelectorAll(".extra-innings");
	scoreboardInningElements.forEach((el, index) => {
		if (index + 1 + 9 > innings) {
			el.classList.add("d-none");
		} else {
			el.classList.remove("d-none");
		}
	});
	scoreboardVisitorInningElements.forEach((el, index) => {
		if (index + 1 + 9 > innings) {
			el.classList.add("d-none");
		} else {
			el.classList.remove("d-none");
		}
	});
	scoreboardHomeInningElements.forEach((el, index) => {
		if (index + 1 + 9 > innings) {
			el.classList.add("d-none");
		} else {
			el.classList.remove("d-none");
		}
	});
	const showExtraInnings = localStorage.getItem("extraInnings");

	scoreboardExtraInnings.forEach((el) => {
		if (showExtraInnings === "show") {
			el.classList.remove("d-none");
		} else {
			el.classList.add("d-none");
		}
	});

	/* Also, add/remove innings from each of visitor/home lineups */
};

setupListeners();
setupScoreSheet();
