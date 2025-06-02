***
- Interface Segregation -

No obligues a una clase a implementar métodos que no necesita.

Es mejor tener interfaces pequeñas y específicas, que interfaces
grandes.
***

// Good
interface Imprimible {
  impirmir();
}

interface ReproduccionAudio {
  reproducirAudio();
}

class Impresora implements Imprimible {
  imprimir(){}
}

class Altavoz implements ReproduccionAudio {
  reproducirAudio(){}
}

class Auriculares implements ReproduccionAudio {
  reproducirAudio(){}
}

// Bad
interface DispositivoElectronico {
  imprimir();
  reproducirAudio();
}

class Impresora implements Imprimible, ReproduccionAudio {
  imprimir(){}
  reproducirAudio(){}
}
