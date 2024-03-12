//fetch('https://workey.codeit.kr/ratings')
  //  .then(response => response.text())
    //.then(result => console.log(result))

    //파라미터가 하나기 때문에 소괄호 생략가능, 바로 return이기 때문에 중괄호와 return 생략가능 

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.text())
    .then(result => {
        const user = JSON.parse(result);
        console.log(user.length)
        user.forEach(element => {
            console.log(element)
        });
    })