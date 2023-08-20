export const KEY_ACCESS_TOKEN="access_token";

export function getIteam(key){
    return localStorage.getItem(key)
}

export function setIteam(key, value){
    localStorage.setItem(key , value)
}

export function removeIteam(key){
     localStorage.removeItem(key)
}