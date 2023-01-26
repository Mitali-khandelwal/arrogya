import React from 'react'

// import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import { Button, TextField, Typography } from '@mui/material'
import { margin } from '@mui/system'
const SignUp = () => {

  // const classes = useStyles();
  return (
    <Box sx={{background: 'linear-gradient(45deg, #E5E5E5 30%, #B3CCE7 90%)',
         color: 'white',
       height: '100vh',
      padding: '0 30px',display: 'flex',gap:'20px',flexDirection: 'column',justifyContent:'center',alignContent:'center',alignItems:'center'}}>
      <Box
        component="img"
        sx={{ boxSizing: 'border-box',
        width: '350px',
        height: ' 64px',
        left: '507px',
        top: ' 53px'}}
        alt="Arogaya"
        src="https://s3-alpha-sig.figma.com/img/91b0/635b/9b206b2235d172630e1076446dbaf008?Expires=1675641600&Signature=no9f2Zio-0RcliMYOsmk3qVJdVHIeU6mXjVF8y93APyrX2BONZh7EVTTGqmqSlPOOv5ozT-goS~hWvS1ShRx1Olh7Ww7uPD-E7nbPUCHVkl1S-hrZcotheqAoWXmocELY6yWy~RjVXF-WN25uNLmQvUqYLa2V6ASZ-wGzlA6xscl5OiTWDld62m4Mld4ig0TSPvrUZrpA75j~2tHXztwrkQB27JMYihfFBFtOGTCuGUTIsmD9IycXh5eUPenE2dcKnFElZFJcFdU4JZeu8JspLQxzRG45~x86yLihZ1GjP-piKdBjs6~gmIq-8Q7DaSIPnnoaGB78fa5SCdb~R5KRw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      />
      <Box sx={{ display: "flex",
    
    width: '266px',
    height: '34px',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: ' 600',
    fontSize: ' 28px',
    lineHeight: '34px',
    color: '#333333',}}>
        Care Now Pay Later
      </Box>
      <Box sx={{ display:'flex',
flexDirection: 'column',
gap:"49px",
padding:'4%',
    textAlign:'center', 
    width: '524px',
    height: '356px',
    background:' #FFFFFF',
borderRadius: '32px',}}>
       <Box sx={{height:' 44px',
fontFamily: 'Inter',
fontStyle: 'normal',
fontWeight: '600',
fontSize: '36px',
lineHeight: '44px',
color: '#333333',}}>Sign Up</Box>
<Box>
  <Box sx={{width: '389px',
height: '29px',
fontFamily: 'Inter',
fontStyle: 'normal',
fontWeight: '400',
fontSize: '24px',
lineHeight: '29px',
color: '#333333', marginBottom: '15px' }}>Mobile Number <Typography
component="span"
sx={{color:'red',fontSize:'24px'}}
>
*
</Typography></Box>
<TextField
          placeholder="Try to submit with no text!"
          variant="outlined"
          required
          sx={{ mb: 1,width:'300px', fontSize: 'var(--joy-fontSize-sm)' }}
        />
         
</Box>
<Box sx={{display:'flex',justifyContent:'center'}}>
<Button variant="contained" sx={{width:"50%",fontWeight:'600',fontSize:'24px',borderRadius:'30px'}}>Send Otp</Button>

</Box>

      </Box>
    </Box>
  )
}

export default SignUp