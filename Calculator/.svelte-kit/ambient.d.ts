
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const HOME: string;
	export const LANG: string;
	export const LOGNAME: string;
	export const PATH: string;
	export const SHELL: string;
	export const SYSTEMD_SLEEP_FREEZE_USER_SESSIONS: string;
	export const USER: string;
	export const XDG_DATA_DIRS: string;
	export const XDG_RUNTIME_DIR: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const DEBUGINFOD_IMA_CERT_PATH: string;
	export const DEBUGINFOD_URLS: string;
	export const DESKTOP_SESSION: string;
	export const EDITOR: string;
	export const GDMSESSION: string;
	export const GDM_LANG: string;
	export const GPG_TTY: string;
	export const HISTCONTROL: string;
	export const HISTSIZE: string;
	export const HOSTNAME: string;
	export const KDEDIRS: string;
	export const LESSOPEN: string;
	export const MAIL: string;
	export const PWD: string;
	export const QT_IM_MODULE: string;
	export const SESSION_MANAGER: string;
	export const SHLVL: string;
	export const SSH_ASKPASS: string;
	export const SSH_AUTH_SOCK: string;
	export const USERNAME: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const XDG_MENU_PREFIX: string;
	export const XDG_SESSION_CLASS: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XDG_SESSION_TYPE: string;
	export const XMODIFIERS: string;
	export const MANAGERPID: string;
	export const INVOCATION_ID: string;
	export const JOURNAL_STREAM: string;
	export const SYSTEMD_EXEC_PID: string;
	export const MEMORY_PRESSURE_WATCH: string;
	export const MEMORY_PRESSURE_WRITE: string;
	export const GJS_DEBUG_OUTPUT: string;
	export const GJS_DEBUG_TOPICS: string;
	export const GNOME_SETUP_DISPLAY: string;
	export const DISPLAY: string;
	export const XAUTHORITY: string;
	export const WAYLAND_DISPLAY: string;
	export const GIO_LAUNCHED_DESKTOP_FILE: string;
	export const XDG_ACTIVATION_TOKEN: string;
	export const GIO_LAUNCHED_DESKTOP_FILE_PID: string;
	export const SSL_CERT_FILE: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		HOME: string;
		LANG: string;
		LOGNAME: string;
		PATH: string;
		SHELL: string;
		SYSTEMD_SLEEP_FREEZE_USER_SESSIONS: string;
		USER: string;
		XDG_DATA_DIRS: string;
		XDG_RUNTIME_DIR: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		DEBUGINFOD_IMA_CERT_PATH: string;
		DEBUGINFOD_URLS: string;
		DESKTOP_SESSION: string;
		EDITOR: string;
		GDMSESSION: string;
		GDM_LANG: string;
		GPG_TTY: string;
		HISTCONTROL: string;
		HISTSIZE: string;
		HOSTNAME: string;
		KDEDIRS: string;
		LESSOPEN: string;
		MAIL: string;
		PWD: string;
		QT_IM_MODULE: string;
		SESSION_MANAGER: string;
		SHLVL: string;
		SSH_ASKPASS: string;
		SSH_AUTH_SOCK: string;
		USERNAME: string;
		XDG_CURRENT_DESKTOP: string;
		XDG_MENU_PREFIX: string;
		XDG_SESSION_CLASS: string;
		XDG_SESSION_DESKTOP: string;
		XDG_SESSION_TYPE: string;
		XMODIFIERS: string;
		MANAGERPID: string;
		INVOCATION_ID: string;
		JOURNAL_STREAM: string;
		SYSTEMD_EXEC_PID: string;
		MEMORY_PRESSURE_WATCH: string;
		MEMORY_PRESSURE_WRITE: string;
		GJS_DEBUG_OUTPUT: string;
		GJS_DEBUG_TOPICS: string;
		GNOME_SETUP_DISPLAY: string;
		DISPLAY: string;
		XAUTHORITY: string;
		WAYLAND_DISPLAY: string;
		GIO_LAUNCHED_DESKTOP_FILE: string;
		XDG_ACTIVATION_TOKEN: string;
		GIO_LAUNCHED_DESKTOP_FILE_PID: string;
		SSL_CERT_FILE: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
