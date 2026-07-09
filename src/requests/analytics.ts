import { getJwt } from '@/services/JWTService';
import { HTTP_METHOD, Request } from './request';

class GetAllAnalyticsRequest extends Request {
  constructor() {
    const method = HTTP_METHOD.GET;
    const module = 'analytics';
    const endpoint = 'get-analytics-data';
    const headers = {
      Authorization: 'Bearer ' + getJwt(),
    };
    super(method, module, endpoint, undefined, headers);
  }
}

export { GetAllAnalyticsRequest };
