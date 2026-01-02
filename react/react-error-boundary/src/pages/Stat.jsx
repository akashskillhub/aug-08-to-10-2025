import React from 'react'
import Card1 from '../components/Card1'
import Card2 from '../components/Card2'
import Card3 from '../components/Card3'
import { ErrorBoundary } from 'react-error-boundary'
const ErrorHandler = () => {
    return <h1>error</h1>
}
const Stat = () => {
    return <>
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <ErrorBoundary FallbackComponent={ErrorHandler}>
                        <Card1 />
                    </ErrorBoundary>
                </div>
                <div className="col-sm-4">
                    <ErrorBoundary FallbackComponent={ErrorHandler}>
                        <Card2 />
                    </ErrorBoundary>
                </div>
                <div className="col-sm-4">
                    <ErrorBoundary FallbackComponent={ErrorHandler}>
                        <Card3 />
                    </ErrorBoundary>
                </div>
            </div>
        </div>
    </>
}

export default Stat