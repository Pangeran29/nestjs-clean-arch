export interface IBaseRepository<T> { 
  create(data: any): Promise<T>;

  update(id: number | string, data: any): Promise<T | null>;

  delete(id: number | string): Promise<boolean>; 

  findOne(options: any): Promise<T | null>;

  findMany(options: any): Promise<T[]>;
}
