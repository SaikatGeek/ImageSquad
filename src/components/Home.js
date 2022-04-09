import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import env from '../env.json';


const Home = () => {
    const [imageList, setImageList] = useState([]);

    useEffect( () => {
        let url = `${env.API_BASE_URL}/gallery`;
        (async () => {
            await axios.get(url)
            .then( response => {
                let imageUrl = Object.entries(response.data);
                setImageList(imageUrl);
            })
            .catch( error => {
                console.log(error);
            });
        })()
        
    }, [])


    return (
        <div className="Container">
            <div className="row g-0 py-2">
                {
                    imageList.map( (data, key) => 
                        <div className="col-md-4 col-sm-6 col-12 " key={key}>
                            <Link to={`/image/edit`} state={{ data: data }} key={data[1]+2}>
                                <img 
                                    className="img-fluid mx-auto d-block py-2" 
                                    src={`${env.API_IMAGE_URL}${data[1]}`} 
                                    alt="" 
                                    key={data[1]} 
                                    style={{height: "360px", width: "520px"}}
                                />
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
    
}

export default  Home;