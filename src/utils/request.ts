import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req<T>(endPoint: string, query: object): Promise<T> {
  const uri = Url.format(getUrlWithParamsConfig(endPoint, query));
  const req = await fetch(uri).then((res) => res.json());
  return req;
}

export default req;
