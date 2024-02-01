import React ,{useState}from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Upper case is clicked");
        let newText  = text.toUpperCase();
        setText(newText);
    }
    const handleDownClick = ()=>{
        console.log("lower case is clicked");
        let newText  = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange= (event)=>{
        console.log("Ucked");
        setText(event.target.value);
        setText2(text);
    }
    const copyText = () =>{
        navigator.clipboard.writeText(text);
        alert("Text copied : "+ text);
    }
    const handleUndoChange= (event)=>{
        
        setText(text2);
    }
    
    const[text,setText]=useState('');
    const[text2,setText2]=useState('');
//   setText("yeah boy");
    return (
        <>
        
        <div className='container'>
            
            <form style={{color : props.mode=== 'light' ? 'black' : 'white'}} className="my-3">

                <h2>{props.heading}    </h2>
                <div className="form-group">
                   
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{color : props.mode=== 'light' ? 'black' : 'white' , background:props.mode === 'dark' ? '#10002c' : 'white'}}></textarea>
                </div>
            </form>
          <button disabled={text.length===0}  className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Convert to lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUndoChange}>Original text</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copyText}>Copy to Clipboard</button>
        </div>
        <div className="container my-3" style={{color : props.mode=== 'light' ? 'black' : 'white'}}>
            <h2>Your text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{
                return element.length!==0;
            }).length } Words and {text.length} Characters</p>
            <p>Average person will take {0.008 * text.split(/\s+/).filter((element)=>{
                return element.length!==0;
            }).length } Minutes to read this </p>
            <h2>
                preview
            </h2>
            <p>{text.length>0?text : 'Nothing to preview!'}</p>
        </div>
        </>
    )
}
