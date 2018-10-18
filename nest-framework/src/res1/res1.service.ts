import { Injectable } from '@nestjs/common';

@Injectable()
export class Res1Service {
    getAll() {
        return [1,2,3,4,5,6]
    }
}
