export default class ApiServie {
  _apiBase = "http://swapi.co/api'";
  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  };
  performAction = async (url, method, data) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      method,
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  };

  getAllСartridges = async () => {
    const res = await this.getResource("/cartridge/");
    return res.results;
  };
  getCartridge = async (id) => {
    const res = await this.getResource(`/cartridge/${id}`);
    return res.results;
  };

  saveCartridge = async (id = null, data) => {
    const method = id ? "PUT" : "POST";
    const url = id ? `/cartridge/${id}` : "/cartridge/";
    const res = await this.performAction(url, method, data);
    return res.results;
  };
}
