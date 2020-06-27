import assert from 'assert';
import app from '../../src/app';

describe('\'profile\' service', () => {
  it('registered the service', () => {
    const service = app.service('profile');

    assert.ok(service, 'Registered the service');
  });
});
