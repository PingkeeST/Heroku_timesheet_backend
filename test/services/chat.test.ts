import assert from 'assert';
import app from '../../src/app';

describe('\'chat\' service', () => {
  it('registered the service', () => {
    const service = app.service('chat');

    assert.ok(service, 'Registered the service');
  });
});
