import React, {useState} from 'react'
import Slider from '@mui/material/Slider';
import axios from 'axios';
import env from '../../env.json';

const Annotate = ({ proceedImageUrl, imageUrl, handleProgress }) => {
	const [strokeColor, setStrokeColor] = useState();
	const [fillColor, setFillColor] = useState();
	const [text, setText] = useState('');
    const [actionStatus, setActionStatus] = useState(false);

	const trigger = async () => {
		handleProgress(true)
		setActionStatus(true)

		await axios.post(`${env.API_BASE_URL}/annotate`, {
			'fillColor': fillColor,
			'strokeColor': strokeColor,
            'text': text,
			'imagePath': imageUrl
		})
			.then(data => {
                console.log(data)
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
                <label htmlFor="favcolor">Stroke Color:</label>
                <input 
                    type="color" 
                    className="form-control" 
                    id="favcolor" 
                    name="favcolor" 
                    value="#ff0000"
                    onChange={(event) => setStrokeColor(event.target.value)}
                />
			</div>
			<div className="col">
                <label htmlFor="fillColor">Fill Color:</label>
                <input 
                    type="color" 
                    className="form-control" 
                    id="fillColor" 
                    name="favcolor" 
                    value="#000000"
                    onChange={(event) => setFillColor(event.target.value)}
                />
			</div>

            <div className="col">
				<input
					type="text"
					className="form-control"
					placeholder="text"					
					onChange={event => setText(event.target.value)}
					data-bs-toggle="tooltip"
					data-bs-html="true"
					title="Annotates an image with text"
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

export default Annotate