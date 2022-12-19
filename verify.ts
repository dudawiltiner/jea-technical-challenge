export function verify(routeToFoundToken) {
  // console.log(cookieCutter.get('token'));
  if(cookieCutter.get('token')) {
    history.push('/login');
  }

  return
}