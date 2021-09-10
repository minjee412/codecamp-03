import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const FETCHBOARD = gql`
    query fetchProduct($productId: ID){
        fetchProduct(productId: $productId){
            _id
            seller
            name
            detail
            price
            
        }
    }
`

export default function CheckProduct(){

    const router = useRouter();
    console.log(router.query)
    const { data } = useQuery(FETCHBOARD,{
        variables: { productId : router.query.check_board }
//(DOCS와 동일한 하게) ----------   ------------------------- (router.quiery로 불러올때는 뒤에 무조건 내가 만든 []안의 폴더명을 쓴다.)
    })

        console.log(data)

    return(
        <>
            <div>상품 상세 페이지 입니다.</div>
            <div>사용자 ID: {router.query.check_board}</div>

            <div>판매자: {data ? data.fetchProduct.seller: "loading..."}</div>
            <div>상품명: {data ? data.fetchProduct.name: "loading..."}</div>
            <div>상품 상세: {data ? data.fetchProduct.detail: "loading..."}</div>
            <div>상품 가격: {data ? data.fetchProduct.price: "loading..."}</div>

            {/* <div>판매자: {data ?. fetchProduct.seller}</div>
            <div>상품명: {data ?. fetchProduct.name}</div>
            <div>상품 상세: {data ?. fetchProduct.detail}</div>
            <div>상품 가격: {data ?. fetchProduct.price}</div> */}
        </>
    )

}