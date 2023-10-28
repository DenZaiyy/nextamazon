"use client";

import React from 'react';
import {signOut, useSession} from "next-auth/react";
import Image from "next/image";

const ProfileInfo = () => {

	const  {data: session} = useSession();
	return (
		<div>
			<div className="flex items-center gap-4">
				<Image
					src={session?.user?.image!}
					alt={"user image"}
					width={200}
					height={200}
					className="w-20 h-20 object-cover rounded-full"
				/>
				<div>
					<h2>{session?.user?.name}</h2>
					<h2>{session?.user?.email}</h2>
				</div>
			</div>
			<button
				onClick={() => signOut()}
				className="bg-zinc-950 text-zinc-200 px-8 py-3 font-semibold mt-10 hover:bg-designColor hover:text-black duration-200 rounded-sm">Sign out</button>
		</div>

	);
};

export default ProfileInfo;
