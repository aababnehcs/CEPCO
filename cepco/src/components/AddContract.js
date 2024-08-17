import React from 'react';
import AreasList from './AreasList';
import LocationsList from './LocationsList';
import CitiesList from './CitiesList';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
export const AddContract = () => {



  
    return (
    <>
<AreasList/>
<CitiesList/>
<LocationsList/>
<Grid item md={12} alignItems='center'>
    
        <Button variant="contained">Save</Button>
     
   </Grid>   
    </>
  )
}
