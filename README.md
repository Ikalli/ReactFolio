# ReactFolio [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://github.com/Ikalli/ReactFolio/blob/master/LICENSE)
## Nice and Clean Responsive Dark Theme Portfolio Website with React!

![캡처s](https://user-images.githubusercontent.com/16658067/94679897-d2e40c00-035b-11eb-8c90-c4fb4f79157d.PNG)

## Demo Page
https://ikalli.github.io/ReactFolio

## Contents
* Greeting and Summary
* Skills
* Work Experiences
* Open Source Projects(Github pinned repository)
* Other Projects
* Achievement and Certification
* Blog Posts
* Contact

## Getting Started
You have to install Node.js and Git for use.

## How To Use
1. Fork or clone this repository.  
```
git clone https://github.com/ikalli/ReactFolio.git  
cd ReactFolio
```
2. Fill `portfolio.tsx` with your story!
3. If you want to test your website, open terminal and follow below.
```
# project root directory
npm i
npm start
```
Yarn also possible!
Then, new brower window maybe pop up with localhost:3000

4. You NEED token, github personal access token, public use
  * goto https://github.com/settings/tokens
  * Click 'Personal access token'
  * Click 'Generate new token' and confirm password
  * Write token name in note
  * __IMPORTANT! DO NOT CHECK IN SELECT SCOPE!!__
  ![token](https://user-images.githubusercontent.com/16658067/94020991-79755d80-fdee-11ea-9ba0-80fb76652d94.PNG)
  * Click Generate token
  * Copy token - If you lose token, click regenerate token
  
5. Create .env.local file in project root directory and write following 1-line code
```
--public
--src
--.env.local  // Create!
--.gitignore
--tsconfig.json
--package.json
...

# .env.local

REACT_APP_GITHUB_TOKEN = /your token/
```

6. Open .gitignore and check .env.local is contained  

**If you get into trouble with Github Token, go to Reference part and click Github Docs**  
And you can see 6 or less repositories that you pinned.

7. Change favicon, apple-touch-icon and other images.

8. Change `public/index.html` meta tags!

9. **Modify Codes if you want!**

## Deploy
* Install gh-pages module 
* `npm i -D gh-pages` or `yarn add gh-pages`
* Modify `package.json` hompage to your github page  

Example: `homepage: https://[username].github.io/ReactFolio` 

* open terminal and following instruction  

`npm run deploy`

* Then gh-pages branch will be automatically generated and you can see pages!!

## Used Technologies
* CSS3
* TypeScript
* React
* Github GraphQL API
* Apollo-Boost
* react-easy-emoji
* react-reveal  

⚠ If you want to use react-reveal effect, you have to variable declaration with `require()`.  
⚠ Example
```typescript
...import 

export default function Ex() {
  const Fade: any = require('react-reveal/Fade');
  return (
    <Fade>
      ...
    </Fade>
  );
}
```

## Contributes

You can just change `src/portfolio.tsx` to get your portfolio website. Also you can modify component codes if you want!

But if you want to contribute to ReactFolio and make much better, look at [Issues](https://github.com/Ikalli/ReactFolio/issues).

If you created something cool and want to contribute, open an [Pull request](https://github.com/Ikalli/ReactFolio/pulls).

## Reference
[Github Token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)  

[Github GraphQL API](https://docs.github.com/en/graphql)  

[DeveloperFolio](https://github.com/saadpasta/developerFolio)  

[React Reveal](https://www.react-reveal.com/)  

[React Easy Emoji](https://www.npmjs.com/package/react-easy-emoji)  

[gh-pages](https://www.npmjs.com/package/gh-pages)

## Contributors
