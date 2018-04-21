# DEPRECATED!

Please use [JZZ](https://github.com/jazz-soft/JZZ) to enable MIDI in browsers that do not support the WebMIDI API.


#### WebMIDI API Shim

At the moment only Chrome and Opera support the [WebMIDI API](https://www.w3.org/TR/webmidi/). It isn't very likely that other browsers will implement it any time soon. Fortunately the [Jazz plugin](http://jazz-soft.net) is available for all browsers and platforms, and by using this plugin together with the shim you can use the WebMIDI API as if it were implemented natively.

This module is based on the code of Chris Wilson's [WebMIDIAPIShim](https://github.com/cwilso/WebMIDIAPIShim). The code is actually a combination of a shim and a polyfill: as a polyfill it implements the WebMIDI API in browsers that don't support it natively, and as a shim it intercepts calls from and to the Jazz plugin.

The code is adapted to make it easy to import as a module in your es next projects:


```javascript
import 'webmidiapishim'

navigator.requestMIDIAccess()
.then(midiAccess => {
  /*
    If the browser supports WebMIDI, midiAccess is an instance of the native
    class MIDIAccess. If not, it is an instance of a custom class that mimics the
    behavior of MIDIAccess by using the Jazz plugin
  */
  let inputs = midiAccess.inputs
  let outputs = midiAccess.outputs

}, error => console.log(error))
```
&nbsp;
&nbsp;
Alternately, you can add the shim as a separate UMD module by embedding it in the html before your application code:


```html
<script src="/path/to/webmidiapishim-umd.min.js"></script>
<script src="/path/to/your-midi-app.min.js"></script>
```
You can find the file `webmidiapishim-umd.min.js` in the `/dist` folder. There is also an unminified version in that folder.


##### web-midi-api

Another npm module called [web-midi-api](https://www.npmjs.com/package/web-midi-api) is also based on the WebMIDIAPIShim. This module is maintained by the creator of the Jazz plugin. Note that web-midi-api is meant for Node.js projects: it won't work in browser projects.
