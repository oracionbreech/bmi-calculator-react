import { IGenericFormField } from "./generics";

export interface IImperialFormFields {
    heightFeet: IGenericFormField,
    heightInches: IGenericFormField,
    weight: IGenericFormField,
}

export interface IImperial {
    heightFeet: string,
    heightInches: string,
    weight: string,
}