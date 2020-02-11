import {asyncReplace} from 'lit-html/directives/async-replace.js';
import { render, html } from "lit-html";



render(html`
  Count: <span>${asyncReplace()}</span>.
`, document.body);

