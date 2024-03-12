fetch("https://jsonplaceholder.typicode.com/users") // 번째로 JSONPlaceholder에서 사용자 데이터를 가져오기 위해 fetch() 함수를 사용합니다. 이 함수는 네트워크 요청을 보내고, Promise를 반환합니다.

  .then((response)=>response.text()) // 번째 Promise가 완료되면, 해당 응답(response)을 텍스트 형식으로 변환합니다. JSONPlaceholder에서 반환하는 데이터는 JSON 형식이기 때문에, 텍스트로 변환한 뒤 다음 단계에서 JSON 파싱할 것입니다.

  .then((result)=>{

    const users = JSON.parse(result); //텍스트로 변환된 응답을 받으면, 다음 작업을 수행합니다. 이 경우에는 텍스트를 JSON 형식으로 파싱하고, 파싱된 데이터를 users 변수에 할당합니다.

    const {id} = users[0] //파싱된 사용자 데이터에서 첫 번째 사용자의 ID를 추출하여 id 변수에 할당합니다. id:1 --> 1 // 구조분해할당

    alert(id) // 1 출력

    return fetch("https://jsonplaceholder.typicode.com/posts?userID =${id}") //이제 해당 사용자의 게시물을 가져오기 위해 두 번째 fetch() 요청을 보냅니다. 이때 URL에는 이전에 추출한 사용자 ID를 포함하여 보냅니다.

                })

    .then((response)=>response.text()) //두 번째 요청의 응답을 텍스트 형식으로 변환합니다.

    .then((posts)=>{

          console.log(posts) //텍스트로 변환된 응답을 받으면, 해당 응답을 다음 작업으로 전달합니다. 이 경우에는 콘솔에 게시물 데이터를 출력합니다.

    })

/*posts?userID=${id}는 URL의 쿼리 파라미터(query parameter)를 의미합니다. URL의 끝에 ?를 붙이고, 
그 뒤에 키(key)와 값(value)의 쌍으로 이루어진 파라미터를 추가하여 서버에게 추가적인 정보를 전달합니다.

위의 코드에서 ${id}는 변수 id의 값을 문자열로 대체합니다. 따라서 실제로는 posts?userID=1 또는 posts?userID=2와 같은 
형태로 URL이 구성됩니다. 이렇게 구성된 URL은 JSONPlaceholder의 REST API에서 해당 사용자의 ID에 해당하는 
게시물을 가져오기 위한 요청을 보내는 데 사용됩니다.

예를 들어, posts?userID=1은 ID가 1인 사용자가 작성한 모든 게시물을 가져오는 요청을 나타냅니다. 
마찬가지로 posts?userID=2는 ID가 2인 사용자가 작성한 모든 게시물을 가져오는 요청을 나타냅니다.
 따라서 이 URL은 사용자별로 게시물을 필터링하기 위한 파라미터를 포함하고 있습니다.*/