const findTheOldest = function (people) {
  const sortedArr = people.sort((currentPerson, nextPerson) => {
    const currentAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );
    const nextAge = getAge(nextPerson.yearOfBirth, nextPerson.yearOfDeath);

    return currentAge > nextAge ? 1 : -1;
  });
  return sortedArr[sortedArr.length - 1];
};

const getAge = (birth, death) => {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
