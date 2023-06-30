import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NoEncryptionGmailerrorredIcon from '@mui/icons-material/NoEncryptionGmailerrorred';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

export default function Scrembled ({
   scrembledInputRef,
   unscremble,
   copyScrembledToClipboard,
   setCopiedScrembled,
   copiedScrembled})
{
   return (
      <div style={{ marginBottom : "50px"}}>
         <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
               <Form.Label>Scrembled message here</Form.Label>
               <Form.Control ref={scrembledInputRef} as="textarea" rows={5} />
            </Form.Group>
         </Form>
         <Button
            onClick={() => unscremble()}
            variant="primary"
         >
            <NoEncryptionGmailerrorredIcon /> UnScrembl
         </Button>
         {
            copyScrembledToClipboard &&
               <CopyToClipboard
                  className="ms-3"
                  text={scrembledInputRef.current.value}
                  onCopy={() => setCopiedScrembled (true)}
               >
                  <Button variant={copiedScrembled ? "success" : "primary"}>
                     <ContentPasteIcon /> Copy
                  </Button>
               </CopyToClipboard>
         }
      </div>
   );
}
