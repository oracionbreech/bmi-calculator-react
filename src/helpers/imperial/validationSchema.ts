import * as Yup from 'yup';
import { imperialFormFields } from './formFields';

const { weight, heightInches, heightFeet } = imperialFormFields;

export const imperialFormValidationSchema = Yup.object().shape({
    [heightFeet.name]: Yup.string().matches(/\d+/g, heightFeet.errMsg.invalid).required(heightFeet.errMsg.required),
    [heightInches.name]: Yup.string().matches(/\d+/g, heightInches.errMsg.invalid).required(heightInches.errMsg.required),
    [weight.name]: Yup.string().matches(/\d+/g, weight.errMsg.invalid).required(weight.errMsg.required),
})