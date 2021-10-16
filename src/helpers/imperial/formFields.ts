import { IImperialFormFields } from "../../models/IImperialFormFields";

export const imperialFormFields: IImperialFormFields = {
    heightFeet: {
        name: 'heightFeet',
        placeholder: 'Feet',
        errMsg: {
            invalid: "Height Feet is invalid.",
            required: 'Height Feet is required.'
        }
    },
    heightInches: {
        name: 'heightInches',
        placeholder: 'Inches',
        errMsg: {
            invalid: "Height Inches is invalid.",
            required: 'Height Inches is required.'
        }
    },
    weight: {
        name: 'weight',
        placeholder: 'Pounds',
        errMsg: {
            invalid: "Weight in Pounds is invalid.",
            required: 'Weight in Pounds is required.'
        }
    }
}