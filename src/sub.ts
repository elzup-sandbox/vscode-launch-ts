type SubPerson = { name: string };

const sub: Person = { name: "John" };

for (let i = 0; i < 10; i++) {
  console.log(i, sub.name);
}
