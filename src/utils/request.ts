import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

interface IOption {
  method: string;
  body?: string;
}

interface IGetUrlWithParamsConfig {
  method: string;
  uri: Partial<URL>;
  body: object;
}

async function req<T>(endPoint: string, query: object): Promise<T> {
  const { method, uri, body }: IGetUrlWithParamsConfig = getUrlWithParamsConfig(
    endPoint,
    query,
  );

  const options: IOption = {
    method,
  };

  if (Object.keys(body).length > 0) {
    options.body = JSON.stringify(body);
  }

  const req = await fetch(Url.format(uri), options).then((res) => res.json());
  return req;
}

export default req;
