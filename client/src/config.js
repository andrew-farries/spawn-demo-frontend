const dev = {
  spawn_demo_api_endpoint: process.env.REACT_APP_BACKEND_ENDPOINT || 'http://localhost:5050',
}

const prod = {
  spawn_demo_api_endpoint: process.env.REACT_APP_BACKEND_ENDPOINT || window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port: '')
}

const config = process.env.NODE_ENV === 'development' ? dev : prod

export default config