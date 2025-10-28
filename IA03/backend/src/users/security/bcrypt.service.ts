import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';

@Injectable()
export class BcryptService {
  async hash(data: string): Promise<string> {
    const saltRounds = 10;
    return hash(data, saltRounds);
  }
}
