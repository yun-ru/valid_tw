var Valid = (function(){

    return function(type,value,option) {

        var reg;

        switch (type){
            case "email": // 信箱
                reg =  /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$/;
                break;
            
            case "phone": // 台灣手機
                switch(option){
                    case "home":
                        reg = /^\d{2,3}-?\d{7,8}$/;
                        break;
                    default:
                        reg = /^09\d{2}-?\d{3}-?\d{3}$/;
                        break;
                }
                break;

            case "date": // 日期(YYYY/MM/DD)
                switch(option){
                    case "/":
                        reg = /^(((?:19|20)[0-9]{2})\/(0?[1-9]|1[012])\/(0?[1-9]|[12][0-9]|3[01]))*$/;
                        break;
                    case "-":
                        reg = /^(((?:19|20)[0-9]{2})\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01]))*$/;
                        break;
                    default:
                        reg = /^(((?:19|20)[0-9]{2})[- /.](0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01]))*$/;
                        break;
                }
                break;

            case "password": // 6 位數以上，並且至少包含 大寫字母、小寫字母、數字 各一
                reg = /^(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/
                break;

            case "ID" : // 台灣身分證
                reg = /^[A-Za-z][1-2]\d{8}$/;
                break;

            case "account": // 第一個字不為數字，只接受 大小寫字母、數字及底線
                reg= /^[a-zA-Z]\w*$/;
                break;
            
            case "creditCard": // 信用卡
                reg = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6011[0-9]{12}|622((12[6-9]|1[3-9][0-9])|([2-8][0-9][0-9])|(9(([0-1][0-9])|(2[0-5]))))[0-9]{10}|64[4-9][0-9]{13}|65[0-9]{14}|3(?:0[0-5]|[68][0-9])[0-9]{11}|3[47][0-9]{13})*$/;
                break;

            case "w_d": // 字母和數字可
                reg = /^[a-zA-Z0-9]*$/;
                break;

            case "w": // 僅字母可
                reg = /^[a-zA-Z]*$/;
                break;

            case "d": // 僅數字可
                reg = /^[0-9]*$/;
                break;


        }

        return reg.test(value)

    };

})();
