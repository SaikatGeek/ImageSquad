import React, {useEffect, useState} from "react";
import axios from 'axios';
import env from '../env.json';


const Home = () => {
    // const [imageList, setImageList] = useState([]);
    const [img, setImg] = useState('');

    useEffect( () => {
        let url = `${env.API_BASE_URL}/mock`;
        (async () => {
            await axios.get(url)
            .then( response => {
                setImg(response.data);
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
                    <img src={`data:image/jpeg;base64,${img}`} />
                </div>
            </div>
        </div>
    )
    
}

export default  Home;