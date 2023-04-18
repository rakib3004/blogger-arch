const signupSchema = yup.object().shape({
    username: yup
    .string()
    .required('Username is required!')
    .min(1, 'username must be min 2 character.')
    .matches(/^\S+$/, "Username can't contain white space"),
password: yup
    .string()
    .required('Password is required!')
    .min(8, 'Password should be min 8 chars.'),
confirmPassword: yup
    .string()
    .required('Password confirmation is required!')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
email: yup.string().email('Must be a valid email').max(255).required('Email is required!'),
});