import React, {useState} from 'react'
import Slider from '@mui/material/Slider';
import axios from 'axios';
import env from '../../env.json';

const Contrast = ({ proceedImageUrl, imageUrl, handleProgress }) => {
	const [radius, setRadius] = useState(0);
	const [strength, setStrength] = useState(0);
    const [actionStatus, setActionStatus] = useState(false);

	const trigger = async () => {
		handleProgress(true)
		setActionStatus(true)

		await axios.post(`${env.API_BASE_URL}/contrast`, {
			'radius': Number(radius),
			'strength': Number(strength),
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
				<label>Radius</label>
				<Slider
					onChange={(event) => setRadius(event.target.value)}
					aria-label="Radius"
					valueLabelDisplay="auto"
					max={10}
				/>
			</div>
			<div className="col">
				<label>Strength</label>
				<Slider
					onChange={(event) => setStrength(event.target.value)}
					aria-label="Strength"
					valueLabelDisplay="auto"
					max={100}
				/>
			</div>

			<div className="col">
				<label></label>
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

export default Contrast