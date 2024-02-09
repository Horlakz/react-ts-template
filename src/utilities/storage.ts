import Cookies from "js-cookie";

interface StorageInterface {
  setItem(key: string, value: string): void;
  getItem(key: string): unknown;
  deleteItem(key: string): void;
  checkItem(key: string): boolean;
}

class CookieStorage implements StorageInterface {
  setItem(key: string, value: string) {
    return Cookies.set(key, value, {
      expires: 0.5,
      sameSite: "strict",
    });
  }

  getItem(key: string) {
    return Cookies.get(key);
  }

  checkItem(key: string) {
    return Cookies.get(key) != undefined || Cookies.get(key) != null;
  }

  deleteItem(key: string) {
    Cookies.remove(key);
  }
}

class LocalStorage implements StorageInterface {
  private isWindow: boolean = typeof window !== "undefined";

  setItem(key: string, value: string) {
    this.isWindow && window.localStorage.setItem(key, value);
  }

  getItem(key: string) {
    return this.isWindow ? window.localStorage.getItem(key) : "";
  }

  checkItem(key: string) {
    return this.getItem(key) != null;
  }

  deleteItem(key: string) {
    this.isWindow && window.localStorage.removeItem(key);
  }
}

export class Storage implements StorageInterface {
  private storageClass: StorageInterface;

  constructor(storeType: "cookie" | "local" = "cookie") {
    switch (storeType) {
      case "cookie":
        this.storageClass = new CookieStorage();
        break;
      case "local":
        this.storageClass = new LocalStorage();
        break;
    }
  }

  setItem(key: string, value: string) {
    this.storageClass.setItem(key, value);
  }

  getItem(key: string) {
    return this.storageClass.getItem(key);
  }

  checkItem(key: string) {
    return this.storageClass.checkItem(key);
  }

  deleteItem(key: string) {
    this.storageClass.deleteItem(key);
  }
}
