function sum(a, b) {
	return a + b
}

sub = (a, b) => {
	return a - b
}

function  abc() {
	if($("#man")[0].innerText == 'Huhu')
		document.getElementById("man").innerHTML = "Haha";
	else
		document.getElementById("man").innerHTML = "Huhu";
}

let a = 10
console.log(a);
console.log(sum(10, 11));
console.log(sub(10, 11));

let AB = parseFloat(prompt("Enter AB:"));
let AC = parseFloat(prompt("Enter AC:"));
let BC = parseFloat(prompt("Enter BC:"));


if (AB + AC > BC && AB + BC > AC && AC + BC > AB) {

  
  let A = Math.acos((BC*BC+AC*AC-AB*AB)/(2*BC*AC));
  let B = Math.acos((AB*AB+BC*BC-AC*AC)/(2*AB*BC));
  let C = Math.acos((AB*AB+AC*AC-BC*BC)/(2*AB*AC));
  
  console.log("Góc A: " + (A * 180 / Math.PI) + " độ");
  console.log("Góc B: " + (B * S180 / Math.PI) + " độ");
  console.log("Góc C: " + (C * 180 / Math.PI) + " độ");
} else {
  console.log("3 cạnh không tạo thành tam giác");
}

window.addEventListener("load", runPage, false);


function day() {
  var day = document.getElementById("date");
  if (day === "Saturday") {
  document.write("I love Saturdays");
  } else {
  document.write("I wish it was Saturday");
  }
}

function content() {
  var text = document.getElementById("new");
  text.textContent = "I am a paragraph that was created with JS ";
  text.style.color = "#c0145f";
  text.style.fontSize = "2em";
}