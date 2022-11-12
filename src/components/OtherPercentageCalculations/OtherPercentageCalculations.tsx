import { useState } from "react";
import Layout from "../../layout/Layout";
import LineLayout from "../../layout/LineLayout";
import { howMuchIsIt, isWhatPercentOf, percentageIncreaseDecrese } from "../../models/percentageFunctions";

function OtherPercentageCalculations() {
    const [percentegeValue, setPercentegeValue] = useState<string>('')
    const [numberValue, setNumberValue] = useState<string>('')
    const [resultHowMuch, setResultHowMuch] = useState<string>('')

    function showResultHowMuch() {
        return setResultHowMuch(`${percentegeValue}% de ${numberValue} é ${howMuchIsIt(percentegeValue, numberValue)}.`)
    }

    const [isWhatValueOne, setIsWhatValueOne] = useState<string>('')
    const [isWhatValueTwo, setIsWhatValueTwo] = useState<string>('')
    const [resultIsWhat, setResultIsWhat] = useState<string>('')

    function showResultIsWhat() {
        return setResultIsWhat(`${isWhatValueOne} é igual a ${isWhatPercentOf(isWhatValueOne, isWhatValueTwo)}% de ${isWhatValueTwo}.`)
    }   

    return (
        <Layout title="Outros cálculos de porcentagem">
            <LineLayout
                textOne='Quanto é '
                valueOne={percentegeValue}
                onChageOne={setPercentegeValue}                
                labelOne="Digite a porcentagem"
                palceHolderOne='0,00'
                textTwo='% de '
                valueTwo={numberValue}
                onChangeTwo={setNumberValue}
                labelTwo='Digite o valor'
                palceHolderTwo='0,00'
                textThree='?'
                onClick={showResultHowMuch} result={resultHowMuch} />

            <LineLayout
                valueOne={isWhatValueOne}
                onChageOne={setIsWhatValueOne}
                labelOne="Digite o primeiro valor"
                palceHolderOne='0,00'
                textTwo='é qual'
                textBreak="porcentagem de"
                valueTwo={isWhatValueTwo}
                onChangeTwo={setIsWhatValueTwo}
                labelTwo='Digite o segundo valor'
                palceHolderTwo='0,00'
                textThree='?'
                onClick={showResultIsWhat} result={resultIsWhat} />

        </Layout>
    );
}

export default OtherPercentageCalculations;