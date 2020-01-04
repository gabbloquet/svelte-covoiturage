# Une solution de micro-covoiturage adaptée pour les grandes entreprises

Chacun enregistrerait sur un site web ou une application mobile son trajet régulier entre son lieu de travail et son domicile. Chaque jour, un peu avant d’effectuer son trajet aller ou retour ( 10 à 30 minutes avant ? ) on valide l’horaire de départ prévu. Un site web / appli mobile et un écran dans le hall de l’établissement récapitulent les départs proches avec la destination à la manière d’un affichage de gare ou d’aéroport, et les gens intéressés pourraient l’indiquer et rejoindre le conducteur à un point de rendez-vous prévu.

Idée trouvée sur Medium -> [Source](https://medium.com/@vincentbaudry/8-id%C3%A9es-dapplications-que-j-ai-la-flemme-de-r%C3%A9aliser-mais-que-j-aimerai-utiliser-4cb45719f3c7)  
Merci Vincent Baudry :D

---

# svelte app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.


## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```


## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
cd public
now deploy --name my-project
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
