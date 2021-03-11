const engine = require('./engine');

describe('Test of search engine function', () => {
  it('Return of search engine', async () => {
    const rooms = await engine("15032021", "16032021");
    expect(rooms).toBeDefined();
    expect(rooms.length >= 0).toBeTruthy();
  });
});