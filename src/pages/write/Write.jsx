import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img src="https://media.istockphoto.com/photos/teach-inspire-motivate-empower-text-words-typography-written-on-paper-picture-id1297518021?b=1&k=20&m=1297518021&s=170667a&w=0&h=11xEKcvvUrLACQOZpRd6LrQwvLbQcKdCay3RuwrtjGw=" alt="" className="writeImg" />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
        </div>
        <div className="writeFormGroup">
            <textarea placeholder="Tell your story..." className="writeInput writeText"></textarea>
        </div>
        <button className="writeButton">Publish</button>
      </form>
    </div>
  )
}
