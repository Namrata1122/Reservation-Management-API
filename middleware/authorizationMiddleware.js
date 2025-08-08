const authorizeRoles = (role) => {
    return (req,res,next)=>{
        if(!req.user || !req.user.role){
            return res.status(403).json({message:'Access Denied: User role not found'})
        }

        if(req.user.role !==role){
            return res.status(403).json({message:'Access Denied : User not authoized.'})
        }
        
        next();
        
    }
}

module.exports = authorizeRoles;