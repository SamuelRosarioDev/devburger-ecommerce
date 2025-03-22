import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { Container, Form, Input, InputGroup, Label, LabelUpload, Select, SubmitButton } from "./styles"

const schema = yup.object({
    firstName: yup.string().required(),
    age: yup.number().positive().integer().required()
}).required()

export function NewProduct() {

    const { register, handleSubmit, formState: { erros } } = useForm({ resolver: yupResolver(schema) })
    const onSubmit = (data) => console.log(data);
    return (
        <Container>
            <Form>
                <InputGroup>
                    <Label>Nome</Label>
                    <Input />
                </InputGroup>

                <InputGroup>
                    <Label>Preço</Label>
                    <Input />
                </InputGroup>

                <InputGroup>
                    <LabelUpload>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M8.5 7.999c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5m0-1a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m7.5 5c.45.051 1.27 1.804 1.779 4.001H6.387c.434-1.034 1.055-2.001 1.612-2.001c.806 0 1.125.185 1.53.42c.447.258 1.006.58 1.97.58c1.138 0 1.942-.885 2.653-1.666c.627-.687 1.218-1.334 1.848-1.334m0-1c-2 0-3 3-4.5 3s-1.499-1-3.5-1s-3.001 4-3.001 4H19s-1-6-3-6M22 6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2zm-2 12H4V6h16.003z"></path></svg>
                        <input type="file" />
                    </LabelUpload>
                    <Input />
                </InputGroup>

                <InputGroup>
                    <Label>Categoria</Label>
                    <Select />
                </InputGroup>
                <SubmitButton>Adicionar Produto</SubmitButton>
            </Form>
        </Container>
    )
}