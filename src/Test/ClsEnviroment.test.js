const enviroment = require('../config/ClsEnviroment');
const expect = require('chai').expect;

const { describe } = require('mocha');

describe('Test ClsEnviroment', ()=>{

    it('test enviroment with diferents variables 1', () =>{
        process.env.VTypeEnv = "1";
        enviroment.GetEnviromentAcces("0");
        enviroment.GetEnviromentAcces("1");
        enviroment.GetEnviromentAcces("2");
        expect(enviroment.GetEnviromentAcces("3")).to.equal('/qa/account/');

    });

    it('test enviroment with diferents variables 2', () =>{
        process.env.VTypeEnv = "2";
        enviroment.GetEnviromentAcces("0");
        enviroment.GetEnviromentAcces("1");
        enviroment.GetEnviromentAcces("2");
        enviroment.GetEnviromentAcces("3");

    });

    it('test enviroment with diferents variables 3', () =>{
        process.env.VTypeEnv = "3";
        enviroment.GetEnviromentAcces("0");
        enviroment.GetEnviromentAcces("1");
        enviroment.GetEnviromentAcces("2");
        enviroment.GetEnviromentAcces("3");

    });

});
