import './other-projects.css';
import accta_logo from "../../img-content/brands/logo-accta.svg";
import aoyue_logo from "../../img-content/brands/logo-aoyue.svg";
import atten_logo from "../../img-content/brands/logo-atten.svg";
import lukey_logo from "../../img-content/brands/logo-lukey.svg";
import proskit_logo from "../../img-content/brands/logo-proskit.svg";
import unit_logo from "../../img-content/brands/logo-unit.svg";

const OtherProjects = () => {
return (
    <div className="other-projects-container">
        <a href="">
        <img className='brand-icon'
        src={accta_logo} 
        alt="" />
        </a>
        <a href="">
        <img className='brand-icon'
        src={aoyue_logo} 
        alt="" />
        </a>
        <a href="">
        <img className='brand-icon'
        src={atten_logo} 
        alt="" />
        </a>
        <a href="">
        <img className='brand-icon'
        src={lukey_logo} 
        alt="" />
        </a>
        <a href="">
        <img className='brand-icon'
        src={proskit_logo} 
        alt="" />
        </a>
        <a href="">
        <img className='brand-icon'
        src={unit_logo} 
        alt="" />
        </a> 
    </div>
);
};

export default OtherProjects;