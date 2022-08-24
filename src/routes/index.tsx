import React, { useEffect } from 'react'
import Api from '../service/api'

const Main = () => {
    const api = new Api()

    useEffect(() => {
        const test = async () => {

            const res = await api.get("https://jsonplaceholder.typicode.com/comments", { postId: 1 })

            console.log({ res })
        }

        test()
    }, [])

    return (
        <div>Main</div>
    )
}

export default Main