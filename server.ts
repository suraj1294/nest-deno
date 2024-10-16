import { NestFactory } from "@nestjs/core";
import { Module } from "@nestjs/common";
import "@nestjs/platform-express";
import { HelloModule } from "./hello/hello.module.ts";

@Module({ imports: [HelloModule] })
class AppModule {}
const app = await NestFactory.create(AppModule);
app.listen(Deno.env.get("PORT") || 8000);
