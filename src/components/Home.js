import React, {useEffect, useState} from "react";
import axios from 'axios';
import env from '../env.json';


const Home = () => {
    // const [imageList, seImageList] = useState([]);

    useEffect( () => {
        let url = `${env.API_BASE_URL}/mock`;
        (async () => {
            await axios.get(url)
            .then( response => {
                console.log(response);
            })
            .catch( error => {
                console.log(error);
            });
        })()
        
       
    }, [])


    return (
        <div className="Container">
            <div className="row">
                <div className="col">
                    ee
                </div>
            </div>
        </div>
    )
    
}

export default  Home;