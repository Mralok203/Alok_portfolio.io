const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

// Dark Mode Toggle Functionality
// List of Fun Facts
const facts = [
		"🐍 Python was named after 'Monty Python', not the snake.",
		"📅 Python was first released in 1991 by Guido van Rossum.",
		"📜 Python follows 'The Zen of Python' (import this).",
		"🚀 NASA uses Python for space exploration projects.",
		"📷 Instagram, Spotify, and Netflix rely on Python for backend systems.",
		"🛠️ Python is the official language for Google, adopted in 1999.",
		"🔎 Google's first web crawler was built using Python.",
		"💡 Python supports list comprehensions for concise looping.",
		"🧠 Python is the most used language for AI and ML applications.",
		"🔄 Python’s ‘while True’ loop is used in automation scripts.",
		"💻 YouTube runs on a Python-based system.",
		"🔄 The ‘range()’ function is optimized for performance in Python 3.",
		"📡 Dropbox moved from Java to Python for scalability.",
		"⚡ Python uses dynamic typing, making development faster.",
		"⏳ Python has a GIL (Global Interpreter Lock), affecting multi-threading.",
		"🔠 Python allows Unicode variable names, including emojis!",
		"🤯 Python supports function arguments with *args and **kwargs.",
		"📊 Python is widely used in finance for stock trading algorithms.",
		"🎮 Game engines like Pygame allow game development in Python.",
		"🎓 Python is taught in schools as an introductory programming language.",
		"📈 Python ranks consistently in the top 3 programming languages globally.",
		"🧩 Python can be used for ethical hacking and cybersecurity.",
		"📂 Python's 'os' module allows interaction with the operating system.",
		"🎵 Spotify uses Python for music recommendation algorithms.",
		"🔍 Python's 're' module enables powerful regular expressions.",
		"🤖 Machine Learning allows computers to learn from data without explicit programming.",
		"📜 The term 'Machine Learning' was first coined by Arthur Samuel in 1959.",
		"🎭 ML models can recognize faces, voices, and even emotions.",
		"🚀 Self-driving cars rely heavily on ML algorithms.",
		"📡 Spam filters use ML to detect unwanted emails.",
		"📈 ML is used in finance for fraud detection and stock predictions.",
		"🛍️ Amazon and Netflix use ML for personalized recommendations.",
		"🔠 ML helps Google Translate improve over time.",
		"🎮 Game AI in chess and Go has surpassed human players.",
		"🧬 ML is transforming healthcare by predicting diseases from medical data.",
		"🔍 Google’s RankBrain uses ML to refine search results.",
		"🎨 ML can generate art, music, and even poetry.",
		"🦾 ML-powered robots are being developed for household tasks.",
		"📚 ML helps summarize and analyze large volumes of text automatically.",
		"📊 Clustering algorithms help businesses segment customers for targeted marketing.",
		"📡 Predictive maintenance in industries prevents equipment failures using ML.",
		"🧠 Neural networks mimic the structure of the human brain.",
		"🕵️ ML models can detect deepfake videos.",
		"🎤 Virtual assistants like Siri and Alexa use ML for speech recognition.",
		"🔬 ML is used in drug discovery to find new treatments.",
		"📷 Image recognition software can classify millions of images instantly.",
		"🚗 Tesla’s Autopilot is an example of reinforcement learning in action.",
		"📺 YouTube’s recommendation engine is powered by deep learning.",
		"📑 ML algorithms help detect plagiarism in research papers.",
		"🔑 ML is improving cybersecurity by detecting anomalies in network traffic.",
		"🤯 The concept of AI dates back to ancient Greek mythology!",
		"📜 The term 'Artificial Intelligence' was coined in 1956.",
		"🎭 AI-powered chatbots passed the Turing Test in limited scenarios.",
		"🚀 AI is used in space exploration for autonomous navigation.",
		"🕵️ AI helps law enforcement predict crime hotspots.",
		"🔍 AI can analyze millions of legal documents in seconds.",
		"🎮 AI has beaten world champions in chess, Go, and poker.",
		"📡 AI voice assistants can now detect human emotions.",
		"🧠 AI-powered robots can have conversations like humans.",
		"📷 AI can generate hyper-realistic human faces that don’t exist.",
		"📚 AI can summarize entire books into short key points.",
		"🔬 AI has been used to discover new antibiotic compounds.",
		"🚗 AI improves fuel efficiency in self-driving cars.",
		"🎤 AI can convert brain waves into text.",
		"🖼️ AI-generated art is selling in auctions.",
		"📊 AI can predict stock market trends better than analysts.",
		"📡 AI is used in weather forecasting for accurate predictions.",
		"🕹️ AI is used to develop NPC (Non-Player Characters) in video games.",
		"🦾 AI-powered prosthetic limbs can mimic real human movements.",
		"🔑 AI can crack passwords using brute-force learning techniques.",
		"🌍 AI is used in conservation to track endangered species.",
		"🛍️ AI optimizes online shopping recommendations.",
		"📺 AI-generated deepfake videos can be indistinguishable from real footage.",
		"📢 AI is used in voice cloning to create realistic voices.",
		"🛠️ AI-powered tools help programmers write and debug code faster."
	];
	
	
	
	

// Function to Show Fun Fact When Button is Clicked
function generateFact() {
    let randomIndex = Math.floor(Math.random() * facts.length);
    let factText = document.getElementById("fact-text");
    factText.innerText = facts[randomIndex];
    factText.style.display = "block"; // Show fact after clicking
}

var swiper = new Swiper(".testimonial-container", {
	loop: true, 
	autoplay: {
		delay: 3000, 
		disableOnInteraction: false 
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	effect: "fade",
	fadeEffect: {
		crossFade: true
	}
});
