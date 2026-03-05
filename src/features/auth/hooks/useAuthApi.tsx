import * as api from "@/api"
import { useMutation } from "@tanstack/react-query"

export const useLogin=()=>{
    return useMutation({
        mutationKey:["login"],
    mutationFn:(data:FormData)=>api.login(data),
    retry:0
    })
};