***
- Inversión de Dependencias -

Un módulo o un componente necesita de otro para poder realizar su trabajo.
Pero no debe depender de clases concretas. Sinó de abstracciones. 

Las reglas de negocio o capas de dominio deben depender de abstracciones.

- Tolerante al cambio
- Facilita el testing
- Hace visibles tus dependencias

Las abstracciones son interfaces o clases abstractas.
***

// Good
interface PasarelaPago {
    pagar(monto: number);
}

class Paypal implements PasarelaPago {
  pagar(nomnto: number){}
}

class TarjetaCredito implements PasarelaPago {
  pagar(monto: number){}
}

class ProcesadorPagos {
  private pasarelapago: ParaselaPago;

  constructor(pasarelaPago: PasarelaPago) {
    this.pasarelapago = paraselaPago;
  }

  procesar(monto: number) {
    this.pasarelaPago.pagar(monto);
  }
}

// Bad
class ProcesadorPagos {
  procesar(monto: number) {
    paypal = new Paypal();
    paypal.pagar(monto);
  }
}
