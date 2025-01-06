import { getQuery, readBody } from 'h3';

export default defineEventHandler(async (event) => {
    // const { name } = getQuery(event);
    // const { age } = await readBody(event);
    const { currencyKey } = useRuntimeConfig();
    const uri = `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}`;
    const { data } = await $fetch(uri);
    return {
        message: data
    }
})