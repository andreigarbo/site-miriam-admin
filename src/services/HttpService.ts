import process from 'node:process';
import { Request } from '../requests/request';

class HttpService {
  static #instance: HttpService;

  constructor() {
    if (!HttpService.#instance) {
      HttpService.#instance = this;
    }

    return HttpService.#instance;
  }

  public dispatch(request: Request) {
    const serverUrl = process.env.SERVER_URL;
  }
}
