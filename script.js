function firstWord(s) {
  // your code here
	let str=s.trim();
	str=s.split(" ")
	return str[0];
}
const s = prompt("Enter String:");
alert(firstWord(s));


