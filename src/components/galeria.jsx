import { useEffect, useState } from "react";

const Galeria = () => {
  const [animal, setAnimal] = useState([]);

  useEffect(() => {
    getAnimal();
  }, []);

  const getAnimal = async () => {
    const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand/6", {
      method: "GET",
      
    });
    const data = await response.json();
    setAnimal(data);
    
  };
    
  return (
    <div className="container-animais">
      {animal.map((ani) => {
          
          return (
            <div className="container-animal">
          
          
            
            <div className="foto">
          <img className="animais" src={ani.image_link}></img>
            </div>

            <p >Nome: {ani.name}</p>
            <p >Dieta: {ani.diet}</p>
            <p >Tipo: {ani.animal_type}</p>
            <p >Latim: {ani.latin_name}</p>
            <p >Habitar: {ani.habitat} </p>
            <p >Localização: {ani.geo_range}</p>
          
            </div>
      )}
          )}
           
    
  


        
    
    </div>
  );
};

export default Galeria;