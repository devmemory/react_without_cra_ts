import React, { useEffect } from "react";
import TestApi from "service/test/test_api";

const Main = () => {
	useEffect(() => {
		const test = async () => {
			const api = new TestApi("https://jsonplaceholder.typicode.com");

			const res = await api.getComment(1);

			console.log({ res });
		};

		test();
	}, []);

	return <div>Main</div>;
};

export default Main;
