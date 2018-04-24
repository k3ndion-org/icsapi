import { Module } from '@nestjs/common';
import { MailerModule } from '@nest-modules/mailer';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MailerModule.forRoot(
      {
        transport: 'smtps://user%40gmail.com:pass@smtp.gmail.com',
        defaults: {
          from:'"nest-modules" <modules@nestjs.com>',
        },
        templateDir: './src/common/email-templates'
      }
    ),
    AuthModule, 
    UserModule,
    DatabaseModule
  ],
})
export class ApplicationModule {}