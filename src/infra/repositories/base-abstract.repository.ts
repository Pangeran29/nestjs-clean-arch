import { Prisma, PrismaClient } from '@prisma/client';
import { IBaseRepository } from '../interfaces/base-abstract.interface';

export abstract class BaseRepository<T> implements IBaseRepository<T> {
  protected prisma: PrismaClient;
  protected model: Prisma.ModelName;

  constructor(model: Prisma.ModelName) {
    this.prisma = new PrismaClient();
    this.model = model;
  }

  async create(data: any): Promise<T> {    
    return await this.prisma[this.model].create(data);
  }

  async update(
    id: number | string,
    data: any
  ): Promise<T | null> {
    const updatedRecord = await this.prisma[this.model].update({
      where: { id },
      data,
    });

    return updatedRecord || null;
  }

  async delete(id: number | string): Promise<boolean> {
    const deletedRecord = await this.prisma[this.model].delete({
      where: { id },
    });

    return !!deletedRecord;
  }

  async findOne(options: any): Promise<T | null> {
    const record = await this.prisma[this.model].findFirst(options);

    return record || null;
  }

  async findMany(options: any): Promise<T[]> {
    return await this.prisma[this.model].findMany(options);
  }
  
}
