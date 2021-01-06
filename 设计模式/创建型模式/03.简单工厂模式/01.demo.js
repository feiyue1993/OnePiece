/**
 *
 */

function LoginAlert(text){
    this.context = text;
}

LoginAlert.prototype.show = function(){

}

function LoginConfirm(text, confirmText){
    this.context = text;
    this.confirmText = confirmText;
}

LoginConfirm.prototype.show = function(){

}

function popFactory(name){
    switch (name) {
        case 'alert':
            return new LoginAlert();
            break;
        case 'confirm':
            return new LoginConfirm();
            break;
    }
}

