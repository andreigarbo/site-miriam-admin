function getJwt(): string {
  const storedJwt = localStorage.getItem('jwt');

  if (!storedJwt) {
    return '';
  }

  return storedJwt;
}

function setJwt(jwt: string) {
  localStorage.setItem('jwt', jwt);
}

export { getJwt, setJwt };
