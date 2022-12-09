export function percentage(lockedValue: string, debtValue: string, setValueOne: Function, setValueTwo: Function) {
    const lockStr = lockedValue.replace(/\./g, "").replace(/\,/g, ".").replace(/\R/, '').replace(/\$/, '');
    const debtStr = debtValue.replace(/\./g, "").replace(/\,/g, ".").replace(/\R/, '').replace(/\$/, '');

    const percentageValue = (Number(lockStr!) * 100) / Number(debtStr!)

    if (isNaN(percentageValue)) {
        return '0'
    } else {
        return [percentageValue.toFixed(2).replace(/\./g, ","),
        setValueOne(''),
        setValueTwo('')
        ].join('')
    }
}


export function howMuchIsIt(percentegeValue: string, vaule: string, setValueOne: Function, setValueTwo: Function) {
    const percentegeStr = percentegeValue.replace(/\./g, "").replace(/\,/g, ".").replace(/\R/, '').replace(/\$/, '');
    const valueStr = vaule.replace(/\./g, "").replace(/\,/g, ".").replace(/\R/, '').replace(/\$/, '');

    const result = (Number(percentegeStr) * Number(valueStr)) / 100
    const returnedValue = Number(result.toFixed(2))
    if (isNaN(returnedValue)) {
        return '0'
    } else {
        return [returnedValue.toFixed(2).replace(/\D/g, "").replace(/(\d)(\d{2})$/, "$1,$2").replace(/(?=(\d{3})+(\D))\B/g, "."),
        setValueOne(''),
        setValueTwo('')
        ].join('')
    }
}


export function isWhatPercentOf(firstValue: string, secondVaule: string, setValueOne: Function, setValueTwo: Function) {
    const firstStr = firstValue.replace(/\./g, "").replace(/\,/g, ".").replace(/\R/, '').replace(/\$/, '');
    const secondStr = secondVaule.replace(/\./g, "").replace(/\,/g, ".").replace(/\R/, '').replace(/\$/, '');

    const returnedValue = (Number(firstStr) * 100) / Number(secondStr)

    if (isNaN(returnedValue)) {
        return '0'
    } else {
        return [returnedValue.toFixed(2).replace(/\./g, ","),
        setValueOne(''),
        setValueTwo('')
        ].join('')
    }
}



export function percentageIncreaseDecrese(firstValue: string, secondVaule: string) {
    const increase = Number(secondVaule) - Number(firstValue)
    const returnedValue = (increase * Number(firstValue)) / 100

    if (isNaN(returnedValue)) {
        return '0'
    } else {
        return returnedValue.toFixed(2).replace(/\./g, ",")
    }
}