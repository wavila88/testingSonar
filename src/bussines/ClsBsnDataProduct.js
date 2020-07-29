var requestApi              =   require('request');
var jsonPathView            =   require('jsonpath');
const httpStatus		        =   require('../config/httpStatus.js');
const responseFunction      =   require('../config/templateResponse.js');
var uuid                    =   require('uuid');
var ObjClsTest              = require('../utilitys/DataTest.js');
var ObjClsEnv               = require('../config/ClsEnviroment.js');
const ClsObjOfus            = require('../config/ClsUtil.js');


const BsnDataProduct  = async (requestUser,cb)=>{

        console.log("llege : BsnDataProduct");
        let RqUID = uuid.v4();
        var jsonResultData = "";
        var Account = "";
        var ccmotoAcct_effDt  = "";
        var NumTC = "";

        var vXapiKey = ObjClsEnv.GetEnviromentAcces("0");
        var vUrlAPiProduct = ObjClsEnv.GetEnviromentAcces("1");
        const ObjOfusData = new ClsObjOfus();

        
        let dataRow = JSON.stringify({
              "documentNumber":  requestUser.viDOCUMENT_NUMBER  ,
              "documetType":   requestUser.viTYPE_DOCUMENT ,
              "cardId":  requestUser.viSERIAL_NUMBER_PRODUCT,
              "cardSeqNum": requestUser.viSEQ_NUM_CODE,
              "uid": RqUID 
          });

        var options = {
          'method': 'POST',
          'url': vUrlAPiProduct,
          'headers': {
            'x-api-key': vXapiKey,
            'Content-Type': ['application/json', 'application/json']
          },
          body: dataRow
        };

        
        if(requestUser.viTYPE_PROCESS  === "0")
        {

          requestApi(options, function (error, response) { 

            if (error) 
            {
              cb(error,null);
            }
            else
            {
              var boolRtaConst = response.body.includes("Transaccion exitosa");

              if(boolRtaConst === true)
              {
                jsonResultData = JSON.parse(response.body);
                NumTC = "'CardId_productId' : " + "'" + ObjOfusData.FnMask(jsonResultData["acctCCInfoInqRs"]["cardAcctId"]["cardId"]) + "',";
                Account = "'Account_productId' : " + "'" + jsonResultData["acctCCInfoInqRs"]["account"]["productId"] + "',";
                ccmotoAcct_effDt  = "'CcmotoAcct_EffDt' : " + "'" + jsonResultData["acctCCInfoInqRs"]["cardAcctId"]["ccmotoAcct"]["effDt"] + "'";
                ResultReturnJsonDataProduct = "{" + NumTC  + Account + ccmotoAcct_effDt +"}"; 
                cb(null, JSON.parse(JSON.stringify(ResultReturnJsonDataProduct))); 
              }
              else
              {
                cb(null,JSON.parse(response.body));      
              }

            }
          });
        }
        else
        {
          let jsonResultData = JSON.parse(ObjClsTest.DataTestTC());
          NumTC = "'CardId_productId' : " + "'" + ObjOfusData.FnMask(jsonResultData["acctCCInfoInqRs"]["cardAcctId"]["cardId"]) + "',";
          Account = "'Account_productId' : " + "'" + jsonResultData["acctCCInfoInqRs"]["account"]["productId"] + "',";
          ccmotoAcct_effDt  = "'CcmotoAcct_EffDt' : " + "'" + jsonResultData["acctCCInfoInqRs"]["cardAcctId"]["ccmotoAcct"]["effDt"] + "'";
          ResultReturnJsonDataProduct = "{"+ NumTC + Account + ccmotoAcct_effDt +"}";
          cb(null,ResultReturnJsonDataProduct);
        }
};

module.exports.BsnDataProduct = BsnDataProduct;
