const apiAdapter = require("../../apiAdapter");

const { URL_PRODUCTS_SERVICE, HOSTNAME } = process.env;

const api = apiAdapter(URL_PRODUCTS_SERVICE);

module.exports = async (req, res) => {
    try {
        const product = await api.get("/api/products", {
            params: {
                ...req.query,
            },
        });

        const productData = product.data;
        const firstPage = productData.data.first_page_url.split("?").pop();
        const lastPage = productData.data.last_page_url.split("?").pop();

        productData.data.first_page_url = `${HOSTNAME}/products?${firstPage}`;
        productData.data.last_page_url = `${HOSTNAME}/products?${lastPage}`;
        
        if(productData.data.next_page_url){
            const nextPage = productData.data.next_page_url.split("?").pop();
            productData.data.next_page_url = `${HOSTNAME}/products?${nextPage}`;

        }
        if(productData.data.prev_page_url){
            const prevPage = productData.data.prev_page_url.split("?").pop();
            productData.data.prev_page_url = `${HOSTNAME}/products?${prevPage}`;

        }

        productData.data.path = `${HOSTNAME}/courses`;


        return res.json(productData);
    } catch (error) {
        if (error.code === "ECONNREFUSED") {
            return res
                .status(500)
                .json({ status: "error", message: "service unavailable" });
        }

        const { status, data } = error.response;
        return res.status(status).json({
            data,
        });
    }
};
