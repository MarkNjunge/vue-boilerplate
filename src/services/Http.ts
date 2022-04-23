import store from "@/store";
import { config } from "./config";

export class Http {
  static async get<T>(endpoint: string): Promise<T> {
    return Http.request<T>(endpoint, { method: "GET" });
  }

  static async post<T>(endpoint: string, data: any): Promise<T> {
    const headers = new Headers();
    headers.set("Content-Type", "application/json");

    return Http.request<T>(endpoint, { method: "POST", headers, body: JSON.stringify(data) });
  }

  private static async request<T>(endpoint: string, init: RequestInit): Promise<T> {
    return new Promise((resolve, reject) =>
      fetch(`${config.apiUrl}${endpoint}`, { ...init, credentials: "include" })
        .then(async r => {
          let result;

          try {
            result = await r.json();
          } catch (e) {
            throw new Error("Failed to parse json");
          }

          if (r.ok) {
            resolve(result);

            return;
          }


          // if (r.status == 401") {
          //   void Store.dispatch("auth/signOut").catch(console.error);
          //   return;
          // }

          // store.commit("ui/addBanner", { type: "error", message: result.message, timeout: 0 });
          reject(result);
        })
        .catch(err => {
          console.error(err);
          reject(err);
          // store.commit("ui/addBanner", { type: "error", message: err.message, timeout: 0 });
        }),
    );
  }
}
