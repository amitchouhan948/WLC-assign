import logo from './logo.svg';
import './App.css';
import { ReactOneDriveFilePicker } from 'react-onedrive-filepicker/lib';
import { useState } from 'react';
import { Button, Link, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { ExternalLinkIcon } from '@chakra-ui/icons'
function App() {

  const [x,setX]=useState("");

  const navigate=useNavigate()

  return (
    <>
    <ReactOneDriveFilePicker
        clientID="c3e71009-3dd7-4fc8-9127-2de5ac14c89f"
        action="share"
        multiSelect={true}
        onSuccess={(share) => {

        console.log(share.value[0].webUrl);
         setX(share.value[0].webUrl);
         
        }}
        onCancel={(result) => {
          console.log(result)
        }}
      >
        <Button display="block" width="200px" m="auto" mt="100px">File Picker</Button>
        <br/>
        <Link href={x} isExternal={true}><Text textAlign={"center"} width="25%" m="auto">{x}<ExternalLinkIcon mx='2px' /></Text></Link>
      </ReactOneDriveFilePicker>
      </>
  );
}

export default App;
