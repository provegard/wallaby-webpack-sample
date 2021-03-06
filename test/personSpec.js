import Person from '../src/Person';

describe('Person', () => {
  it('should report name', () => {
    expect(new Person('John').name).to.equal('John');
  });

  it("should add a chart", () => {
    const person = new Person('Bob');
    person.addChart();
    expect(person.chart).to.be.an('object');
  });
});
