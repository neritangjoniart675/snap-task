/* filename: complex_code.js
   description: A complex code integrating various advanced JavaScript concepts */


// Implementing a complex class hierarchy with multiple levels of inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Mammal extends Animal {
  constructor(name, furColor) {
    super(name);
    this.furColor = furColor;
  }

  drinkMilk() {
    console.log(`${this.name} is drinking milk.`);
  }
}

class Tiger extends Mammal {
  constructor(name, furColor, speed) {
    super(name, furColor);
    this.speed = speed;
  }

  attack() {
    console.log(`${this.name} is attacking with a speed of ${this.speed} km/h.`);
  }
}


// Implementing a complex algorithm using recursion
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(8)); // Outputs: 21


// Implementing a complex data structure (graph) with traversal methods
class Graph {
  constructor() {
    this.vertices = new Map();
  }

  addVertex(vertex) {
    this.vertices.set(vertex, []);
  }

  addEdge(vertex1, vertex2) {
    this.vertices.get(vertex1).push(vertex2);
    this.vertices.get(vertex2).push(vertex1);
  }

  depthFirstSearch(start) {
    const visited = new Set();

    const dfs = (current) => {
      console.log(current);
      visited.add(current);

      for (const neighbor of this.vertices.get(current)) {
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      }
    };

    dfs(start);
  }
}

const graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B');
graph.addEdge('B', 'C');
graph.depthFirstSearch('A'); // Outputs: A -> B -> C


// Implementing an asynchronous function with Promises
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function asyncFunction() {
  console.log('Start');
  await delay(2000);
  console.log('Delayed log');
}

asyncFunction().then(() => console.log('End'));


// Implementing a complex regular expression pattern matching
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validateEmail = (email) => {
  if (emailRegex.test(email)) {
    console.log(`${email} is a valid email address.`);
  } else {
    console.log(`${email} is not a valid email address.`);
  }
};

validateEmail('test@example.com'); // Outputs: test@example.com is a valid email address.


// Implementing a complex algorithm using closures and currying
const multiply = (a) => (b) => (c) => a * b * c;
const multiplyByTwo = multiply(2);
const multiplyByThree = multiplyByTwo(3);

console.log(multiplyByThree(4)); // Outputs: 24


// More complex code can be added here...


// End of complex_code.js