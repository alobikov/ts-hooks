import React from 'react'

type Cache<T> = { [url: string]: T }
type UseFetchProps = {
    url: string;
    options?: RequestInit;
    page?: number
}

export function useFetch<T = unknown>({url, options, page}: UseFetchProps) {
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState('')
    const [data, setData] = React.useState<T | null>(null)

    const cache = React.useRef<Cache<T>>({})

    React.useEffect(() => {
            const fetchData = async () => {
                setLoading(true)

                const pageNumber = page ? `&_page=${page}` : ""
                const finalUrl = url + pageNumber

                if (cache.current[finalUrl]) {
                    setData(cache.current[finalUrl])
                    setLoading(false)
                    return
                }

                console.log('hi, from useFetch hook')
                try {
                    const response = await fetch(finalUrl, options)
                    // check bad server responses
                    if (!response.ok) throw new Error(response.statusText)
                    const data = (await response.json()) as T
                    setData(data)
                    cache.current[finalUrl] = data
                } catch (error) {
                    // check for network errors
                    const err = error as Error
                    setError(err.message)

                } finally {
                    setLoading(false)
                }
            }

            void fetchData()
        }, [url]
    )

    return {data, loading, error}

}