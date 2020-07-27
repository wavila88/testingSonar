
const objBsnConApiCustomers =  require('../bussines/bsnConApiCustomers.js');

class sdAsync{
    
    constructor(){}
    
    async asyncBsnConApiCustomers(viDOCUMENT_NUMBER,viTYPE_DOCUMENT)
    {
        let objDataCustomers = new objBsnConApiCustomers();
      
        return new Promise((resolver, reject)=>{
             objDataCustomers.getDataCustomers(viDOCUMENT_NUMBER,viTYPE_DOCUMENT).then((result)=>{
                resolver(result);
            });    
        });
    }
}

module.exports = sdAsync;