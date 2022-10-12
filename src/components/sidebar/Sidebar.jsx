import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className='sidebar'>
       <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="sidebarImg" src="https://media.istockphoto.com/photos/young-afroamerican-worker-using-adjustable-wrench-on-pipe-at-factory-picture-id1281720176?k=20&m=1281720176&s=612x612&w=0&h=nSUqKa7epmc0-fb5WT0WJRWzTh0mHmPbqQil9RA2uQs=" alt="" />
         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex et aspernatur modi voluptatem quisquam velit eum fugia
            t? Doloribus officia eaque veniam quos reiciendis aut id?</p>
       </div>
       <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
            <li className="sidebarListItem">Tourism</li>
        </ul>
       </div>

       <div className="sidebarItem">
         <span className="sidebarTitle">FOLLOW US</span>
         <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-whatsapp"></i>
            <i className="sidebarIcon fa-brands fa-instagram"></i>
            <i className="sidebarIcon fa-brands fa-twitter"></i>
         </div>

       </div>
    </div>
  )
}
