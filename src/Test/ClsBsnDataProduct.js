const product = require('../bussines/ClsBsnDataProduct');
const expect = require('chai').expect;
const response = require('./response.mock');
const prueba = require('../bussines/prueba');
const nock = require('nock');
var ObjClsEnv = require('../config/ClsEnviroment');
var Cifrado = require('../config/ClsSec');


const request ={
  TYPE_DOCUMENT: "C",
  DOCUMENT_NUMBER: "80090471",
  SERIAL_NUMBER_PRODUCT: "4506689478867238",
  SEQ_NUM_CODE: "0000",
  IDBANK: "1",
  IDPRODUCT: "2",
  viTYPE_PROCESS: "0"
}

const request2 ={
  TYPE_DOCUMENT: "C",
  DOCUMENT_NUMBER: "80090471",
  SERIAL_NUMBER_PRODUCT: "4506689478867238",
  SEQ_NUM_CODE: "0000",
  IDBANK: "1",
  IDPRODUCT: "2",
  TYPE_PROCESS: "1"
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



    // it('Get a user by username', () => {
    //   return prueba.getUser('octocat')
    //     .then(response => {
    //       //expect an object back
    //       console.log("AQUI", response);
    //       expect(typeof response).to.equal('object');
  
    //       expect(response.name).to.equal('The Octocat')
    //       expect(response.company).to.equal('GitHub')
    //       expect(response.location).to.equal('San Francisco')
    //       //Test result of name, company and location for the response
    //       // expect(response.id).to.equal('123')
    //       // expect(response.respuesta).to.equal('Respuesta exitosa')
          
    //     });
    // });

  it('Type product con  0', ()=>{
    // var develop= Cifrado.ProcessObfuscate('/tc-first-data/account/');
    // console.log("DEVELOP CIFRADO", develop);
    // var desifrado = Cifrado.ProcessDesObfuscate(develop);
    // console.log("DEVELOP Desifrado", desifrado);
    // prod https://api.bancodebogota.co/tc-first-data/account/
    // develop https://3iikhi3vcb.execute-api.us-east-1.amazonaws.com/qa/account/
   product.BsnDataProduct(request,(response,error) =>{
     console.log("FINAL RESPONSE: ", error);
   });
  });



});