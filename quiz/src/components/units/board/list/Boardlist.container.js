import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import BoardlistUI from './Boardlist.presenter'
import {FETCH_BOARD} from './Boardlist.queries'

export default function Boardlist(){
    const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: Number(router.query.number) }
    })   
    // variables에 받아오는 값이 Int 면, 앞에서 Num()을 써서 숫자로 변형 시켜준다.
    console.log(data)

    return(
        <BoardlistUI
            router={router}
            data={data}
        />
        
    )
}