import React, { FC, ChangeEvent, FormEvent, useState } from "react";
import Pizza from "../models/Pizza";
import "./styles.css";

interface EditPizzaFormProps {
  data: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  handleToggleEdit: () => void;
}

const EditPizzaForm: FC<EditPizzaFormProps> = ({
  data,
  updatePizza,
  handleToggleEdit,
}) => {
  const [editPizza, setEditPizza] = useState<Pizza>(data);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    const { name, value } = e.target;
    console.log(name, value);
    setEditPizza({ ...editPizza, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, price, img } = editPizza;

    if (title && price && img) {
      updatePizza(editPizza);
      handleToggleEdit();
    }
  };

  console.log("edit pizza >>>", editPizza);

  return (
    <form className="edit-form" onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Назва"
        onChange={handleChange}
        value={editPizza.title}
      ></input>
      <input
        name="price"
        type="text"
        placeholder="Ціна"
        onChange={handleChange}
        value={editPizza.price}
      ></input>
      <input
        name="img"
        type="text"
        placeholder="Зображення"
        onChange={handleChange}
        value={editPizza.img}
      ></input>
      <button type="submit">Підтвердити</button>
    </form>
  );
};

export default EditPizzaForm;
