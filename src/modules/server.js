const auth = async (login, password, imei) => {

  const data = JSON.stringify({
    login,
    password,
    IMEI: imei,
    Name_app: 'connect',
  });

  // @todo - не работает запрос с тестового - взял с основного сайта
  // const url = 'https://ecohospital.ru:40443/api/client_login';

  const url = 'https://host1.medsafe.tech:40443/api/client_login';

  const res = await fetch(`${url}?json=${data}`);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}` +
      `, received ${res.status}`);
  }

  return await res.json();
};

const enter = async(id_login, TK, IMEI) => {

  const data = JSON.stringify({
    id_login,
    id_people: id_login,
    TK,
    IMEI,
    Name_app: 'connect',
    Name_event: 'list_load',
  });

  // @todo - не работает запрос с тестового - взял с основного сайта
  // const url = 'https://ecohospital.ru:40443/api/test';

  const url = 'https://host1.medsafe.tech:40443/api/test';

  const res = await fetch(`${url}?json=${data}`);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}` +
      `, received ${res.status}`);
  }
  return await res.json();
};

const download = async (id_login, TK, IMEI, id, type) => {

  const data = JSON.stringify({
    id_login,
    id_people: id_login,
    TK,
    IMEI,
    Name_app: 'connect',
    Name_event: 'get_pic_path',
    id_document: id,
    doc_type: type,
  });

  // @todo - не работает запрос с тестового - взял с основного сайта
  // const url = 'https://ecohospital.ru:40443/api/test';

  const url = 'https://host1.medsafe.tech:40443/api/test';

  const res = await fetch(`${url}?json=${data}`);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}` +
      `, received ${res.status}`);
  }
  return await res.json();

};

const server = {
  auth,
  enter,
  download,
};

export default server;
