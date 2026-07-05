enum HTTP_METHOD {
  GET = 'GET',
  POST = 'POST',
}

class Request {
  method: HTTP_METHOD;
  target: string;
  params?: string[];

  constructor(method: HTTP_METHOD, target: string, params?: string[]) {
    this.method = method;
    this.target = target;
    this.params = params;
  }
}

export { Request };
