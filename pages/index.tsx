import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Discovery from '../components/discovery'
import Header from '../components/Header'
import Trending from '../components/Trending'

const Home: NextPage = () => {
	return (
		<div className="max-w-7xl mx-auto">
			<Head>
				<title>Medium Blog</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Banner />
			<Trending />
			<Discovery />
		</div>
	)
}

export default Home
