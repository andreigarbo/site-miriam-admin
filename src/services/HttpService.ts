class HttpService {
  static #instance: HttpService;

  constructor() {
    if (!HttpService.#instance) {
      HttpService.#instance = this;
    }

    return HttpService.#instance;
  }
}
