import type { App } from "vue";



/**
 * Installs the welcome plugin for the interview app.
 *
 * @param {string} text - The text to be logged to the console.
 * @return {{ install: (app: App) => void }} An object containing the install method.
 */
export const welcomePlugin = (text: string) => {
  return {
    install: (app: App) => {
      console.log(text);
    },
  };
}
