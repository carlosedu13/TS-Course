var name1 = 'João';
var age = 27;
age = 27.5;
var hasHobbies = false;
var hobbies = ['Cozinhar', 'Praticar esportes'];
var address = ['Av Principal', 103];
var Colors;
(function (Colors) {
    Colors[Colors["Gray"] = 0] = "Gray";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
    Colors[Colors["Red"] = 3] = "Red";
})(Colors || (Colors = {}));
var color = Colors.Gray;
var anything = 'BMW';
anything = { model: 'Audi', serieNumber: 12313 };
// Functions
function returnMyName() {
    return name1;
}
function sayHello() {
    console.log('Hello');
}
function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
var sayHelloCopy = sayHello;
var user = {
    username: 'Mario',
    password: 'Excalibur56@'
};
var employees = {
    supervisors: ['Ana', 'Mario', 'Breno'],
    saveHour: function (hour) {
        if (hour <= 8) {
            return 'Ponto Normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
// Union Types
var note = 10;
// if (typeof note === 'string') {
// }
// Never (The function returns a error or never returns)
function failure(msg) {
    // while (true) {}
    throw new Error(msg);
}
var product = {
    name: 'Soap',
    price: -1,
    validateProduct: function () {
        if (!this.name || this.name.trim().length == 0) {
            failure('Precisa ter um nome');
        }
        if (this.price <= 0) {
            failure('Preco inválido!');
        }
    }
};
product.validateProduct();
var optionalHeight = null;
var bankAccount12 = {
    balance: 3456,
    deposit: function (value) {
        this.balance += value;
    }
};
var accountHolder12 = {
    name: 'Ana Silva',
    bankAccount: bankAccount12,
    contacts: ['34567890', '98765432']
};
accountHolder12.bankAccount.deposit(3000);
console.log(accountHolder12);
