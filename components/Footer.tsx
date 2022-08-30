import React from 'react'

function Footer() {
	return (
		<div>
			<div className="p-10  bg-gray-800 border-2 border-yellow-600">
				<div className="grid-cols-4 sm:grid md:grid-cols-4 xl:grid-cols-6 3xl:flex">
					<p className="uppercase text-xl my-5 mx-10 cursor cursor-pointer text-yellow-400 hover:text-yellow-600">
						Help
					</p>
					<p className="uppercase text-xl my-5 mx-10 cursor cursor-pointer text-yellow-400 hover:text-yellow-600">
						Status
					</p>
					<p className="uppercase text-xl my-5 mx-10 cursor cursor-pointer text-yellow-400 hover:text-yellow-600">
						Writers
					</p>
					<p className="uppercase text-xl my-5 mx-10 cursor cursor-pointer text-yellow-400 hover:text-yellow-600">
						Blog
					</p>
					<p className="uppercase text-xl my-5 mx-10 cursor cursor-pointer text-yellow-400 hover:text-yellow-600">
						Careers
					</p>
					<p className="uppercase text-xl my-5 mx-10 cursor cursor-pointer text-yellow-400 hover:text-yellow-600">
						Privacy
					</p>
					<p className="uppercase text-xl my-5 mx-10 cursor cursor-pointer text-yellow-400 hover:text-yellow-600">
						Terms
					</p>
					<p className="uppercase text-xl my-5 mx-10 cursor cursor-pointer text-yellow-400 hover:text-yellow-600">
						About
					</p>
					<p className="uppercase text-xl my-5 mx-10 cursor cursor-pointer text-yellow-400 hover:text-yellow-600">
						Knowable
					</p>
				</div>
			</div>
		</div>
	)
}

export default Footer
