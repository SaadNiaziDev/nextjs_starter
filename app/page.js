import Post from "@/components/Post";
import db from "../db.json";
import Navbar from "@/components/Navbar";
export default function Home() {
	const randomPosts = () => {
		let arr = [];
		for (let i = 0; i < 5; i++) {
			let randomNum = Math.floor(Math.random() * db.post.length);
			arr.push(db.post[randomNum]);
		}
		return arr;
	};
	return (
		<main className='flex min-h-screen flex-col items-center justify-between'>
			<Navbar />
			<span className='text-2xl font-bold'>Blog</span>
			<div className='flex-col space-y-4 mt-3 justify-evenly items-center'>
				{randomPosts().map((item, i) => (
					<Post data={item} key={i} />
				))}
			</div>
		</main>
	);
}
