const router = require('vercel');
const mongojs = require('mongojs');
const db = mongojs(process.env.MONGODB_URI, ['tasks']);

router.get('/tasks', (req, res, next) => {
    db.tasks.find((err, tasks) => {
        if(err)
        return next(err);
        res.json(tasks);
    });
});

router.get('/tasks/:id', (req, res, next) => {
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, (err, task) => {
        if(err)
        return next(err);
        res.json(task);
    });
});
//Save
router.post('/tasks', (req, res, next) => {
   const task = req.body;
   //Validar
   if(!task.title) {
        res.status(400).json({
            error: 'Bad data'
        });
   }else{
       db.tasks.save(task, (err,task) => {
        if(err)
        return next(err);
        res.json(task);
       });
   }
});

//Delete
router.delete('/tasks/:id', (req, res, next) => {
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, (err, task) => {
        if(err){ res.send(err); }
        res.json(task);
    });
});
module.exports = router;