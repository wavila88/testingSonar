const httpStatus		    =   require('./src/config/httpStatus.js');
const response  		    =   require('./src/config/templateResponse.js');
const RequestUser           =   require('./src/models/RequestUsers.js');
const ObjClsBsnDataProduct  =   require('./src/bussines/ClsBsnDataProduct.js');


exports.handler =  (event, context, callback) => {

 try {
        context.callbackWaitsForEmptyEventLoop = false;
        
        let requestUser =  RequestUser.requestUser(event);
        
        if(requestUser.viIDBANK === "1") // BANCO DE BOGOTA
        {
            
            ObjClsBsnDataProduct.BsnDataProduct(requestUser,(error,results) =>{
                
                 let rtaResponse =JSON.stringify(response("OK", httpStatus.OK,results));
                    
                if(error){
                    console.log("Se produjo un error al ejecutar al consumir el API -- ", error);
                    callback(null, response("OK", httpStatus.NOT_FOUND,  JSON.parse(error)));
                }
                else
                {
                    
                    rtaResponse = rtaResponse.replace('"body":"','"body": ').replace(/}"}/g, '}}');
                    rtaResponse = rtaResponse.replace(/'/g, '"');
                    callback(null,JSON.parse(rtaResponse));
                }
                     
            });
  
        }

  } catch (e) {
    console.log("Error", e)
    callback(null, response("INTERNAL_SERVER_ERROR", httpStatus.INTERNAL_SERVER_ERROR, null));
  }
};