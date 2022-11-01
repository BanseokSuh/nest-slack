import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// 환경변수를 외부 api를 통해서도 가져올 수 있다.
const getEnv = async () => {
  // const response = await axios.get('/비밀키요청');
  // return response;
};

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [getEnv] })],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
