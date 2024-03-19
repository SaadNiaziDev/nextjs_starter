import Link from "next/link";
import db from "../db.json";
import Search from "@/components/Inputs/Search";
import Image from "next/image";
export default function Home() {
	return (
		<>
			<main className='flex min-h-screen flex-col items-center'>
				<nav className='navbar-center sticky top-0 flex w-full  p-5  bg-slate-900'>
					<div className='navbar-start flex items-center gap-5'>
						<Image src='/static/torrent.png' width={80} height={60} alt='home' />
						<span className='text-2xl font-light text-gray-400'>HD movies all in one place.</span>
					</div>
					<div className='navbar-end text-end  flex items-center gap-4'>
						<Search />
						<Link href='/4k' className='hover:text-gray-600'>
							4K
						</Link>
						<Link href='/trending' className='hover:text-gray-600'>
							Trending
						</Link>
						<Link href='/browse' className='hover:text-gray-600'>
							Browse Movies
						</Link>
					</div>
				</nav>

				<div className='flex flex-col items-center space-y-3'>
					<div className='text-3xl font-bold text-white'>Download YTS YIFY movies: HD smallest size</div>
					<div className='text-wrap w-2/3 text-center'>
						Welcome to the official YTS.MX website. Here you can browse and download YIFY movies in excellent 720p,
						1080p, 2160p 4K and 3D quality, all at the smallest file size. YTS Movies Torrents.
					</div>
				</div>
				<footer className='navbar flex  bottom-0 justify-center items-center  w-full bg-slate-900'>
					<div className='container flex flex-col p-2 gap-2'>
						<div className='row'>
							<ul className='flex m-0 p-0 gap-3'>
								<li>YTS © 2011 - 2024</li>-<li>Blog</li>-<li>DMCA</li>-<li>API</li>-<li>RSS</li>-<li>Contact</li>-
								<li>Browse Movies</li>-<li>Requests</li>-<li>Login</li>-<li>Language</li>
							</ul>
						</div>
						<div className='row'>
							<ul className='flex m-0 p-0 gap-3'>
								<li>EZTV</li>-<li>YIFY Status</li>-<li>YTS Proxies</li>-<li>YTS Proxies (TOR)</li>-
								<li>Follow @ytsyify</li>
							</ul>
						</div>
						<div className='row text-center w-full'>
							<div>By using this site you agree to and accept our User Agreement, which can be read here.</div>
						</div>
					</div>
				</footer>
			</main>
		</>
	);
}
