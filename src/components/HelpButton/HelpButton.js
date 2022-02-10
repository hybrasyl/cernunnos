import * as React from "react";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import HelpIcon from "@mui/icons-material/Help";
import Tooltip from "@mui/material/Tooltip";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Tooltip title="Help">
                <IconButton
                    size="small"
                    onClick={handleClickOpen}
                    sx={{
                        mx: 1,
                        border: 1,
                        bgcolor: "tertiary.dark",
                        color: "white",
                        boxShadow: 10,
                        maxHeight: 40,
                        maxWidth: 40,
                        "&:hover": { boxShadow: 0, bgcolor: "secondary.dark" },
                    }}
                >
                    <HelpIcon
                        sx={{
                            fontSize: { xs: 20, sm: 30, md: 40 },
                        }}
                    />
                </IconButton>
            </Tooltip>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar sx={{ position: "relative" }}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Help
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Accordion sx={{ pt: 1, "&:before": { display: "none" }, "&expanded:before": { display: "none" } }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{ bgcolor: "background.default" }}
                    >
                        <Typography>What are phases?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ bgcolor: "primary.light" }}>
                        <Typography>
                            For ease of communicating status, the Hybrasyl Roadmap utilizes Waterfall Project Management
                            Terminology. Here are the definitions of each stage:
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="Concept"
                                    secondary="Project is currently being defined, involving whiteboarding and brainstorming.  Feasibility has already been determined at this point."
                                />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemText
                                    primary="Requirements"
                                    secondary="Project concept has solidified, and requirements and scope are being gathered."
                                />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemText
                                    primary="Analysis"
                                    secondary="Project requirements have been completed and are being analyzed for best approach for implementation."
                                />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemText
                                    primary="Design"
                                    secondary="Project analysis has been completed, and the implementation is being designed."
                                />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemText
                                    primary="Build"
                                    secondary="Project design has been completed, and the actual build of the feature is underway."
                                />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemText
                                    primary="System Integration Testing (SIT)"
                                    secondary="Project build has been completed and integration into Hybrasyl has begun."
                                />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemText
                                    primary="User Acceptance Testing (UAT)"
                                    secondary="Project integration has completed, and quality assurance testing has begun."
                                />
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemText
                                    primary="Implemented"
                                    secondary="Project is complete and feature is available for use."
                                />
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ pt: 1, "&:before": { display: "none" } }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        sx={{ bgcolor: "background.default" }}
                    >
                        <Typography>What are the element icons in the top right of the card?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ bgcolor: "primary.light",}}>
                        <Typography>
                            The element icon in the top right of the card represents who is assigned to the feature.
                            Currently, these icons represent:
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar alt="Earth" src={require(`../../images/pip_earth.png`)} />
                                </ListItemAvatar>
                                <ListItemText primary="Kedian" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar alt="Fire" src={require(`../../images/pip_fire.png`)} />
                                </ListItemAvatar>
                                <ListItemText primary="Sabrael" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar alt="Water" src={require(`../../images/pip_water.png`)} />
                                </ListItemAvatar>
                                <ListItemText primary="Dalta" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar alt="Time" src={require(`../../images/pip_time.png`)} />
                                </ListItemAvatar>
                                <ListItemText primary="Unassigned" />
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ pt: 1, "&:before": { display: "none" } }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        sx={{ bgcolor: "background.default" }}
                    >
                        <Typography>... and what is the number to the left of the element icon?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ bgcolor: "primary.light",}}>
                        <Typography>
                            The number to the left of the element icon represents the current priority of the item, from 1 to 5, with 1 being the lowest and 5 being the highest.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ pt: 1, "&:before": { display: "none" } }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                        aria-controls="panel4a-content"
                        id="panel4a-header"
                        sx={{ bgcolor: "background.default" }}
                    >
                        <Typography>What does the number or phrase in the green circle beneath the photo represent?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ bgcolor: "primary.light",}}>
                        <Typography>
                            If a specific release has been identified, the release number is included (e.g., 0.8.0).  If no specific release has been identified, the general phase that the release can be expected in is listed (Alpha, Beta, Launch, Post-Launch)
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ pt: 1, "&:before": { display: "none" } }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                        aria-controls="panel5a-content"
                        id="panel5a-header"
                        sx={{ bgcolor: "background.default" }}
                    >
                        <Typography>How do I get something added to the list?</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ bgcolor: "primary.light",}}>
                        <Typography>
                            Submit feedback in game!  Mail any suggestions to "Feedback" on the Hybrasyl staging server.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Dialog>
        </div>
    );
}
