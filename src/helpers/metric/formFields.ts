import { IMetricFormFields } from "../../models/IMetricFormFields";

export const metricFormFields: IMetricFormFields = {
    height: {
        name: 'height',
        placeholder: 'Centimeters',
        errMsg: {
            invalid: "Height in centimeters is invalid.",
            required: 'Height in centimeters is required.'
        }
    },
    weight: {
        name: 'weight',
        placeholder: 'Kilograms',
        errMsg: {
            invalid: "Weight in Kilograms is invalid.",
            required: 'Weight in Kilograms is required.'
        }
    }
}