exports.middlewareGlobal = (req, res, next) =>{
    console.log('oi');
    next();
}