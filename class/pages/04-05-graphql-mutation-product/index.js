import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'

const CREATE_PRODUCT = gql`
    mutation createProduct ($seller: String, $createProductInput: CreateProductInput!) {
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

export default function GraphqlMutationProductPage(){

    const [ createProduct ] = useMutation(CREATE_PRODUCT)
    const [ MySeller, setMySeller] = useState('')
    const [ MyProduct, setMyProduct] = useState('')
    const [ MyDetail, setMyDetail] = useState('')
    const [ MyPrice, setMyPrice] = useState('')


    function onChangeMySeller(event){
        setMySeller (event.target.value)
    }
    function onChangeMyProduct(event){
        setMyProduct (event.target.value)
    }
    function onChangeMyDetail(event){
        setMyDetail (event.target.value)
    }
    function onChangeMyPrice(event){
        setMyPrice (event.target.value)
    }




    async function onClickSubmit(){
        const result = await createProduct({
            variables: {
                seller: MySeller, 
                createProductInput: {
                    name: MyProduct,
                    detail: MyDetail,
                    price: Number(MyPrice) 
                }
            }
        })
        console.log(result.data.createProduct._id)
    }


    return(
        <>
            판매자: <input type="text" onChange={onChangeMySeller}></input> <br/>
            상품명: <input type="text" onChange={onChangeMyProduct}></input> <br/>
            상품상세: <input type="text" onChange={onChangeMyDetail}></input> <br/>
            상품가격:<input type="text" onChange={onChangeMyPrice}></input> <br/>
            <button onClick={onClickSubmit}>상품 등록하기 !!</button>
        </>
    )


}