import React from 'react'
import Resize from '../module/Resize'
import Sepia from '../module/Sepia'
import Sharpen from '../module/Sharpen'

const EditingTool = ({ statusObject, proceedImageUrl, imageUrl, handleProgress }) => {

  return (
    <div>
      {
        statusObject.resizeStatus ?
          <Resize
            proceedImageUrl={proceedImageUrl}
            imageUrl={imageUrl}
            handleProgress={handleProgress}
          />

          : ""
      }
      {
        statusObject.sepiaStatus ?
          <Sepia
            proceedImageUrl={proceedImageUrl}
            imageUrl={imageUrl}
            handleProgress={handleProgress}
          />
          : ""
      }
      {
        statusObject.sharpenStatus ?
         <Sharpen
            proceedImageUrl={proceedImageUrl}
            imageUrl={imageUrl}
            handleProgress={handleProgress}
          /> 
          : ""
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