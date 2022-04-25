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
    <div className="col-11 col-md-10 m-auto pt-5 mb-4">
      <div className="card border-secondary" >
        <div className="row">
          {
            imageList.map( (data, key) => 
              <div className="col-md-4  " key={key}>
                <div className="card p-2 m-2 border-secondary" >
                  <Link to={`/image/edit`} state={{ data: data }} key={data[1]}>
                    <img 
                        className="img-fluid mx-auto d-block" 
                        src={`${env.API_IMAGE_URL}${data[1]}`} 
                        alt="" 
                        key={data[1]} 
                        style={{height: "320px", width: "580px"}}

                    />
                  </Link>
                    <div className="card-body">
                      <p className="card-text"> {`${data[0]}.${data[1].split(".").pop()}`}</p>
                    </div>
                </div>
              </div>
            )
          }
        </div>
            
            
      </div>
    </div>
  )
    
}

export default  Home;