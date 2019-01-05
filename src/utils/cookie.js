export default {
  set(name, value, days = 90, path = '/') {
    const expires = new Date(Date.now() + (days * 864e5).toGMTString());
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=${path}`;
  },
  get(name) {
    return document.cookie.split('; ').reduce((r, v) => {
      const parts = v.split('=');
      return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, undefined);
  },
  delete(name, path = '/') {
    this.set(name, '', -1, path);
  },
};
