import { Request } from '../requests/request';

class HttpService {
  static #instance: HttpService;
  serverUrl!: string;

  constructor() {
    if (!HttpService.#instance) {
      this.serverUrl = import.meta.env.SERVER_URL;

      if (!this.serverUrl) {
        throw new Error('');
      }

      HttpService.#instance = this;
    }

    return HttpService.#instance;
  }

  // public dispatch(request: Request): Response {}
}
