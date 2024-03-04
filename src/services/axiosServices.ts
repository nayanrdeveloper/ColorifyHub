import axios from 'axios';

type methodType = 'get' | 'post' | 'put' | 'delete';

interface ApiResponse {
    data: any;
    status: number;
    statusText?: string;
    headers?: any;
    config?: any;
}

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

interface ApiRequestPayload {
    [key: string]: any; // Dynamic object for flexible payload structure
}

/**
 * Makes an HTTP request to the specified API endpoint using Axios.
 *
 * @param {string} method The HTTP request method (e.g., 'GET', 'POST', 'PUT', 'DELETE').
 * @param {string} url The API endpoint URL.
 * @param {ApiRequestPayload} payload The optional request payload data (if applicable).
 * @returns {Promise<ApiResponse | Error>} A promise that resolves with the API response or rejects with an error.
 *
 * @throws {Error} Re-throws any errors encountered during the API request.
 */
const apiCall = async (
    method: methodType,
    url: string,
    payload: ApiRequestPayload,
) => {
    try {
        const response: ApiResponse = await axiosInstance[method](url, payload);
        return response;
    } catch (error) {
        throw error;
    }
};

export default apiCall;
