import './ImageArea.css';
import {useState} from "react";

const ImageArea = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileSelect = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    return (
        <div className={"imagefile"}>
            <input className="inputImg" id="imageUpload" type="file" onChange={handleFileSelect} />
            <button className="inputImgButton" onClick={() => document.getElementById('imageUpload').click()}>
                이미지 첨부
            </button>
            <div className="ImageName">
            {selectedFile && (
                <p>{selectedFile.name}</p>
            )}
            </div>
        </div>
    )
}
export default ImageArea;