import { HTTP_METHOD, Request } from './request';

class LoginRequest extends Request {
  constructor(username: string, password: string) {
    const method = HTTP_METHOD.POST;
    const module = 'auth';
    const endpoint = 'login';
    const params = {
      username,
      password,
    };
    super(method, module, endpoint, params);
  }
}

class VerifyTwoFactorRequest extends Request {
  constructor(code: string) {
    const method = HTTP_METHOD.POST;
    const module = 'auth';
    const endpoint = '2fa';
    const params = {
      code,
    };
    super(method, module, endpoint, params);
  }
}

class RefreshTokenRequest extends Request {
  constructor() {
    const method = HTTP_METHOD.POST;
    const module = 'auth';
    const endpoint = 'refresh-token';
    super(method, module, endpoint);
  }
}

export { LoginRequest, VerifyTwoFactorRequest, RefreshTokenRequest };
