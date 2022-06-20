import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer tEFLn5mhF81kJOwfJW3LQCD0pipVwLQiEzeGAMzEohm7A1oVkuDCDQ33cEwdXnr51ESBAQKR9C3TE2fHwZu3pVEESJ_IybFz2o24le_emdHObV1VbYlcj0zAfrqsYnYx'
    }
});