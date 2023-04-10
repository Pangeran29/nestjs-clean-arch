import { Module } from '@nestjs/common';
import { InfraModule } from './infra/infra.module';
import { CoreModule } from './core/core.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    CoreModule,
    CommonModule,
    InfraModule
  ]
})
export class AppModule {}
