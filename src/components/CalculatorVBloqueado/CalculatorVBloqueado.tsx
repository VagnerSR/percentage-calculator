import { Alert, AlertTitle, Box, Button, Container, InputProps, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Layout from "../../layout/Layout";
import { currency } from "../../mask/mask";
import { percentage } from "../../models/percentageFunctions";

function CalculatorVBloqueado() {
    const [lockedValue, setLockedValue] = useState<string>('')
    const [debtValue, setDebtValue] = useState<string>('')
    const [result, setResult] = useState<string>('')

    function showResult() {
        return setResult(`${lockedValue} é igual a ${percentage(lockedValue, debtValue, setLockedValue, setDebtValue)}% de ${debtValue}.`)
    }

    return (
        <main>
            <Layout title='Calcule a porcentagem do valor bloqueado'>

                <TextField
                    autoFocus 
                    InputProps={{
                        value: lockedValue,
                        onKeyDown: currency,
                    }}
                    id="outlined-basic"
                    label="Digite o valor bloqueado"
                    placeholder="0,00"
                    variant="outlined"
                    onChange={(event) => {
                        setLockedValue(event.target.value)
                    }}
                    value={lockedValue}
                    sx={{
                        width: {
                            xs: 250,
                            sm: 270,
                            md: 300,
                            lg: 300,
                            xl: 300,
                        }, marginRight: 2, marginTop: 3
                    }}

                />


                <TextField
                     InputProps={{
                        value: debtValue,
                        onKeyDown: currency,
                    }}
                    id="outlined-number"
                    label="Digite o valor da dívida"
                    placeholder="0,00"
                    onChange={(event) => {
                        setDebtValue(event.target.value)
                    }}
                    value={debtValue}
                    sx={{
                        width: {
                            xs: 250,
                            sm: 270,
                            md: 300,
                            lg: 300,
                            xl: 300,
                        }, marginRight: 2, marginTop: 3
                    }}
                />

                <Button sx={{ marginTop: 4 }}
                    variant="contained"
                    onClick={showResult}>
                    Calcular
                </Button>

                <Alert severity="info" icon={false} sx={{ marginTop: 3, fontSize: 20 }}>
                    <AlertTitle sx={{ fontWeight: 700 }}>Resultado</AlertTitle>
                    {result}
                </Alert>

            </Layout>

        </main>
    );
}

export default CalculatorVBloqueado;