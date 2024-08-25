function calculateFinalBalance() {
    const initialBalanceInput = document.getElementById('SaldoAwal').value;
    const transactionsInput = document.getElementById('Transaksi').value;

    const initialBalance = parseFloat(initialBalanceInput.replace(/,/g, '')) || 0;
    
    const transactions = transactionsInput.split(',')
        .map(value => {
            let transaction = parseFloat(value.trim().replace(/,/g, ''));
            if (!isNaN(transaction) && transaction > 0) {
                transaction = -transaction;
            }
            return transaction;
        })
        .filter(value => !isNaN(value));

    let finalBalance = initialBalance;

    transactions.forEach(transaction => {
        finalBalance += Math.round(transaction);
    });

    finalBalance = Math.round(finalBalance);

    document.getElementById('finalBalance').textContent = `Rp. ${finalBalance.toLocaleString('id-ID')}`;
}

