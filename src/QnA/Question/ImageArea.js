import './ImageArea.css';
import { useState } from 'react';

const ImageArea = ({onFileSelect}) => {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileSelect = (event) => {
        const files = event.target.files;
        setSelectedFiles([...selectedFiles, ...files]);
        onFileSelect([...selectedFiles, ...files]);
    };

    return (
        <div className="imagefile">
            <input className="inputImg" id="imageUpload" accept='image/*' type="file" multiple onChange={handleFileSelect} />
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
