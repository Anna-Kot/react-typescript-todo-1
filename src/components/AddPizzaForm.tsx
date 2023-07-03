import React, { FC, ChangeEvent, FormEvent, useState } from "react";
import Pizza from "../models/Pizza";
import "./styles.css";

interface AddPizzaFormProps {
  addPizza: (newPizza: Pizza) => void;
}

const initState = {
  title: "",
  price: "",
  img: "",
};

const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
  const [newPizza, setNewPizza] = useState<{
    title: string;
    price: string;
    img: string;
  }>(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    const { name, value } = e.target;
    console.log(name, value);
    setNewPizza({ ...newPizza, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, price, img } = newPizza;
    if (title && price && img) {
      addPizza({ title, price: Number(price), img, id: Date.now() });
    }
    setNewPizza(initState);
  };

  console.log(newPizza);

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Назва"
        onChange={handleChange}
        value={newPizza.title}
      ></input>
      <input
        name="price"
        type="text"
        placeholder="Ціна"
        onChange={handleChange}
        value={newPizza.price}
      ></input>
      <input
        name="img"
        type="text"
        placeholder="Зображення"
        onChange={handleChange}
        value={newPizza.img}
      ></input>
      <button type="submit">Додати в меню</button>
    </form>
  );
};

export default AddPizzaForm;
