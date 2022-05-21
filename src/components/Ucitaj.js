import axios from "axios";
import {useState, useEffect} from 'react';
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
            <tbody>
                {artikli.map((artikl) => {

                    return(
                        <tr key = {artikl.Id.toString()}>
                        <td>{artikl.Id}</td>
                        <td>{artikl.Naziv}</td>
                        <td>{artikl.Proizvodac}</td>
                        <td>{artikl.Model}</td>
                        <td>{artikl.Cijena}</td>
                        <td>{artikl.Kolicina}</td>
                        </tr>
                    );
                    
                })}
            </tbody> 
            </table>

        </>

    );
        

    

}
export default Ucitaj;
