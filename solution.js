(function (window) {

	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


	var byeSpeaker={};
	var helloSpeaker={};

	var speakWord = "Hello";

	function speak(name) {
	  console.log(speakWord + " " + name);
	}

	var speakWord = "Good Bye";

	function speak(name) {
	  console.log(speakWord + " " + name);
	}

	for (var i = 0; i < names.length; i++) {

	  
	  var firstLetter = names[i].charAt(0).toLowerCase();

	  if (firstLetter === 'j') {
	    byeSpeaker.speak(names[i]);
	  } else {
	    helloSpeaker.speak(names[i]);
	  }
	}

	window.byeSpeaker = byeSpeaker;
	window.helloSpeaker = helloSpeaker;

})(window);
