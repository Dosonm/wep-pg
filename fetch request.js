fetch('https://learn.codeit.kr/api/topics')
    .then(res => res.text())
    .then(result => {
        const fin = json.parse(result)
        fin.forEach(ele => {
            if(ele.difficulty === "초급"){ 
                console.log(ele)
            }
        });
    })

fetch('https://learn.codeit.kr/api/topics')
    .then(Response => Response.json())
    .then(result => {
        const print = result.filter(topic => topic.difficulty === '초급') //여기서 topic은 result배열에서 각 요소를 topic라는 변수로 받아옴
        console.log(print)
    })

const member = {
    name: 'a',
    email: 'b',
    department: 'c'
}

fetch('url/01(ip주소임)',{
    method:'put',
    body: json.stringify(member) //자바스크립트 객체의 데이터를 바디에 담아서 외부로 전송하려면 반드시 이 메서드를 이용해 string타입으로 변환해주어야한다.
})
    .then(res => res.text())  //return 한줄짜리니까 중괄호 생략이 가능한거임
    .then(result => {console.log(result)})


//
const newMember = {
    name: 'a',
    email: 'b',
    department: 'engineering',
};

fetch('https://learn.codeit.kr/api/members', {
    method: 'POST',
    body: JSON.stringify(newMember),           //리퀘스트를 보내는 과정 => 자바스크립트를 json문법으로 변환시켜야함 => 직렬화(Serialization)
})
.then(() => {
    fetch('https://learn.codeit.kr/api/members')  //리퀘스트를 받는 과정 => 받아오면 그걸 js문법으로 변환해서 console.log로 출력 => 역직렬화(Deserialization)
    .then((response) => response.text())            //여기서 받아온 response값은 newmember가 추가된 member(저 url에 기존에 있던 데이터)
    .then((result) => {
        const members = JSON.parse(result);
        console.log(members[members.length - 1]);
    });
});    