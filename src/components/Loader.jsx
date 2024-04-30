import React from 'react'
import { ColorRing } from 'react-loader-spinner';
function Loader() {
  return (
   <>
  <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#1985B6']}
/>
   </>
  )
}
export default Loader