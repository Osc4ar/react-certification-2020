import { storage } from './storage';

describe('Storage operations', () => {
  it('Set correctly', () => {
    storage.set('test', 'some value');

    const retrievedValue = storage.get('test');

    expect(retrievedValue).toEqual('some value');
  });

  it('Cannot get not defined key', () => {
    expect(storage.get('not defined')).toBeNull();
  });
});
