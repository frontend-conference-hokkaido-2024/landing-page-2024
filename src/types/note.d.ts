declare module "note" {
  // パラメータが多いので、必要なところ以外はunknownにしておく
  type Note = {
    name: string;
    eyecatch: string;
    key: string;
    [key: string]: unknown;
  }
}
