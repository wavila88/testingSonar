const ObjClsSec		        =   require('../config/ClsSec.js');

const GetEnviromentAcces = (Option) =>{

     let varEnviroment = process.env.VTypeEnv;  
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
         console.log("Variable de entorno: ", varEnviroment)
        if (varEnviroment === "1") // QA
        {
            GateAccess = '2afefb7c5ea0f0cd3b9bdf3d43cd4d6f792f29e37b2575a25e6b1acb7e29c7bca86da82775b7c0ca4fec66f99405d957d98f9bdacc8d';
            AccessReturn = ObjClsSec.ProcessDesObfuscate(GateAccess);
        }

        if (varEnviroment === "2") // ST
        {
            GateAccess = '2afefb7c5ea0f0cd3b9bdf3d43cd4d6f792f29e37b2575a25e6b1acb7e29c7bca86da82775b7c0ca4fec66f99405d957d98f9bdacc8d';
            AccessReturn = ObjClsSec.ProcessDesObfuscate(GateAccess);
        }

        if (varEnviroment === "3") //PROD
        {
            GateAccess = '2afefb7c5ea0f0cd6982df7849c5107a752962e46c2779a34b2054c5';
            AccessReturn = ObjClsSec.ProcessDesObfuscate(GateAccess);
        }

     }
     if(Option === "3")//Resource
     {
        if (varEnviroment === "1") // QA
        {
            GateAccess = '6dfbee234cf9bc8d7d9cc279';
            AccessReturn = ObjClsSec.ProcessDesObfuscate(GateAccess);
        }

        if (varEnviroment === "2") // ST
        {
            GateAccess = '6dfbee234cf9bc8d7d9cc279';
            AccessReturn = ObjClsSec.ProcessDesObfuscate(GateAccess);
        }

        if (varEnviroment === "3") //PROD
        {
            GateAccess = '6dfeec214bf3ad917cdfd2375fc55178792e68f36d3439';
            AccessReturn = ObjClsSec.ProcessDesObfuscate(GateAccess);
        }

     }


     return AccessReturn;

};

module.exports.GetEnviromentAcces = GetEnviromentAcces;