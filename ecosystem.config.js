module.exports = {
  apps : [{
    name        : "LiquidSalonDAO-docs",
    script      : "npm run serve",
    watch       : true,
    env: {
      "NODE_ENV": "development",
    },
    env_production : {
       "NODE_ENV": "production"
    }
  }]
}