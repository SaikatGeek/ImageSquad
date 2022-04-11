import React, { useState } from 'react'
import axios from 'axios';
import env from '../../env.json';

const Resize = ({ proceedImageUrl, imageUrl, handleProgress }) => {
	const [bestFit, setBestFit] = useState(false);
	const [width, setWidth] = useState(450);
	const [height, setHeight] = useState(400);

	const trigger = async () => {
		let varWidth = Number(width) < 100 ? 100 : Number(width);
		let varHeight = Number(height) < 100 ? 100 : Number(height);
		handleProgress(true)
		await axios.post(`${env.API_BASE_URL}/resize`, {
			'width': varWidth,
			'height': varHeight,
			'bestFit': Boolean(bestFit),
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
				<input
					type="number"
					className="form-control"
					placeholder="Width"
					pattern="0|[1-9]\d*"
					min='100'
					max='750'
					value={width}
					onChange={event => setWidth(event.target.value > 750 ? 750 : event.target.value)}
					disabled={bestFit}
					data-bs-toggle="tooltip"
					data-bs-html="true"
					title="Max Width 750px | Min Width 100px"
				/>
			</div>

			<div className="col">
				<input
					type="number"
					className="form-control"
					placeholder="Height"
					pattern="0|[1-9]\d*"
					min='100'
					max="700"
					value={height}
					onChange={event => setHeight(event.target.value > 700 ? 700 : event.target.value)}
					disabled={bestFit}
					data-bs-toggle="tooltip"
					data-bs-html="true"
					title="Max Height 700px | Min Height 100px"
				/>
			</div>

			<div className="col">
				<input
					className="form-check-input"
					type="checkbox"
					onClick={() => setBestFit(!bestFit)}
					id="flexCheckChecked"

				/>
				<label className="form-check-label px-2" htmlFor="flexCheckChecked">
					Best Fit
				</label>
			</div>

			<div className="col">
				<button onClick={() => trigger()} type="button" className="btn btn-dark px-3" >Proceed</button>
			</div>

		</div>
	)
}

export default Resize