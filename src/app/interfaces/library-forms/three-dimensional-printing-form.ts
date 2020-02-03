export class ThreeDimensionalPrintingForm {
  _id: string;
  patronName: string;
  libraryCard: string;
  email: string;
  phone: string;
  tosAgreement: boolean;
  printed: boolean;
  pickedUp: boolean;
  finalLocation: string;
  color: string;
  specialInstructions: string;
  fileName: string;
  submitted: string; /* date field*/
  modifiedBy: string;
  submittedBy: string;

  constructor(id: string,
              patronName: string,
              libraryCard: string,
              email: string,
              phone: string,
              tosAgreement: boolean,
              printed: boolean,
              pickedUp: boolean,
              finalLocation: string,
              color: string,
              specialInstructions: string,
              fileName: string,
              submitted: string,
              modifiedBy: string,
              submittedBy: string) {
    this._id = id;
    this.patronName = patronName;
    this.libraryCard = libraryCard;
    this.email = email;
    this.phone = phone;
    this.tosAgreement = tosAgreement;
    this.printed = printed;
    this.pickedUp = pickedUp;
    this.finalLocation = finalLocation;
    this.color = color;
    this.specialInstructions = specialInstructions;
    this.fileName = fileName;
    this.submitted = submitted;
    this.modifiedBy = modifiedBy;
    this.submittedBy = submittedBy;
  }
}
