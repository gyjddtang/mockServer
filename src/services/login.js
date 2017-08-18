import xAxios from '../units/xAxios';

function signIn(options) {
  return xAxios({
    url: '/wisdomschool/phone/login/doLogin',
    method: 'POST',
    data: { ...options }
  });
}

export { signIn };

