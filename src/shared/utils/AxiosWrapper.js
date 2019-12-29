export default class AxiosWrapper {
  constructor(axiosInstance, options) {
    this.axios = axiosInstance;
    this.defaultErrorHandler = options && options.defaultErrorHandler;
    this.defaultSuccessHandler = options && options.defaultSuccessHandler;
  }

  async request(config) {
    return await this.doRequest(config, 'request', arguments);
  }

  async get(url, config) {
    return await this.doRequest(config, 'get', arguments);
  }

  async post(url, data, config) {
    return await this.doRequest(config, 'post', arguments);
  }

  async put(url, data, config) {
    return await this.doRequest(config, 'put', arguments);
  }

  async delete(url, config) {
    return await this.doRequest(config, 'delete', arguments);
  }

  async head(url, config) {
    return await this.doRequest(config, 'head', arguments);
  }

  async options(url, config) {
    return await this.doRequest(config, 'options', arguments);
  }

  async patch(url, data, config) {
    return await this.doRequest(config, 'patch', arguments);
  }

  async doRequest(config, method, params) {
    if (config && config.hasOwnProperty('handleError') && config.handleError === false)
      return await this.axios[method].apply(this.axios, params);

    try {
      const result = await this.axios[method].apply(this.axios, params);

      if (config && config.success) {
        this.defaultSuccessHandler(config.success);
      }
      return result;
    } catch (e) {
      this.defaultErrorHandler(e);
    }
  }
}
