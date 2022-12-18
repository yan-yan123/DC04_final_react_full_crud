import { Typography, Box, makeStyles, Grid, TextField, Button } from "@material-ui/core"
import { grey, green } from '@material-ui/core/colors';
import List from "../video/List";
import axios from "axios";
import { useState } from "react";
const useStyles = makeStyles({
 headingColor: {
  backgroundColor: grey[500],
  color: "white"
 },
 addStuColor: {
  backgroundColor: green[400],
  color: "white"
 },
})

const Home = () => {
    const classes = useStyles();
    const [video, setVideo] = useState({
        title: "",
        artist: "",
    });
    const [status, setStatus] = useState();
   
    function onTextFieldChange(e) {
     setVideo({
      ...video,
      [e.target.name]: e.target.value
     })
    }
   
    async function onFormSubmit(e) {
     e.preventDefault()
     try {
      await axios.post(`http://localhost:3333/videos`, video)
      setStatus(true);
     } catch (error) {
      console.log("Something is Wrong");
     }
    }
    if (status) {
     return <Home />
    }
 return (
  <>
   <Box textAlign="center" className={classes.headingColor} p={2} mb={2}>
    <Typography variant="h5">BiliBili APP</Typography><a style={{color: 'white', textDecoration: 'none', marginLeft: '.10%'}}></a>
   </Box>
   <Grid container justify="center" spacing={4}>
    <Grid item md={6} xs={12}>
     <Box textAlign="center" p={2} className={classes.addvideosColor} mb={2} style={{ backgroundColor: "gray" }}>
      <Typography variant="h4">Add Video</Typography>
     </Box>
     <form noValidate>
      <Grid container spacing={2}>
       <Grid item xs={12}>
        <TextField autoComplete="title" type="text" name="title" required="title" variant="outlined" fullWidth id="title" label="Title" onChange={e => onTextFieldChange(e)}
        />
       </Grid>
       <Grid item xs={12}>
        <TextField autoComplete="artist" type="text" name="artist" required="artist" variant="outlined" fullWidth id="artist" label="Artist" onChange={e => onTextFieldChange(e)}
        />
       </Grid>
       <Grid item xs={12}>
       </Grid>
      </Grid>
      <Box m={3}>
      <Button type="submit" variant="contained" color="primary" fullWidth onClick={e => onFormSubmit(e)}>Add</Button>
      </Box>
     </form>
    </Grid>
    <List />

    <Grid item md={6} xs={12}>
     
    </Grid>
   </Grid>
  </>
 )
}

export default Home;