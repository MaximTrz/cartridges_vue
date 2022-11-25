export default class ApiService {
  _apiBase = "http://cartridges/api";

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    const result = await res.json();
    return result;
  };

  updateItem = async (url, data) => {
    const res = await fetch(`${this._apiBase}${url}`, {
      mode: "cors",
      method: "PUT",
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    const result = await res.json();
    return result;
  };

  insertItem = async (url, data) => {
    let formData = new FormData();
    formData.append("name", data.name);
    const res = await fetch(`${this._apiBase}${url}`, {
      mode: "cors",
      method: "POST",
      body: formData,
    });
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    const result = await res.json();
    return result;
  };

  saveItem = async (id, url, data) => {
    let res;
    if (id) {
      res = await this.updateItem(url, data);
    } else {
      res = await this.insertItem(url, data);
    }
    const result = await res;
    return result;
  };

  getAllСartridges = async () => {
    const res = await this.getResource("/cartridge/");
    return res;
  };

  getCartridge = async (id) => {
    const res = await this.getResource(`/cartridge/${id}`);
    return res.results;
  };

  saveCartridge = async (id = null, data) => {
    let url = id ? `/cartridge/${id}` : "/cartridge/";
    const res = await this.saveItem(id, url, data);
    return res;
  };
}
