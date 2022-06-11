import React from 'react'
import Resize from '../module/Resize'
import Sepia from '../module/Sepia'
import Sharpen from '../module/Sharpen'
import Wave from '../module/Wave'
import Contrast from '../module/Contrast'
import Annotate from '../module/Annotate'

const EditingTool = ({ statusObject, proceedImageUrl, imageUrl, handleProgress }) => {

  return (
    <>
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
        statusObject.waveStatus ? 
          <Wave
            proceedImageUrl={proceedImageUrl}
            imageUrl={imageUrl}
            handleProgress={handleProgress}
          />
       : ""
      }
      {
        statusObject.contrastStatus ? 
          <Contrast
            proceedImageUrl={proceedImageUrl}
            imageUrl={imageUrl}
            handleProgress={handleProgress}
          />
        : ""
      }
      {
        statusObject.annotateStatus ? 
          <Annotate
            proceedImageUrl={proceedImageUrl}
            imageUrl={imageUrl}
            handleProgress={handleProgress}
          />
          : ""
      }
    </>
  )
}

export default EditingTool