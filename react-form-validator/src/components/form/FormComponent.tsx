import React from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { Button, Col, Row } from 'reactstrap';

import TextField from './TextField';
import SelectField from './SelectField';
import MaskedInput from './MaskedInput';

import { validationSchema } from './validation';

import MONTHS from '../../config/months';

interface FormValues {
    firstName: string;
    lastName: string;
    birthDay: string;
    birthMonth: string;
    birthYear: string;
    cardNumber: string;
    cvv: string;
    phoneNumber: string;
    email: string;
}

const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    birthDay: '',
    birthMonth: '',
    birthYear: '',
    cardNumber: '',
    cvv: '',
    phoneNumber: '',
    email: '',
}

const months = MONTHS.map((nameMonth) => ({
    value: nameMonth,
    label: nameMonth,
}))

const saveToLocalStorage = (values: FormValues) => {
    localStorage.setItem('form', JSON.stringify(values));
}

const FormComponent: React.FC = () => {
    return (
        <div
            className="container-sm "
        >
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={
                    (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
                        saveToLocalStorage(values);
                        setSubmitting(false);
                    }
                }
            >
                {({ isSubmitting }) => (
                    <Form>
                        <TextField
                            name="firstName"
                            label="Имя"
                        />
                        <TextField
                            name="lastName"
                            label="Фамилия"
                        />
                        <Row>
                            <Col md={4}>
                                <TextField
                                    name="birthDay"
                                    label="День рождения"
                                />
                            </Col>
                            <Col md={4}>
                                <SelectField
                                    name="birthMonth"
                                    label="Месяц рождения"
                                    options={months}
                                />
                            </Col>
                            <Col md={4}>
                                <TextField
                                    name="birthYear"
                                    label="Год рождения"
                                />
                            </Col>
                        </Row>
                        <MaskedInput
                            name="cardNumber"
                            mask="9999-9999-9999-9999"
                            label="Номер банковской карты"
                        />
                        <TextField
                            name="cvv"
                            label="Три цифры на обороте"
                        />
                        <MaskedInput
                            name="phoneNumber"
                            mask="+7(999)999-99-99"
                            label="Номер телефона"
                        />
                        <TextField
                            name="email"
                            label="Адрес электронной почты"
                        />
                        <Button
                            type="submit"
                            color="primary"
                            disabled={isSubmitting}
                        >
                            Сохранить
                        </Button>
                        <Button
                            className="ms-3"
                            type="reset"
                            color="secondary"
                            disabled={isSubmitting}
                        >
                            Сбросить
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default FormComponent;
