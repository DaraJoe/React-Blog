import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
     <div className="singlePostWrapper">
        <img className="singlePostImg" src="https://plus.unsplash.com/premium_photo-1663091731167-5193c0de68c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet.
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>DaraJoe</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora autem a soluta suscipit voluptates, vitae sunt consequuntur ad id porro similique ab? Nemo omnis error ipsa amet repellat explicabo animi libero expedita autem ut velit 
            ab praesentium esse necessitatibus, blanditiis tempore, maxime vel facere molestiae nam dolore qui voluptate in?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora autem a soluta suscipit voluptates, vitae sunt consequuntur ad id porro similique ab? Nemo omnis error ipsa amet repellat explicabo animi libero expedita autem ut velit 
            ab praesentium esse necessitatibus, blanditiis tempore, maxime vel facere molestiae nam dolore qui voluptate in?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora autem a soluta suscipit voluptates, vitae sunt consequuntur ad id porro similique ab? Nemo omnis error ipsa amet repellat explicabo animi libero expedita autem ut velit 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora autem a soluta suscipit voluptates, vitae sunt consequuntur ad id porro similique ab? Nemo omnis error ipsa amet repellat explicabo animi libero expedita autem ut velit 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora autem a soluta suscipit voluptates, vitae sunt consequuntur ad id porro similique ab? Nemo omnis error ipsa amet repellat explicabo animi libero expedita autem ut velit 
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora autem a soluta suscipit voluptates, vitae sunt consequuntur ad id porro similique ab? Nemo omnis error ipsa amet repellat explicabo animi libero expedita autem ut velit 
            ab praesentium esse necessitatibus, blanditiis tempore, maxime vel facere molestiae nam dolore qui voluptate in?
            </p>
     </div>
    </div>
  )
}
