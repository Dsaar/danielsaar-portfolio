import React, { useMemo } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { github } from "../assets";
import { games } from "../constants";
import { fadeIn } from "../utils/motion";

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
	isMobile,
}) => {
	const cardContent = (
		<>
			<div className='relative w-full h-[230px]'>
				<img
					src={image}
					alt={name}
					className='w-full h-full object-cover rounded-2xl'
					loading='lazy'
				/>

				<div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
					<div
						onClick={() => window.open(source_code_link, "_blank")}
						className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
					>
						<img
							src={github}
							alt='source code'
							className='w-1/2 h-1/2 object-contain'
						/>
					</div>
				</div>
			</div>

			<div className='mt-5'>
				<h3 className='text-white font-bold text-[24px]'>{name}</h3>
				<p className='mt-2 text-secondary text-[14px]'>{description}</p>
			</div>

			<div className='mt-4 flex flex-wrap gap-2'>
				{tags.map((tag) => (
					<p
						key={`${name}-${tag.name}`}
						className={`text-[14px] ${tag.color}`}
					>
						#{tag.name}
					</p>
				))}
			</div>
		</>
	);

	return (
		<motion.div
			variants={fadeIn("up", "spring", index * 0.15, 0.6)}
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.15 }}
		>
			{isMobile ? (
				<div className='bg-tertiary p-5 rounded-2xl w-full'>{cardContent}</div>
			) : (
				<Tilt
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
				>
					{cardContent}
				</Tilt>
			)}
		</motion.div>
	);
};

const Games = () => {
	const isMobile = useMemo(() => {
		if (typeof window === "undefined") return false;
		return window.innerWidth < 640;
	}, []);

	return (
		<motion.div
			key='games-projects'
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.1 }}
			className='mt-10 flex flex-wrap gap-7'
		>
			{games.map((game, index) => (
				<ProjectCard
					key={`game-${index}`}
					index={index}
					isMobile={isMobile}
					{...game}
				/>
			))}
		</motion.div>
	);
};

export default Games;