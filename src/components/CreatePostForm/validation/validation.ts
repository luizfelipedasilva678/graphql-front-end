import * as yup from 'yup';

const TITLE_ERROR = 'Title is required';
const BODY_ERROR = 'Body is required';

const schema = yup.object().shape({
  titlepost: yup.string().required(TITLE_ERROR),
  body: yup.string().required(BODY_ERROR),
});

export default schema;
