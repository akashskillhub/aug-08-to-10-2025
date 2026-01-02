import React from 'react'

const useLocal = () => {
    const add = (name, data) => {
        localStorage.setItem(name, JSON.stringify(data))
    }
    const remove = (name) => {
        localStorage.removeItem(name)
    }
    const get = (name) => {
        localStorage.getItem(name)
    }

    return { add, remove, get }
}

export default useLocal