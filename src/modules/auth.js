const authFunc = async (login, password, imei) => {

  console.log('workkkkkkkkk')

  const data = JSON.stringify({
    login,
    password,
    IMEI: imei,
    Name_app: 'connect',
  });

  console.log(data)

  // const res = await fetch('https://ecohospital.ru:40443/api/client_login', {
  const res = await fetch(`https://ecohospital.ru:40443/api/client_login?json=${data}`
    // method: 'GET',
    // headers: {
    //   'Content-Type': 'application/json',
    // },
    // body: JSON.stringify({
    //   login,
    //   password,
    //   IMEI: imei,
    //   Name_app: 'connect'
    // })
  // }
  );
  console.log('wwwwwwwwww')
  console.log(res);

}

const auth = {
  authFunc
}

export default auth
