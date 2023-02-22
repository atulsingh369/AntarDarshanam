// const Resource = require("../models/productModel");
// const ErrorHander = require("../utils/errorhander");
// const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// const ApiFeatures = require("../utils/apifeatures");


// // Create Product -- Admin
// exports.createResource = catchAsyncErrors(async (req, res, next) => {
  
//   req.body.user = req.user.id;

//   const resource = await Product.create(req.body);

//   res.status(201).json({
//     success: true,
//     product,
//   });
// });

exports.getAllResources = (req,res)=>{
	res.status(200).json({message : "Route is working"})
}
