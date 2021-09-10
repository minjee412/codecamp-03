import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { CREATE_PRODUCT, UPDATE_PRODUCT } from './Product.query'
import ProductWriteUI from './Product.presenter'

export default function ProductWrite(props){
    const router = useRouter()
    const [ createProduct ] = useMutation(CREATE_PRODUCT)
    const [ updateProduct ] = useMutation(UPDATE_PRODUCT)


    const [ seller, setSeller ] = useState('')
    const [ product, setProduct ] = useState('')
    const [ details, setDetails ] = useState('')
    const [ price, setPrice ] = useState('')    

    function onChangeSeller(event){
        setSeller(event.target.value)
    }
    function onChangeProduct(event){
        setProduct(event.target.value)
    }
    function onChangeDetails(event){
        setDetails(event.target.value)
    }
    function onChangePrice(event){
        setPrice(event.target.value)
    }

    
    async function onClickSubmit(){
        try{
            const result = await createProduct({
            variables: { seller: seller, createProductInput:{ name: product, detail: details, price: Number(price)}
                    //   ------          ------------------   ----          --------         -------        항상 DOCS와 동일한 이름으로)
            }
        })
            console.log(result)
            console.log(result.data.createProduct._id)
            router.push(`/07-01-product-read/${result.data.createProduct._id}`)
        } catch(error){
            console.log(error)
        }
    }

    async function onClickUpdate(){
        try{
            await updateProduct({
            variables: {
                productId: router.query._id,
                updateProductInput: {
                    name: product,
                    detail: details,
                    price: Number(price)}
            }
        })
            router.push(`/07-01-product-read/${router.query.id}/`)
        } catch(error){
            console.log(error);
        }
        
    }
        
            
    
    return(
        <ProductWriteUI
        onChangeSeller={onChangeSeller}
        onChangeProduct={onChangeProduct}
        onChangeDetails={onChangeDetails}
        onChangePrice={onChangePrice}
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        isUpdate={props.isUpdate}
        />
    )

}