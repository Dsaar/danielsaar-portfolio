import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
	ecotrack,
	wandernotes,
	hangman,
	frogger,
	tictactoe,
	memory,
	pacman,
	snake,
	samurai,
	todo,
	present,
	herenow,
	coffee,
	followlead
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Native Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "3D Web Developer",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "React.js Developer",
		company_name: "Starbucks",
		icon: starbucks,
		iconBg: "#383E56",
		date: "March 2020 - April 2021",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "React Native Developer",
		company_name: "Tesla",
		icon: tesla,
		iconBg: "#E6DEDD",
		date: "Jan 2021 - Feb 2022",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Web Developer",
		company_name: "Shopify",
		icon: shopify,
		iconBg: "#383E56",
		date: "Jan 2022 - Jan 2023",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Full stack Developer",
		company_name: "Meta",
		icon: meta,
		iconBg: "#E6DEDD",
		date: "Jan 2023 - Present",
		points: [
			"Developing and maintaining web applications using React.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "EcoTrack",
		description:
			"EcoTrack is a full-stack sustainability and community engagement platform designed to encourage environmentally positive actions through mission-based gamification, impact tracking, and real-time user interaction.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "nodejs",
				color: "pink-text-gradient",
			},
		],
		image: ecotrack,
		source_code_link: "https://github.com/Dsaar/ecotrack.git",
	},
	{
		name: "Wander Notes",
		description:
			"Wander Notes is a full-stack travel blog and diary platform designed to let users document journeys, discover travel stories, and interact with content through article publishing, tag-based exploration, commenting, and user-focused features.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "DjangoRestFramework",
				color: "green-text-gradient",
			},
			{
				name: "python",
				color: "pink-text-gradient",
			},
		],
		image: wandernotes,
		source_code_link: "https://github.com/Dsaar/django-project.git",
	},
	{
		name: "Trip Guide",
		description:
			"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: tripguide,
		source_code_link: "https://github.com/",
	},
];

const games = [
	{
		name: "Hangman",
		description:
			"The Hangman game is built using HTML5, CSS3, and JavaScript (ES6+), showcasing essential front-end skills such as DOM manipulation, event handling, and responsive design. The game dynamically generates words, tracks user guesses through keyboard input, and provides visual feedback for correct and incorrect letters.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: hangman,
		source_code_link: "https://github.com/",
	},
	{
		name: "Frogger",
		description:
			"The Frogger-style game is built using HTML5, CSS3, and JavaScript (ES6+), showcasing front-end concepts such as animation, collision detection, and responsive design. The game uses object-oriented programming to handle player movement, obstacles, and game logic. All artwork and sprites are sourced from itch.io.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: frogger,
		source_code_link: "https://github.com/",
	},
	{
		name: "Tic-Tac-Toe",
		description:
			"The Tic Tac Toe game is built using HTML5, CSS3, and JavaScript (ES6+), highlighting front-end skills such as DOM manipulation, event handling, and responsive layout. The game offers two modes: player vs. player and player vs. computer, with logic to detect wins or draws and provide instant visual feedback.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: tictactoe,
		source_code_link: "https://github.com/",
	},
	{
		name: "Memory-Game",
		description:
			"The memory card-matching game is built using HTML5, CSS3, and JavaScript (ES6+), showcasing front-end concepts such as animations, event handling, and responsive design. The game uses object-oriented programming to manage card states, match logic, and game flow. All artwork and card images were generated using AI tools.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: memory,
		source_code_link: "https://github.com/",
	},
	{
		name: "Pac-Man",
		description:
			"The Pac-Man-style game is built using HTML5, CSS3, and JavaScript (ES6+), showcasing front-end concepts such as animations, and collision detection. The game uses object-oriented programming to handle player movement, enemy behavior, and game mechanics. All artwork and sprites are sourced from itch.io.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: pacman,
		source_code_link: "https://github.com/",
	},
	{
		name: "Snake",
		description:
			"The Snake game is built using HTML5, CSS3, and JavaScript (ES6+), showcasing front-end concepts such as animations, keyboard input handling, and responsive design. The game uses object-oriented programming to manage the snake’s movement, growth, collision logic, and food generation. The artwork was generated using AI tools.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: snake,
		source_code_link: "https://github.com/",
	},
	{
		name: "Samurai-Fight",
		description:
			"The Samurai-Fight game project is built using HTML5, CSS3, and JavaScript (ES6+), showcasing key front-end concepts such as animation, DOM manipulation, and responsive design. The game features object-oriented game logic, real-time and combat mechanics. All artwork and sprites are sourced from itch.io.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: samurai,
		source_code_link: "https://github.com/",
	},
	{
		name: "To-Do-List",
		description:
			"This to-do list app is built using HTML5, CSS3, and JavaScript (ES6+), showcasing front-end concepts such as dynamic DOM manipulation, event handling, and responsive design. The app uses object-oriented programming to manage task creation, completion, deletion, and filtering. It also supports localStorage for data persistence across sessions.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: todo,
		source_code_link: "https://github.com/",
	},
	{
		name: "Catch the Presents",
		description:
			"Catch the Presents is a retro-style browser game built using HTML5, CSS3, and JavaScript (ES6+), showcasing front-end concepts such as animation, event handling, and responsive design. The game uses object-oriented programming to manage falling presents, collision detection, and tracking high-scores with localStorage.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: present,
		source_code_link: "https://github.com/",
	},
]

const landingPages = [
	{
		name: "Here & Now",
		description:
			"EcoTrack is a full-stack sustainability and community engagement platform designed to encourage environmentally positive actions through mission-based gamification, impact tracking, and real-time user interaction.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "nodejs",
				color: "pink-text-gradient",
			},
		],
		image: herenow,
		source_code_link: "https://github.com/Dsaar/ecotrack.git",
	},
	{
		name: "Coffee",
		description:
			"Wander Notes is a full-stack travel blog and diary platform designed to let users document journeys, discover travel stories, and interact with content through article publishing, tag-based exploration, commenting, and user-focused features.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "DjangoRestFramework",
				color: "green-text-gradient",
			},
			{
				name: "python",
				color: "pink-text-gradient",
			},
		],
		image: coffee,
		source_code_link: "https://github.com/Dsaar/django-project.git",
	},
	{
		name: "Follow Our Lead",
		description:
			"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "supabase",
				color: "green-text-gradient",
			},
			{
				name: "css",
				color: "pink-text-gradient",
			},
		],
		image: followlead,
		source_code_link: "https://github.com/",
	},
];



export { services, technologies, experiences, testimonials, projects, games, landingPages };
