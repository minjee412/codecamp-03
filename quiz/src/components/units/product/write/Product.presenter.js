export default function ProductWriteUI(props){

    return(
        <>
            판매자: <input type = "text" onChange={props.onChangeSeller}></input> <br/>
            상품명: <input type = "text" onChange={props.onChangeProduct}></input> <br/>
            상품 내용: <input type = "text" onChange={props.onChangeDetails}></input> <br/>
            상품 가격: <input type = "text" onChange={props.onChangePrice}></input> <br/>
            {!props.isUpdate && (<button onClick={props.onClickSubmit}>상품등록하기</button>)}
            {props.isUpdate && (<button onClick={props.onClickUpdate}>수정하기</button>)}
        </>

    )

}