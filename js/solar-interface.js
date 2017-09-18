import {SolarCalc} from './../js/solar.js';

$(document).ready(function() {
  $('#solar-form').submit(function(event) {
    event.preventDefault();
    let bDay = $("#bDay").val();
    let solarCalculator = new SolarCalc(bDay);
    let age = $('#givenAge');
    let merAge = solarCalculator.getMercury(age);
    let venAge = solarCalculator.getVenus(age);
    let marAge = solarCalculator.getMars(age);
    let jupAge = solarCalculator.getJupiter(age);
    let expectedYears = solarCalculator.timeLeft(world,age);

      $('#solution').append("<li>" + "Your Earth age is:" + age);
      $('#solution').append("<li>" + "Your Mercury age is:" + merAge);
      $('#solution').append("<li>" + "Your Venus age is:" + venAge);
      $('#solution').append("<li>" + "Your Mars age is:" + marAge);
      $('#solution').append("<li>" + "Your Jupiter age is:" + jupAge);
      $('#solution').append("<li>" + expectedYears);
    });
  });
