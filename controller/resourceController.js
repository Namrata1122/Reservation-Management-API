const Resources = require('../models/resource');

const getAllResources =(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.send("List of resources.");
}

const createResource =(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.send("Resource Created");
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