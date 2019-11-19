const Auth = {
    authenticated:false,
    isLoading:true,
    login(cb){
      this.authenticated = true;
      this.isLoading=false;
      setTimeout(cb,200);
    },
    logout(cb) {
      this.authenticated = false;
      this.isLoading=false;
      setTimeout(cb,200);
    },
}
  
export default Auth;
  