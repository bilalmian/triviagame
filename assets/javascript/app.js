	var stopwatch = {
		number: 31,
		run: function () {
			counter = setInterval(stopwatch.increment, 1000);
		},
		increment: function() {
			stopwatch.number--;
	      	$('#show-number').html('<h2>' + stopwatch.number + '</h2>');
	      	if (stopwatch.number === 0){
	        	stopwatch.stop();
			}
		},
		stop: function() {
			clearInterval(counter);
		}
	};

	var triviaGame = {
		quiz: [ {
				question: "Who's that Pokemon?",
				picture: "assets/images/pikachu.png",
				choices: ['Bulbasaur','Pikachu','Chansey','Diglet'],
				answer: 1,
			},
			{	question: "Who's that Pokemon?s",
				picture: 'assets/images/alakazam.png',
				choices: ['Mewtwo','Weedle','Metapod','Alakazam'],
				answer: 3,
			},
			{	question: "Who's that Pokemon?",
				picture: 'assets/images/scyther.png',
				choices: ['Beedrill','Victreebel','Scyther','Pidgeot'],
				answer: 2,
			},
			{	question: "Who's that Pokemon?",
				picture: 'assets/images/magmar.png',
				choices: ['Magmar','Charmeleon','Koffing','Snorlax'],
				answer: 0,
			},
			{	question: "Who's that Pokemon?",
				picture: 'assets/images/ditto.png',
				choices: ['Grimer','Ekans','Hitmonlee','Ditto'],
				answer: 3,
			},
			{	question: "Who's that Pokemon?",
				picture: 'assets/images/zapdos.png',
				choices: ['Articuno','Moltres','Zapdos','Lugia'],
				answer: 2,
			},
			{	question: "Who's that Pokemon?",
				picture: 'assets/images/haunter.png',
				choices: ['Vulpix','Zubat','Haunter','Venonat'],
				answer: 2,
			},
			{	question: "Who's that Pokemon?",
				picture: 'assets/images/growlithe.png',
				choices: ['Growlithe','Gyarados','Pinsir','Meowth'],
				answer: 0,
			},
			{	question: "Who's that Pokemon?",
				picture: 'assets/images/vileplume.png',
				choices: ['Tentacool','Muk','Shellder','Vileplume'],
				answer: 3,
			},
			{	question: "Who's that Pokemon?",
				picture: 'assets/images/exeggutor.png',
				choices: ['Exeguutor','Mr. Mime','Venusaur','Clefable'],
				answer: 0,
			},
			{	question: "Who's that Pokemon?",
				picture: 'assets/images/mew.png',
				choices: ['Drowzee','Mew','Kingler','Dratini'],
				answer: 1,
			}],
		correct: 0,
		incorrect: 0,
		counter:0

		setup: function() {
			$('#card').hide();

		},

		start: function () {
			this.setup();
			
			$('#begin').on('click', function(){
				$('#begin').hide();
				$('#card').show();
				triviaGame.reveal();
				
			});
					
		},

		reveal: function () {

			var pokeImage = $('<img>');

			for (var i = 0; i < this.quiz.length; i++) {
				this.counter = i;
				document.querySelector('#question').innerHTML = this.quiz[i].question;
				pokeImage.attr("src", this.quiz[i].picture);
				$('#pokes').append(pokeImage);

				document.querySelector('#answer0').innerHTML = this.quiz[i].choices[0];
				document.querySelector('#answer1').innerHTML = this.quiz[i].choices[1];
				document.querySelector('#answer2').innerHTML = this.quiz[i].choices[2];
				document.querySelector('#answer3').innerHTML = this.quiz[i].choices[3];

				// when button is clicked reveal answer

				$('.answer').on('click', function (e){
					if (e = this.quiz)

				});

			};

		},

		// next: function () {

		// 	$('.answer').on('click', function(e) {
		// 		if (indexoFe == this.quiz[i].answer);
		// 	});
				
		}	
			for (var i = 0; i < 4; i++) {
				var buttonAnswers = $('<button>');
				buttonAnswers.attr('data-num', i);
				buttonAnswers.addClass('nextQuestion');		
			};

		answer: function () {

			
		
		}
	}

	

triviaGame.start();
stopwatch.run();






