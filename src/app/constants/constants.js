export const SERVER_URL = 'http://localhost:9999/api';
export const TEST = true;
export function encodeGetParams(p) {
    const parameters = Object.entries(p).map(kv => kv.map(encodeURIComponent).join("=")).join("&");
    return parameters;
}