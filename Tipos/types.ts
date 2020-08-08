let name1: string = 'João'

let age: number = 27
age = 27.5

let hasHobbies: boolean = false

let hobbies: string[] = ['Cozinhar', 'Praticar esportes']

let address: [string, number] = ['Av Principal', 103]

enum Colors {
    Gray,
    Green,
    Blue,
    Red
}

let color: Colors = Colors.Gray

let anything: any = 'BMW'
anything = { model: 'Audi', serieNumber: 12313 }

// Functions

function returnMyName(): string {
    return name1
}

function sayHello(): void {
    console.log('Hello')
}

function multiply(firstNumber: number, secondNumber: number): number {
    return firstNumber * secondNumber
}

let sayHelloCopy: () => void = sayHello

let user: { username: string, password: string } = {
    username: 'Mario',
    password: 'Excalibur56@'
}

// Alias
type Employee = { supervisors: string[], saveHour: (hour: number) => string }

let employees: Employee = {
    supervisors: ['Ana', 'Mario', 'Breno'],
    saveHour(hour: number): string {
        if (hour <= 8) {
            return 'Ponto Normal'
        } else {
            return 'Fora do horário'
        }
    }
}

// Union Types
let note: number | string = 10

// if (typeof note === 'string') {
    
// }

// Never (The function returns a error or never returns)
function failure(msg: string): never {
    // while (true) {}
    throw new Error(msg)
}

const product: { name: string, price: number, validateProduct: () => void } = {
    name: 'Soap',
    price: -1,
    validateProduct() {
        if (!this.name || this.name.trim().length == 0) {
            failure('Precisa ter um nome')
        }
        if(this.price <= 0) {
            failure('Preco inválido!')
        }
    }
}

product.validateProduct()

let optionalHeight: null | number = null

// Challenge

type BankAccount = { 
    balance: number,
    deposit: (value: number) => void
}

type AccountHolder = { 
    name: string,
    bankAccount: BankAccount
    contacts: string[]
}

let bankAccount12: BankAccount = {
    balance: 3456,
    deposit(value: number): void {
        this.balance += value
    }
}

let accountHolder12: AccountHolder = {
    name: 'Ana Silva',
    bankAccount: bankAccount12,
    contacts: ['34567890', '98765432']
}

accountHolder12.bankAccount.deposit(3000)
console.log(accountHolder12)
