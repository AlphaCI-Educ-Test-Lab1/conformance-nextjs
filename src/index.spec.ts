import { SERVICE_NAME } from './index';

describe('conformance-nextjs', () => {
  it('should export SERVICE_NAME', () => {
    expect(SERVICE_NAME).toBe('conformance-nextjs');
  });
});
