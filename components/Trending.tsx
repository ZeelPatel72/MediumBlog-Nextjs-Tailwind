import React from 'react'

function Trending() {
	return (
		<div>
			<h2 className="uppercase text-xl py-5 px-10 pb-4">Trending on Medium</h2>
			<div className="py-5 px-2 gap-3 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap border-y">
				<div className="flex p-5 pl-0">
					<h1 className="text-7xl text-slate-200 font-bold p-2 pt-0">01</h1>
					<div className="flex-col">
						<div className="flex">
							<img className="w-6 h-6 rounded-full mr-3" src="Assets/profile-pic.jpg" alt="" />
							<h2 className="text-xl font-semibold mb-1">Sam Winchester</h2>
						</div>
						<h1 className="text-2xl font-bold mb-2">What kind of house doesn't have salt?</h1>
						<div className="flex">
							<h4>jun 11</h4>
							<p className="text-3xl font-bold m-2 -mt-3.5">.</p>
							<h4>20 min read</h4>
						</div>
					</div>
				</div>
				<div className="flex p-5 pl-0">
					<h1 className="text-7xl text-slate-200 font-bold p-2 pt-0">02</h1>
					<div className="flex-col">
						<div className="flex">
							<img className="w-6 h-6 rounded-full mr-3" src="Assets/profile-pic.jpg" alt="" />
							<h2 className="text-xl font-semibold mb-1">Dean Winchester</h2>
						</div>
						<h1 className="text-2xl font-bold mb-2">Well, I'll say it again. Monsters I get. People are crazy.</h1>
						<div className="flex">
							<h4>jun 11</h4>
							<p className="text-3xl font-bold m-2 -mt-3.5">.</p>
							<h4>20 min read</h4>
						</div>
					</div>
				</div>
				<div className="flex p-5 pl-0">
					<h1 className="text-7xl text-slate-200 font-bold p-2 pt-0">03</h1>
					<div className="flex-col">
						<div className="flex">
							<img className="w-6 h-6 rounded-full mr-3" src="Assets/profile-pic.jpg" alt="" />
							<h2 className="text-xl font-semibold mb-1">Fergus Macleod</h2>
						</div>
						<h1 className="text-2xl font-bold mb-2">I was born to direct.</h1>
						<div className="flex">
							<h4>jun 11</h4>
							<p className="text-3xl font-bold m-2 -mt-3.5">.</p>
							<h4>20 min read</h4>
						</div>
					</div>
				</div>
				<div className="flex p-5 pl-0">
					<h1 className="text-7xl text-slate-200 font-bold p-2 pt-0">04</h1>
					<div className="flex-col">
						<div className="flex">
							<img className="w-6 h-6 rounded-full mr-3" src="Assets/profile-pic.jpg" alt="" />
							<h2 className="text-xl font-semibold mb-1">Robert Singer</h2>
						</div>
						<h1 className="text-2xl font-bold mb-2">If you're going to be STUPID, At least be SMART about it</h1>
						<div className="flex">
							<h4>jun 11</h4>
							<p className="text-3xl font-bold m-2 -mt-3.5">.</p>
							<h4>20 min read</h4>
						</div>
					</div>
				</div>
				<div className="flex p-5 pl-0">
					<h1 className="text-7xl text-slate-200 font-bold p-2 pt-0">05</h1>
					<div className="flex-col">
						<div className="flex">
							<img className="w-6 h-6 rounded-full mr-3" src="Assets/profile-pic.jpg" alt="" />
							<h2 className="text-xl font-semibold mb-1">Castiel: The Angel</h2>
						</div>
						<h1 className="text-2xl font-bold mb-2">I don't understand that reference.</h1>
						<div className="flex">
							<h4>jun 11</h4>
							<p className="text-3xl font-bold m-2 -mt-3.5">.</p>
							<h4>20 min read</h4>
						</div>
					</div>
				</div>
				<div className="flex p-5 pl-0">
					<h1 className="text-7xl text-slate-200 font-bold p-2 pt-0">06</h1>
					<div className="flex-col">
						<div className="flex">
							<img className="w-6 h-6 rounded-full mr-3" src="Assets/profile-pic.jpg" alt="" />
							<h2 className="text-xl font-semibold mb-1">Meg Masters</h2>
						</div>
						<h1 className="text-2xl font-bold mb-2">Do I look like Google to you?</h1>
						<div className="flex">
							<h4>jun 11</h4>
							<p className="text-3xl font-bold m-2 -mt-3.5">.</p>
							<h4>20 min read</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Trending
