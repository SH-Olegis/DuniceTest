import React from 'react';
import { useField } from 'formik';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';

interface TextFieldProps {
    name: string;
    label: string;
}

const TextField: React.FC<TextFieldProps> = ({ name, label }) => {
    const [field, meta] = useField(name);
    const inputType = name === 'cvv' ? 'password' : 'text';

    return (
        <FormGroup>
            <Label
                for={name}
            >
                {label}
            </Label>
            <Input
                {...field}
                id={name}
                invalid={meta.touched && !!meta.error}
                type={inputType}
            />
            {meta.touched && meta.error ? (
                <FormFeedback>
                    {meta.error}
                </FormFeedback>
            ) : null}
        </FormGroup>
    );
};

export default TextField;
