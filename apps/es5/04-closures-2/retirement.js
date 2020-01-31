function retirement(country, retirementAge) {
  var message = `years left until retirement in ${country}.`;

  return function (yearOfBirth) {
    var today = new Date(Date.now());
    var age = today.getFullYear() - yearOfBirth;
    console.log(`You have ${retirementAge - age} ${message}`);
  };
}

var retirementIndia = retirement('India', 60);
var retirementUS = retirement('US', 66);
var retirementGermany = retirement('Germany', 65);

var yearOfBirth = 1975;
retirementIndia(yearOfBirth);
retirementUS(yearOfBirth);
retirementGermany(yearOfBirth);
