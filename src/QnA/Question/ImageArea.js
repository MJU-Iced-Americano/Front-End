import './ImageArea.css';
import {useState} from "react";

const ImageArea = () => {

    const [imageSrc, setImageSrc]: any = useState(null);

    const onUpload = (e: any) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        return new Promise((resolve) => {
            reader.onload = () => {
                setImageSrc(reader.result || null); // 파일의 컨텐츠
                resolve();
            };
        });
    }

    return (
        <div className={"imagefile"}>
            <input
                accept="image/*"
                multiple type="file"
                onChange={e => onUpload(e)}
            />
            <img className = {"QnAImg"}
                 width={'100%'}
                 src={imageSrc}
            />

        </div>
    )
}
export default ImageArea;