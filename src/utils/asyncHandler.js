

export const asyncHandler = (requestHandler) => {
    return (req, res, next) => Promise
        .resolve(
            requestHandler(req, res, next)
        )
        .catch((error) => next(error))
}



// const asyncHandler2 = (requestHandler) => async (req, res, next) => {
//     try {
//        await return requestHandler(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success : false,
//             message : error.message
//         })
//     }
// }