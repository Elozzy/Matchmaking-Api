import Request from 'express';
import Response from 'express';

import findMatch from '../findMatch';


// -GET -/all users
export let allUsers = (req: Request, res: Response) =>  {
    let users = findMatch.find((err: any, users: any) => {
        if(err) {
            res.send(err)
        }else {
            res.send(users);
        }
    })

}

// -Get - /user/1 ***returns a user with a given Id

export let getUser = (req: Request, res: Response) => {
    findMatch.findById(req.params.id, (err:any, user: any) => {
        if(err) {
            res.send(err);
        }else {
            res.send(user);
        }
    })
}



// - PUT -/user # inserts a new user to the table
export let addUser = (req:Request, res:Response) => {
    let user = new findMatch(req.body);

    user.save((err: any) => {
        if(err) {
            res.send(err);
        }else {
            res.send(user);
        }
    })
}


// Post - / user/1
export let updateUser = (req: Request, res: Response) => {
    findMatch.findByIdAndUpdate(req.params.id, req.body, (err: any, book: any)=> {
        if(err) {
            res.send(err)
        }else {
            res.send("succefully updated userprofile")
        }
    })
}

//Delete
export let deleteUser = (req:Request, res:Response) => {
    findMatch.deleteOne({_id: req.params.id}, (err: any) => {
        if(err) {
            res.send(err)

        }else{
            res.send("successfully Deleted user profile")
        }
    })
}

//Perform Matching operation

//  let findSuitabelUser = (req:Request, res:Response) => {
//     let suitableUser = findMatch.find((err: any,  suitableUser: any) => {
//         if(err){
//             res.send(err)
//         }else{
//             res.send("A match has been found")
//         }
//     })
//  }