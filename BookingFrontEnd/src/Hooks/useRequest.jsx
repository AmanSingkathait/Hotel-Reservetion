import { useEffect, useState } from 'react'

const useRequest = (url) => {
    const [data, setdata] = useState([])
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setloading(true)
            try {
                const res = await fetch(url)
                const data = await res.json()
                setdata(data)
                setloading(false)
            } catch (error) {
                seterror(true)
                setloading(false)
            }
        }
        fetchData();
    }, [url])

    const reFetch = async () => {
        setloading(true)
        try {
            const res = await fetch(url)
            const data = await res.json()
            setdata(data)
            setloading(false)
        } catch (error) {
            seterror(true)
            setloading(false)
        }
    }
    return (
        { data, loading, error, reFetch }
    )
}
export default useRequest
