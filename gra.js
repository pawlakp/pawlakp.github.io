var today = new Date();
var hourNow = today.getHours();
var greeting;

if(hourNow>18) {
	greeting = 'Dobry wieczór!';
} else if(hourNow>12){
	greeting = 'Dzień dobry';
} else if(hourNow > 0){
	greeting = 'Dzień dobry';
} else{
	greeting='Witamy'
}

document.write('<h3>'+greeting+'</h3>');



function fajny(){
			document.getElementById("screen").innerHTML="Łowcy, jeśli szukacie okazji do powiększenia biblioteki gier Xbox Series X|S, Xbox One lub też Xbox 360 zapoznajcie się z Wiosennymi Wyprzedażami, jakie zawitały do Microsoft Store 🙂 Przez kolejne 14 dni (promocje na gry Xbox trwają do 16 kwietnia) macie okazję zakupić o wiele taniej ponad 600 gier konsolowych – niektóre obniżki cen sięgają do 70%!";
		}
function nic(){
			document.getElementById("screen").innerHTML="Nic";
		}