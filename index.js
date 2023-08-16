class Cliente {
  nome
  cpf
}

class ContaCorrente {
  agencia
  _saldo = 0;

  sacar(valor) {
    if(this._saldo >= valor){
      this._saldo -= valor;
      return valor;
    }

    depositar(valor){
      if(valor > 0){
        this._saldo += 0;
      }
    }
  }

}

const cliente1 = new Cliente()
cliente1.nome = "Róger"
cliente1.cpf = 11122233309
cliente1.agencia = 1001
cliente1.saldo = 0
