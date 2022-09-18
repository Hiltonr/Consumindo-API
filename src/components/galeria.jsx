import { useEffect, useState } from "react";

const Galeria = () => {
  const [animal=[], setAnimal] = useState("oi");

  useEffect(() => {
    getAnimal();
  }, []);

  const getAnimal = async () => {
    const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10", {
      method: "GET",
      
    });
    const data = await response.json();
    setAnimal(data);
    
  };
  // Tentei o map, mas não funcionou. Sei a lógica, Porém  faltou tempo para buscar a solução
  
  return (
    <div className="container-animais">
        
      <div className="container-animal">
          <div className="foto">
        <img className="animais" src={animal[0].image_link}></img>
          </div>
          <p >Nome: {animal[0].name}</p>
          <p >Dieta: {animal[0].diet}</p>
          <p >Tipo: {animal[0].animal_type}</p>
          <p >Latim: {animal[0].latin_name}</p>
          <p >Habitar: {animal[0].habitat} </p>
          <p >Localização: {animal[0].geo_range}</p>
         
        </div>

        <div className="container-animal">
          <div className="foto">
        <img className="animais" src={animal[0].image_link}></img>
          </div>
          <p >Nome: {animal[0].name}</p>
          <p >Dieta: {animal[0].diet}</p>
          <p >Tipo: {animal[0].animal_type}</p>
          <p >Latim: {animal[0].latin_name}</p>
          <p >Habitar: {animal[0].habitat} </p>
          <p >Localização: {animal[0].geo_range}</p>
         
        </div> 

        <div className="container-animal">
          <div className="foto">
        <img className="animais" src={animal[0].image_link}></img>
          </div>
          <p >Nome: {animal[0].name}</p>
          <p >Dieta: {animal[0].diet}</p>
          <p >Tipo: {animal[0].animal_type}</p>
          <p >Latim: {animal[0].latin_name}</p>
          <p >Habitar: {animal[0].habitat} </p>
          <p >Localização: {animal[0].geo_range}</p>
         
        </div>

        <div className="container-animal">
          <div className="foto">
        <img className="animais" src={animal[0].image_link}></img>
          </div>
          <p >Nome: {animal[0].name}</p>
          <p >Dieta: {animal[0].diet}</p>
          <p >Tipo: {animal[0].animal_type}</p>
          <p >Latim: {animal[0].latin_name}</p>
          <p >Habitar: {animal[0].habitat} </p>
          <p >Localização: {animal[0].geo_range}</p>
         
        </div>

        <div className="container-animal">
          <div className="foto">
        <img className="animais" src={animal[0].image_link}></img>
          </div>
          <p >Nome: {animal[0].name}</p>
          <p >Dieta: {animal[0].diet}</p>
          <p >Tipo: {animal[0].animal_type}</p>
          <p >Latim: {animal[0].latin_name}</p>
          <p >Habitar: {animal[0].habitat} </p>
          <p >Localização: {animal[0].geo_range}</p>
         
        </div>

        <div className="container-animal">
          <div className="foto">
        <img className="animais" src={animal[0].image_link}></img>
          </div>
          <p >Nome: {animal[0].name}</p>
          <p >Dieta: {animal[0].diet}</p>
          <p >Tipo: {animal[0].animal_type}</p>
          <p >Latim: {animal[0].latin_name}</p>
          <p >Habitar: {animal[0].habitat} </p>
          <p >Localização: {animal[0].geo_range}</p>
         
        </div>

        <div className="container-animal">
          <div className="foto">
        <img className="animais" src={animal[0].image_link}></img>
          </div>
          <p >Nome: {animal[0].name}</p>
          <p >Dieta: {animal[0].diet}</p>
          <p >Tipo: {animal[0].animal_type}</p>
          <p >Latim: {animal[0].latin_name}</p>
          <p >Habitar: {animal[0].habitat} </p>
          <p >Localização: {animal[0].geo_range}</p>
         
        </div>

        <div className="container-animal">
          <div className="foto">
        <img className="animais" src={animal[0].image_link}></img>
          </div>
          <p >Nome: {animal[0].name}</p>
          <p >Dieta: {animal[0].diet}</p>
          <p >Tipo: {animal[0].animal_type}</p>
          <p >Latim: {animal[0].latin_name}</p>
          <p >Habitar: {animal[0].habitat} </p>
          <p >Localização: {animal[0].geo_range}</p>
         
        </div>

        <div className="container-animal">
          <div className="foto">
        <img className="animais" src={animal[0].image_link}></img>
          </div>
          <p >Nome: {animal[0].name}</p>
          <p >Dieta: {animal[0].diet}</p>
          <p >Tipo: {animal[0].animal_type}</p>
          <p >Latim: {animal[0].latin_name}</p>
          <p >Habitar: {animal[0].habitat} </p>
          <p >Localização: {animal[0].geo_range}</p>
         
        </div>
        <div className="container-animal">
          <div className="foto">
        <img className="animais" src={animal[0].image_link}></img>
          </div>
          <p >Nome: {animal[0].name}</p>
          <p >Dieta: {animal[0].diet}</p>
          <p >Tipo: {animal[0].animal_type}</p>
          <p >Latim: {animal[0].latin_name}</p>
          <p >Habitar: {animal[0].habitat} </p>
          <p >Localização: {animal[0].geo_range}</p>
         
        </div>



        
    
    </div>
  );
};

export default Galeria;