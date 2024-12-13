import express from 'express';
import {User} from "../models/user.js";

export const userRouter = express.Router();

userRouter.get("/api/users", async (req, res) => {
    // получаем всех пользователей
    const users = await User.find({});

    res.send(users);
});

// userRouter.get("/api/users", async (req, res)=>{
//     // получаем всех пользователей
//     const query = User.find();
//     const users = await query.where('age').gte(21).limit(2).exec()
//     console.log('users',users)
//     res.send(users);
// });

userRouter.get("/api/users/:id", async (req, res) => {

    const id = req.params.id;
    // получаем одного пользователя по id
    const user = await User.findById(id);
    if (user) res.send(user);
    else res.sendStatus(404);
});

userRouter.post("/api/users", async (req, res) => {

    // try{
    if (!req.body) return res.sendStatus(400);

    // User.watch().
    // on('change', data => console.log('watch', new Date(), data));

    const userName = req.body.name;
    const userAge = req.body.age;
    const user = new User({name: userName, age: userAge});
    // сохраняем в бд
    const result = await user.save();
    console.log('result',result)
    if (result) res.send(user);
    else res.sendStatus(404);
    // }catch(e){
    //     res.status(400).send(e)
    // }

});

userRouter.delete("/api/users/:id", async (req, res) => {

    const id = req.params.id;
    // удаляем по id
    const user = await User.findByIdAndDelete(id);
    if (user) res.send(user);
    else res.sendStatus(404);
});

userRouter.put("/api/users", async (req, res) => {

    if (!req.body) return res.sendStatus(400);
    const id = req.body.id;
    const userName = req.body.name;
    const userAge = req.body.age;
    const newUser = {age: userAge, name: userName};
    // обновляем данные пользователя по id
    const user = await User.findOneAndUpdate({_id: id}, newUser);
    if (user) res.send(user);
    else res.sendStatus(404);
});