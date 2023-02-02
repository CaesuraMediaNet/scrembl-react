import TextField           from '@mui/material/TextField';
import Button              from '@mui/material/Button';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function UnScrembled ({
	unScrembledInputRef,
	copyUnScrembledToClipboard,
	setCopiedUnScrembled,
	copiedUnScrembled
}) {
	return (
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
	);
}
