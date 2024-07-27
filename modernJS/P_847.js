const get = (url, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
        if(xhr.status === 200){
            callback(JSON.parse(xhr.response));
        }else{
            console.error(`${xhr.status} ${xhr.statusText}`);
        }
    }
}


const url = 'https://jsonplaceholder.typicode.com';

get(`${url}/posts/1`, ({userId}) => {
    // {userId} = JSON.parse(xhr.response); 구조분해 할당을 이런 방식으로 사용할 수 있다.
    console.log(userId);

    // post의 userId를 사용해서 user 정보를 획득
    get(`${url}/users/${userId}`, userInfo => {
        console.log(userInfo);
    })
})