import React from 'react'
import { Button } from 'react-bootstrap'

const RbButton = () => {
    return <>
        {
            [
                "primary",
                "secondary",
                "info",
                "success",
                "danger",
                "warning",
                "dark",
                "light"
            ].map(item => <Button key={item} variant={item}>{item}</Button>)
        }
        {
            [
                "outline-primary",
                "outline-secondary",
                "outline-info",
                "outline-success",
                "outline-danger",
                "outline-warning",
                "outline-dark",
                "outline-light"
            ].map(item => <Button key={item} variant={item}>{item}</Button>)
        }
        <hr />
        <Button size='lg'>Large</Button>
        <Button >medium</Button>
        <Button size='sm'>small</Button>

        <Button variant='outline-dark' size='lg'>Submit</Button>
    </>
}

export default RbButton