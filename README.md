CHANGE 1
## To deploy to github pages
1. at top of package.json add   "homepage": "http://maureenv.github.io/",
2. To deploy do npm run build > copy everything in build folder and move out to root folder

Hook up custom domain to github.
1. Go to DNS Management
2. Find all github custom domain IP in google search
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
3. Copy each IP to "A" record.
  - "Points to" is IP address
  - host is "@"
  - seconds are 600.

4. It github root folder create "CNAME" file (all caps). In this file add your domain name "maureenvogel.com"

Done!
