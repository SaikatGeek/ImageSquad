import React, {useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import EditingOption from './chunks/EditingOption';
import EditingTool from './chunks/EditingTool';
import env from '../env.json';

const ImageEditing = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const [imageUrl, setImageUrl] = useState('');
  const [resizeStatus, setResizeStatus] = useState(false);
  const [sepiaStatus, setSepiaStatus] = useState(false);
  const [sharpenStatus, setSharpenStatus] = useState(false);
  const [waveStatus, setWaveStatus] = useState(false);
  const [contrastStatus, setContrastStatus] = useState(false);
  const [annotateStatus, setAnnotateStatus] = useState(false);

  const statusObject = {
    resizeStatus: resizeStatus,
    sepiaStatus: sepiaStatus,
    sharpenStatus: sharpenStatus,
    waveStatus: waveStatus,
    contrastStatus: contrastStatus,
    annotateStatus: annotateStatus
  };

  const handleEditingFeature = (value) => {
    if("resize" === value) handleEditingStatus(setResizeStatus)
    else if("sepia" === value) handleEditingStatus(setSepiaStatus)
    else if("sharpen" === value) handleEditingStatus(setSharpenStatus)
    else if("wave" === value) handleEditingStatus(setWaveStatus)
    else if("contrast" === value) handleEditingStatus(setContrastStatus)
    else if("annotate" === value) handleEditingStatus(setAnnotateStatus)
  };

  const handleEditingStatus = (setValue) => {

    let statusArray = [
      setResizeStatus, 
      setSepiaStatus,
      setSharpenStatus, 
      setWaveStatus, 
      setContrastStatus, 
      setAnnotateStatus
    ];

    return statusArray.map(
      fn => fn === setValue ? fn(true) : fn(false)
    );
  }

  const proceedImageUrl = (url) => {
    setImageUrl(url.data)
  }

  

  useEffect(() => {
    if(location.state === undefined || location.state === null){
      navigation(-1);
    }
  }, []);

  return (
      location.state === null ?
        navigation(-1)
        : 
        <div className='container-fluid py-5'>
          <div className='row'>
            <div className='col-12'>
              <div className='row '>
                <div className="col-md-6">
                  <div className="card" style={{ "height": "594px" }}>
                    <div className="card-header text-center">
                      <h5>Original Image</h5>
                    </div>

                    <img 
                      className='img-fluid m-auto shadow p-3  bg-body rounded'
                      src={`${env.API_IMAGE_URL}${location.state.data[1]}`}
                      alt=''
                      style={{height: "300px", width: "400px"}}
                    />

                    <div className="card-body">                  
                      <p className="card-text">Editing Tool:</p>

                      <hr/>   

                      <EditingOption 
                        handleEditingFeature={handleEditingFeature}
                      />    

                      <hr/>

                      <EditingTool 
                        statusObject={statusObject}
                        proceedImageUrl={proceedImageUrl}
                        imageUrl={location.state.data[1]}
                      />
                    </div>
                  </div>              
                </div>

                <div className="col-md-6 col-sm-12">

                  <div className="card " style={{ "height": "594px" }}>
                    <div className="card-header text-center">
                      <h5>Processed Image</h5>
                    </div>
                    {
                      imageUrl.length > 0 ?
                      <a 
                        href={`data:image/png;base64,${imageUrl}`} 
                        className="m-auto " 
                        download="image" 
                        data-bs-toggle="tooltip" 
                        data-bs-placement="top" 
                        title="Click to download"
                      >
                        <img 
                          className='img-fluid m-auto shadow p-2 bg-body rounded'
                          src={`data:image/png;base64,${imageUrl}`}
                          alt=''
                          
                        />
                      </a>
                      : ''
                      
                    }
                  </div>

                </div>
              </div>
                
            </div>
          </div>
        </div>
    
  )
}

export default ImageEditing