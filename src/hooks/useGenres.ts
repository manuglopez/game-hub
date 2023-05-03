import {useEffect, useState} from "react";
import apiClient from "@/services/api-client";
import {Simulate} from "react-dom/test-utils";

import {CanceledError} from "axios";


interface Genre {
    id:number,
    name:string,
    slug:string,
    games_count:number,
    image_background:string
}

interface FetchGenresResponse{
    count:number,
    next:string,
    previous:string,
    results:Genre[]
}
const useGenres=()=>{
    const [genres, setGenres] = useState<Genre[]>([])
    const [error, setError] = useState(null)
    const [isLoading,setLoading]=useState(false)
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true)
        apiClient.get<FetchGenresResponse>('/genres', {signal: controller.signal})
            .then(res => {
                setGenres(res.data.results)
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
    return {genres, error, isLoading}
}
export default useGenres