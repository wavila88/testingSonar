const ObjClsSec		        =   require('../config/ClsSec.js');

const GetEnviromentAcces = (Option) =>{

     let varEnviroment = process.env.VTypeEnv || "1";  
     let GateAccess =  '';
     let AccessReturn = '';
     
     if(Option === "0")
     {
          if (varEnviroment === "1") // QA
          {
              GateAccess = '1ab9cc5d77ffb0a77aba806258f52f6f2b1e30b564745f9542495dc54423adaee315fb2a7093d5cc';
              AccessReturn = ObjClsSec.ProcessDesObfuscate(GateAccess);
          }
          
          if (varEnviroment === "2") // ST
          {
              GateAccess = '1ab9cc5d77ffb0a77aba806258f52f6f2b1e30b564745f9542495dc54423adaee315fb2a7093d5cc';
              AccessReturn = ObjClsSec.ProcessDesObfuscate(GateAccess);
          }
          
          if (varEnviroment === "3") //PROD
          {
              GateAccess = '06cdc93843fd89a56ab581237cc94d29552642ef417277a51f4551e1483898f0ee18841567ab8b8a';
              AccessReturn = ObjClsSec.ProcessDesObfuscate(GateAccess);
          }
     }
     
     if(Option === "1")
     {
          if (varEnviroment === "1") // QA
          {
              GateAccess = '2afefb7c5ea0f0cd3b9bdf3d43cd4d6f792f29e37b2575a25e6b1acb7e29c7bca86da82775b7c0ca4fec66f99405d957d98f9bdacc8d7afb187b4790bddd0114ab64';
              AccessReturn = ObjClsSec.ProcessDesObfuscate(GateAccess);
          }
          
          if (varEnviroment === "2") // ST
          {
              GateAccess = '2afefb7c5ea0f0cd3b9bdf3d43cd4d6f792f29e37b2575a25e6b1acb7e29c7bca86da82775b7c0ca4fec66f99405d957d98f9bdacc8d7afb187b4790bddd0114ab64';
              AccessReturn = ObjClsSec.ProcessDesObfuscate(GateAccess);
          }
          
          if (varEnviroment === "3") //PROD
          {
              GateAccess = '2afefb7c5ea0f0cd6982df7849c5107a752962e46c2779a34b2054c521348ae4bd29bf3572ee899a15ec24f98d09d843c0889a';
              AccessReturn = ObjClsSec.ProcessDesObfuscate(GateAccess);
          }
          
     }

     if(Option === "2")//End Point
     {
        if (varEnviroment === "1") // QA
        {
            GateAccess = '2afefb7c5ea0f0cd6982df7849c5107a752962e46c2779a34b2054c521';
            AccessReturn = ObjClsSec.ProcessDesObfuscate(GateAccess);
        }
        
        if (varEnviroment === "2") // ST
        {
            GateAccess = '2afefb7c5ea0f0cd6982df7849c5107a752962e46c2779a34b2054c521';
            AccessReturn = ObjClsSec.ProcessDesObfuscate(GateAccess);
        }
        
        if (varEnviroment === "3") //PROD
        {
            GateAccess = '2afefb7c5ea0f0cd6982df7849c5107a752962e46c2779a34b2054c521';
            AccessReturn = ObjClsSec.ProcessDesObfuscate(GateAccess);
        }
        
     }
     if(Option === "3")//Resource
     {
        if (varEnviroment === "1") // QA
        {
            GateAccess = '36e9a26a44e8ac962596d7224a8b1f7a792272e8776f';
            AccessReturn = ObjClsSec.ProcessDesObfuscate(GateAccess);
        }
        
        if (varEnviroment === "2") // ST
        {
            GateAccess = '36e9a26a44e8ac962596d7224a8b1f7a792272e8776f';
            AccessReturn = ObjClsSec.ProcessDesObfuscate(GateAccess);
        }
        
        if (varEnviroment === "3") //PROD
        {
            GateAccess = 'tc-first-data/account/';
            AccessReturn = ObjClsSec.ProcessDesObfuscate(GateAccess);
        }
        
     }
      
     
     return AccessReturn;
    
};

module.exports.GetEnviromentAcces = GetEnviromentAcces;