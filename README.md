####WebMIDI API Shim

At the moment only Chrome and Opera support the [WebMIDI API](https://www.w3.org/TR/webmidi/). It isn't very likely that other browser will implement it any time soon. Fortunately the [Jazz plugin](http://jazz-soft.net) is available for all browsers and platforms, and by using the plugin together with this shim you can use the WebMIDI API as if it were implemented natively.

This module is based on the code of Chris Wilson's [WebMIDIAPIShim](https://github.com/cwilso/WebMIDIAPIShim). The code is actually a combination of a shim and a polyfill: as a polyfill it implements the WebMIDI API in browsers that don't support it natively, and as a shim it intercepts calls from and to the Jazz plugin.

The code is adapted to make it easy to import it as a module in your es next projects:


```javascript
import 'webmidiapishim'

navigator.requestMIDIAccess()
.then(midiAccess => {
  /*
    midiAccessis is an instance of the native class MIDIAccess if the browser has WebMIDI implemented,
    or an custom class that mimics the behaviour of MIDIAccess using the Jazz MIDI plugin
  */
  let inputs = midiAccess.inputs.values()
  let outputs = midiAccess.outputs.values()
}, error => console.log(error))
```

Alternately, you can add the shim as a separate UMD module by embedding it in your html:

```html

<script src="/path/to/webmidiapishim-umd.min.js"></script>

```

Note that there is also an npm module called [web-midi-api](https://www.npmjs.com/package/web-midi-api) which is maintained by the creator of the Jazz plugin. That module is meant for Node.js projects: it won't work in browser projects.