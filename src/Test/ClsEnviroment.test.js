const enviroment = require('../config/ClsEnviroment');
const expect = require('chai').expect;

const { describe } = require('mocha');

describe('Test ClsEnviroment', ()=>{

    it('test enviroment with diferents variables 1', () =>{
        process.env.VTypeEnv = "1";
        let res = enviroment.GetEnviromentAcces("0");
        res = enviroment.GetEnviromentAcces("1");
        res = enviroment.GetEnviromentAcces("2");
        res =expect(enviroment.GetEnviromentAcces("3")).to.equal('/qa/account/');
         
    });

    it('test enviroment with diferents variables 2', () =>{
        process.env.VTypeEnv = "2";
        let res = enviroment.GetEnviromentAcces("0");
        res = enviroment.GetEnviromentAcces("1");
        res = enviroment.GetEnviromentAcces("2");
        res = enviroment.GetEnviromentAcces("3");
        
    });

    it('test enviroment with diferents variables 3', () =>{
        process.env.VTypeEnv = "3";
        let res = enviroment.GetEnviromentAcces("0");
        res = enviroment.GetEnviromentAcces("1");
        res = enviroment.GetEnviromentAcces("2");
        res = enviroment.GetEnviromentAcces("3");
        
    });

});