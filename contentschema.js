const mongoose =require("mongoose")

const contentschema={
	username:String,
	password:String
}
const Content = mongoose.model("user",contentschema)

module.exports=Content