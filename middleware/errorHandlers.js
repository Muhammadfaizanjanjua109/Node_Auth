
const {constant} =require('../constant')
const errorHandler=(err,req,res,next)=>{
const statusCode=res?.statusCode ? res?.StatusCode :500
switch (statusCode) {
    case constant.VALIDATION_ERROR:
        res.json({tittle:'Validation Error',messege:err.messege, stackTrace:err.stack});
        break;
    case constant.UNAUTHORIZE:
        res.json({tittle:'UnAuthorize ',messege:err.messege, stackTrace:err.stack});
         break;
    case constant.FORBIDDEN:
         res.json({tittle:'Forbidden ',messege:err.messege, stackTrace:err.stack});
         break;
    case constant.NOT_FOUND:
         res.json({tittle:'Not Found ',messege:err.messege, stackTrace:err.stack});
         break;
    default:
        break;
}
}
module.exports=errorHandler