import React, {useState} from 'react'
import Slider from '@mui/material/Slider';
import axios from 'axios';
import env from '../../env.json';

const Sepia = ({ proceedImageUrl, imageUrl, handleProgress }) => {
    const [range, setRange] = useState(50);
    const [actionStatus, setActionStatus] = useState(false);

    const trigger = async () => {
        handleProgress(true)
        setActionStatus(true)

        let varRange = Number(range);
        await axios.post(`${env.API_BASE_URL}/sepia`, {
            'range': varRange,
            'imagePath': imageUrl
        })
            .then(data => {
                handleProgress(false)
                setActionStatus(false)
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
                <button 
                    onClick={() => trigger()} 
                    type="button" 
                    className="btn btn-dark px-3" 
                    disabled={actionStatus} 
                >Proceed</button>
            </div>

        </div>
    )
}

export default Sepia