import React, { Suspense, lazy, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Works = lazy(() => import("./Works"));
const Games = lazy(() => import("./Games"));
const LandingPages = lazy(() => import("./LandingPages"));

const ProjectsToggle = () => {
	const [activeTab, setActiveTab] = useState("web");

	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My work</p>
				<h2 className={styles.sectionHeadText}>Projects.</h2>
			</motion.div>

			<div className='mt-6 flex gap-4 flex-wrap'>
				<button
					onClick={() => setActiveTab("web")}
					className={`px-5 py-2 rounded-full font-medium transition-all ${activeTab === "web" ? "bg-white text-black" : "bg-tertiary text-white"
						}`}
				>
					Web Projects
				</button>

				<button
					onClick={() => setActiveTab("games")}
					className={`px-5 py-2 rounded-full font-medium transition-all ${activeTab === "games" ? "bg-white text-black" : "bg-tertiary text-white"
						}`}
				>
					Games
				</button>

				<button
					onClick={() => setActiveTab("landing")}
					className={`px-5 py-2 rounded-full font-medium transition-all ${activeTab === "landing" ? "bg-white text-black" : "bg-tertiary text-white"
						}`}
				>
					Landing Pages
				</button>
			</div>

			<div className='w-full flex'>
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className='mt-6 text-secondary text-[17px] max-w-3xl leading-[30px]'
				>
					{activeTab === "web" &&
						"These projects showcase my experience building modern web applications with interactive UI, responsive layouts, and practical functionality."}

					{activeTab === "games" &&
						"These game projects showcase my skills through interactive builds and gameplay-focused development using JavaScript and frontend technologies."}

					{activeTab === "landing" &&
						"These landing page projects showcase responsive design, visual storytelling, and conversion-focused frontend development."}
				</motion.p>
			</div>

			<div className='mt-12'>
				<Suspense
					fallback={
						<div className='text-white text-[18px] mt-8'>Loading projects...</div>
					}
				>
					{activeTab === "web" && <Works />}
					{activeTab === "games" && <Games />}
					{activeTab === "landing" && <LandingPages />}
				</Suspense>
			</div>
		</>
	);
};

export default SectionWrapper(ProjectsToggle, "projects");