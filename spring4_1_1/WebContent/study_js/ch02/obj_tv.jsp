<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<script type="text/javascript">
	let tv = new Object();
	tv.color = 'black';
	tv.price = 30,000;
	tv.go = function(){
		document.write('색상 : '+tv.color,'<br>');
		document.write('가격 : '+tv.price,'<br>');
	}
	tv.go();

	const today = new Date();
	const mon = today.getMonth();
	const date = today.getDate();
	const day = today.getDay();
	console.log('today: '+today);
	document.write(today, mon, date, day);

	const worldCup = new Date(2020, 4, 30);
	const w_mon = worldCup.getMonth();
	const w_date = worldCup.getDate();
	const w_day = worldCup.getDay();
	console.log('worldCup: ' +worldCup);
	document.write(worldCup, w_mon, w_date, w_day);
</script>

</body>
</html>