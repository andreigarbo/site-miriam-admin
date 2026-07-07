import { HTTP_METHOD, Request } from './request';

class GetAllAnalyticsRequest extends Request {
  constructor() {
    const method = HTTP_METHOD.GET;
    const module = 'analytics';
    const endpoint = 'get-analytics-data';
    super(method, module, endpoint);
  }
}

export { GetAllAnalyticsRequest };
