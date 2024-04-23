const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://dbduddnd1225:'+ process.env.MONGO_ATLAS_PW + '@pokedex-cluster.vp4vpds.mongodb.net/')