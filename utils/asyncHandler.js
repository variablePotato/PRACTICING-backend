const asyncHandler= (requestHandler)=>{
    //using promises ->LOOK UP 
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }

}

export {asyncHandler}








//USING A TRY CATCH BLOCK

// const asyncHandler =()=>async(req,res,next)=>{
//     try{
//         await fn(req,res,next)
//     }
//     catch(error){
//         res.status(error.code||500).json({
//             success:false,
//             message:error.message
//         })
//     }
// }