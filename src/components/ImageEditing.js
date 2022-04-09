import React, {useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ImageEditing = () => {
  const location = useLocation();
  const navigation = useNavigate();

  useEffect(() => {
    if(location === undefined || location.state === null){
      navigation(-1);
    }
    console.log(location)
  }, []);

  return (
    <div>ImageEditing</div>
  )
}

export default ImageEditing