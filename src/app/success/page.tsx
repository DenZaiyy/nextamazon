"use client"

import Container from "@/components/Container";
import Link from "next/link";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {resetCart} from "@/redux/proSlice";

const page = () => {

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(resetCart());
	}, [])

	return (
		<Container className="flex items-center justify-center py-20">
			<div className="min-h-[400px] flex flex-col items-center justify-center gap-5">
				<h2 className="text-4xl font-bold">Your Payment Accepted by nextamazonpro.com</h2>
				<p>
					Now you can view your orders or continue shopping with us.
				</p>
				<div className="flex items-center gap-x-5">
					<Link href={'/order'} className="">
						<button className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold hover:bg-designColor duration-300">
							View Orders
						</button>
					</Link>
					<Link href={'/'} className="">
						<button className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold hover:bg-designColor duration-300">
							Continue Shopping
						</button>
					</Link>
				</div>
			</div>
		</Container>
	)
}

export default page;