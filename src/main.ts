// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   const port = process.env.PORT || 3000;
//   await app.listen(port);
// }

// bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // This allows the API to be accessed from other domains (common for submissions)
  app.enableCors(); 
  
  await app.init();
  
  // This is the magic part for Vercel:
  // It returns the underlying Express instance that Vercel expects.
  const expressApp = app.getHttpAdapter().getInstance();
  return expressApp;
}

// Export the bootstrap function for Vercel's serverless environment
export default bootstrap();
