import "./label.css"

const  Label = ({text}) => {
    return (
        <div className="label-container">
            <div className="label">
                <span>{text}</span>
                <div className="line"></div>
            </div>
        </div>
            
    );
}

export default Label;