enum HTTP_METHOD {
  GET = 'GET',
  POST = 'POST',
}

class Request {
  method: HTTP_METHOD;
  location: string;
  module: string;
  endpoint: string;
  params?: string[];

  constructor(method: HTTP_METHOD, module: string, endpoint: string, params?: string[]) {
    this.method = method;
    this.module = module;
    this.endpoint = endpoint;
    this.params = params;
    this.location = import.meta.env.SERVER_URL;
  }

  public dispatch() {}

  private buildURL(module: string, endpoint: string): string {
    return this.location + '/' + module + '/' + endpoint;
  }

  private async get(module: string, endpoint: string, params?: string): Promise<Response> {
    const requestUrl = this.buildURL(module, endpoint);

    let response = null;
  }
}

export { Request };
