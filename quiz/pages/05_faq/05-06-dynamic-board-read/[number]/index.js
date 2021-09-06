//Mutataion은 내가 하고 싶을때 할수 있었지만,
//Query는 페이지가 열리면 무조건 실행
import Boardlist from '../../../../src/components/units/board/list/Boardlist.container'


export default function DynaminBoardRead(){
    
    return(
        <Boardlist />
    )

}
//해당 페이지는 router로 변경 되는 값을 받되, 그외 안받는 내용들은 고정된 상태일때 쓴다.
