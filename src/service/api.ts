import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export default class Api {
	private instance: AxiosInstance;

	constructor(baseURL = "", timeout = 30000) {
		this.instance = axios.create({
			baseURL,
			timeout,
		});

		this.instance.interceptors.request.use(
			(config) => {
				// const ssn = infoUtil.getSsn()

				// if (ssn !== null) {
				//     config.headers = {
				//         ssn
				//     }
				// }

				return config;
			},
			(error) => {
				console.log({ error });
				return Promise.reject(error);
			}
		);

		this.instance.interceptors.response.use(
			(response) => {
				console.log({ response });
				return response;
			},
			(error) => {
				console.log({ error });
				return new Promise((res) => {
					res({
						data: {
							result: {
								msg: error.message,
								code: -1,
							},
						},
					});
				});
			}
		);
	}

	protected async get(url: string, params?: any) {
		return await this.instance.get(url, { params });
	}

	protected async post(url: string, data: any, config?: AxiosRequestConfig) {
		return await this.instance.post(url, data, config);
	}
}
