import React, {useState} from 'react'
import Slider from '@mui/material/Slider';
import axios from 'axios';
import env from '../../env.json';

const Sepia = ({ proceedImageUrl, imageUrl }) => {
    const [range, setRange] = useState(50);
    const trigger = async () => {
        let varRange = Number(range) < 100 ? 100 : Number(range);

        await axios.post(`${env.API_BASE_URL}/sepia`, {
            'range': range,
            'imagePath': imageUrl
        })
            .then(data => {
                proceedImageUrl(data)
            })
            .catch(error => {
                console.log(error)
            })
    };

    return (
        <div className="row">
            <div className="col">
                <Slider
                    onChange={(event) => setRange(event.target.value)}
                    aria-label="Temperature"
                    valueLabelDisplay="auto"
                    max={255}
                />
            </div>

            <div className="col">
                <button onClick={() => trigger()} type="button" className="btn btn-dark px-3" >Proceed</button>
            </div>

        </div>
    )
}

export default Sepia