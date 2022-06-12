import axios from "axios";

export default class {
    instance: any

    constructor() {
        this.instance = axios.create()
        // this.instance.defaults.baseURL 
        this.instance.interceptors.request.use(
            (config: any) => {
                return config;
            },
            (error: any) => {
                return Promise.reject(error);
            }
        )
    }

    async get(url: string): Promise<any> {
        return await this.instance.get(url)
    }

    async post(url: string, data: object): Promise<any> {
        return await this.instance.post(url, data)
    }
}