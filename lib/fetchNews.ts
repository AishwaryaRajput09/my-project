import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
    category?: Category | string,
    keywords?:string,
    isDynamic?:boolean,

) => {
    //Graph Query
    const query= gql` 
    query MyQuery()
    $access_key: String!
    $category: String!
    $keywords: String
    {
        myQuery(
            access_key: $access_key
            category: $category
            countries: "us,gb,india"
            sort: "published_desc"
            keywords: $keywords

        ) {
            data {
                author
                category
                country
                description
                image
                language
                published_at
                source
                title
                url
            }
            pagination {
                count
                limit
                offset
                total
            }
        }
    }
    `;

    //Fetch function with next js 13 cashing 
    const res = await fetch('https://dashboard.stepzen.com/explorer?endpoint=api%2Ferrant-joey',{
        method: 'POST',
        cache: isDynamic ?"no-cache":"default",
        next : isDynamic ? {revalidate:0} : {revalidate:20},
        headers: {
            'Content-Type': 'application/json',
            'Authorization':`Apikey ${process.env.STEPZEN_API_KEY}`,
        },
        body: JSON.stringify({
            query,
            variables: {
                access_key: process.env.MEDIASTACK_API_KEYS,
                categories: category,
                keywords: keywords,
            },
        }),

    });
    console.log(
        "LOADING NEW DATA FROM for category>>> ",
        category,
        keywords,
    );

    const newsResponse = await res.json();
    //Sort function
        const news = sortNewsByImage(newsResponse.data.myQuery);
    //return response

}
export default fetchNews;
