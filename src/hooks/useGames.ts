import {useEffect, useState} from "react";
import apiClient from "@/services/api-client";
import {CanceledError} from "axios";
export interface Game{
    id:number,
    name:string,
    background_image:string
}
interface FetchGamesResponse{
    count:number,
    next:string | null,
    previous: string|null,
    results:Game[]
}
const useGames=()=>{
    const [games,setGames]=useState<Game[]>([])
    const [error,setError]=useState(null)
    useEffect(()=>{
        const controller = new AbortController();
        apiClient.get<FetchGamesResponse>('/games',{signal:controller.signal})
            .then(res=>setGames(res.data.results))
            .catch(err=>{
                if (err instanceof CanceledError)
                    return;
                setError(err.message)
            });
        return ():any=> controller.abort

    },[])
    return {games, error}
}
export default useGames