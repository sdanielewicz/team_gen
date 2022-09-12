const Engineer = require("../lib/engineer")
 
describe('Engineer', () => {
  it('able to create a new engineer', () => {
    const eng = new Engineer("jon", "001", "jon@company.com", "mygithub");
    expect(eng).toBeDefined();
  });
});

describe('getGit', () => {
  it('getGit should return github', () => {
    const testGit = "mygithub";
    const eng = new Engineer("jon", "001", "jon@company.com",testGit);
    expect(eng.getGit()).toBe(testGit);
  });
});

describe('getRole', () => {
  it('getRole should return Engineer', () => {
    const testRole = "Engineer";
    const eng = new Engineer(testRole);
    expect(eng.getRole()).toBe(testRole);
  });
});