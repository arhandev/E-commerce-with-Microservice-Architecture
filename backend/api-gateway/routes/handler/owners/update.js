const apiAdapter = require('../../apiAdapter')

const {URL_PRODUCTS_SERVICE} = process.env

const api = apiAdapter(URL_PRODUCTS_SERVICE);

module.exports = async(req, res)=>{
    try{
        const id = req.params.id
        const owner = await api.put(`/api/owners/${id}`, req.body);
        return res.json(owner.data);
    }
    catch(error){
        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json({ status: 'error', message: 'service unavailable' });
        }

        const{ status, data } = error.response
        return res.status(status).json({
            data
        })
    }
}