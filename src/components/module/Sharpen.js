import React, {useState} from 'react'
import Slider from '@mui/material/Slider';
import axios from 'axios';
import env from '../../env.json';

const Sharpen = ({ proceedImageUrl, imageUrl, handleProgress }) => {
	const [radius, setRadius] = useState(0);
	const [sigma, setSigma] = useState(0);
	const [actionStatus, setActionStatus] = useState(false);

	const trigger = async () => {
		handleProgress(true)
		setActionStatus(true)

		await axios.post(`${env.API_BASE_URL}/sharpen`, {
			'radius': Number(radius),
			'sigma': Number(sigma),
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
				<label>Sigma</label>
				<Slider
					onChange={(event) => setSigma(event.target.value)}
					aria-label="Sigma"
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

export default Sharpen