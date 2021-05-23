export interface ProductModel{
  Id: string,
  ProductName: string | undefined,
  ProductContent?: string| undefined,
  ProductPrice?: number | undefined,
  ProductImages?: string[] | undefined,
  CreatedAt: Date| undefined;
}
