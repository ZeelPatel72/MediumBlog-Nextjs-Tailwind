import Link from 'next/link'

function Header() {
	return (
		<header className="flex text-xl justify-between px-5 py-0 mt-0 max-w-8xl mx-auto">
			<div className="flex items-center space-x-5">
				<Link href="/">
					<img className="w-44 object-contain cursor-pointer" src="/Assets/Medium-logo.png" alt="Medium" />
				</Link>
				<div className="hidden md:inline-flex items-center space-x-5">
					<h3 className="cursor-pointer">About</h3>
					<h3 className="cursor-pointer">Contact</h3>
					<h3 className="text-white bg-green-600 px-4 py-1 rounded-full cursor-pointer">Follow</h3>
				</div>
			</div>
			<div className="flex items-center space-x-5 text-green-600">
				<h3 className="cursor-pointer">Sign In</h3>
				<h3 className="border px-4 py-1 rounded-full border-green-600 cursor-pointer">Get Started</h3>
			</div>
		</header>
	)
}

export default Header
