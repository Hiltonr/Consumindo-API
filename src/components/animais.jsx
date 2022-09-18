import { useEffect, useState } from "react";

function Animais() {
  const [animal=[], setAnimal] = useState("oi");

  useEffect(() => {
    getAnimal();
  }, []);

  const getAnimal = async () => {
    const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand/1", {
      
    });
    const data = await response.json();
    setAnimal(data); 

   
    
  };

  return (
    
    <div className="container">
      <h1>Animal</h1>
      
      <div className="container-animal2">
          <div className="foto2">
          <img className="animais" src={animal[0].image_link}></img>
          </div>
          <p >Nome: {animal[0].name}</p>
          <p >Dieta: {animal[0].diet}</p>
          <p >Tipo: {animal[0].animal_type}</p>
          <p >Latim: {animal[0].latin_name}</p>
          <p >Habitar: {animal[0].habitat} </p>
          <p >Localização: {animal[0].geo_range}</p>
      
      </div>

      
      <button type="button" className="btn" onClick={getAnimal}>
        Gerar Animal
      </button>
    </div>
  );
}
export default Animais;