import {useState} from 'react';
function MyForm(){
    const [car,setCar]=useState("BMW");
    const handleChange=(event)=>(
      setCar(event.target.value)
    );
    return(
      <form>
      <select value={car} onChange={handleChange}>
        <option value="Audi">Audi</option>
        <option value="Ford">Ford</option>
        <option value="BMW">BMW</option>
      </select>
      </form>
    );
  }

  export default MyForm;