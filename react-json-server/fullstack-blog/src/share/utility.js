import clsx from "clsx";

export const handleClassess = (formik, key) => clsx({
    "form-control my-2": true,
    "is-invalid": formik.touched[key] && formik.errors[key],
    "is-valid": formik.touched[key] && !formik.errors[key],
})

export const API_URL = "http://localhost:5000"