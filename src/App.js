import {
	useRef,
	useState
}                          from 'react';
import TextField           from '@mui/material/TextField';
import Button              from '@mui/material/Button';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import HelpModal           from './components/HelpModal.js';
import './App.css';

function App() {

	const messageInputRef                         = useRef(null);
	const scrembledInputRef                       = useRef(null);
	const unScrembledInputRef                     = useRef(null);

	const [copyScrembledToClipboard, setCopyScrembledToClipboard]     = useState (false);
	const [copyUnScrembledToClipboard, setCopyUnScrembledToClipboard] = useState (false);
	const [copiedScrembled, setCopiedScrembled]                        = useState (false);
	const [copiedUnScrembled, setCopiedUnScrembled]                    = useState (false);

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
			<h1>Scremble - Obfusticate messages</h1>

			<Button
				variant="contained"
				onClick={() => clearText()}
			>
				Clear
			</Button>

			<HelpModal />

			<div style={{ marginBottom : "50px"}}>
				<div>
					<TextField
							InputLabelProps={{ shrink: true }}
							inputRef={messageInputRef}
							id="standard-textarea"
							label="Type message to be Scrembled here"
							multiline
							variant="standard"
							color="success"
							style={{width : "70%"}}
					/>
				</div>
				<Button
					variant="contained"
					onClick={() => scremble()}
				>
					Scrembl
				</Button>
			</div>
			<div style={{ marginBottom : "50px"}}>
				<div>
					<TextField
							InputLabelProps={{ shrink: true }}
							inputRef={scrembledInputRef}
							id="standard-textarea"
							label="Scrembled message here"
							multiline
							variant="standard"
							color="success"
							style={{width : "70%"}}
					/>
				</div>
				<Button
					variant="contained"
					onClick={() => unscremble()}
				>
					UnScrembl
				</Button>
				{
					copyScrembledToClipboard &&
						<CopyToClipboard
							text={scrembledInputRef.current.value}
							onCopy={() => setCopiedScrembled (true)}
						>
							<Button variant="contained">
								{copiedScrembled ? "Copied to Clipboard!" : "Copy to Clipboard"}
							</Button>
						</CopyToClipboard>
				}
			</div>
			<div>
				<div>
					<TextField
							InputLabelProps={{ shrink: true }}
							inputRef={unScrembledInputRef}
							id="standard-textarea"
							label="UnScrembled message here"
							multiline
							variant="standard"
							color="success"
							style={{width : "70%"}}
					/>
				</div>
				{
					copyUnScrembledToClipboard &&
						<CopyToClipboard
							text={unScrembledInputRef.current.value}
							onCopy={() => setCopiedUnScrembled (true)}
						>
							<Button variant="contained">
								{copiedUnScrembled ? "Copied to Clipboard!" : "Copy to Clipboard"}
							</Button>
						</CopyToClipboard>
				}
			</div>
    </div>
  );
}

export default App;
