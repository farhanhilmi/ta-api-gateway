export default (app, routes) => {
    routes.forEach((r) => {
        r.proxy.onError = (err, req, res) => {
            console.error(err);
            res.status(500).json({
                message: 'Something went wrong. Server is unavailable!',
            });
        };
    });
};
