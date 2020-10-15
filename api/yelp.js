const yelp = require('yelp-fusion');

const client = yelp.client(process.env.YELP_API_KEY);

const getShops = () => client.search({
                            term: 'Ice Cream shops',
                            location: 'Redwood City',
                            limit: 10
                        });

const getReview = async (index, alias) => {
    return new Promise(async(resolve, reject)=>{
        setTimeout(async() => {
            try{
                const res = await client.reviews(alias);
                const topReview = res.jsonBody.reviews[0];
                const review = {
                    name: topReview.user.name,
                    text: topReview.text
                }
                resolve(review);
            }catch(error){
                reject(error);
            }
        }, 500*index);
    });
}
 
module.exports = {
    getShops,
    getReview
}
