const clsSec = require('../config/ClsSec');
const expect = require('chai').expect;

describe('testing for clsEnviroment', () =>{
 it('test encrypt and decrypt', () =>{
   let testToEncrypt = 'Hellow world';
   testToEncrypt = clsSec.ProcessObfuscate(testToEncrypt);
   testToEncrypt =clsSec.ProcessDesObfuscate(testToEncrypt);
   expect(testToEncrypt).to.equal('Hellow world');
 });
});
