### Prerequisiste:

You should have **Node >= 8.10** on your local development machine (but it’s not required on the server).

<hr/>

If you use **npm 5.1 or earlier**:

```
npm install -g create-react-app
create-react-app my-app
```

<hr/>

If you use **npm 5.2+ or higher**:

```
npm uninstall -g create-react-app // Do this if you have previously installed "create-react-app" globally
// Now you can use choose EITHER npm or yarn
npx create-react-app my-app --use-npm // If you want to use npm
npx create-react-app my-app --use-yarn // Or if you want to use yarn
```

If you want to use any **template**:

```
npx create-react-app my-app --template [template-name]
```

**For example:**

```
npx create-react-app my-app --template typescript
```

You can find many templates [here](https://www.npmjs.com/search?q=cra-template-*).

<hr/>

After success, you will see a message:

> Success! Created my-app at /home/thor/Documents/Work/Personal/React/my-app
> Inside that directory, you can run several commands.

As it suggests, you can do:

```
cd my-app
yarn start // or "npm start"
```

[Read more](https://create-react-app.dev/docs/getting-started/).
