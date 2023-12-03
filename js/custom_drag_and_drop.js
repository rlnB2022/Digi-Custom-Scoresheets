const setupListeners = () => {
	const selectInnings = document.getElementById("select-innings");
	selectInnings.addEventListener("change", (e) => {
		localStorage.setItem("innings", e.target.value);
		showScoreboardInnings(e.target.value);
	});
};

const setupScoreSheet = () => {
	// get data from localStorage or set to 9 if not found
	let scoreboard_innings = localStorage.getItem("innings") || 9;

	// if (scoreboard_innings === null) {
	// 	localStorage.setItem("innings", 9);
	// 	scoreboard_innings = 9;
	// }

	// set dropdown to number of innings
	const selectInnings = document.getElementById("select-innings");
	selectInnings.value = scoreboard_innings;

	// show total number of innings
	showScoreboardInnings(scoreboard_innings);
};

const showScoreboardInnings = (innings) => {
	const scoreboardInningElements =
		document.querySelectorAll(".scoreboard-inning");
	scoreboardInningElements.forEach((el, index) => {
		if (index + 1 + 9 > innings) {
			el.classList.add("d-none");
		} else {
			el.classList.remove("d-none");
		}
	});
};

setupListeners();
setupScoreSheet();
