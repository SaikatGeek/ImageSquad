import React, {useState} from 'react'
import Slider from '@mui/material/Slider';
import axios from 'axios';
import env from '../../env.json';

const Sharpen = ({ proceedImageUrl, imageUrl, handleProgress }) => {
	const [radius, setRadius] = useState(0);
	const [sigma, setSigma] = useState(0);

	const trigger = async () => {
		handleProgress(true)
		await axios.post(`${env.API_BASE_URL}/sharpen`, {
			'radius': Number(radius),
			'sigma': Number(sigma),
			'imagePath': imageUrl
		})
			.then(data => {
				handleProgress(false)
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
					aria-label="Temperature"
					valueLabelDisplay="auto"
					max={10}
				/>
			</div>
			<div className="col">
				<label>Sigma</label>
				<Slider
					onChange={(event) => setSigma(event.target.value)}
					aria-label="Temperature"
					valueLabelDisplay="auto"
					max={100}
				/>
			</div>

			<div className="col">
				<label></label>
				<button onClick={() => trigger()} type="button" className="btn btn-dark px-3" >Proceed</button>
			</div>

		</div>
	)

}

export default Sharpen