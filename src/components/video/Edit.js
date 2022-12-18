import { Typography, Box, makeStyles, Grid, TextField, Button } from "@material-ui/core"
import { deepPurple, blue } from '@material-ui/core/colors';
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
const useStyles = makeStyles({
 headingColor: {
  backgroundColor: deepPurple[400],
  color: "white"
 },
 addVideoColor: {
  backgroundColor: blue[400],
  color: "white"
 },

});

const Edit = () => {
 const classes = useStyles();
 const { id } = useParams();
 const history = useHistory();
 const [video, setVideo] = useState({
  title: "",
  artist: "",
 });
 useEffect(() => {
  async function getVideo() {
   try {
    const video = await axios.get(`http://localhost:3333/videos/${id}`)
    // console.log(video.data);
    setVideo(video.data);
   } catch (error) {
    console.log("Something is Wrong");
   }
  }
  getVideo();
 }, [id]);

 function onTextFieldChange(e) {
    setVideo({
     ...video,
     [e.target.name]: e.target.value
    })
   }

 async function onFormSubmit(e) {
  e.preventDefault()
  try {
   await axios.put(`http://localhost:3333/videos/${id}`, video)
   history.push("/videos")
  } catch (error) {
   console.log("Something is Wrong");
  }
 }
 function handleClick() {
  history.push("/videos")
 }
 return (
  <>

   <Grid container justify="center" spacing={4}>
    <Grid item md={6} xs={12}>
     <Box textAlign="center" p={2} className={classes.addVideoColor} mb={2}>
      <Typography variant="h4">Edit Video</Typography>
     </Box>
     <form>
      <Grid container spacing={2}>
       <Grid item xs={12} sm={6}>
        <TextField autoComplete="id" name="id" variant="outlined" required fullWidth id="id" label="ID" autoFocus value={id} disabled />
       </Grid>
       <Grid item xs={12} sm={6}>
        <TextField autoComplete="title" name="title" variant="outlined" required fullWidth id="title" label="Title" value={video.title} onChange={e => onTextFieldChange(e)} />
       </Grid>
       <Grid item xs={12} sm={6}>
        <TextField autoComplete="artist" name="artist" variant="outlined" required fullWidth id="artist" label="Artist" value={video.artist} onChange={e => onTextFieldChange(e)} />
       </Grid>
      </Grid>
      <Box m={3}>
       <Button type="button" variant="contained" color="primary" fullWidth onClick={e => onFormSubmit(e)}> Update </Button>
      </Box>
     </form>
     <Box m={3} textAlign="center">
      <Button variant="contained" color="primary" onClick={handleClick}>Back</Button>
     </Box>
    </Grid>
   </Grid >
  </>
 )
}

export default Edit
