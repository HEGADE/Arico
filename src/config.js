import { LocalStorage } from "./helper/localStorage";  
export let _token = LocalStorage.getItem();

export const config={
    headers:{
        "content-type":"application/json"
    }
}