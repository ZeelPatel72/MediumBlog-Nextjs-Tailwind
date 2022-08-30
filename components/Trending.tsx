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
							<h2 className="text-xl font-semibold mb-1">Zeel Patel</h2>
						</div>
						<h1 className="text-2xl font-bold mb-2">I am building Medium clone.</h1>
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
							<h2 className="text-xl font-semibold mb-1">Abhishek Trivedi</h2>
						</div>
						<h1 className="text-2xl font-bold mb-2">How to negotiate in interview.</h1>
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
							<h2 className="text-xl font-semibold mb-1">Bhuru Gundandasoo</h2>
						</div>
						<h1 className="text-2xl font-bold mb-2">I've had enough today.</h1>
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
							<h2 className="text-xl font-semibold mb-1">Jay Ganeshu</h2>
						</div>
						<h1 className="text-2xl font-bold mb-2">Breakthought in solar cell technology.</h1>
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
							<h2 className="text-xl font-semibold mb-1">Chinkli Dods</h2>
						</div>
						<h1 className="text-2xl font-bold mb-2">Setting the record straight</h1>
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
							<h2 className="text-xl font-semibold mb-1">Siri Alexa</h2>
						</div>
						<h1 className="text-2xl font-bold mb-2">Will i be able to rent my place soon?</h1>
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
