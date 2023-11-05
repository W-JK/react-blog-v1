import "./post.css"
import postImg from "../images/Wirtualne serce.JPG"

export default function Post() {
  return (
    <div className="post">
        <img 
            className="postImg"
            src={postImg}
            alt="post background"
        
        
        />

        <div className="postInfo">

            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>

            </div>
            <span className="postTitle"> Lorem Poleum Ipsum</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
            
        </div>
        <p className="postDesc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Impedit alias delectus, magnam aliquid possimus asperiores esse reprehenderit maxime illo cumque aliquam hic labore non necessitatibus nam saepe, facere explicabo nemo.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed fugit libero voluptates sequi porro delectus eligendi odit eos rem, suscipit quos.
             Cum quod nihil consequatur perferendis error voluptate reprehenderit sapiente!
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
             Animi perferendis aperiam nam officia possimus labore aliquam fugit deserunt veritatis doloremque non praesentium ipsa nemo nulla maiores vitae, necessitatibus impedit debitis!
        </p>




    </div>
  )
}
