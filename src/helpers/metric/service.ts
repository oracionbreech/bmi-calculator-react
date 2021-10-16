import { IMetric } from "../../models/IMetricFormFields";

export const getMetricPayload = (data: IMetric) => {
    return {
        "heightCentimeters": Number(data.height),
        "weightKilograms": Number(data.weight)
    }
}