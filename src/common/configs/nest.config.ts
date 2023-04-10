import { ConfigModuleOptions } from "@nestjs/config";

export const ConfigModuleOpts: ConfigModuleOptions = {
  isGlobal:true,
  expandVariables: true,
}