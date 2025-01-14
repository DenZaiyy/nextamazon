"use client";

import {SessionProvider} from "next-auth/react";
import React from "react";
import {Provider} from "react-redux";
import {persistor, store} from "@/redux/store";
import {PersistGate} from "redux-persist/integration/react";

const Layout = ({children}:{children: React.ReactNode}) => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={null}>
				<SessionProvider>
					{children}
				</SessionProvider>
			</PersistGate>
		</Provider>
	);
};

export default Layout;
