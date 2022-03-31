const http = require("http");

const SECRET = "SHINE"; // You can set any word as the secret answer
let temp = ["a","a","a","a","a"];
var feedback;
var counter;

function myFunction(req, res) {
	// console.log({req}); // You can uncomment this to see the request object
	console.log(req.url);
	const GUESS=req.url.split("q=")[1];
	//console.log(GUESS);

	if (GUESS.length!=5 ){
		
		feedback="Please choose a valid 5 letter input";
	}
	else if (GUESS==SECRET ){
		
		feedback="Congratulations! , You guessed it right";
	}
	else{
		
		for(let i=0;i<5;i++){
			if (SECRET[i]==GUESS[i]){
				temp[i]="g";
			}
			else if(SECRET.includes(GUESS[i])){
				temp[i]="y";
			}
			else{
				temp[i]="b";
			}
			console.log(temp);
		}
		feedback=temp.join("");
	
	}

	//console.log(feedback);
	res.write(feedback);
	res.end();
}

http.createServer(myFunction).listen(8080);
