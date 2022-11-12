export function percentage(lockedValue: string, debtValue: string) {
    const lockStr = lockedValue.replace(/\./g, "").replace(/\,/g, ".")
    const debtStr = debtValue.replace(/\./g, "").replace(/\,/g, ".")
    const percentageValue = (Number(lockStr!) * 100) / Number(debtStr!)

    if (isNaN(percentageValue)) {
        return '0'
    } else {
        return percentageValue.toFixed(2).replace(/\./g, ",")
    }
}


export function howMuchIsIt(percentegeValue: string, vaule: string) {
    const percentegeStr = percentegeValue.replace(/\./g, "").replace(/\,/g, ".")
    const valueStr = vaule.replace(/\./g, "").replace(/\,/g, ".")

    const returnedValue = (Number(percentegeStr) * Number(valueStr)) / 100

    if (isNaN(returnedValue)) {
        return '0'
    } else {
        return returnedValue.toFixed(2).replace(/\./g, ",")
    }
}


export function isWhatPercentOf(firstValue: string, secondVaule: string) {
    const firstStr = firstValue.replace(/\./g, "").replace(/\,/g, ".")
    const secondStr = secondVaule.replace(/\./g, "").replace(/\,/g, ".")

    const returnedValue = (Number(firstStr) * 100) / Number(secondStr)

    if (isNaN(returnedValue)) {
        return '0'
    } else {
        return returnedValue.toFixed(2).replace(/\./g, ",")
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