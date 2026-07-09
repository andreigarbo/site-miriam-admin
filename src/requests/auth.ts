import { HTTP_METHOD, Request } from './request';
import { getJwt } from '@/services/JWTService';

class LoginRequest extends Request {
  constructor(username: string, password: string) {
    const method = HTTP_METHOD.POST;
    const module = 'auth';
    const endpoint = 'login';
    const params = {
      username,
      password,
    };
    super(method, module, endpoint, params, undefined);
  }
}

class VerifyTwoFactorRequest extends Request {
  constructor(code: string) {
    const method = HTTP_METHOD.POST;
    const module = 'auth';
    const endpoint = '2fa';
    const params = {
      twofacode: code,
    };
    const headers = {
      Authorization: 'Bearer ' + getJwt(),
    };
    super(method, module, endpoint, params, headers);
  }
}

class RefreshTokenRequest extends Request {
  constructor() {
    const method = HTTP_METHOD.POST;
    const module = 'auth';
    const endpoint = 'refresh-token';
    const headers = {
      Authorization: 'Bearer ' + getJwt(),
    };
    super(method, module, endpoint, undefined, headers);
  }
}

export { LoginRequest, VerifyTwoFactorRequest, RefreshTokenRequest };
