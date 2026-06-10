let month = "November";
let fortune = Math.floor(Math.random() * 12) + 1;

if (month.toLowerCase() === "january") {
  console.log("♑ Capricorn");
} else if (month.toLowerCase() === "february") {
  console.log("♒ Aquarius");
} else if (month.toLowerCase() === "march") {
  console.log("♓ Pisces");
} else if (month.toLowerCase() === "april") {
  console.log("♈ Aries");
} else if (month.toLowerCase() === "may") {
  console.log("♉ Taurus");
} else if (month.toLowerCase() === "june") {
  console.log("♊ Gemini");
} else if (month.toLowerCase() === "july") {
  console.log("♋ Cancer");
} else if (month.toLowerCase() === "august") {
  console.log("♌ Leo");
} else if (month.toLowerCase() === "september") {
  console.log("♍ Virgo");
} else if (month.toLowerCase() === "october") {
  console.log("♎ Libra");
} else if (month.toLowerCase() === "november") {
  console.log("♏ Scorpio");
} else if (month.toLowerCase() === "december") {
  console.log("♐ Sagittarius");
} else {
  console.log("Invalid month");
}

if (fortune === 1) {
  console.log("Step out of your comfort zone and trust your instincts to innovate.");
} else if (fortune === 2) {
  console.log("Focus on your routine and long term financial stability.");
} else if (fortune === 3) {
  console.log("Your curiosity is high, listen carefully to discover new perspectives.");
} else if (fortune === 4) {
  console.log("Patience and intuition will help you improve your daily habits.");
} else if (fortune === 5) {
  console.log("Your creativity and leadership shine, inspiring those around you.");
} else if (fortune === 6) {
  console.log("Reflection brings clarity, review past tasks to find opportunities.");
} else if (fortune === 7) {
  console.log("Unexpected changes in your routine will be beneficial in the long run.");
} else if (fortune === 8) {
  console.log("New paths open up, and you will understand who supports you unconditionally.");
} else if (fortune === 9) {
  console.log("Apply practical energy to make progress and give yourself a well-deserved break.");
} else if (fortune === 10) {
  console.log("The moon boosts your intuition and your original ideas for the future.");
} else if (fortune === 11) {
  console.log("Small gestures of harmony will open closed hearts today.");
} else if (fortune === 12) {
  console.log("Empathy flows in your love life, dissolving misunderstandings.");
} else {
  console.log("Invalid number (How did you get here...?)")
}
