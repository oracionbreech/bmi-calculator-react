interface IErrorMessage {
    invalid: string,
    required: string,
}

export interface IGenericFormField {
    name: string,
    placeholder: string,
    errMsg: IErrorMessage;
}