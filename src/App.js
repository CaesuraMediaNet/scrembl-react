import { useRef, useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {

	const messageInputRef                         = useRef(null);
	const scrembledInputRef                       = useRef(null);
	const unScrembledInputRef                     = useRef(null);

	const scremble = () => {
		const is_scrembled = "%" + messageInputRef.current.value + "%";
		scrembledInputRef.current.value = is_scrembled;
		scrembledInputRef.current.focus();
  };

	const unscremble = () => {
		const is_unscrembled = scrembledInputRef.current.value.replace (/%/g, '');
		unScrembledInputRef.current.value = is_unscrembled;
		unScrembledInputRef.current.focus();
  };

  return (
    <div style={{width : "70%", margin : "10%"}} >
			<h1>Scremble - Obfusticate messages</h1>
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
			</div>
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
    </div>
  );
}

export default App;
