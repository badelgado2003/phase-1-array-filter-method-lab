// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
function findMatching(array, name) {
    const newArr = array.filter(driver => name.toLowerCase() === driver.toLowerCase())
  
    return newArr
}

function fuzzyMatch(array, name){
    const newArray = array.filter(driver => name.substring(0, 1) === driver.substring(0, 1));

    return newArray
}

const carDrivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
function matchName(array, name){
    return array.filter(o =>
        Object.keys(o).some(k => String(o[k]).toLowerCase().includes(name.toLowerCase())));
}