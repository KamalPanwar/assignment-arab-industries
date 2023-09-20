import * as React from "react";
import "./Card1.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Divider, List, ListItem, ListItemText } from "@mui/material";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";

export default function Card1(props) {
  return (
    <div className="card1-container">
    <Card sx={{  borderRadius: ".5rem", boxShadow: 3 }}>
      <CardContent>
        <Box sx={{  mx: 2 ,height:'100%'}}>
          <Typography variant="h4" component="div">
            {props.plantype}
          </Typography>

          <Typography
            sx={{  textDecoration: "line-through" }}
            color="text.secondary"
            gutterBottom
          >
            <AttachMoneyOutlinedIcon
              fontSize="inherit"
            />{" "}
            {props.price}
          </Typography>
          <Typography variant="h4" gutterBottom >
            {" "}
            <AttachMoneyOutlinedIcon fontSize="inherit"  />{" "}
            {props.discountedPrice}
          </Typography>

          <Button
            sx={{
              backgroundColor: `${props.buttonColor}`,
              width: "60%",
           
              borderRadius: ".4rem",
            }}
            variant="contained"
            endIcon={<ArrowRightAltIcon />}
          >
            Send
          </Button>
        </Box>
        <Divider variant="middle" />

        <List >
        <ListSubheader >What you'll get:</ListSubheader>
        <ListItem sx={{height:'5%' , marginTop:'-1rem'}}>
          <ListItemIcon>
            <PersonOutlineOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={props.usersAllowed} />
        </ListItem>
        <ListItem sx={{height:'5%'}}>
          <ListItemIcon>
            <CloudDoneOutlinedIcon />
          </ListItemIcon>
          Upto {props.storageAllowed} gb Storage
        </ListItem >
        <ListItem sx={{height:'5%'}}>
          <ListItemIcon>
            <EmailOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary={props.supportType} />
        </ListItem>
        </List>
      </CardContent>
      <CardActions sx={{marginTop:'-2rem'}}>
        <Button size="small">Explore Features</Button>
      </CardActions>
    </Card>
    </div>
  );
}
