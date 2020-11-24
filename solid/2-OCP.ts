interface Printer {
    print(data: any);
}

// Based class can be close for modification
class PrinterImplementation {
    verifyData(data: any) {
    }
}

// Then Open for extension
class WebPrinter extends PrinterImplementation implements Printer {
    print(data: any) {
        // Print web document
    }
}

class PDFPrinter extends PrinterImplementation implements Printer {
    print(data: any) {
        // Print PDF document
    }
}

