 $( document ).ready(function() {

 	var now   = new Date();

	var month = new Array();
	month[0] = "January";
	month[1] = "February";
	month[2] = "March";
	month[3] = "April";
	month[4] = "May";
	month[5] = "June";
	month[6] = "July";
	month[7] = "August";
	month[8] = "September";
	month[9] = "October";
	month[10] = "November";
	month[11] = "December";
	var n = month[now.getMonth()];

 	var day   = now.getDate();

 	var time   = now.getFullYear();


 	console.log(n + " " + day + " " + time);

 	$('.time-wrapper').html(n + " " + day + " " + time);

 	var arrayOfMessages = ['.message1','.message2','.message3','.message4'];
	var counter = 0;




		// setInterval(function(){ 
		// 	if( counter < arrayOfMessages.length) {
		// 		console.log(arrayOfMessages[counter]);
		//  		$(".message-wrapper").hide();
		//  		$(arrayOfMessages[counter]).show();
		// 	}

		// 	counter++;
  //   		}
 	// 	}, 2000); 	

 			// var intervalId = 

			 //   if(counter === 10){
	   //    		clearInterval(intervalId);
	   // 			}
	   // 			console.log(counter);
	   // 			counter++;
				// }, 2000);

 	setInterval(function(){ 
 		var randNum = Math.floor(Math.random() * arrayOfMessages.length);
 		$(".message-wrapper").hide();
 		$(arrayOfMessages[randNum]).show();
 	}, 3000);
 	
});