exports.middlewareGlobal = (req, res, next) =>{
    res.locals.variavel = 'Este e o valor da variavel local.';
    next();
}