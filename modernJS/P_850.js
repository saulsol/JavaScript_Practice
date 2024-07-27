const promiseGet = url => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();

        xhr.onload = () => {
            if(xhr.status === 200){
                resolve(JSON.parse(xhr.response));
            }else{
                reject(new Error(xhr.status));
            }
        };
    });
};

promiseGet('https://jsonplaceholder.typicode.com/posts/1');

// promiseGet() => promise 객체 반환 =>
// 비동기 처리는 Promise 생성자 함수가 인수로 전달받은 콜백 함수에서 처리한다. 
// 비동기 처리 성공(resolve)
// 비동기 처리 실패(reject)

