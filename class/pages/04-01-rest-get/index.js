import axios from 'axios'

export default function RestGetPage(){

    async function zzz(){

        const result = await axios.get('https://koreanjson.com/posts/1') //➡️ HTTP라는 길이 만들어 지고 백엔트 컴퓨터에서 데이터를 받음.

        console.log(result)
    }

    return(
        <button onClick={zzz}>REST API 요청하기!!</button>

    )

}