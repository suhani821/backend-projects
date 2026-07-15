const { configDotenv } = require('dotenv');
const express =require('express')
 require('dotenv').config()

const app = express();
 const port="5000"
app.get('/', (req,res)=>{
    res.send("hello users your request is in process") 



}
)
const data = {
  "login": "suhani821",
  "id": 144513906,
  "node_id": "U_kgDOCJ0bcg",
  "avatar_url": "https://avatars.githubusercontent.com/u/144513906?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/suhani821",
  "html_url": "https://github.com/suhani821",
  "followers_url": "https://api.github.com/users/suhani821/followers",
  "following_url": "https://api.github.com/users/suhani821/following{/other_user}",
  "gists_url": "https://api.github.com/users/suhani821/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/suhani821/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/suhani821/subscriptions",
  "organizations_url": "https://api.github.com/users/suhani821/orgs",
  "repos_url": "https://api.github.com/users/suhani821/repos",
  "events_url": "https://api.github.com/users/suhani821/events{/privacy}",
  "received_events_url": "https://api.github.com/users/suhani821/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "suhani singhal",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 5,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-09-09T05:45:42Z",
  "updated_at": "2026-06-28T09:27:23Z"
}
app.get('/github',(req,res)=>{
    res.json(data);
})
app.get('/about',(req,res)=>{
    res.send("it is about page");
})
app.listen(process.env.PORT, ()=>{
    console.log( `${process.env.PORT} is running perfectly  `)
})