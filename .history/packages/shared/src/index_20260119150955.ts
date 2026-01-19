// Shared enums for the Minimarket application
// enums is typescript feature to define a set of named constants
enum UserRole {
  ADMIN = "ADMIN",
  CASHIER = "CASHIER",
}

enum PaymentMethod {
  CASH = "CASH",
  EDAHABIA = "EDAHABIA",
  CIB = "CIB",
  CCP = "CCP",
}

export { UserRole, PaymentMethod };
