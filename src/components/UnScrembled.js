import TextField           from '@mui/material/TextField';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ContentPasteIcon    from '@mui/icons-material/ContentPaste';

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
						<ContentPasteIcon color={copiedUnScrembled ? "success" : "action"} fontSize="large">
							{/*{copiedUnScrembled ? "Copied to Clipboard!" : "Copy to Clipboard"}*/}
						</ContentPasteIcon>
					</CopyToClipboard>
			}
		</div>
	);
}
