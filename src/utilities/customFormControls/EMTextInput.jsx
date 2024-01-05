import { useField } from 'formik';
import React from 'react'
import { FormField, Label } from 'semantic-ui-react';

export default function EMTextInput({ ...props }) {
    // console.log(props);
    //reflect api
    //useField() : takip ettiği inputun her değişikliğine tepki gösterir. değer,durum,değişiklik gibi özelliklere erişim sağlar
    //field : elemanın propslarına eklenir.elemanın değeri, durumu ve olayları field üzerinden erişilebilir.
    //meta : elemanın durumunu içeren bir nesnedir. touched ve error gibi durumlara erişir.
    const [field, meta] = useField(props) 
    console.log(field);
    return (
        //string ifadeyi boolean değer almak için !!
        <FormField error={meta.touched && !!meta.error}>
            {/* field nesnesinin ve component kullanılırken verilen propların eklenilmesi */}
            <input {...field}  {...props} />
            {/* componentin touched ve string mesajının bool değere çevrilerek kontrol edilmesi */}
            {meta.touched && !!meta.error ? (
                // koşul sonrasında hata mesajı
                <Label pointing basic color='red' content={meta.error}></Label>
            ) : null}
        </FormField>
        )
}
