export interface ThreeDimensionalPrintingForm {
 _id: string;
 patron_name: string;
 library_card: string;
 email: string;
 phone: string;
 tosAgreement: string;
 printed: boolean;
 pickedUp: boolean;
 finalLocation: string;
 color: string;
 specialInstructions: string;
 fileName: string;
 submitted: Date; /* date field*/
 modifiedBy: string;
 printedBy: string;
}
