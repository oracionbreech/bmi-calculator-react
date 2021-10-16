import { IGenericFormField } from "./generics";


export interface IMetricFormFields {
    height: IGenericFormField,
    weight: IGenericFormField,
}
export interface IMetric {
    height: string,
    weight: string,
}