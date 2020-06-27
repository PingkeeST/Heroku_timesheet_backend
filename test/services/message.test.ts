import assert from 'assert';
import app from '../../src/app';

describe('\'message\' service', () => {
  it('registered the service', () => {
    const service = app.service('message');

    assert.ok(service, 'Registered the service');
  });
});
