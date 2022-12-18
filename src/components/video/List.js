import { Typography, Box, makeStyles, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton, Tooltip } from "@material-ui/core"
import { orange } from '@material-ui/core/colors';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
const useStyles = makeStyles({
 videoListColor: {
  backgroundColor: orange[400],
  color: "white"
 },
 tableHeadCell: {
  color: "white",
  fontWeight: "bold",
  fontSize: 16
 },
})

const List = () => {
 const classes = useStyles();
 const [video, setVideo] = useState([]);

 useEffect(() => {
  async function getAllVideo() {
   try {
    const video = await axios.get("http://localhost:3333/videos")
    // console.log(videos.data);
    setVideo(video.data);
   } catch (error) {
    console.log("Something is Wrong");
   }
  }
  getAllVideo();
 }, [])

 const handleDelete = async id => {
  await axios.delete(`http://localhost:3333/videos/${id}`);
  var newvideo = video.filter((item) => {
   // console.log(item);
   return item.id !== id;
  })
  setVideo(newvideo);
 }


 return (
  <>
   <TableContainer component={Paper}>
    
   <Box textAlign="center" p={2} className={classes.videoListColor} style={{ backgroundColor: "gray" }}>
    <Typography variant="h4">Video List</Typography>
   </Box>
    <Table>
     <TableHead>
      <TableRow style={{ backgroundColor: "#616161" }}>
       <TableCell align="center" className={classes.tableHeadCell}>No</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Title</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Artist</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Action</TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {
       video.map((video, i) => {
        return (
         <TableRow key={i}>
          <TableCell align="center">{i + 1}</TableCell>
          <TableCell align="center">{video.title}</TableCell>
          <TableCell align="center">{video.artist}</TableCell>
          <TableCell align="center">
           <Tooltip title="View">
            <IconButton><Link to={`/view/${video.id}`}><VisibilityIcon color="primary" /></Link></IconButton>
           </Tooltip>
           <Tooltip title="Edit">
            <IconButton><Link to={`/edit/${video.id}`}><EditIcon /></Link></IconButton>
           </Tooltip>
           <Tooltip title="Delete">
            <IconButton onClick={() => handleDelete(video.id)}><DeleteIcon color="secondary" /></IconButton>
           </Tooltip>
          </TableCell>
         </TableRow>
        )
       })
      }

     </TableBody>
    </Table>
   </TableContainer>
  </>
 )
}

export default List;






