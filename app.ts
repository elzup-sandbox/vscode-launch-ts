type Person = { name: string };

const p: Person = { name: "John" };

for (let i = 0; i < 10; i++) {
  console.log(i, p.name);
}
