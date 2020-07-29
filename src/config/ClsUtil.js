class ObfuscateData {

    constructor() { }

    FnMask(nt) {
        let fParte = nt.substring(nt.length - 4);
        let size =4 ;
        let sm = "";
        for (var i = 0; i < size; i++) {
            sm += '*';
        }
        return sm + fParte;
    }
}
module.exports = ObfuscateData;
