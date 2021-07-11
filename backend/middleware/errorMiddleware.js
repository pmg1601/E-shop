// Not Found Error
const notFound = (req, res, next) => {
    const error = new Error(`Not Found = ${req.originalUrl}`)
    res.status(404)
    next(error)
}

// Handle error if request is invalid
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message: err.message,

        // We only need to see this error if we are in 'development' environment
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
}

export { notFound, errorHandler }
