const withTM = require("next-transpile-modules")([
	"components",
	"blocks",
	"views",
	"layouts",
	"theme",
	"svg",
]);

module.exports = withTM({
	reactStrictMode: true,
});
