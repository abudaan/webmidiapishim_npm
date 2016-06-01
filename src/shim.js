/*
  main entry point
*/
//import {createMIDIAccess, closeAllMIDIInputs} from './midi_access'
//import {polyfill, getDevice} from './util'
import {createMIDIAccess} from './midi_access'
import {MIDIInput} from './midi_input'
import {MIDIOutput} from './midi_output'
import {MIDIMessageEvent} from './midimessage_event'


(function initShim(){

  if(typeof navigator.requestMIDIAccess === 'undefined'){

    global.MIDIInput = MIDIInput
    global.MIDIOutput = MIDIOutput
    global.MIDIMessageEvent = MIDIMessageEvent

    //polyfill()

    navigator.requestMIDIAccess = function(){
      console.log('webmidiapishim', navigator.requestMIDIAccess)
      return createMIDIAccess()
    }
/*
    if(getDevice().nodejs === true){
      navigator.close = function(){
        // Need to close MIDI input ports, otherwise Node.js will wait for MIDI input forever.
        closeAllMIDIInputs()
      }
    }
*/
  }
}())
