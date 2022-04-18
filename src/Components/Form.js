import "../Styles/Form.css";
import Image from '../images/amazon-pay.png'
function Form() {
    return (
        <div class="container">
            <div class="logo">
                <img src={Image} alt="logo" id="logo" />
            </div>
            <div class="form">
                <label htmlFor="text">Your Email:</label>
                <br />
                <input type="email" placeholder="Enter your mail" name="" id="" />
                <br />
                <label htmlFor="password">Your Password :</label>
                <br />
                <input type="password" placeholder="Enter your password" name="" id="" />
                <br />
                <span><input type="checkbox" name="" id="" /></span><span>Remember Me</span>
                <br />
                <input type="button" id="btn" value="Sign In" />
            </div>
        </div>
    );
}

export default Form;
