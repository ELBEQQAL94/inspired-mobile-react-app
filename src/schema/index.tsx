import * as yup from 'yup';

export const ListNamesEntrySchema = yup.object().shape({
    name: yup.string().trim().min(3).max(30).required()
});