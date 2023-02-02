import {
	useRef,
	useState
}                          from 'react';
import Button              from '@mui/material/Button';
import HelpModal           from './components/HelpModal.js';
import Message             from './components/Message.js';
import Scrembled           from './components/Scrembled.js';
import UnScrembled         from './components/UnScrembled.js';
import DeleteOutlineIcon   from '@mui/icons-material/DeleteOutline';
import './App.css';

function App() {

	const messageInputRef                                             = useRef (null);
	const scrembledInputRef                                           = useRef (null);
	const unScrembledInputRef                                         = useRef (null);

	const [copyScrembledToClipboard, setCopyScrembledToClipboard]     = useState (false);
	const [copyUnScrembledToClipboard, setCopyUnScrembledToClipboard] = useState (false);
	const [copiedScrembled, setCopiedScrembled]                       = useState (false);
	const [copiedUnScrembled, setCopiedUnScrembled]                   = useState (false);

	const scremble = () => {
		const is_scrembled = "%" + messageInputRef.current.value + "%";
		scrembledInputRef.current.value = is_scrembled;
		scrembledInputRef.current.focus();
		setCopyScrembledToClipboard (true);
  };

	const unscremble = () => {
		const is_unscrembled = scrembledInputRef.current.value.replace (/%/g, '');
		unScrembledInputRef.current.value = is_unscrembled;
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
				<DeleteOutlineIcon color="action" fontSize="large" onClick={() => clearText()}></DeleteOutlineIcon>
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
