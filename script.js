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
