const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware( {
            target: "http://localhost:8000",
    changeOrigin: true,
})
);
    app.use(
        createProxyMiddleware( "/LecturePage",{
            target: "http://54.180.213.187:8080/",
            changeOrigin: true,
        })
    );
};