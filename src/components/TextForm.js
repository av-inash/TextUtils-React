import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked"+text)     // only for debugging kaam kr rha hai ki nahi
        let newText=text.toUpperCase();

        setText(newText )
        props.showAlert("Converted to UpperCase!","success")
    }
    const handleLoClick=()=>{
        // console.log("Uppercase was clicked"+text)     // only for debugging kaam kr rha hai ki nahi
        let newText=text.toLowerCase();

        setText(newText )
        props.showAlert("Converted to LowerCase!","success")
    }
    const handleClear=()=>{
        
        let newText=' ';

        setText(newText )
    }
    const handleOnChange=(event)=>{
        // console.log("On change")
        setText(event.target.value)
        props.showAlert("Textarea is cleared!","success")
        
    }
    const handleOnCopy=()=>{
        let text =document.getElementById("myBox");      // copy text
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!","success")
    }
    const handleExtraSpace =()=>{
        let newText =text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra space has been removed!","success")
    }
    const [text,setText]=useState("");
    // text ="new text"; // wrong way to change the state
    // setText("new text");
    
  return (
    <>
    <div className="container"style={{color:props.mode==='dark'?'white':'#1f3b67'}} >
  <h1>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#1f3b67'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>
<button className="btn btn-primary mx-2" onClick={handleOnCopy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
      
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#1f3b67'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} word and {text.length}characters</p>
        <p>{0.008 * text.split("").length}Minute to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
