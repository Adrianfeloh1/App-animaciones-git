import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([
    "one puch",
    " Deamon Slayer",
    " Dragon Ball Z",
  ]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1> GifExpertApp</h1>

      <AddCategory /* setCategories={setCategories} categories={categories} */
        onNewCategory={(event) => onAddCategory(event)}
      />

      <button onClick={onAddCategory}>Agregar</button>

      <ul>
        {categories.map((category) => {
          return <li key={category}> {category}</li>;
        })}
      </ul>
    </>
  );
};
