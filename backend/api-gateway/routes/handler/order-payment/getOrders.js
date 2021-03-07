const apiAdapter = require('../../apiAdapter')

const {URL_ORDER_PAYMENT_SERVICE} = process.env

const api = apiAdapter(URL_ORDER_PAYMENT_SERVICE);

module.exports = async(req, res)=>{
    try{
        const user_id = req.user.data.id;
        const orders = await api.get('/api/orders', {
            params: {user_id}
        });
        return res.json(orders.data);
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