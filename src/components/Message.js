import TextField           from '@mui/material/TextField';
import Button              from '@mui/material/Button';

export default function Message ({messageInputRef, scremble}) {
	return (
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
	);
}
