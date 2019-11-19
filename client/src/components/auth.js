const Auth = {
    authenticated:false,
    isLoading:true,
    login(cb){
      this.authenticated = true;
      this.isLoading=false;
      cb();
    },
    logout(cb) {
      this.authenticated = false;
      this.isLoading=false;
      cb();
    },
}
  
export default Auth;
  