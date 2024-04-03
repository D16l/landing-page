document.addEventListener('DOMContentLoaded', function(){
    toggleMenu('toggleButtonTransactions', 'menu-Transactions');
    toggleMenu('toggleButtonTransfers', 'menu-Transfers');
    toggleMenu('toggleButtonSimulations', 'menu-Simulations');
    toggleMenu('toggleButtonLoans', 'menu-Loans');
    toggleMenu('toggleButtonInvestments', 'menu-Investments');
});


function toggleMenu(buttonId, menuId) {
    const toggleButton = document.getElementById(buttonId);
    const menu = document.getElementById(menuId);
    const allMenus = document.querySelectorAll('.menu-botoes')
    const isVisible = menu.classList.contains('visible');

    toggleButton.addEventListener('click', function() {

        allMenus.forEach(function(item) {
            item.classList.remove('visible')
        });
            
        menu.classList.toggle('visible');
    });
}

function fecharMenu(elementoIcone) {
    const menu = elementoIcone.closest('.menu-botoes');
    menu.classList.remove('visible');
}

document.getElementById('userPhone').addEventListener('input', function(e) {
    var phone = e.target.value.replace(/\D/g, '');

    if(phone.lengh <= 2){
        e.target.value = '(' + phone;
    } else if (phone.lengh <= 6){
        e.target.value = '(' + phone.substring(0,2) + ') ' + phone.substring(2);
    } else if (phone.lengh <= 10) {
        e.target.value = '(' + phone.substring(0,2) + ') ' + phone.substring(2,7) + '-' + phone.substring(7);
    } else {
        e.target.value = '(' + phone.substring(0,2) + ') ' + phone.substring(2,7) + '-' + phone.substring(7,11);
    }
});

document.getElementById('userPhone').addEventListener('keydown', function (e) {
    if (e.keyCode === 8) {
        var phone = e.target.value.replace(/\D/g, '');
        var formattedPhone = '';

        if (phone.length <= 2) {
            formattedPhone = phone;
        } else if (phone.length <= 7) {
            formattedPhone = '(' + phone.substring(0, 2) + ') ' + phone.substring(2);
        } else if (phone.length <= 11) {
            formattedPhone = '(' + phone.substring(0, 2) + ') ' + phone.substring(2, 7) + '-' + phone.substring(7);
        } else {
            formattedPhone = '(' + phone.substring(0, 2) + ') ' + phone.substring(2, 7) + '-' + phone.substring(7, 11);
        }

        e.target.value = formattedPhone;
    }
});