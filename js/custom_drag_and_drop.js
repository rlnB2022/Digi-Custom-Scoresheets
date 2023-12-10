const setupListeners = () => {
	/* FONT STYLE */
	const selectFontStyle = document.getElementById("select-font-style");
	selectFontStyle.addEventListener("change", function () {
		localStorage.setItem("fontstyle", this.value);
	});

	/* FONT SIZE */
	const selectFontSize = document.getElementById("select-font-size");
	selectFontSize.addEventListener("change", function () {
		localStorage.setItem("fontsize", this.value);
	});

	/* FONT WEIGHT */
	const fontSizeWeight = document.getElementById("select-font-weight");
	fontSizeWeight.addEventListener("change", function () {
		localStorage.setItem("fontweight", this.value);
	});

	/* BORDERS */
	const bordersElem = document.getElementById("select-borders");
	bordersElem.addEventListener("change", function () {
		localStorage.setItem("borders", this.value);
	});

	/* Select Innings */
	const selectInnings = document.getElementById("select-innings");
	selectInnings.addEventListener("change", function () {
		localStorage.setItem("innings", this.value);
		showScoreboardInnings(this.value);
	});

	// show Extra Innings
	const checkboxShowExtraInnings =
		document.getElementById("extraInningsSwitch");

	checkboxShowExtraInnings.addEventListener("change", function () {
		localStorage.setItem("extraInnings", this.checked ? "show" : "hide");

		showScoreboardInnings(localStorage.getItem("innings"));
	});

	/* Player Names */
	const playerNames = document.getElementById("select-player-names");
	playerNames.addEventListener("change", function () {
		localStorage.setItem("playerNames", this.value);
	});

	/* Numbered Lineups */
	const numberedLineups = document.getElementById("checkbox-numbered-lineups");
	numberedLineups.addEventListener("change", function () {
		localStorage.setItem("numberedLineups", this.checked ? "show" : "hide");
	});

	/* Player Positions */
	const playerPositionsElem = document.getElementById("select-positions");
	playerPositionsElem.addEventListener("change", function () {
		localStorage.setItem("playerPositions", this.value);
	});

	/* Use Ratings Boxes */
	const ratingsBoxElem = document.getElementById("ratings-boxes");
	ratingsBoxElem.addEventListener("change", function () {
		localStorage.setItem("ratingsBoxes", this.checked ? "show" : "hide");
	});

	/* Display Diamonds */
	const displayDiamondsElem = document.getElementById("checkboxDiamonds");
	displayDiamondsElem.addEventListener("change", function () {
		localStorage.setItem("displayDiamonds", this.checked ? "show" : "hide");
	});

	/* Pitcher Subs */
	const pitcherSubsElem = document.getElementById("select-pitcher-subs");
	pitcherSubsElem.addEventListener("change", function () {
		localStorage.setItem("pitcherSubs", this.value);
	});

	/* Pitcher Section */
	const pitcherSectionElem = document.getElementById("select-pitcher-section");
	pitcherSectionElem.addEventListener("change", function () {
		localStorage.setItem("pitcherSection", this.value);
	});
};

const setupScoreSheet = () => {
	/* FONT STYLE */
	let font_style = localStorage.getItem("fontstyle") || "normal";
	const fontStyleElement = document.getElementById("select-font-style");
	fontStyleElement.value = font_style;

	/* FONT SIZE */
	let font_size = localStorage.getItem("fontsize") || ".75rem";
	const fontSizeElement = document.getElementById("select-font-size");
	fontSizeElement.value = font_size;

	/* FONT WEIGHT */
	let font_weight = localStorage.getItem("fontweight") || 1;
	const fontSizeWeight = document.getElementById("select-font-weight");
	fontSizeWeight.value = font_weight;

	/* BORDERS */
	let borders = localStorage.getItem("borders") || 1;
	const bordersElem = document.getElementById("select-borders");
	bordersElem.value = borders;

	/* INNINGS - NUMBER OF INNINGS */
	let scoreboard_innings = localStorage.getItem("innings") || 9;
	const selectInnings = document.getElementById("select-innings");
	selectInnings.value = scoreboard_innings;

	// show Extra Innings
	let extraInnings = localStorage.getItem("extraInnings") || "hide";
	const checkboxShowExtraInnings =
		document.getElementById("extraInningsSwitch");
	checkboxShowExtraInnings.checked = extraInnings === "show";

	/* LINEUPS - PLAYER NAMES */
	let playerNames = localStorage.getItem("playerNames") || "first-last";
	const playerNamesElem = document.getElementById("select-player-names");
	playerNamesElem.value = playerNames;

	/* LINEUPS - NUMBERED LINEUPS CHECKBOX */
	let numberedLineups = localStorage.getItem("numberedLineups") || "hide";
	const numberedLineupsElem = document.getElementById(
		"checkbox-numbered-lineups"
	);
	numberedLineupsElem.checked = numberedLineups === "show";

	/* LINEUPS - POSITIONS */
	let playerPositions = localStorage.getItem("playerPositions") || "letters";
	const playerPositionsElem = document.getElementById("select-positions");
	playerPositionsElem.value = playerPositions;

	/* LINEUPS - USE RATINGS BOXES */
	let ratingsBox = localStorage.getItem("ratingsBoxes") || "show";
	const ratingsBoxElem = document.getElementById("ratings-boxes");
	ratingsBoxElem.checked = ratingsBox === "show";

	/* LINEUPS - RATING NAMES */
	/* @TODO */

	/* LINEUPS - DISPLAY DIAMONDS CHECKBOX */
	let displayDiamonds = localStorage.getItem("displayDiamonds") || "hide";
	const displayDiamondsElem = document.getElementById("checkboxDiamonds");
	displayDiamondsElem.checked = displayDiamonds === "show";

	/* LINEUPS - DIAMONDS OPACITY SLIDER */
	let diamondOpacity = localStorage.getItem("diamondOpacity") || "50";
	const diamondOpacityElem = document.getElementById("diamondOpacity");
	diamondOpacityElem.value = diamondOpacity;

	const diamondOpacityLabel = document.getElementById("diamond-opacity-label");
	diamondOpacityLabel.textContent = diamondOpacity + "%";

	/* PITCHERS - PITCHER SUBS */
	let pitcherSubs = localStorage.getItem("pitcherSubs") || "3";
	const pitcherSubsElem = document.getElementById("select-pitcher-subs");
	pitcherSubsElem.value = pitcherSubs;

	/* PITCHERS - PITCHER SECTION */
	let pitcherSection = localStorage.getItem("pitcherSection") || "side-by-side";
	const pitcherSectionElem = document.getElementById("select-pitcher-section");
	pitcherSectionElem.value = pitcherSection;

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
