***
- Open Closed -

El código debe estar abierto para su extensión pero cerrado para su
modificación.

Al querer implementar una nueva feature, tenemos que escribir nuevo
código, no modificar el código existente.

Se agrega código
No se modifica código
***


// Good
interface Report {
  generate();
}

class PDFGenerator implements Report {
  generate(){
    console.log("reporte PDF");
  }
}

class CSVGenerator implements Report {
  generate(){
    console.log("reporte CSV");
  }
}

class ReportGenerator {
  generateReport(report: Report){
    report.generate();
  }
}

// Bad
class ReportGenerator {
  generateReport(report: string){
    if (report === "PDF") {
      console.log("reporte PDF");
    } else if(report === "CSV") {
      console.log("reporte CSV");
    }
  }
}
