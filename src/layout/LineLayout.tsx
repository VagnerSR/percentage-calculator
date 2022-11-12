import { Alert, AlertTitle, Button, TextField, Typography } from "@mui/material";
import { currency } from "../mask/mask";
import "./LineLayout.css";

interface LayoutProps {
    textOne?: string
    valueOne: string
    onChageOne: any
    labelOne: string
    palceHolderOne: string


    textTwo: string
    textBreak?: string
    valueTwo: string
    onChangeTwo: any
    labelTwo: string
    palceHolderTwo: string

    textThree?: string
    onClick: any
    result: string | number
    children?: any
}

function LineLayout(props: LayoutProps) {

    return (
        <div className="lineWrapper">
            <div className="lineOne">

                <div className="secOne">
                    <Typography sx={{ fontSize: 20, marginTop: 4, marginRight: 2 }}>
                        {props.textOne}
                    </Typography>

                    <TextField
                        InputProps={{
                            value: props.valueOne,
                            onKeyDown: currency,
                        }}
                        id="outlined-number"
                        label={props.labelOne}
                        placeholder={props.palceHolderOne}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(event) => {
                            props.onChageOne(event.target.value)
                        }}
                        value={props.valueOne}
                        sx={{
                            width: 150, marginRight: 2, marginTop: 3
                        }}
                    />

                    <Typography sx={{ fontSize: 20, marginTop: 4, marginRight: 2 }}>
                        {props.textTwo}
                    </Typography>

                </div>

                <div className="secOne">
                    <Typography sx={{ fontSize: 20, marginTop: 4, marginRight: 2 }}>
                        {props.textBreak}
                    </Typography>
                    <TextField
                        InputProps={{
                            value: props.valueTwo,
                            onKeyDown: currency,
                        }}
                        id="outlined-number"
                        label={props.labelTwo}
                        placeholder={props.palceHolderTwo}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(event) => {
                            props.onChangeTwo(event.target.value)
                        }}
                        value={props.valueTwo}
                        sx={{
                            width: 150, marginRight: 2, marginTop: 3
                        }}
                    />

                    <Typography sx={{ fontSize: 20, marginTop: 4, marginRight: 2 }}>
                        {props.textThree}
                    </Typography>
                </div>

                <Button sx={{ marginTop: 4 }}
                    variant="contained"
                    onClick={props.onClick}>
                    Calcular
                </Button>
            </div>

            <div className="lineTwo">
                <Alert severity="info" icon={false} sx={{ marginTop: 3, fontSize: 20 }}>
                    <AlertTitle sx={{ fontWeight: 700 }}>Resultado</AlertTitle>
                    {props.result}
                </Alert>
            </div>
        </div>
    );
}

export default LineLayout;