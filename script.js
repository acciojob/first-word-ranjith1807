function firstWord(s) {
  // your code here
	s.trim();
	let str[0]=s.split(" ")
	return str[0];
}
const s = prompt("Enter String:");
alert(firstWord(s));


