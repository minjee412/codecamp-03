export default function TypescriptPage(){

    let aaa: string = "안녕하세요"
    // aaa: string >>하나의 셋트 !

    aaa = 3

    let bbb: string;
    bbb = "반가워요"
    bbb = 123

    let ccc: number = 5
    ccc = "333"

    // 배열타입
    let ddd: number[] = [1, 2, 3, 4, 5, 6]
    let eee: (number | string)[] = ["1", 2, 3, 4, 5, 6]
    let fff: (number[] | string[]) = [1, 2, 3, 4, 5, 6]



    // 객체 타입
    interface IProfile {
        school: string
        age: number
    }

    let profile: IProfile = {
        school: '다람쥐초등학교',
        age: 13
    }
    profile.age = 15

    return(
        <div>타입스크립트 페이지 입니다</div>
    )
}