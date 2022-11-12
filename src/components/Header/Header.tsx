import { AppBar, Typography } from "@mui/material";

function Header() {
    return (
        <header>
            <AppBar position="static">
                <Typography variant="h1"
                    sx={{ fontSize: 30, fontWeight: 400, textAlign: 'center', marginTop: 3, marginBottom: 3 }}>

                    Calculadora de porcentagem
                </Typography>
            </AppBar>
        </header>
    );
}

export default Header;