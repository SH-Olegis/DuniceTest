import React from 'react';
import { ErrorMessage, useField } from 'formik';
import Select, { SingleValue } from 'react-select';
import { FormGroup, Label, FormFeedback } from 'reactstrap';

interface Option {
    value: string;
    label: string;
}

interface SelectFieldProps {
    name: string;
    label: string;
    options: Option[];
}

const SelectField: React.FC<SelectFieldProps> = ({ name, label, options }) => {
    const [field, meta, helpers] = useField(name);

    const handleChange = async (option: SingleValue<string | Option>) => {
        if (typeof option === 'object' && option !== null) {
            await helpers.setValue((option as Option).value);
        } else {
            await helpers.setValue('');
        }
    };

    const handleBlur = () => helpers.setTouched(true);

    const selectedOption = options.find(option => option.value === field.value);

    return (
        <FormGroup>
            <Label for={name}>{label}</Label>
            <Select
                id={name}
                options={options}
                value={selectedOption || ''}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`basic-multi-select ${meta.touched && meta.error ? 'is-invalid' : ''}`}
                classNamePrefix="select"
            />
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
};

export default SelectField;
