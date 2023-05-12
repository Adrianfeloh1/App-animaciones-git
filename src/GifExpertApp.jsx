import { useState } from "react";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(["one puch", " Deamon Slayer", " Dragon Ball Z"]);

  return (
    <>
      <h1> GifExpertApp</h1>

      <ul>
        {categories.map ( category => {
            return <li key={category}> {category}</li>
        })}
      </ul>


    </>
  );
};
