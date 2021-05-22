import Url from 'url';
import config from '../config';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req(endPoint: keyof typeof config.client.endpoint) {
  const uri = Url.format(getUrlWithParamsConfig(endPoint));
  const req = await fetch(uri).then((res) => res.json());
  return req;
}

export default req;
