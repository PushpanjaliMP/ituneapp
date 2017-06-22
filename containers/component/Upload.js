import React, { Component}  from 'react'
import FileInput from 'react-file-input'
//import Dropzone from 'react-dropzone'
//import {onSubmitFile} from '../../actions/newActions'

class Upload extends Component {


  handlechange(event) {
    const file = event.target.files[0];
    const filename = event.target.files[0].name;

    var fd = new FormData();
    fd.append('file',event.target.files[0]);

    console.log("file upload"+file);
    console.log("file name"+filename);
    this.props.onSubmitFile(filename,fd);
  }

   render() {
   return (
          <form encType="multipart/form-data">
            <FileInput ref="file" name="samplefile" accept=".csv" onChange={this.handlechange.bind(this)}/>
          </form>
     )
   }
 }  

 export default Upload