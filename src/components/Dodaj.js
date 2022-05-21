import axios from "axios";
import {useState} from 'react';
import { useNavigate } from "react-router-dom";


export default function Dodaj()
{ 
    const [inputs, setInputs] = useState({}); 
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        const readUrl = "http://localhost/ArtikliJSON/query.php";
        axios({
            method: "post",
            url: readUrl,
            data: 
            {
                "proizvodac":inputs.proizvodac,
                "naziv": inputs.naziv,
                "model":inputs.model,
                "cijena":inputs.cijena,
                "kolicina":inputs.kolicina
                
            },
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then(function (response) {
              //handle success
              console.log(response);
            })
            .catch(function (response) {
              //handle error
              console.log(response);
            });  
           
            navigate('/pocetna');
        }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        } 

    return(

        <div className="container w-25 p-3">
        <form className="form" onSubmit={handleSubmit}> 
        <div className="form-group">
            <label >Proizvođač</label>
            <input type="text" required className="form-control" 
            onChange={handleChange}
            name="proizvodac"
            value={inputs.proizvodac || ""} 
            />
        </div>
        <div className="form-group">
            <label>Naziv</label>
            <input type="text" required className="form-control" 
            onChange={handleChange}
            name="naziv"
            value={inputs.naziv || ""} 
            />
        </div>
        <div className="form-group">
            <label >Model</label>
            <input type="text" required className="form-control" 
            onChange={handleChange} 
            name="model"
            value={inputs.model || ""} 
            />
        </div>
        <div className="form-group">
            <label >Kolicina</label>
            <input type="number" required className="form-control" 
            onChange={handleChange} 
            name="kolicina"
            value={inputs.kolicina || ""} 
            />
        </div>
        <div className="form-group">
            <label >Cijena</label>
            <input type="text" required className="form-control" 
            name="cijena"
            value={inputs.cijena || ""} 
            onChange={handleChange} />
        </div>
        <div className="form-group">
        <button type="submit" className="btn btn-primary mt-1 end-0">Dodaj</button>
        </div>
        </form>
        </div>
    )
}