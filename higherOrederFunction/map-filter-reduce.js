users = [
  {
    name: 'Yazeed',
    age: 25
  },
  {
    name: 'Sam',
    age: 30
  },
  {
    name: 'Bill',
    age: 20
  }
];

getName = (user) => user.name;
usernames = [];

for (let i = 0; i < users.length; i++) {
  const name = getName(users[i]);
  usernames.push(name);
}
console.log(usernames);


startsWithB = (string) => string.toLowerCase().startsWith('b');

namesStartingWithB = [];
for (let i = 0; i < users.length; i++) {
  if (startsWithB(users[i].name)) {
    namesStartingWithB.push(users[i]);
  }
}
console.log(namesStartingWithB);

//map
usernames = users.map(getName);
console.log(usernames);

//filter
namesStartingWithB = users.filter((user) => startsWithB(user.name));
console.log(namesStartingWithB);

//reduce
total = 0;
for (let i = 0; i < users.length; i++) {
  total += users[i].age;
}
console.log(total);

totalAge = users.reduce((total, user) => user.age + total, 0);
console.log(totalAge);