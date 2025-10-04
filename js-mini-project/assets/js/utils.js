export const validate = (...el) => {
    let isValid = true
    for (const item of el) {
        if (item.value === "") {
            item.classList.remove("is-valid")
            item.classList.add("is-invalid")
            isValid = false
        } else {
            item.classList.remove("is-invalid")
            item.classList.add("is-valid")
        }
    }
    return isValid
}