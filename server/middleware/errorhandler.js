export const errorHandler = (err, req, res, next) => {
    console.error(err.message);
    const statusCode = err.statusCode || 500;
    return res.status(statusCode).json({
        response_code: statusCode,
        response_message: err.message
    });
}