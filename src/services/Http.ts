import { config } from "./config";

export class Http {
  static async get<T>(endpoint: string): Promise<T> {
    return Http.request<T>(endpoint, { method: "GET" });
  }

  static async post<T>(endpoint: string, data: any): Promise<T> {
    const headers = new Headers();
    headers.set("Content-Type", "application/json");

    return Http.request<T>(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });
  }

  private static async request<T>(
    endpoint: string,
    init: RequestInit
  ): Promise<T> {
    const res = await fetch(`${config.apiUrl}${endpoint}`, {
      ...init,
      credentials: "include",
    });
    const result = await res.json();
    if (res.ok) {
      return result;
    } else {
      throw new Error(result.message ?? `An error occurred: ${res.status}`);
    }
  }
}
