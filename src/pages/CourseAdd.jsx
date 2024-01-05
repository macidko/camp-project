import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from "yup";
import { Button, } from 'semantic-ui-react';
import EMTextInput from '../utilities/customFormControls/EMTextInput';

export default function CourseAdd() {

    const initialValues = {
        //formik için varsayılan değerler
        courseName: "", price: 10
    }
    const schema = Yup.object({
        //varsayılan değerlerin validasyonları oluşturulur
        //string() - string kontrolü
        //required() - zorunlu olduğunu belirtir. parantez içi uyarı metnini düzenler
        courseName: Yup.string().required("Ürün adı zorunludur"),
        price: Yup.number().required("Ürün fiyatı zorunludur")
    })
    return (
        <Formik initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            <Form className='ui form'>
                {/* form inputları tekrarı önlemek ve tekrar kullanılabilirlik için utilities içerisine taşındı. */}
                <EMTextInput name='courseName' placeholder='Ürün Adı' />
                <EMTextInput name='price' placeholder='Ürün Fiyatı' />
                <Button color='green' type='submit'>Ürün Ekle</Button>
            </Form>
        </Formik>
    )
}
