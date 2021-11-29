//This file fetches the newsdata by using the endpoint and appending the country and the category.

import { API_KEY, endpoint, country } from '../config/config';

export async function services(category = 'general') {//We pass the category as general because that is the default category
    let articles = await fetch(`${endpoint}?country=${country}&category=${category}`, {
        headers: {
            'X-API-KEY': API_KEY
        }
    });

    let result = await articles.json(); //Response is converted into JSON format
    articles = null;

    return result.articles;
}