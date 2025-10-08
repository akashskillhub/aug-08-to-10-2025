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

export const showToast = (el, message, varient = "success") => {
    el.innerHTML = `<div class="alert alert-${varient}">${message}</div>`
    setTimeout(() => {
        el.innerHTML = ""
    }, 3000)
}