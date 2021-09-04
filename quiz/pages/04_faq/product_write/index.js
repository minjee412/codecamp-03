import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'
import { useRouter } from 'next/router'

const CREATEPRODUCT = gql`
mutation createProduct ($seller: String, $createProductInput: CreateProductInput!){ 
    createProduct( seller: $seller, createProductInput: $createProductInput){ 
        _id
    }
}
`


export default function CreateProduct(){
    const [ createProduct ] = useMutation(CREATEPRODUCT)
    const router = useRouter()

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
            router.push(`/04_faq/product_read/${result.data.createProduct._id}`)
        } catch(error){
            console.log(error)
        }
        
            
    }
    

    return(
        <>
            판매자: <input type = "text" onChange={onChangeSeller}></input> <br/>
            상품명: <input type = "text" onChange={onChangeProduct}></input> <br/>
            상품 내용: <input type = "text" onChange={onChangeDetails}></input> <br/>
            상품 가격: <input type = "text" onChange={onChangePrice}></input> <br/>
            <button onClick={onClickSubmit}>상품등록하기</button>
        </>
    )

}