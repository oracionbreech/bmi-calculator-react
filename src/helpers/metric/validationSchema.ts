import * as Yup from 'yup';
import { metricFormFields } from './formFields';

const { weight, height } = metricFormFields;

export const metricFormValidationSchema = Yup.object().shape({
    [height.name]: Yup.string().matches(/\d+/g, height.errMsg.invalid).required(height.errMsg.required),
    [weight.name]: Yup.string().matches(/\d+/g, weight.errMsg.invalid).required(weight.errMsg.required),
})