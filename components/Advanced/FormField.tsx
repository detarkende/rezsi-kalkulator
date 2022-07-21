import { Form, InputGroup } from "react-bootstrap";

interface FormFieldProps {
    label: string,
    type?: "text" | "number" | "password" | "email" | "tel" | "date" | "time" | "datetime-local",
    value: string | number,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    postfix?: string | JSX.Element,
}

function FormField({label, type, value, onChange, postfix}: FormFieldProps) {
    return (
        <>
            <Form.Group>
                <Form.Label>{label}</Form.Label>
                <InputGroup>
                    <Form.Control type={type} value={value} onChange={onChange} />
                    {postfix && <InputGroup.Text>{postfix}</InputGroup.Text>}
                </InputGroup>
            </Form.Group>
        </>
    );
}

export default FormField;