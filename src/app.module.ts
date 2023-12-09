import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env.development.local"],
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
