import {renderToString} from "react-dom/server";
import App from "./App";
import { renderToString } from "react-dom/server";
import html from "./ssrHtml";

/**
 * Server-side rendering
 */
export default async function render(_event) {
    const content = renderToString(
        <App />
    );
    return html({content});
}