const getJwt = () => {
    return 'bearer ' + localStorage.getItem('login-jwt');
  };

  export default getJwt;