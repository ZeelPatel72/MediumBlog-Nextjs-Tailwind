import React from 'react'

function Footer() {
	return (
		<div>
			<div className="p-10  bg-gray-800 border-2 border-yellow-600">
				<div className="grid-cols-4 sm:grid md:grid-cols-4 xl:grid-cols-6 3xl:flex">
					<p className="uppercase text-xl py-5 px-10 cursor-pointer text-yellow-400">Help</p>
					<p className="uppercase text-xl py-5 px-10 cursor-pointer text-yellow-400">Status</p>
					<p className="uppercase text-xl py-5 px-10 cursor-pointer text-yellow-400">Writers</p>
					<p className="uppercase text-xl py-5 px-10 cursor-pointer text-yellow-400">Blog</p>
					<p className="uppercase text-xl py-5 px-10 cursor-pointer text-yellow-400">Careers</p>
					<p className="uppercase text-xl py-5 px-10 cursor-pointer text-yellow-400">Privacy</p>
					<p className="uppercase text-xl py-5 px-10 cursor-pointer text-yellow-400">Terms</p>
					<p className="uppercase text-xl py-5 px-10 cursor-pointer text-yellow-400">About</p>
					<p className="uppercase text-xl py-5 px-10 cursor-pointer text-yellow-400">Knowable</p>
				</div>
			</div>
		</div>
	)
}

export default Footer
