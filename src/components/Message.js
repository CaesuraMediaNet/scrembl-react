import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import HttpsIcon from '@mui/icons-material/Https';

export default function Message ({messageInputRef, scremble}) {
	return (
			<div style={{ marginBottom : "50px"}}>
				<Form>
					<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
						<Form.Label>Type message to be Scrembled here</Form.Label>
						<Form.Control ref={messageInputRef} as="textarea" rows={5} />
					</Form.Group>
				</Form>
				<Button
          onClick={() => scremble()}
					variant="primary"
				>
					<HttpsIcon /> Scrembl
				</Button>
      </div>
	);
}
