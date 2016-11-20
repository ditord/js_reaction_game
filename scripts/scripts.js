var createdTime;
var clickedTime;
var reactionTime;
var points = 0;
var times = new Array();

function makeCocroach() {
      var time;
	  	time = Math.random();
	  	time = time * 3000;

	  	setTimeout(function () {

        var top = Math.random();
        top = top * 250;
        var left = Math.random();
        left = left * 300;

        document.getElementById("myBox").style.top = top + "px";
        document.getElementById("myBox").style.left = left + "px";
        document.getElementById("myBox").style.display = "block";

	  	}, time);
	  	createdTime = Date.now();
}

function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

function rewards() {
    if (points == 3) {
        document.getElementById("medals").innerHTML = "Well done";
    } else if (points == 5) {
        document.getElementById("medals").innerHTML = "Keep it up";
    } else if (points == 10) {
        document.getElementById("medals").innerHTML = "You're amazing";
    } else if (points == 20) {
        document.getElementById("medals").innerHTML = "You're the best";
    } else if (points >= 25) {
        document.getElementById("medals").innerHTML = "You're a legend";
    }
    else {
        console.log(points);
    }
}

function bestTime() {
    times.push(reactionTime);
    times.sort(function (a, b) { return a - b });
    document.getElementById("besttime").innerHTML = times[0];

}

document.getElementById("myBox").onclick = function xax() {

  		clickedTime = Date.now();

  		reactionTime = (clickedTime - createdTime) / 1000;

  		document.getElementById("time").innerHTML = reactionTime;

    play();

  		this.style.display = "none";

    points = points + 1;

    document.getElementById("score").innerHTML = points;

    rewards();

    bestTime();

  		makeCocroach();
}


makeCocroach();
