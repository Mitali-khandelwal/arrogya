import { TextField, Typography } from '@mui/material'
import { Box, width } from '@mui/system'
import { Button } from '@mui/material'

import React from 'react'

const EnterDetails = () => {
  return (
   <Box sx={{background: 'linear-gradient(45deg, #E5E5E5 30%, #B3CCE7 90%)',
   color: 'white',
 height: '100vh',
padding: '0 30px',display: 'flex',gap:'20px',flexDirection: 'column',alignContent:'center',alignItems:'center'}}>
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
        Enter Your Details
    </Box>


<Box
sx={{display: 'flex' ,justifyContent:'space-between', 
fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '300',fontSize: '22px',lineHeight: '29px',color: '#333333', marginBottom: '15px'  , 
width:'80%'}}
>

<Box sx={{
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '24px',
  marginLeft: '10%',

  // lineHeight: '29px',
  color: '#1479FF'}}>Personal Details</Box>
<Box sx={{
  fontFamily: 'Inter',
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '24px',
  color: '#1479FF',
  marginRight: '15%'
  }}>Bank Details</Box>
  </Box>

<Box sx={{display: 'flex' ,justifyContent:'space-between', 
fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '300',fontSize: '22px',lineHeight: '29px',color: '#333333', marginBottom: '15px'  , 
width:'80%'}}
>
<Box sx={{display:'flex'}}>
<Box sx={{display:'flex',fontSize:'20px',border:'2px solid red',width:'200px'}}>Mobile Number<Typography sx={{color:'red',fontSize:'15px'}}>*</Typography></Box>
          
<Box sx = {{marginLeft : '12px' , border: 'none' }}>
  <TextField  sx={{  border:'none' , height: '15px' , input: {
            borderRadius:'7px',
            background: "white",
           marginLeft: '12px'
          } }} variant="outlined"></TextField>
</Box >
</Box>


<Box sx={{display:'flex',border:'1px solid red'}}>
<Box sx={{display:'flex',fontSize:'20px'}}>Account Number<Typography sx={{color:'red',fontSize:'15px'}}>*</Typography></Box>
<Box sx = {{marginLeft : '15px'}}>
  <TextField  sx={{  border:'none' , height: '15px' , input: {
            borderRadius:'7px',
            background: "white"
          }}} variant="outlined"></TextField>
</Box >
</Box>


</Box>
<Box sx={{display: 'flex' ,justifyContent:'space-between', 
fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '300',fontSize: '22px',lineHeight: '29px',color: '#333333', marginBottom: '15px'  , 
width:'80%'

}}>
<Box sx={{display:'flex'}}>
<Box sx={{display:'flex',fontSize:'20px',width:'200px'}}>Full Name<Typography sx={{color:'red',fontSize:'15px'}}>*</Typography></Box>
<Box sx = {{marginLeft : '15px'}}>
  <TextField  sx={{  border:'none' , height: '15px' , input: {
            borderRadius:'7px',
            background: "white"
          }}} variant="outlined"></TextField>
</Box >
</Box>


<Box sx={{display:'flex'}}>
<Box sx={{display:'flex',fontSize:'20px'}}>Confirm Account Number<Typography sx={{color:'red',fontSize:'15px'}}>*</Typography></Box>
<Box sx = {{marginLeft : '15px' , }}>
  <TextField  sx={{  border:'none' , height: '15px' , marginRight: '' , input: {
            borderRadius:'7px',
            background: "white"
          }}} variant="outlined"></TextField>
</Box >
</Box>


</Box>
<Box sx={{display: 'flex' ,justifyContent:'space-between', 
fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '300',fontSize: '22px',lineHeight: '29px',color: '#333333', marginBottom: '15px'  , 
width:'80%'

}}>
<Box sx={{display:'flex'}}>
<Box sx={{display:'flex',fontSize:'20px'}}>Specialisation<Typography sx={{color:'red',fontSize:'15px'}}>*</Typography></Box>
<Box sx = {{marginLeft : '15px'}}>
  <TextField  sx={{  border:'none' , height: '15px' , input: {
            borderRadius:'7px',
            background: "white"
          }}} variant="outlined"></TextField>
</Box >
</Box>


<Box sx={{display:'flex'}}>
<Box sx={{display:'flex',fontSize:'20px'}}>IFSC Code<Typography sx={{color:'red',fontSize:'15px'}}>*</Typography></Box>
<Box sx = {{marginLeft : '15px' , }}>
  <TextField  sx={{  border:'none' , height: '15px' , input: {
            borderRadius:'7px',
            background: "white"
          }}} variant="outlined"></TextField>
</Box >
</Box>


</Box>
<Box sx={{display: 'flex' ,justifyContent:'space-between', 
fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '300',fontSize: '22px',lineHeight: '29px',color: '#333333', marginBottom: '15px'  , 
width:'80%'

}}>
<Box sx={{display:'flex'}}>
<Box sx={{display:'flex',fontSize:'20px'}}>Licence Number<Typography sx={{color:'red',fontSize:'15px'}}>*</Typography></Box>
<Box sx = {{marginLeft : '15px'}}>
  <TextField  sx={{  border:'none' , height: '15px' ,input: {
            borderRadius:'7px',
            background: "white"
          } }} variant="outlined"></TextField>
</Box >
</Box>


<Box sx={{display:'flex'}}>
<Box sx={{display:'flex',fontSize:'20px'}}>Account Holder
 Name<Typography sx={{color:'red',fontSize:'15px'}}>*</Typography></Box>
<Box sx = {{marginLeft : '15px' , }}>
  <TextField  sx={{  border:'none' , height: '15px' , input: {
            borderRadius:'7px',
            background: "white"
          }}} variant="outlined"></TextField>
</Box >
</Box>


</Box>
<Box sx={{display: 'flex' ,justifyContent:'space-between', 
fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '300',fontSize: '22px',lineHeight: '29px',color: '#333333', marginBottom: '15px'  , 
width:'80%'

}}>
<Box sx={{display:'flex'}}>
<Box sx={{display:'flex',fontSize:'20px'}}>E-Mail<Typography sx={{color:'red',fontSize:'15px'}}>*</Typography></Box>
<Box sx = {{marginLeft : '15px'}}>
  <TextField  sx={{  border:'none' , height: '15px' 
, input: {
  borderRadius:'7px',
  background: "white"
}
}} variant="outlined"></TextField>
</Box >
</Box>


<Box sx={{display:'flex'}}>
<Box sx={{display:'flex',fontSize:'20px'}}>Branch<Typography sx={{color:'red',fontSize:'15px'}}>*</Typography></Box>
<Box sx = {{marginLeft : '15px' , }}>
  <TextField  sx={{  border:'none' , height: '15px' ,
input: {
  borderRadius:'7px',
  background: "white"
}
}} variant="outlined"></TextField>
</Box >
</Box>


</Box>
<Box sx={{display: 'flex' ,justifyContent:'space-between', 
fontFamily: 'Inter',fontStyle: 'normal',fontWeight: '300',fontSize: '22px',lineHeight: '29px',color: '#333333', marginBottom: '15px'  , 
width:'80%'

}}>
<Box sx={{display:'flex'}}>
<Box sx={{display:'flex',fontSize:'20px'}}>Address<Typography sx={{color:'red',fontSize:'15px'}}>*</Typography></Box>
<Box sx = {{}}>
  <TextField  sx={{  border:'none' , height: '15px'
,input: {
  borderRadius:'7px',
  background: "white"
} }} variant="outlined"></TextField>
</Box >
</Box>


<Box sx={{display:'flex'}}>
<Box sx={{display:'flex',fontSize:'20px'}}>Bank Name<Typography sx={{color:'red',fontSize:'15px' }}>*</Typography></Box>
<Box sx = {{marginLeft : '15px'}}>
  <TextField  sx={{  border:'none' , height: '15px',input: {
            borderRadius:'7px',
            background: "white"
          }}}  variant="outlined"></TextField>
</Box >
</Box>
</Box>

<Box  sx={{color: 'grey'}}><input type="checkbox" /> I accept following  <Typography sx={{color:'blue' ,  borderBottom: '1px solid blue' , width: '100%'}}>Terms & Conditions</Typography>   </Box>


<Box sx={{display:'flex',justifyContent:'center'}}>
<Button variant="contained" sx={{width:"100%",fontWeight:'600',fontSize:'24px',borderRadius:'30px'}}>Creat Account</Button>

</Box>
   </Box>
   
   
   
   

  )
}

export default EnterDetails