import { LivyUser } from './app/_models/livyuser';

describe('User', () => {
  it('should create an instance', () => {
    expect(new LivyUser()).toBeTruthy();
  });
});
