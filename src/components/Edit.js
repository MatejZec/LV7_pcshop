import axios from "axios";
//import {useState} from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import React,{useState, useEffect} from 'react';



function VratiArtikl()
{
    const [artikli, setData] = useState(null);
    let { EditId } = useParams();

    var oArtikl={
        naziv: " ",
        model: " ",
        proizvodac: " ",
        cijena: " ",
        kolicina: " "
    }
    useEffect(() => 
    {
        Ucitaj();
    },[]); 
    async function Ucitaj()
    {
    axios.get("http://localhost/ArtikliJSON/read.php").then((response) => {
        response.data.map((e)=>{
            if(e.Id == EditId){
                oArtikl.naziv=e.Naziv;
                oArtikl.model=e.Model;
                oArtikl.proizvodac=e.Proizvodac;
                oArtikl.cijena=e.Cijena;
                oArtikl.kolicina=e.Kolicina;
            }
            });
            setData(oArtikl);
        });
    }
    
    
    if(artikli)
        {return artikli;}
    else 
        {return oArtikl;}

}

export default function Edit()
{
    /*let params = useParams();
    let artiklId = params.EditId;

    const [Naziv, setNaziv] = useState('');
    const [Proizvodac, setProizvodac] = useState('');
    const [Model, setModel] = useState('');
    const [Cijena, setCijena] = useState('');
    const [Kolicina, setKolicina] = useState('');

    useEffect(()=> {
        getArtikli(artiklId);
        }, []);

        async function getArtikli(Id)
        {
            try
            {
                const response = await axios.get(`http://localhost/ArtikliJSON/update.php?Id=${Id}`)
                setNaziv(response.data[0].Naziv)
                setProizvodac(response.data[0].Proizvodac)
                setModel(response.data[0].Model)
                setCijena(response.data[0].Cijena)
                setKolicina(response.data[0].Kolicina)
                
            }
            catch (err)
            {
                console.log(err)
            }
        }

        const azurirajArtikl = async(event) => {
            try 
            {
                event.preventDefault();
                await updateArtikl(azuriraniArtikl);
                Navigate("/")
            } 
            catch (error) 
            {
                
            }
        }*
/* ------------------------------------------------*/ 
    let params = useParams();
    let artiklId = params.EditId;
    const artikl = VratiArtikl();
    const [inputs, setInputs] = useState({}); 
    const navigate = useNavigate();
    if(!artikl) return null
    const handleSubmit = (event) => {
    event.preventDefault();
    const readUrl = "http://localhost/ArtikliJSON/update.php";
    axios({
        method: "post",
        url: readUrl,
        data: 
        {
            "Id":artiklId,
            "proizvodac":inputs.proizvodac || artikl.Proizvodac,
            "naziv": inputs.naziv || artikl.Naziv,
            "model":inputs.model || artikl.Model,
            "kolicina":inputs.kolicina || artikl.Kolicina,
            "cijena":inputs.cijena || artikl.Cijena
            
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
            <button type="submit" className="btn btn-primary mt-1 end-0">Azuriraj</button>
            </div>
            </form>
            </div>
        )
}