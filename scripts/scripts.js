var createdTime;

var clickedTime;

var reactionTime;


function makeBox() {

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

function play(){
       var audio = document.getElementById("audio");
       audio.play();
}


document.getElementById("myBox").onclick = function () {

  		clickedTime = Date.now();

  		reactionTime = (clickedTime - createdTime) / 1000;

  		document.getElementById("time").innerHTML = reactionTime;
        
        play();

  		this.style.display = "none";

  		makeBox();

}

makeBox();