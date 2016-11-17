//var time  = setTimeout(function(){
//	console.log("Witaj po pięciu sek");
//}, 5000);
//

var counter = 0,
	clock;

//function tick() {
//	if(counter <= 5){
//		console.log(counter++);	
//	} else {
//		clearTimeout(clock);
//	}
//	
//}


//clock = setInterval(tick, 1000);

counter = 0;

function tock(){

	if(counter <= 5){
		console.log(counter++);
		setTimeout(tock, 100);
	}
};

tock();