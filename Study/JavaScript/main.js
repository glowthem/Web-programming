// Array which contains objects
const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true
  },
  {
    id: 2,
    text: "Meeting with boss",
    isCompleted: true
  },
  {
    id: 3,
    text: "Dentist appt",
    isCompleted: false
  }
];

console.log(todos);

console.log(todos[1].text);

// Convert object into JSON
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// For
for (let i = 0; i <= 10; i++) {
  console.log(`For loop Number: ${i}`);
}

for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}

// For-of
for (const item of todos) {
  console.log(item.id);
}

// For-each
todos.forEach(function(todo) {
  console.log(todo.text);
});

// map
const todoText = todos.map(function(todo) {
  return todo.text;
});
console.log(todoText);

// filter
const todoCompleted = todos.filter(function(todo) {
  return todo.isCompleted === true;
});
console.log(todoCompleted);

// map and just get text from filtered one
const todoCompleted_text = todos
  .filter(function(todo) {
    return todo.isCompleted === true;
  })
  .map(function(todo) {
    return todo.text;
  });
console.log(todoCompleted_text);
