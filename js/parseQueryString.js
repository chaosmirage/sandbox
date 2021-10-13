const url = 'search/?q="test"';

const host = 'http://localhost:8080';

const parsedQuery = new URL(url, host);

const q = parsedQuery.searchParams.get('q');

console.log(q);
