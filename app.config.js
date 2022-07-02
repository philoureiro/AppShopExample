import "dotenv/config"

export default {
  name: "APP-SHOP-EXAMPLE",
  version: "1.0.0",
  extra: {
    API_URL: process.env.API_URL,
  },
}
