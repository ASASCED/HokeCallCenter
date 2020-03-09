export class Appointment {
  QuoteNumberItc: number;
  IdLogin: number;
  FirstName: string;
  Lastname: string;
  CellPhone: string;
  HomePhone: string;
  Address: string;
  City: string;
  State: string;
  Zip: string;
  IdLanguage: number;
  IdOfficeFrom: number;
  IdOfficeTo: number;
  DateTimeAppointment: string;
  IdStatusType: number;
  Csr: string;
  IdStatus: number;

  constructor(
    QuoteNumberItc: number,
    IdLogin: number,
    FirstName: string,
    Lastname: string,
    CellPhone: string,
    HomePhone: string,
    Address: string,
    City: string,
    State: string,
    Zip: string,
    IdLanguage: number,
    IdOfficeFrom: number,
    IdOfficeTo: number,
    DateTimeAppointment: string,
    IdStatusType: number,
    Csr: string,
    IdStatus: number
  ) {
    this.QuoteNumberItc = QuoteNumberItc;
    this.IdLogin = IdLogin;
    this.FirstName = FirstName;
    this.Lastname = Lastname;
    this.CellPhone = CellPhone;
    this.HomePhone = HomePhone;
    this.Address = Address;
    this.City = City;
    this.State = State;
    this.Zip = Zip;
    this.IdLanguage = IdLanguage;
    this.IdOfficeFrom = IdOfficeFrom;
    this.IdOfficeTo = IdOfficeTo;
    this.DateTimeAppointment = DateTimeAppointment;
    this.IdStatusType = IdStatusType;
    this.Csr = Csr;
    this.IdStatus = IdStatus;
  }
}
