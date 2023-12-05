// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

let color = null;

const jsnails = document.querySelector("#js-nails");
console.log(jsnails);

jsnails.addEventListener('click', (event) => {
	console.log(event.target.tagName);
	if (event.target.tagName === "path") {
	event.target.style.fill = color;
  }
});

const jspolish = document.querySelector("#js-polish");
console.log(jspolish);

jspolish.addEventListener('click', (event) => {
  if (event.target.tagName === "IMG" || event.target.tagName === "BUTTON") {
  console.log(event.target.dataset.color);
  color = event.target.dataset.color;
  }
});


