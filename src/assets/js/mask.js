// Usa vanilla masker 

$.fn.setMask = function(){ 
    VMasker( $(".dinheiro") ).maskMoney();   
    VMasker( $(".c-cvv") ).maskPattern('9999');
    VMasker( $(".c-cartao") ).maskPattern('9999 9999 9999 9999 999');
    VMasker( $(".c-validade") ).maskPattern('99/9999');
    VMasker( $(".decimal") ).maskPattern('99');
    VMasker( $(".telefone") ).maskPattern('(99) 99999-9999');
}
