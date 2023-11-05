import "./singlePost.css";
import postImg from "../images/Wirtualne serce.JPG"

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img src={postImg} alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">
            Wirtualne Serce
            <div className="singlePostEdit">
               <i className="singlePostIcon far fa-edit"> </i>
               <i className="singlePostIcon far fa-trash-alt"> </i>
            </div>
        
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor"> Author: <b>Szafak</b></span>
            <span className="singlePostDate"> 1 hour Ago... </span>
        </div>

        <p className="singlePostDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, neque. 
            Blanditiis, facilis commodi laboriosam itaque magnam quam sed deleniti 
            et dicta obcaecati excepturi eveniet, provident nemo voluptatibus fugiat doloremque accusamus.
            
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, neque. 
            Blanditiis, facilis commodi laboriosam itaque magnam quam sed deleniti 
            et dicta obcaecati excepturi eveniet, provident nemo voluptatibus fugiat doloremque accusamus.
        
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, neque. 
            Blanditiis, facilis commodi laboriosam itaque magnam quam sed deleniti 
            et dicta obcaecati excepturi eveniet, provident nemo voluptatibus fugiat doloremque accusamus.
        
        
        </p>
    
      </div>  
        
    </div>
  )
}
