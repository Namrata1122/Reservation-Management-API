const Resources = require('../models/resource');

const getAllResources =(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.send("List of resources.");
}

const createResource =async (req,res)=>{
    try{
        const resource = await Resources.create(req.body);
        res.status(201).json({resource});
    }catch(error){
        console.log(error);
    }
}

const getResource =(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.send("Get a resource");
}

const updateResource =(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.send("update resource");
}

const deleteResource =(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.send("delete resource");
}

module.exports = {
    getAllResources,
    createResource,
    getResource,
    updateResource,
    deleteResource
}