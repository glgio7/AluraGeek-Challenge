For a long time, I've been trying to host this project on both Netlify and Vercel, for both the front-end and back-end on the same domain, using a monorepo architecture with the "client" and "server" folders at the root of the project. However, the only way I was able to get it working was by keeping the files from the "client" folder at the root of the project, along with the "server" folder. This was because Netlify and Vercel only allow serverless functions, and don't allow for running a server on the same domain as the front-end.

To work around this limitation, I created a "vercel.json" file on root directory that redirects requests to the desired path. Here's an example:

<code>
{
"version": 2,
"builds": [
{ "src": "server/src/index.ts", "use": "@vercel/node" },
{ "src": "package.json", "use": "@vercel/static-build" }
],
"routes": [
{ "handle": "filesystem" },
{
"src": "/api/(.*)",
"dest": "server/src/index.ts"
},
{
"src": "/(.*)",
"dest": "/"
}
]
}
</code>

However, I later realized that it's possible to use the monorepo architecture by hosting the front-end and back-end separately (including configuring the project root folder) and setting up CORS on the back-end.
