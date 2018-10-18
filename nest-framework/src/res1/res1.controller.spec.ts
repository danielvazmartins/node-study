import { Test, TestingModule } from '@nestjs/testing';
import { Res1Controller } from './res1.controller';
import { Res1Service } from './res1.service';

describe('Res1 Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [Res1Controller],
      providers: [Res1Service]
    }).compile();
  });
  it('should be defined', () => {
    const controller: Res1Controller = module.get<Res1Controller>(Res1Controller);
    expect(controller).toBeDefined();
  });
});
