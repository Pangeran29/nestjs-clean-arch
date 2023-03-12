import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { PostgresModule } from './core/database/postgres/postgres.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    PostgresModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
