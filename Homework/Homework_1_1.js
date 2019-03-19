$(document).ready(function(){
	getValue();
	
});
function getValue(){
	$.get(
		"https://www.cbr-xml-daily.ru/daily_json.js",
		function(data){
			data = JSON.parse(data);
			console.log(data);
	}
	);
	
}