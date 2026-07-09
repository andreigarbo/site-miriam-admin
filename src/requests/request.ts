enum HTTP_METHOD {
  GET = 'GET',
  POST = 'POST',
}

type requestObject = {
  method: HTTP_METHOD;
  headers?: { [index: string]: string };
  body?: string;
};

interface CustomResponse extends Response {
  token?: string;
  message?: string;
  data?: object[];
}

class Request {
  method: HTTP_METHOD;
  module: string;
  endpoint: string;
  params?: { [index: string]: string };
  headers?: { [index: string]: string };

  constructor(
    method: HTTP_METHOD,
    module: string,
    endpoint: string,
    params?: { [index: string]: string },
    headers?: { [index: string]: string },
  ) {
    this.method = method;
    this.module = module;
    this.endpoint = endpoint;
    if (params) {
      this.params = params;
    }
    if (headers) {
      this.headers = headers;
    }
  }

  private buildURL(): string {
    const serverLocation = import.meta.env.VITE_SERVER_URL;
    return serverLocation + '/' + this.module + '/' + this.endpoint;
  }

  private buildRequestObject(): requestObject {
    const obj = {} as requestObject;
    obj.method = this.method;
    obj.headers = { 'Content-Type': 'application/json' };

    if (this.headers) {
      obj.headers = { ...obj.headers, ...this.headers };
    }

    if (this.params) {
      obj.body = JSON.stringify(this.params);
    }
    return obj;
  }

  public async dispatch(): Promise<CustomResponse | null> {
    try {
      const url = this.buildURL();
      const obj = this.buildRequestObject();
      const response = await fetch(url, obj);
      const body = await response?.json();
      body['status'] = response['status'];
      body['ok'] = response['ok'];
      return body;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export { HTTP_METHOD, Request };
export type { CustomResponse };
