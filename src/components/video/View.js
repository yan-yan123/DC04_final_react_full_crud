import { Typography, Box, makeStyles, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, Button } from "@material-ui/core"
import { orange } from '@material-ui/core/colors';
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const useStyles = makeStyles({
 stuListColor: {
  backgroundColor: orange[400],
  color: "white"
 },
 tableHeadCell: {
  color: "white",
  fontWeight: "bold",
  fontSize: 16
 },
});
const View = () => {
 const classes = useStyles();
 const { id } = useParams();
 const [video, setVideo] = useState([]);
 const history = useHistory();
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
 }, [id])

 function handleClick() {
  history.push("/videos")
 }
 return (
  <>
   <Box textAlign="center" p={2} className={classes.stuListColor} style={{ backgroundColor: "blue" }}>
    <Typography variant="h4">Video Detail</Typography>
   </Box>
   <TableContainer component={Paper}>
    <Table>
     <TableHead>
      <TableRow style={{ backgroundColor: "#616161" }}>
       <TableCell align="center" className={classes.tableHeadCell}>ID</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Title</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Artist</TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      <TableRow>
       <TableCell align="center">{music.id}</TableCell>
       <TableCell align="center">{music.title}</TableCell>
       <TableCell align="center">{music.artist}</TableCell>
      </TableRow>
     </TableBody>
    </Table>
   </TableContainer>
   <Box m={3} textAlign="center">
    <Button variant="contained" color="primary" onClick={handleClick}>Back</Button>
   </Box>
  </>
 )
}

export default View
