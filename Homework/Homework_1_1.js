$(document).ready(function(){
	getValue();
	
});
//Вышеописанная функция работает по готовности.

function getValue(){
	$.get(
		"https://www.cbr-xml-daily.ru/daily_json.js",
		function(data){
			data = JSON.parse(data);
			console.log(data);
			
			var Rub = document.getElementById("rubInput").value;
			var val = Rub.value;
			alert("Вы ввели - " + Rub);
			//var Rub = prompt("Введите необходимую сумму - ");
			var Usd = (data['Valute']['USD']['Value']);
			var Eur = (data['Valute']['EUR']['Value']);
			var sumEur = parseFloat((Rub / Eur).toFixed(2));
			var sumUsd = parseFloat((Rub / Usd).toFixed(2));

			alert ("В пересчёте на евро будет - " + sumEur);			
			alert ("В пересчёте на доллары будет - " + sumUsd);

	}
	);
	
	
}

