class LocalStorage  {
    
constructor(){
    this.key="auth-token"
}
getItem(){
    let token=localStorage.getItem(this.key)
    return token
}
setItem(value){
    localStorage.setItem(this.key,value)
}


}
export { LocalStorage}