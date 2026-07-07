enum HTTP_METHOD {
  GET = 'GET',
  POST = 'POST',
}

class Request {
  method: HTTP_METHOD;
  module: string;
  endpoint: string;
  params?: { [index: string]: string };

  constructor(
    method: HTTP_METHOD,
    module: string,
    endpoint: string,
    params?: { [index: string]: string },
  ) {
    this.method = method;
    this.module = module;
    this.endpoint = endpoint;
    this.params = params;
  }

  public authenticate() {}
}

export { HTTP_METHOD, Request };
