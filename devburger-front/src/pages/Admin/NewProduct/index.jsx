import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

import { Container, ErrorMessage, Form, Input, InputGroup, Label, LabelUpload, Select, SubmitButton } from "./styles"
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { toast } from "react-toastify";

const schema = yup.object({
    name: yup.string().required("Digite o nome do produto"),
    price: yup.number().positive().required("Digite o preço do produto").typeError("Digite o preço do produto"),
    category: yup.object().required("Escolha uma categoria"),
    file: yup.mixed().test('required', 'Escolha uma imagem para continuar', value => {
        return value && value.length > 0;
    }).test("fileSize", "Carregue image até 5mb", value => {
        return value && value.length > 0 && value[0].size <= 30000;
    }).test("type", "Carregue apenas imagens png ou jpeg", value => {
        return value && value.length > 0 && (value[0].type <= "image/png" || value[0].type <= "image/jpeg");

    }),
});

export function NewProduct() {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get("./categories")
            setCategories(data)
        }
        loadCategories()

    }, [])

    const { register, handleSubmit, control, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const onSubmit = async (data) => {
        const productFormData = new FormData();
        productFormData.append("name", data.name)
        productFormData.append("price", data.price * 100)
        productFormData.append("category_id", data.category.id)
        productFormData.append("file", data.file[0])

        await toast.promise(api.post("./products", productFormData), {
            pending: "Adicionando produto...",
            success: "Produto adicionado com sucesso",
            error: "Falha ao adicionar o produto, tente novamente",
        });
    };
    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                    <Label>Nome</Label>
                    <Input type="text" {...register('name')} />
                    <ErrorMessage>{errors?.name?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Preço</Label>
                    <Input type="number" {...register('price')} />
                    <ErrorMessage>{errors?.price?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <LabelUpload>
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M8.5 7.999c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5m0-1a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5m7.5 5c.45.051 1.27 1.804 1.779 4.001H6.387c.434-1.034 1.055-2.001 1.612-2.001c.806 0 1.125.185 1.53.42c.447.258 1.006.58 1.97.58c1.138 0 1.942-.885 2.653-1.666c.627-.687 1.218-1.334 1.848-1.334m0-1c-2 0-3 3-4.5 3s-1.499-1-3.5-1s-3.001 4-3.001 4H19s-1-6-3-6M22 6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2zm-2 12H4V6h16.003z"></path></svg>
                        <input type="file" {...register('file')} accept="image/png, image/jpeg" onChange={(value => {
                            setFileName(value.target.files[0].name)
                            register('file').onChange(value)
                        })} />
                        {fileName || "Upload do Produto"}
                    </LabelUpload>
                    <ErrorMessage>{errors?.file?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Categoria</Label>
                    <Controller name="category" control={control} render={({ field }) => (
                        <Select
                            {...field}
                            options={categories} getOptionLabel={category => category.name} getOptionValue={category => category.id} placeholder="Categorias" menuPortalTarget={document.body} />
                    )} />
                    <ErrorMessage>{errors?.category?.message}</ErrorMessage>
                </InputGroup>
                <SubmitButton>Adicionar Produto</SubmitButton>
            </Form>
        </Container>
    )
}