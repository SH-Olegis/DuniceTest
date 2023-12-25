import React from 'react';
import { useField } from 'formik';
import InputMask from 'react-input-mask';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';

interface MaskedInputProps {
    label: string;
    name: string;
    mask: string;
}

const MaskedInput: React.FC<MaskedInputProps> = ({ label, mask, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <FormGroup>
            <Label for={props.name}>{label}</Label>
            <InputMask mask={mask} maskPlaceholder={null} {...field}>
                <Input {...field} invalid={meta.touched && !!meta.error} />
            </InputMask>
            {meta.touched && meta.error ? (
                <FormFeedback>{meta.error}</FormFeedback>
            ) : null}
        </FormGroup>
    );
};

export default MaskedInput;
