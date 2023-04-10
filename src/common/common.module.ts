import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigModuleOpts } from './configs/nest.config';

@Module({
  imports: [
    ConfigModule.forRoot(ConfigModuleOpts),
  ] 
})
export class CommonModule {}
