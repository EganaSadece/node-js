const {Article} = require("../Models/Article")

const homepage = ( req, res ) => {

    Article.find()
    .then (results => {res.render ("index", { results })})
    .catch (err => console.log (err))
    
}

const addArticle = ( req, res ) => {
    if (req.metod === "GET") {
        res.render ("addArticle", {error:null} )
    }
    if (req.metod === "POST") {
    const Message = new Article (req.body);
    article.save ()
    .then (results => res.redirect ("/")
    .catch ( err => res.render ("addArticle", {error: err.errors})))
    }
}

const editArticle = ( req, res ) => {
    Article.findById({_id:req.params.id})
    .then (results => {res.render ("editArticle", { result })})
    .catch (err => console.log (err))

    if (req.metod === "POST") {
        Article.findByIdAndUpdate({_id:req.params.id})
        .then (results => {
            result.title = req.body.titile
            result.article = req.body.article
            result.save()
            .than (() =>
            res.redirect('/'))
            .catch ( err => console.log (err))

        })
        .catch (err => console.log (err))
    }
}

const showOneArticle = ( req, res ) => {
    Article.findById({_id:req.params.id})
    .then (results => {res.render ("editArticle", { result })})
    .catch (err => console.log (err))
}

const deleteArticle = ( req, res ) => {
    Article.findByIdAndDelete({_id:req.params.id})
    res.render("index")
    .then (() => res.redirect ("/"))
    .catch ( err => console.log (err))
}

module.exports ={
     homepage,
     addArticle,
     editArticle,
     showOneArticle,
     deleteArticle
}