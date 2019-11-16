const { URL } = require('url');

const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
console.log('searchParams:', myURL.searchParams);
console.log('searchParams.getAll():', myURL.searchParams.getAll('category')); //키에 해당하는 모든 값들을 가져온다. 배열 반환
console.log('searchParams.get():', myURL.searchParams.get('limit'));  //키에 해당하는 첫번째 값만 가져온다.
console.log('searchParams.has():', myURL.searchParams.has('page')); //해당 키가 있는지 없는 지 검사 있으면  true 반환

console.log('searchParams.keys():', myURL.searchParams.keys()); //모든 키를 Iterator로 반환(es6)
console.log('searchParams.values():', myURL.searchParams.values()); //모든 values를 Iterator로 반환(es6)

myURL.searchParams.append('filter', 'es3'); //해당 키를 추가 append(KEY, VALUE);
myURL.searchParams.append('filter', 'es5'); //해당 키를 추가 append(KEY, VALUE);
console.log(myURL.searchParams.getAll('filter')); 

myURL.searchParams.set('filter', 'es6');
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.delete('filter');
console.log(myURL.searchParams.getAll('filter'));

console.log('searchParams.toString():', myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();