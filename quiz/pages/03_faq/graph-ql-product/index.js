import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'

const Create_Product = gql`

    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){ 
        createProduct(
            seller:$seller,
            createProductInput: $createProductInput
        ){
            _id
            number
            message
        }
        
    }
`

export default function CREATE_PRODUCT(){

    const [ createProduct ] = useMutation(Create_Product)
    const [ MySeller, setMySeller ] = useState('')
    const [ MyProduct, setMyProduct ] = useState('')
    const [ MyDetail, setMyDetail ] = useState('')
    const [ MyPrice, setMyPrice ] = useState('')

    function onChangeMySeller(event){
        setMySeller(event.target.value)
    }
    function onChangeMyProduct(event){
        setMyProduct(event.target.value)
    }
    function onChangeMyDetail(event){
        setMyDetail(event.target.value)
    }
    function onChangeMyPrice(event){
        setMyPrice(event.target.value)
    }

    async function Register(){
        const result = await createProduct({
            variables:  {
                seller: MySeller,
                createProductInput:{
                    name: MyProduct,
                    detail: MyDetail,
                    price: Number(MyPrice)}
            }
        })

        console.log(result.data.createProduct.number)
    }


    return(
        <>
            판매자: <input  onChange={onChangeMySeller}></input> <br/>
            상품명: <input  onChange={onChangeMyProduct}></input> <br/>
            상세설명: <input  onChange={onChangeMyDetail}></input> <br/>
            금액: <input  onChange={onChangeMyPrice}></input> <br/>
            <button onClick={Register}>상품등록하기</button>
        </>
    )

}