const Intern = require("../lib/Intern")
 
describe('Intern', () => {
  it('able to create a new Intern', () => {
    const intr = new Intern("jon", "001", "jon@company.com", "mygithub", "UCI");
    expect(intr).toBeDefined();
  });
});

describe('getSchool', () => {
  it('getSchool should return school', () => {
    const testSchool = "UCI";
    const intr = new Intern("jon", "001", "jon@company.com",testSchool);
    expect(intr.getSchool()).toBe(testSchool);
  });
});

describe('getRole', () => {
  it('getRole should return Intern', () => {
    const testRole = "Intern";
    const intr = new Intern(testRole);
    expect(intr.getRole()).toBe(testRole);
  });
});