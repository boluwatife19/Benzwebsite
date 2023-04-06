import React from "react";
import { useState } from "react";


export default function Valid(){
    // const [formData, setFormData] = useState({
    //     name: '',
    //     email: '',
    //     message: '',
    //     country: '',
    // })

    // const handleEvent = event => {
    //     setFormData(event.target.formData)

    // }

    return(
        <div  className="valid" >
            <div className="header">
                <h3>SUBMIT ENQUIRY</h3>
                <h1>Schedule an <br/> appointment</h1>
            </div>
            <form action="https://email.js/aregpaul@gmail.com" method="post">
               <div className="gt">
               <select name="section" required>
                    <option>Pick an Option</option>
                    <option>Win</option>
                    <option>Win</option>
                    <option>Win</option>
                    <option>Win</option>
                    <option>Loose</option>
                    <option>Bagged</option>
                </select>
                <input placeholder="Email" type="email" name="email" required/>
               </div>
                <div className="gt">
                <input placeholder="Your Name" type='text'name="name"  required />
                <select name="country" required>
                    <option value="">Select a country</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                    <option value="Botswana">Botswana</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Brunei">Brunei</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cabo Verde">Cabo Verde</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Central African Republic">Central African Republic</option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo, Democratic Republic of the">Congo, Democratic Republic of the</option>
                    <option value="Congo, Republic of the">Congo, Republic of the</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cote d'Ivoire">Cote d'Ivoire</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czechia">Czechia</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">Dominican Republic</option>
                </select>
                </div>
                <input placeholder="Message" type='text' required name="message"/>
                <button type="submit">SUBMIT</button>
            </form>
        </div>
    )
}

/** 
 * the input need to be absolute reactjs form not just html5
 * i think the onChange will be the one to set the setForm data to the state so it wont be changed pree 
*/