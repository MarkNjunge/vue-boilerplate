export type BannerType = "info" | "error";

export interface Banner {
  id?: number;
  type: BannerType;
  message: string;
  timeout?: number;
}
