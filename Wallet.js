class Wallet {
    constructor(money) {
     let _money = money
     //Pobranie zawartości portfela
     this.getWalletValue = () => _money;

     //Sprawdzenie czy użytkownik ma odpowiedznią ilość środków
     this.checkCanPlay = (value) => {
        if(_money >= value) return true;
        return false;
     }

     //Dodawanie lub odejmowanie środków użytkownika
     this.changeWallet = (value, type ="+") => {
        if(typeof value === "number" && !isNaN(value))
        {
        if (type === "+") {
            return _money += value;
        } else if (type === "-") {
            return _money -= value;
        } else {
            throw new Error("Nieprawidłowy typ działania")
        }

        } else {
            console.log(typeof value);
            throw new Error ("Nieprawidłowa liczba")
        }
     }


    }

}
