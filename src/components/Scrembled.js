import TextField           from '@mui/material/TextField';
import Button              from '@mui/material/Button';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
	);
}
