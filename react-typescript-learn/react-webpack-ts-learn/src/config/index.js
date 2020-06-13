let host = window.location.host;
let env = (host.match(/\w+(?:-)/) || [])[0] || '';
// console.log('env', env);

export const EXAMPLE_URL = `http://${env}example.com`;
