// config.js
export function getEnv(key) {
    switch(key) {
        case 'VITE_API_URL':
            //return '${VITE_API_URL}';
            return `${VITE_API_URL}`
        default:
            return '';
    }
}
