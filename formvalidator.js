function validateEmail(email){

  if(!email){
    return false;
  }

  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return pattern.test(email);

}
