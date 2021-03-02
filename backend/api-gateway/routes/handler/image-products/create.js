const apiAdapter = require('../../apiAdapter')

const {URL_PRODUCTS_SERVICE} = process.env

const api = apiAdapter(URL_PRODUCTS_SERVICE);

module.exports = async (req, res) =>{
    try{
        const imageProducts = await api.post('/api/image-products', req.body)
        return res.json(imageProducts.data)
    }
    catch( error){
        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ status: 'error', message: 'service unavailable' });
        }

        const{ status, data } = error.response
        return res.status(status).json({
            data
        })
    }
}