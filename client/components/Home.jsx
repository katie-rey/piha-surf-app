import React from 'react'
import Grid from '@mui/material/Grid';
// import piha from './asses/piha.png'
// import Item from '@mui/material/Item';

function Home() {
  return (
<>

{/* <div className="wrapper">
    <div className="spare-container"></div>
    <div className="hero-body">

    </div>
    <div className="spare-container"></div>
    </div> */}
   <div className="container">
     <Grid container spacing={2}>
  <Grid item xs={2}>
    <div className="grid-container">xs-2</div>
  </Grid>
  <Grid item xs={8}>
  <div className="grid-container">
    <div className="col-container">
      <div className="row">Location</div>
      <div className="row">Date </div>
      <div className="row">Temp Big </div>
      <div className="row">Hi/Low</div>
      <div className="row">Conditions</div>
    </div>
  </div>
  </Grid>
  <Grid item xs={2}>
  <div className="grid-container">xs-2</div>
  </Grid>
  {/* <Grid item xs={8}>
  <div className="grid-container">xs-2</div>
  </Grid> */}
</Grid>

   </div>
   </>
  )
}

export default Home