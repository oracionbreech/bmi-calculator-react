import { IImperial } from "../../models/IImperialFormFields";

export const getImperialPayload = (data: IImperial) => {
    return {
        "heightInches": Number(data.heightInches),
        "heightFeet": Number(data.heightFeet),
        "weightPounds": Number(data.weight)
    }
}