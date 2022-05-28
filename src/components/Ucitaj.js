import axios from "axios";
import {useState, useEffect} from 'react';
import { Outlet, Link } from "react-router-dom";
const readURL = "http://localhost/ArtikliJSON/read.php";
function Ucitaj()
{
    const [artikli, setArtikli] = useState([]);
    useEffect(() => {
        getArtikli();
    },[]);

    async function getArtikli()
    {
        try
        {
            const response = await axios.get(readURL).then((response) =>
            {
                setArtikli(response.data);
            });
            
        }
        catch(error)
        {
            //Console.log(error);
        }
    }

    async function deleteConfirm(id)
    {
        try 
        {
            if(window.confirm("Are you sure?"))
            { 
            const readUrl = "http://localhost/ArtikliJSON/delete.php"
            axios({
                method: "post",url: readUrl,data: {"Id":id,"queryType":"Obrisi"},headers: { "Content-Type": "multipart/form-data" },})
                .then(function (response) {console.log(response);})
                .catch(function (response) {console.log(response);});
                setArtikli([]);
                getArtikli();
            }
                /*setArtikli([]);
                getArtikli();*/
        } 
        catch (error) {
            
        }
    }

    
    return (
        <>
            
            <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Naziv</th>
                    <th scope="col">Proizvođač</th>
                    <th scope="col">Model</th>
                    <th scope="col">Cijena</th>
                    <th scope="col">Kolicina</th>
                </tr>    
            </thead> 
            <tbody id="tablica">
                {artikli.map((artikl) => {

                    return(
                        <tr key = {artikl.Id.toString()}>
                        <td>{artikl.Id}</td>
                        <td>{artikl.Naziv}</td>
                        <td>{artikl.Proizvodac}</td>
                        <td>{artikl.Model}</td>
                        <td>{artikl.Cijena}</td>
                        <td>{artikl.Kolicina}</td>
                        <td><button className="btn btn-outline-danger" onClick={() => deleteConfirm(artikl.Id)}>Delete</button></td>
                        <td><Link to={`/Edit/${artikl.Id}`} className="btn btn-outline-secondary">Edit</Link></td>
                        </tr>
                    );
                    
                })}
            </tbody> 
            </table>

        </>

    );
        

    

}
export default Ucitaj;
