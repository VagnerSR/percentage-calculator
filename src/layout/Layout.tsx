import { Box, Container, Typography } from "@mui/material";
import "./Layout.css";

interface LayoutProps {
    title: string
    children: any
}

function Layout(props: LayoutProps) {
    
    return (
        <main>
            <Container className="mainContainer">
                <Box sx={{ marginTop: 3, paddingBottom: 2}}>

                    <Typography variant="h2" sx={{fontSize: 35, paddingTop: 2}} >
                        {props.title}
                    </Typography>
                    <hr />

                    {props.children}
                  

                </Box>
            </Container>
        </main>
    );
}

export default Layout;