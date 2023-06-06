import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "util/routes";

const App = () => {
	return (
		<main className="main_app">
			<Suspense fallback={<div />}>
				<RouterProvider router={routes} />
			</Suspense>
		</main>
	);
};

export default App;
