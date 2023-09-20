import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import "./Card2.css";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Divider, ListItem, ListItemText } from "@mui/material";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function Card2() {
  return (
    <div className="card2-container" >
      <Card className="card2-card" >
        <CardContent className="card2-content" >
          <Box>
            <Typography variant="h4" component="div">
              Free Starter
            </Typography>

            <Typography>
              The Quickest and easisiet way to try protocols
            </Typography>

            <Button
              sx={{
                backgroundColor: `Green`,

                borderRadius: ".4rem",
              }}
              variant="contained"
              endIcon={<ArrowRightAltIcon />}
            >
              Get Started
            </Button>
          </Box>

          <Divider variant="middle" />
          <Box>
            <ListSubheader>What you'll get:</ListSubheader>
            <ListItem>
              <ListItemIcon>
                <PersonOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="8 Users allowed" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CloudDoneOutlinedIcon />
              </ListItemIcon>
              Upto 25 gb Storage
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="email" />
            </ListItem>
          </Box>
        </CardContent>
      </Card>
      <Card className="card2-card" >
        <CardContent className="card2-content">
          <Box>
            <Typography variant="h4" component="div">
              EnterPrise Plan
            </Typography>

            <Typography>
              efforlessly customize and fine tune services
            </Typography>

            <Button
              sx={{
                backgroundColor: `blue`,
                width: "100%",

                borderRadius: ".4rem",
              }}
              variant="contained"
              endIcon={<ArrowRightAltIcon />}
            >
              Get Started
            </Button>
          </Box>

          <Divider variant="middle" />
          <Box>
            <ListSubheader>What you'll get:</ListSubheader>
            <ListItem>
              <ListItemIcon>
                <PersonOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="More than 75 Users allowed" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CloudDoneOutlinedIcon />
              </ListItemIcon>
              Customization of all other features
            </ListItem>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
