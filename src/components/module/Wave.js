import React, {useState} from 'react'
import Slider from '@mui/material/Slider';
import axios from 'axios';
import env from '../../env.json';

const Wave = ({ proceedImageUrl, imageUrl, handleProgress }) => {
	const [amplitude, setAmplitude] = useState(0);
	const [length, setLength] = useState(0);
	const [actionStatus, setActionStatus] = useState(false);

	const trigger = async () => {
		handleProgress(true)
		setActionStatus(true)

		await axios.post(`${env.API_BASE_URL}/wave`, {
			'amplitude': Number(amplitude),
			'length': Number(length),
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
				<label>Amplitude</label>
				<Slider
					onChange={(event) => setAmplitude(event.target.value)}
					aria-label="Amplitude"
					valueLabelDisplay="auto"
					max={20}
				/>
			</div>
			<div className="col">
				<label>Length</label>
				<Slider
					onChange={(event) => setLength(event.target.value)}
					aria-label="Length"
					valueLabelDisplay="auto"
					max={500}
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

export default Wave