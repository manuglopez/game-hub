import {useEffect, useState} from "react";
import apiClient from "@/services/api-client";
import {CanceledError} from "axios";

export interface Platform {
    id: number,
    name: string,
    slug: string,

}

export interface Game {
    id: number,
    name: string,
    background_image: string
    parent_platforms:{platform:Platform}[],
    metacritic:number
}

interface FetchGamesResponse {
    count: number,
    next: string | null,
    previous: string | null,
    results: Game[]
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState(null)
    const [isLoading,setLoading]=useState(false)
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true)
        apiClient.get<FetchGamesResponse>('/games', {signal: controller.signal})
            .then(res => {
                setGames(res.data.results)
                setLoading(false)
            })
            .catch(err => {
                if (err instanceof CanceledError)
                    return;
                setError(err.message)
                setLoading(false)
            })

        return (): any => controller.abort

    }, [])
    return {games, error, isLoading}
}
export default useGames