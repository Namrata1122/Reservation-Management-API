const authorizeRoles = (...allowedRoles) => {
    return (req,res,next)=>{
        if(!req.user || !req.user.role){
            return res.status(403).json({message:'Access Denied: User role not found'})
        }

        const rolesArray = [...allowedRoles];
        const result = rolesArray.includes(req.user.role);

        if(result){
            next();
        }else{
            res.status(403).json({message:'Access Denied : User not authoized.'})
        }
    }
}

module.exports = authorizeRoles;