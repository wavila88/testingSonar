const dataTest = require('../utilitys/DataTest');
const expect = require('chai').expect;

describe('testing for dataTest', () => {

    it('get data test and validate elemnt rqUID', () =>{
        let response = dataTest.DataTestTC();
        response = JSON.parse(response.replace(/'/gi, '"'))
        expect(response.acctCCInfoInqRs.rqUID).to.equal('43bca1a1-17d3-4688-8621-396b3f0a3371');
    });
});
