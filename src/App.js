import 'bootstrap/dist/css/bootstrap.min.css';
import {
   useRef,
   useState
}                          from 'react';
import HelpModal           from './components/HelpModal.js';
import Message             from './components/Message.js';
import Scrembled           from './components/Scrembled.js';
import UnScrembled         from './components/UnScrembled.js';
import DeleteOutlineIcon   from '@mui/icons-material/DeleteOutline';
import Button              from 'react-bootstrap/Button';
import { Base64 }          from 'js-base64';

function App() {

   const messageInputRef                                             = useRef (null);
   const scrembledInputRef                                           = useRef (null);
   const unScrembledInputRef                                         = useRef (null);

   const [copyScrembledToClipboard, setCopyScrembledToClipboard]     = useState (false);
   const [copyUnScrembledToClipboard, setCopyUnScrembledToClipboard] = useState (false);
   const [copiedScrembled, setCopiedScrembled]                       = useState (false);
   const [copiedUnScrembled, setCopiedUnScrembled]                   = useState (false);

   var now         = new Date();
   var epochOffset = Math.floor(now/8.64e7) - 19000;
   var hex         = epochOffset.toString(16)
   var hexArr      = hex.split ('');
   var base64      = Base64.encode(hex);

   const scremble = () => {
      var chars       = messageInputRef.current.value.split('');
      var output_text = "^";
      var offset      = 0;
      for (var i=0; i < chars.length; i++) {
         switch (i) {
            case 0  : offset = parseInt (hexArr[0], 16); //eslint-no-fallthrough
            case 1  : offset = parseInt (hexArr[1], 16); //eslint-no-fallthrough
            case 2  : offset = parseInt (hexArr[2], 16); //eslint-no-fallthrough
            case 3  : offset = parseInt (hexArr[3], 16); //eslint-no-fallthrough
            default : offset = 0;
         }
         var asci = (parseInt (offset + messageInputRef.current.value.charCodeAt(i))
            + parseInt (epochOffset)).toString(16);
         output_text += asci + "%";
      }
      output_text = output_text.replace (/%$/, '$') + base64;
      scrembledInputRef.current.value = output_text;
      scrembledInputRef.current.focus();
      setCopyScrembledToClipboard (true);
   };

   const unscremble = () => {
      var enc_base64      = scrembledInputRef.current.value.replace(/^.*\$/, '');
      var output_text = "";
      if (enc_base64 !== base64) {
         output_text = "Out of date Scrembl, sorry!";
      } else {
         var asciis      = scrembledInputRef.current.value.replace(/^\^/, '').replace(/\$.+$/, '').split('%');
         var offset      = 0;
         for (var i=0; i < asciis.length; i++) {
            switch (i) {
               case 0  : offset = parseInt (hexArr[0], 16); //eslint-no-fallthrough
               case 1  : offset = parseInt (hexArr[1], 16); //eslint-no-fallthrough
               case 2  : offset = parseInt (hexArr[2], 16); //eslint-no-fallthrough
               case 3  : offset = parseInt (hexArr[3], 16); //eslint-no-fallthrough
               default : offset = 0;
            }
            var ch = String.fromCharCode((parseInt (asciis[i], 16) - offset - parseInt (epochOffset)));
            if (!ch.match(/^[\P{Cc}\P{Cn}\P{Cs}]+$/gu)) {
               output_text = "Out of date Scrembl, sorry!";
               break;
            }
            output_text += ch;
         }
      }
      unScrembledInputRef.current.value = output_text;
      unScrembledInputRef.current.focus();
      setCopyUnScrembledToClipboard (true);
   };

   const clearText = () => {
      messageInputRef.current.value     = '';
      unScrembledInputRef.current.value = '';
      scrembledInputRef.current.value   = '';
      setCopiedScrembled                (false);
      setCopiedUnScrembled              (false);
      setCopyScrembledToClipboard       (false);
      setCopyUnScrembledToClipboard     (false);
   }

   return (
      <div style={{width : "70%", margin : "10%"}} >
         <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
            <h1>Scremble - Obfusticate messages</h1>
            <Button onClick={() => clearText()} variant="primary">
               <DeleteOutlineIcon /> Clear
            </Button>
            <HelpModal />
         </div>

         <Message 
            messageInputRef={messageInputRef}
            scremble={scremble}
         />

         <Scrembled
              scrembledInputRef={scrembledInputRef}
               unscremble={unscremble}
               copyScrembledToClipboard={copyScrembledToClipboard}
               setCopiedScrembled={setCopiedScrembled}
               copiedScrembled={copiedScrembled}
         />

         <UnScrembled
            unScrembledInputRef={unScrembledInputRef}
            copyUnScrembledToClipboard={copyUnScrembledToClipboard}
            setCopiedUnScrembled={setCopiedUnScrembled}
            copiedUnScrembled={copiedUnScrembled}
         />

         <footer>
            <a
               target="_blank"
               rel="noopener noreferrer"
               href="https://www.scrembl.com/privacy-notice.html"
            >
               Privacy Notice
            </a>
         </footer>
    </div>
  );
}
export default App;
