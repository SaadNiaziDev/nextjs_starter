import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<div className='navbar bg-base-100'>
			<Link href='/'>Home</Link>
			<Link href='/posts'>Posts</Link>
			<Link href='/comments'>Comments</Link>
			<Link href='/users'>Users</Link>
		</div>
	);
};

export default Navbar;
