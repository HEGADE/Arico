class LocalStorage {
  constructor() {
    this.key = "auth-token";
  }
  static getItem() {
    let token = localStorage.getItem("auth-token");
    return token;
  }
  static setItem(value) {
    localStorage.setItem("auth-token", value);
  }
  static remove(){
    localStorage.removeItem("auth-token")
  }
}
export{ LocalStorage};
