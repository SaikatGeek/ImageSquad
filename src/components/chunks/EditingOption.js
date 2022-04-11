import React from 'react'

function EditingOption({ handleEditingFeature, handleImageUrl}) {
  
  const handleFeature = (value) =>{
    handleEditingFeature(value)
    handleImageUrl()
  }

  return (
    <div>
      <button onClick={() => handleFeature("resize")} type="button" className="btn btn-primary m-2 px-4 ">Resize</button>
      <button onClick={() => handleFeature("sepia") } type="button" className="btn btn-secondary m-2 px-4">Sepia</button>
      <button onClick={() => handleFeature("sharpen")} type="button" className="btn btn-success m-2 px-4">Sharpen</button>
      <button onClick={() => handleFeature("wave")} type="button" className="btn btn-danger m-2 px-4">Wave</button>
      <button onClick={() => handleFeature("contrast")} type="button" className="btn btn-warning m-2 px-4">Contrast</button>
      <button onClick={() => handleFeature("annotate")} type="button" className="btn btn-info m-2 px-4">Annotate</button>
    </div>
  )
}

export default EditingOption