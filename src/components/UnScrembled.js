import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
         <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
               <Form.Label>UnScrembled message here</Form.Label>
               <Form.Control ref={unScrembledInputRef} as="textarea" rows={5} />
            </Form.Group>
         </Form>
         {copyUnScrembledToClipboard &&
            <CopyToClipboard
               text={unScrembledInputRef.current.value}
               onCopy={() => setCopiedUnScrembled (true)}
            >
               <Button variant={copiedUnScrembled ? "success" : "primary"}>
                  <ContentPasteIcon /> Copy
               </Button>
            </CopyToClipboard>
         }
      </div>
   );
}
