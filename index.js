import { Cliente } from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente()
cliente1.nome = "Róger"
cliente1.cpf = 11122233309

const cliente2 = new Cliente();
cliente2.nome = 'Aline';
cliente2.cpf = 88844455509;

const contaCorrenteRicardo = new ContaCorrente;
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;

const conta2 = new ContaCorrente;
conta2.agencia = 1002;
conta2.cliente = cliente2;

contaCorrenteRicardo.depositar(1000);
console.log("Saldo Ricardo: ",contaCorrenteRicardo._saldo);
console.log("Saldo Aline: ", conta2._saldo);

contaCorrenteRicardo.transferir(150,conta2);
console.log("Saldo ricardo: ",contaCorrenteRicardo._saldo);
console.log("Saldo ALine", conta2._saldo);
