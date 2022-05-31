import "./label.css"

const  Label = ({text,class_name}) => {
    return (
        <div className={"label-container "+class_name}>
            <div className="label">
                <span>{text}</span>
                <div className="line"></div>
            </div>
        </div>
            
    );
}

export default Label;