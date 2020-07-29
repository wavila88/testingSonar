const mysqlConnection  =  require('../config/configDb.js');

/*=================================================================*/

const FunctionSPInsSDInsuranceTempTrafficData = (requestUser, cb)=>{
                    mysqlConnection.getConnection((error, connect)=>{
                    let SPInsSDInsuranceTempTrafficData =  "Call SP_Ins_SD_Insurance_Temp_Traffic_data('"+requestUser.viREQUEST_ID+"','"+requestUser.viCHANNEL_ID+"','"+requestUser.viADVISER_ID+"','"+requestUser.viDOCUMENT_NUMBER+"','"+requestUser.viDOCUMENT_TYPE+"','"+requestUser.viFIRST_NAME+"','"+requestUser.viSECOND_NAME+"','"+requestUser.viFIRST_SURNAME+"','"+requestUser.viSECOND_SURNAME+"','"+requestUser.viBIRTHDAY+"','"+requestUser.viOCCUPATION_ID+"','"+requestUser.viGENDER+"','"+requestUser.viCITY_BORN_ID+"','"+requestUser.viTYPE_COUSIN+"','"+requestUser.viPRODUCT_ID+"','"+requestUser.viPRODUCT_INSURANCE_ID+"','"+requestUser.viPRODUCT_INSURANCE_CODE_ID+"','"+requestUser.viCEL_PHONE+"','"+requestUser.viEMAIL+"','"+requestUser.viINCOME_VALUE+ "','"+requestUser.viSTATE+"')";//NO SONNAR
                    console.log("Se procede a ejecutar el SP: " + SPInsSDInsuranceTempTrafficData);
                    connect.query(SPInsSDInsuranceTempTrafficData, cb);
                    connect.release();
                });
};


/*============================================================*/

module.exports.FunctionSPInsSDInsuranceTempTrafficData = FunctionSPInsSDInsuranceTempTrafficData;
