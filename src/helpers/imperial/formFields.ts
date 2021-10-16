import { IImperialFormFields } from "../../models/IImperialFormFields";

export const imperialFormFields: IImperialFormFields = {
    heightFeet: {
        name: 'heightFeet',
        placeholder: 'Feet',
        errMsg: {
            invalid: "Height Feet in invalid.",
            required: 'Height Feet is required.'
        }
    },
    heightInches: {
        name: 'heightInches',
        placeholder: 'Inches',
        errMsg: {
            invalid: "Height Inches in invalid.",
            required: 'Height Inches is required.'
        }
    },
    weight: {
        name: 'weight',
        placeholder: 'Pounds',
        errMsg: {
            invalid: "Weight in Pounds in invalid.",
            required: 'Weight in Pounds is required.'
        }
    }
}