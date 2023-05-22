import './ImageArea.css';
import { useState } from 'react';

const ImageArea = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileSelect = (event) => {
        setSelectedFiles([...selectedFiles, ...event.target.files]);
    };

    return (
        <div className="imagefile">
            <input className="inputImg" id="imageUpload" type="file" multiple onChange={handleFileSelect} />
            <button className="inputImgButton" onClick={() => document.getElementById('imageUpload').click()}>
                이미지 첨부
            </button>
            <div className="ImageNames">
                {selectedFiles.map((file, index) => (
                    <p className="ImageName" key={index}>{file.name}</p>
                ))}
            </div>
        </div>
    );
};

export default ImageArea;
