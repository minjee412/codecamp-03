import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import {FETCH_BOARD} from '../read/BoardRead.queries'
import BoardReadUI from '../read/BoardRead.presenter'


export default function BoardRead(){
const router = useRouter()

const { data } = useQuery(FETCH_BOARD,{
    variables:{boardId:router.query.checkpage}
})
console.log(data)

    return(
        <BoardReadUI 
        router={router}
        data = {data}/>
    )

}