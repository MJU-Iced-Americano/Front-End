import './TestArea.css';


const TextArea = (setTitle, setContent, title, content) => {

    return (
        <div className={"Text"}>
            <input
                //onChange={(e) => {
                //    setTitle(e.target.value)
                //}}
                className="title"
                placeholder="제목을 입력해주세요"
                value={title}
            />

            <textarea
                //onChange={(e) => {
                //    setContent(e.target.value)
                //}}
                cols="30"
                className="text"
                placeholder="내용을 입력해주세요"
                value={content}
            />
        </div>
    )
}
export default TextArea