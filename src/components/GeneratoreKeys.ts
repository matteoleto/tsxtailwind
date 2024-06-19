export function LoginAPI():Promise<string|null>
{
  const username='zextras_delbianco_davide'
  const password='ix6s4OyT8R'
  let headers = new Headers();
  headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));

  return fetch('https://login.meteomatics.com/api/v1/token', {
      method: 'GET', headers: headers
  }).then(function (resp) {
      return resp.json();
  }).then(function (data) {
      var token:string = data.access_token;
      return token
  }).catch(function (err) {
      console.log('something went wrong', err);
      return null
  })
}