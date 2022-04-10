import React from 'react'
import Resize from '../module/resize'

const EditingTool = ({statusObject, proceedImageUrl, imageUrl}) => {
    
  return (
    <div>
      {
        statusObject.resizeStatus ? 
            <Resize 
              proceedImageUrl={proceedImageUrl}
              imageUrl={imageUrl}
            />

        : ""
      }
        {
            statusObject.sepiaStatus ? "sepiaStatus" : "0"
        }
        {
            statusObject.sharpenStatus ? "sharpenStatus" : "0"
        }
        {
            statusObject.waveStatus ? "waveStatus" : "0"
        }
        {
            statusObject.contrastStatus ? "waveStatus" : "0"
        }
        {
            statusObject.annotateStatus ? "waveStatus" : "0"
        }
    </div>
  )
}

export default EditingTool