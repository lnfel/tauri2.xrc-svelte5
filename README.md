# [tauri] Javascript Logical OR operator throws SyntaxError Repro

To run this repro, follow the commands below:

```sh
# clone the repo to local machine
git clone https://github.com/lnfel/tauri2.xrc-svelte5.git
# cd into project
cd tauri2.xrc-svelte5
# install dependencies
pnpm i
# build sveltekit, tauri uses the build directory as the frontendDist
pnpm build
# run tauri with front-end
pnpm tauri dev
```

After running tauri, the window should appear with nothing being displayed, this is due to a Syntax Error within tauri/wry/tao (or something that tries to validate javascript syntax). Open the console window console by pressing the key shortcut:

```sh
# on macOS
alt + cmd + i
# on windows
ctrl + shift + i
```

The error is shown to occur on the line where `||=` is located, this is a valid Javascript operator, but for some reason, tauri deems it as not valid:

```js
await (pending_invalidate ||= Promise.resolve());
```

We can override the local code and change it to something like:

```js
pending_invalidate = pending_invalidate || Promise.resolve();
```
And the tauri app window should update with our greeting component, the functionality also works.
