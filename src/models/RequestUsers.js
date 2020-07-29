exports.requestUser = function(event){

    return {
         "viSERIAL_NUMBER_PRODUCT"      : event.SERIAL_NUMBER_PRODUCT,
         "viSEQ_NUM_CODE"               : event.SEQ_NUM_CODE,
         "viIDBANK"                     : event.IDBANK,
         "viIDPRODUCT"                  : event.IDPRODUCT,
         "viTYPE_DOCUMENT"              : event.TYPE_DOCUMENT,
         "viDOCUMENT_NUMBER"            : event.DOCUMENT_NUMBER,
         "viTYPE_PROCESS"               : event.TYPE_PROCESS
    };

}
