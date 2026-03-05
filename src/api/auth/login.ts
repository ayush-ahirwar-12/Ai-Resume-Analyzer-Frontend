import api from "@/config/axios"
import { log } from "console";

export const login = async(data:FormData)=>{
    const response = await api.post("/api/auth/login",data);
    console.log(response.data);
    return response.data;
    
};