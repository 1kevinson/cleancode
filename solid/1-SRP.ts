/**
 * @SINGLE_RESPONSIBILITY_PRINCIPLE Class should have one responsibility, should change for only one reason
 *
 */


// Not violating SRP
// All those methods are grouped in one responsibility : Managing user registration
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