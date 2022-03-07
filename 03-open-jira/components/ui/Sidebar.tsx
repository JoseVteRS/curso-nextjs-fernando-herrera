import InboxOutlined from "@mui/icons-material/InboxOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    Divider,
} from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { UIContext } from "../../context/ui";

const MENU_ITEM = ["Inbox", "Starred", "Send Email", "Drafts"];

export const Sidebar = () => {
    const { sidemenuOpen, closeSideMenu } = useContext(UIContext);


    return (
        <Drawer
            anchor="left"
            open={sidemenuOpen}
            onClose={closeSideMenu}
        >
            <Box sx={{ width: 250 }}>
                <Box sx={{ padding: "5px 10px" }}>
                    <Typography variant="h4">Menú</Typography>
                    <List>
                        {MENU_ITEM.map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 ? (
                                        <InboxOutlined />
                                    ) : (
                                        <MailOutlineOutlinedIcon />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {MENU_ITEM.map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 ? (
                                        <InboxOutlined />
                                    ) : (
                                        <MailOutlineOutlinedIcon />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </Drawer>
    );
};
