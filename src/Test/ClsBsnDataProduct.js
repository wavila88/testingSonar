const product = require('../bussines/ClsBsnDataProduct');
const assert = require('chai').assert;


const request ={
  TYPE_DOCUMENT: "C",
  DOCUMENT_NUMBER: "80090471",
  SERIAL_NUMBER_PRODUCT: "4506689478867238",
  SEQ_NUM_CODE: "0000",
  IDBANK: "1",
  IDPRODUCT: "2",
  TYPE_PROCESS: "0"
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

  it('Type product con  0', ()=>{
   product.BsnDataProduct(request);
  });

  it('Type product diferente 0', ()=>{
    product.BsnDataProduct(request2);
   });

});