import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export default class {
    instance: AxiosInstance

    constructor() {
        this.instance = axios.create()
        // this.instance.defaults.baseURL 
        this.instance.interceptors.request.use(
            (config: AxiosRequestConfig<any>) => {
                return config;
            },
            (error: any) => {
                return Promise.reject(error);
            }
        )
    }

    async get(url: string, params?: object): Promise<any> {
        return await this.instance.get(url, { params })
    }

    async post(url: string, data: object): Promise<any> {
        return await this.instance.post(url, data)
    }
}