import {Schema, model} from "mongoose";

const userScheme = new Schema(
    {
        name: String,
        age: Number
    }
);

userScheme.pre('save',  async function()  {
    await this.set({age: 2222})

    console.log('saved new user pre',this)
});
userScheme.post('save', function()  {

    console.log('saved new user post', this)
});
export const User = model("User", userScheme);