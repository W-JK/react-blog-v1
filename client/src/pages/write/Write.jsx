import '../write/write.css'
import EditImage from '../../components/images/CoffeCake.JPG'

export default function Write() {
  return (
    <div className='write'>

        <img 
            className='writeImg'
            src={EditImage}
            
        />
        
        <form className='writeForm'>
        
            <div className='writeFormGroup'>
                <label htmlFor='fileInput'> 
                <i className='writeIcon fas fa-plus'></i> 
                </label>

                <input type='file' id='fileInput' style={{display:"none"}}/>
                <input type='text' placeholder='Title' className='writeInput' autoFocus={true} ></input>

            
            </div>

            <div className="writeFormGroup">
                <textarea type='text' placeholder='Tell your story ...' className='writeInput writeText'>

                </textarea>
            </div>

            <button className="writeSubmit"> Publish </button>

        </form>
    </div>
  )
}
