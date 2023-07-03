import React from "react";
import "./App.css";

// let pizza: string = "Salami";

// let price: number = 20;

// let atStroke: boolean = true;

// let pizzas: string[] = ["Salami", " Saussage"];

// let numbers: number[] = [1, 2, 3];

//not correct:
const order1: Object = { title: "margarita", quantity: 10 };
//correct (count type of date, which we can re): але в даному випадку ми не зможемо використовувати цей тип в інших частинах додатка, і прийдеться кожного разу прописувати типи { title: string; quantity: number }
const order2: { title: string; quantity: number } = {
  title: "margarita",
  quantity: 10,
};

//щоб ми могли перевикористовувати наш тип, є два способи: 1. можемо створити так називаємий інтерфейс або 2. використовувати спеціальне слово TYPE. Хорошо практика питати назву типу з великої літери
type Order = {
  title?: string;
  quantity?: number;
};
const order3: Order = {
  title: "margarita",
  quantity: 10,
};

const orders: Order[] = [
  { title: "margarita" },
  { title: "salami", quantity: 20 },
];

let number1: null | number = null;
number1 = 10;

// 1 варіант
// type PrintTitle = Function;
type PrintTitle1 = (title: string) => void;
// void якщо нічого не повертає, тобто повертає underfined

const printTitle1: PrintTitle1 = (title) => {
  console.log(title);
};
printTitle1("salami");

// 2 варіант
// type PrintTitle = Function;
type PrintTitle2 = (title: string) => string;
// string бо повертає return title, тобто строку

const printTitle2: PrintTitle2 = (title) => {
  return title;
};
printTitle2("salami");

// можуть бути випадки, коли нам невідомий тип даних, тоді можна використовувати тип: unknown
const test: unknown = "test";
// console.log(test.trim());

// оскільки тип unknown, то не можна використовувати операції, які здійснюються над string, бо це unknown тип

// якщо тип never, це означає, що вона ніколи нічого не вертає, лише console.log
type PrintTitle3 = (title: string) => never;

//тип використовується для опису типів, type використовувати для базових внуштріних сутності (entities), якими оперує весь app, які зустрічаються у всіх компонентах
type Order2 = {
  title: string;
  quantity?: number;
};

//інтерфейс використовується для опису інтерфейсів, interface опис структури даних в наших компонентах, які наприклад ми передаємо через пропси
interface MyOrder {
  title: string;
  quantity?: number;
}

//якщо наш додаток продає піци, то піцу будемо описувати за допомогою типу, а вже в середині компонентів для опису пропсів будемо використовувати interface

type X = {
  a: string;
  b: number;
};
type Y = X & {
  c: string;
  d: number;
};

let y: Y = {
  a: "test",
  b: 10,
  c: "one",
  d: 5,
};

interface Auto {
  country: string;
}

interface BMW extends Auto {
  model: string;
  year: number;
}

const bmw: BMW = {
  country: "Germany",
  model: "X5",
  year: 2012,
};

//type FC - function component

function Example() {
  return <div className="App">New App!</div>;
}

export default Example;
