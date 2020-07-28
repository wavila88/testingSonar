const product = require('../bussines/ClsBsnDataProduct');
const expect = require('chai').expect;
const response = require('./response.mock');
const nock = require('./node_modules/nock');
var ObjClsEnv = require('../config/ClsEnviroment');



const request ={
  TYPE_DOCUMENT: "C",
  DOCUMENT_NUMBER: "80090471",
  SERIAL_NUMBER_PRODUCT: "4506689478867238",
  SEQ_NUM_CODE: "0000",
  IDBANK: "1",
  IDPRODUCT: "2",
  viTYPE_PROCESS: "0"
}


describe('test data product ', () =>{
  beforeEach(() => {
    var endpoint = ObjClsEnv.GetEnviromentAcces("2");
    var resource = ObjClsEnv.GetEnviromentAcces("3");
   
    console.log("END POINT2: ", endpoint )
    nock(endpoint)
      .post(resource)
      .reply((uri, requestBody, cb) => {
        setTimeout(() => cb(null, [200, response]), 1000)
      })
    });

  it('Call api, map and  response', ()=>{
   product.BsnDataProduct(request,(response,error) =>{
   
   const res = JSON.parse(error.replace(/'/gi, '"'))
     expect(res.CardId_productId).to.equal('****6683');
     expect(res.Account_productId).to.equal('4916264320327988743');
   });
  });



});