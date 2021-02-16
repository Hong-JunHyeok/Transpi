export const changeValue = (firstState, secondState, setFirstState, setSecondState) => {
    let first = firstState
    let second = secondState

    let temp = first
    first = second
    second = temp

    setFirstState(first)
    setSecondState(second)
}
