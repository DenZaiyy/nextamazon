import React from 'react';
import {getWatches} from "@/helpers";
import Container from "@/components/Container";
import Product from "@/components/Product";

const page = async () => {

	const products = await getWatches();

	return (
		<Container>
			<div className="border-b-[1px] border-b-zinc-400 pb-4 flex items-center justify-between">
				<h2>
					Watches
				</h2>
				<p>
					Get the watch you want
				</p>
			</div>
			<p className="mt-4 text-zinc-500 font-semibold">
				Showing all {products.length} results
			</p>
			<Product products={products} />
		</Container>
	);
};

export default page;
