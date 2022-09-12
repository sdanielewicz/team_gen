const Manager = require("../lib/manager")
 
describe('Manager', () => {
  it('able to create a new Manager', () => {
    const mgmt = new Manager("jon", "001", "jon@company.com", "mygithub", "Office 1A");
    expect(mgmt).toBeDefined();
  });
});

describe('getOffice', () => {
  it('getOffice should return office', () => {
    const testOffice = "Office 1A";
    const mgmt = new Manager("jon", "001", "jon@company.com",testOffice);
    expect(mgmt.getOffice()).toBe(testOffice);
  });
});

describe('getRole', () => {
  it('getRole should return Manager', () => {
    const testRole = "Manager";
    const mgmt = new Manager(testRole);
    expect(mgmt.getRole()).toBe(testRole);
  });
});