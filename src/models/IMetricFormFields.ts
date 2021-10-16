import { IErrorMessage } from "./generics";

interface IMetricHeight {
    name: string,
    placeholder: string,
    errMsg: IErrorMessage;
}

interface IMetricWeight {
    name: string,
    placeholder: string,
    errMsg: IErrorMessage;
}

export interface IMetricFormFields {
    height: IMetricHeight,
    weight: IMetricWeight,

}