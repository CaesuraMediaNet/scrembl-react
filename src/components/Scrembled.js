import TextField           from '@mui/material/TextField';
import Button              from '@mui/material/Button';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import NoEncryptionGmailerrorredIcon from '@mui/icons-material/NoEncryptionGmailerrorred';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

export default function Scrembled ({
	scrembledInputRef,
	unscremble,
	copyScrembledToClipboard,
	setCopiedScrembled,
	copiedScrembled
	})
{
	return (
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
				startIcon={<NoEncryptionGmailerrorredIcon />}
				variant="outlined"
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
						<ContentPasteIcon color={copiedScrembled ? "success" : "action"} fontSize="large">
							{/*{copiedScrembled ? "Copied to Clipboard!" : "Copy to Clipboard"} */}
						</ContentPasteIcon>
					</CopyToClipboard>
			}
		</div>
	);
}
