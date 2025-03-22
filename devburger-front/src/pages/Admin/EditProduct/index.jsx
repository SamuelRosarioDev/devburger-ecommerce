import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { Container, ErrorMessage, Form, Input, InputGroup, Label, LabelUpload, Select, SubmitButton, ContainerCheckbox } from "./styles"
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const schema = yup.object({
    name: yup.string().required("Digite o nome do produto"),
    price: yup.number().positive().required("Digite o preço do produto").typeError("Digite o preço do produto"),
    category: yup.object().required("Escolha uma categoria"),
    offer: yup.bool(),
});

export function EditProduct() {
    const [fileName, setFileName] = useState(null)
    const [categories, setCategories] = useState([])
    const navigate = useNavigate();

    const {state: {product}} = useLocation()

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
        productFormData.append("offer", data.offer)

        await toast.promise(api.put(`./products/${product.id}`, productFormData), {
            pending: "Editando produto...",
            success: "Produto editado com sucesso",
            error: "Falha ao editar o produto, tente novamente",
        });

        setTimeout(() => {
            navigate("/admin/produtos")
        }, 2000);
    };
    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                    <Label>Nome</Label>
                    <Input type="text" {...register('name')} defaultValue={product.name}/>
                    <ErrorMessage>{errors?.name?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Preço</Label>
                    <Input type="number" {...register('price')} defaultValue={product.price / 100}/>
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
                    <Controller name="category" control={control} defaultValue={product.category} render={({ field }) => (
                        <Select
                            {...field}
                            defaultValue={product.category} options={categories} getOptionLabel={category => category.name} getOptionValue={category => category.id} placeholder="Categorias" menuPortalTarget={document.body} />
                    )} />
                    <ErrorMessage>{errors?.category?.message}</ErrorMessage>
                </InputGroup>
                <InputGroup>
                    <ContainerCheckbox>
                        <input type="checkbox" defaultChecked={product.offer} {...register('offer')}/>
                        <Label>Produtos em Ofertas?</Label>
                    </ContainerCheckbox>
                </InputGroup>
                <SubmitButton>Editar Produto</SubmitButton>
            </Form>
        </Container>
    )
}