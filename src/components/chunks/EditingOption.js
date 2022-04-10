import React from 'react'

function EditingOption({handleEditingFeature}) {


  return (
    <div>
      <button onClick={() => handleEditingFeature("resize") } type="button" className="btn btn-primary m-2 px-4 ">Resize</button>
      <button onClick={() => handleEditingFeature("sepia") } type="button" className="btn btn-secondary m-2 px-4">Sepia</button>
      <button onClick={() => handleEditingFeature("sharpen") } type="button" className="btn btn-success m-2 px-4">Sharpen</button>
      <button onClick={() => handleEditingFeature("wave") } type="button" className="btn btn-danger m-2 px-4">Wave</button>
      <button onClick={() => handleEditingFeature("contrast") } type="button" className="btn btn-warning m-2 px-4">Contrast</button>
      <button onClick={() => handleEditingFeature("annotate") } type="button" className="btn btn-info m-2 px-4">Annotate</button>
    </div>
  )
}

export default EditingOption