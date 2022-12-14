import { AppBar, Typography } from "@mui/material";

function Header() {
    return (
        <header>
            <AppBar position="static">
                <Typography variant="h1"
                    sx={{ fontSize: 25, fontWeight: 400, textAlign: 'center', marginTop: 3, marginBottom: 3 }}>

                    CALCULADORA DE PORCENTAGEM
                </Typography>
            </AppBar>
        </header>
    );
}

export default Header;