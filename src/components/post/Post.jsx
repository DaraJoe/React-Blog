import "./post.css"
import { Link } from "react-router-dom"

export default function Post() {
  return (
    <div className="post">
      <img className="postImg" src="https://media.istockphoto.com/photos/happy-group-of-employees-at-a-manufacturing-factory-standing-in-a-row-picture-id1198042444?k=20&m=1198042444&s=612x612&w=0&h=pTQ4ZPyq8nAAfgRTflhnlaFuI5r44iobmj-z7pP4Pd4=" alt="" />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
           <Link className="link" to="/singlePost">Lorem ipsum dolor sit amet consectetur.</Link> 
        </span>
        <hr />
        <span className="postDate">1hour ago</span>
      </div> 
      <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Porro officia, repudiandae quae hic exercitationem alias numquam, harum accusamus, perferendis delectus ratione mollitia saepe! Perspiciatis doloribus dolore repellat modi aliquam, sequi voluptate rerum ipsa, recusandae, nihil quia dolores quis earum tempora voluptatibus temporibus.
         Natus quae perferendis culpa voluptas tempora impedit est!
         Natus quae perferendis culpa voluptas tempora impedit est!
         Natus quae perferendis culpa voluptas tempora impedit est!
         Natus quae perferendis culpa voluptas tempora impedit est!
      </p>
    </div>
  )
}
