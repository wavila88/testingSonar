const expect = require('chai').expect;
const templateResponse = require('../config/templateResponse');


describe('testing for templateResponse', () =>{

    it('Take template response and validate', ()=>{
       const res = templateResponse('mensaje','200','Exito');
      expect(res.message).to.equal('mensaje');
    });
});

module.exports = templateResponse;
