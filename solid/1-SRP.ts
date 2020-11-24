// Not violating SRP
// All those methods are grouped in one responsibility
class User {
    login(email: string, password: string) {
    }

    signup(email: string, password: string) {
    }

    assignRole(role: any) {
    }
}

// Violating SRP
class ReportDocument {
    generateReport(data: any) {

    }

    createPDF(report: any) {

    }
}