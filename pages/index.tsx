import type { NextPage } from 'next'
import { Main } from 'next/document'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Discovery from '../components/Discovery'
import Header from '../components/Header'
import Story from '../components/Story'
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
			<Story />
		</div>
	)
}

export default Home
