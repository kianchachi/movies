
const mongoose = require("mongoose");
// const movie = mongoose.model("movie");
const review = mongoose.model("review");



module.exports = {
    getAll: (req, res)  => {
        review.find({}, (err, reviewinDB) => {
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err});
            }
            else {
                console.log('success')
                res.json({message: "success", review :reviewinDB});
            }
        }) .sort({type:1});

     
    },


    getOne: (req, res)  => {
        review.findById({_id: req.params.id}, (err, reviewinDB) => {
            if(err) {
                console.log(err);
                res.json({message: "Error", error: err});
            }
            else {
                res.json({message: "success", review :reviewinDB});
            }
        });
     
    },


    create: (req, res) => {
        review.create({})
            user.save((err, reviewinDB) =>{
                console.log('we are innnn')
                if(err) {
                    console.log(err);
                    res.json({message: "Error", error: err});
                }
                else {
                console.log('createddddddd');

                    res.json({message: "success", review :reviewinDB});
                }
            });
    
        },

        createreview: (req, res) => {
            var user = new review(req.body);
                user.save((err, reviewinDB) =>{
                    if(err) {
                        console.log(err);
                        res.json({message: "Error", error: err});
                    }
                    else {
                    console.log('createddddddd');
    
                        res.json({message: "success", review :reviewinDB});
                    }
                });
        
            },


    // create: (req, res) => {
    //     Task.create(req.body)
    //         .then(data => res.json(data))
    //         .catch(err => res.json(err));
        
    
    // },



    update: (req, res) => {
        review.findByIdAndUpdate({_id: req.params.id}, req.body, {runValidators:true, context:'query'}, (err, reviewinDB) => {        
                if(err) {
                    console.log(err);
                    res.json({message: "error", error:err});
                } 
                else { 
                    res.json({message: "Success", review :reviewinDB});
                }
                })
              },
            
    delete: (req, res) => {
        review.findByIdAndDelete({_id: req.params.id}, (err) => {
            if(err) {
                console.log(err);
                res.json({message: "error", error:err});
            } 
            else { 
                res.json({message: "Success"});
            }
        })
    },

    // addLike: (req, res) => {
    //     Pet.findByIdAndUpdate({_id: req.params.id}, {$set:{likes: req.body.likes}}, {runValidators:true, context:'query'}, (err, reviewinDB) => {
    //         if(err) {
    //             console.log(err);
    //             res.json({message: "error", error:err});
    //         } 
    //         else { 
    //             res.json({message: "Success", review :reviewinDB});
    //         }
    //     })
    // }
    


}


    
 




