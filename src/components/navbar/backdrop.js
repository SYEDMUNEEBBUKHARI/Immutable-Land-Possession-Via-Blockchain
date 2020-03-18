import React from "react";
import "../navbar/backdrop.css";
import {Modal,Button,Form} from "react-bootstrap";

const backdrop=props=>(

    <div className="backdrop" onClick={props.click} />
);

export default backdrop;