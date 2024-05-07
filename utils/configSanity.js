import { createClient } from "next-sanity";

export const client = createClient({
    projectId: 'pa5zw0oj',
    dataset: 'production',
    apiVersion: "v2022-03-07",
    useCdn: true,       
});