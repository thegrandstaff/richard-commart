import React, {useState} from 'react';
import '../App.css';

const OrderCommission = (props) => {
 
    //retrieving name using the most unconventional method
    //because I don't remember how to properly use props
    const pathname = window.location.pathname;
    let cutpath = pathname.substr(18, pathname.length);
    let name = cutpath.replace('%20', " ");
    
    const [projectType, setProjectType] = useState();
    const [projectPrice, setPrice] = useState(0);   
    const [projectDetails, setProjectDetails] = useState();

    const onSubmitOrder = () => {
        console.log("Project type: " + projectType);
        console.log("Details: " + projectDetails);
        console.log("Price: $" + projectPrice);
    }

    const onProjectDetailsChange = (event) => {
        setProjectDetails(event.target.value);
    }

    const onProjectTypeChange = (event) => {
        setProjectType(event.target.value);
        if (event.target.value === "emote") 
        {
            setPrice(10);
        }
        else if (event.target.value === "top-half")
        {
            setPrice(30);
        }
        else if (event.target.value === "full-body")
        {
            setPrice(75);
        }
    }

    return (
        <div className="order-form">
            <form onSubmit={onSubmitOrder}>
                <h1>ORDER COMMISSION</h1>
                <div>
                    <label>Name: {name}</label>
                </div>
                <div>
                    <label>Project Type: </label>
                    <select onChange={onProjectTypeChange}>
                        <option value="" selected disabled hidden>Select type of commission</option>
                        <option value="emote">Emote</option>
                        <option value="top-half">Top Half</option>
                        <option value="full-body">Full-body</option>
                    </select>
                </div>
                <div>
                    <label>Details: </label>
                    <input 
                    type="textarea" 
                    placeholder="(Optional)" 
                    onChange={onProjectDetailsChange}/>
                </div>
                <div>
                    <label>Price: ${projectPrice}</label>
                </div>
                <div>
                    <button type="submit" onClick={() => { onSubmitOrder ()}}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default OrderCommission;