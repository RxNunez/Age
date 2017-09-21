import { SolarCalc } from './../js/solar.js';


describe('SolarCalc', function(){
  let ages;
  beforeEach(function(){
    ages = new SolarCalc("Ryan");
  });

  it('should test whether can instantiate newAge object', function(){
    expect(ages.name).toEqual("Ryan")
  });

  it('should convert age to seconds', function(){
    expect(ages.getSecond(5)).toEqual(157680000000);
  });

  it('should find difference between two dates in years', function() {
    expect(ages.getEarth('2010-10-31')).toEqual(6);
  });

  it('should return earth age in Mercury years', function() {
    expect(ages.getMercury(5)).toEqual(1);
  });

  it('should return earth age in Venus years', function() {
    expect(ages.getVenus(5)).toEqual(3);
  });

  it('should return earth age in Mars years', function() {
  expect(ages.getMars(5)).toEqual(9);
  });

  it('should return earth age in Jupiter years', function() {
    expect(ages.getJupiter(5)).toEqual(59);
  });

  it('should return remaining years on given planet', function() {
    expect(ages.timeLeft("mercury", 5)).toEqual(70.5);
  });

  it('should return a message for exceeding life expectancy', function() {
    expect(ages.timeLeft("mercury", 20)).toEqual("You should be dead on mercury!");
  });

});
