const Employee = require("../lib/employee")
 
describe('Employee', () => {
  it('able to create a new employee', () => {
    const emp = new Employee("jon", "001", "jon@company.com");
    expect(emp).toBeDefined();
  });
});

describe('getName', () => {
  it('getName should return name', () => {
    const testName = "jon";
    const emp = new Employee(testName, "001", "jon@company.com");
    expect(emp.getName()).toBe(testName);
  });
});

describe('getId', () => {
  it('getId should return ID', () => {
    const testID = "001";
    const emp = new Employee("jon", testID, "jon@company.com");
    expect(emp.getId()).toBe(testID);
  });
});

describe('getEmail', () => {
  it('getEmail should return email', () => {
    const testEmail = "jon@email.com";
    const emp = new Employee("jon", "001", testEmail);
    expect(emp.getEmail()).toBe(testEmail);
  });
});

describe('getRole', () => {
  it('getRole should return Employee', () => {
    const testRole = "Employee";
    const emp = new Employee(testRole);
    expect(emp.getRole()).toBe(testRole);
  });
});