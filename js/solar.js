import { moment } from './../node_modules/moment/moment.js';
export class SolarAge {

  constructor(name) {
    this.name = name;

 }

  getSecond(age){
    const secPerYear = 1000 * 60 * 60 * 24 * 365;
    let sec = ((age * secPerYear));
    return sec;
  }
  getEarth(now, bDay){
    let now = new moment(today);
    let born = new moment(bDay);
    let output = now.diff(born, 'seconds');
    return output;
  }
  getMercury(age){
    let mercury = Math.floor((age*0.24));
    return mercury;
  }
  getVenus(age){
    let venus = Math.floor((age*0.62));
    return venus;
  }
  getMars(age){
    let mars = Math.floor((age*1.88));
    return mars;
  }
  getJupiter(age){
    let jupiter = Math.floor((age*11.86));
    return jupiter;
  }

  timeLeft(world, age){
    const expectancy = 71.5; //world average age 2016
    let lifeLeft ="";
    let mercuryLife = this.getMercury(expectancy);
    let venusLife = this.getVenus(expectancy);
    let marsLife = this.getMars(expectancy);
    let jupiterLife = this.getJupiter(expectancy);
    if (world === "mercury" && age <= mercuryLife){
      lifeLeft = expectancy - this.getMercury(age);
    }else if (world === "venus" && age <= venusLife){
      lifeLeft = expectancy - this.getVenus(age);
    }else if (world === "mars" && age <= marsLife){
      lifeLeft = expectancy - this.getMars(age);
    }else if (world === "jupiter" && age <= jupiterLife){
      lifeLeft = expectancy - this.getJupiter(age);
    }else if((world === "mercury" && age > mercuryLife) || (world === "venus" && age > venusLife) || (world === "mars" && age > marsLife) || (world === "jupiter" && age > jupiterLife)) {
      lifeLeft = `You should be dead on ${world}!`;
    }
    return lifeLeft;
    }

  }
