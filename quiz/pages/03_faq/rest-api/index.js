import axios from 'axios'

export default function Rest_API(){

    async function rest(){

        const data = await axios.get('https://koreanjson.com/users')
        console.log(data)
    }


    return(

        <button onClick={rest}>REST-API</button>

    )



}