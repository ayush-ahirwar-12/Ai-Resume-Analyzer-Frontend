import api from "@/config/axios";
import axios from "axios";

export const uploadFile = async (file: File) => {
    const filename = file.name + Date.now();

    //get pre-signed url
    const urlRes = await api.post("/api/upload-url", {
        filename,
        contentType: file.type
    })

    const { url, key } = urlRes.data;


    //upload to s3
    await axios.put(url, file, {
        headers: {
            "Content-Type": file.type
        }
    })

//save metadata
    const saveRes = await api.post("/api/save")


}