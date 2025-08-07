const Resources = require('../models/resource');
const asyncWrapper = require('../middleware/asyncWrapper');
const {createCustomError} = require('../error/customError');

const getAllResources =asyncWrapper(async(req,res)=>{
    const resources = await Resources.find({});
    res.status(200).json({resources});
})

const createResource =asyncWrapper(async (req,res)=>{
    const resource = await Resources.create(req.body);
    res.status(201).json({resource});
})

const getResource =asyncWrapper(async(req,res,next)=>{
    const {id:resourceID} = req.params
    const resource = await Resources.findOne({_id:resourceID});
    if(!resource){
        return next(createCustomError(`No resource with resource id : ${resourceID}`,404))
    }

    res.status(200).json({resource});
})

const updateResource =asyncWrapper(async(req,res,next)=>{
    const {id:resourceID}=req.params;
    const resource = await Resources.findOneAndUpdate({_id:resourceID},req.body,{
        new:true,
        runValidators:true
    })
    if(!resource){
        return next(createCustomError(`No resource with resource id : ${resourceID}`,404))
    }
    res.status(200).json({resource});
})

const deleteResource =asyncWrapper(async(req,res,next)=>{
    const {id:resourceID} = req.params
    const resource = await Resources.findOneAndDelete({_id:resourceID});
    if(!resource){
        return next(createCustomError(`No Resource with id : ${resourceID}`,404));
    }
    res.status(200).json({message:`The below ressource is now deleted`,resource})
})

module.exports = {
    getAllResources,
    createResource,
    getResource,
    updateResource,
    deleteResource
}