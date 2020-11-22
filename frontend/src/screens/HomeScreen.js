import React from 'react';

export const HomeScreen = () => {
    return (
        <div className="form">
            <form>
                <h1>Welcome to Home-Page</h1>
                <ul className="form-container">
                    <li>
                        <h2>Fill Your Details</h2>
                    </li>

                    <li>
                        <label htmlFor="name">
                            Name
                </label>
                        <input type="text" name="name" id="name" >
                        </input>
                    </li>
                    <li>
                        <label htmlFor="age">
                            Age
                </label>
                        <input type="text" name="age" id="age" >
                        </input>
                    </li>
                    <li>
                        <label htmlFor="gender">
                            Gender
                </label>
                        <input type="text" name="gender" id="gender" >
                        </input>
                    </li>
                    <li>
                        <label htmlFor="Dob">
                            Date of Birth
                </label>
                        <input type="text" name="Dob" id="Dob" >
                        </input>
                    </li>
                    <li>
                        <label htmlFor="height">
                            Height
                </label>
                        <input type="text" name="height" id="height" >
                        </input>
                    </li>
                    <li>
                        <label htmlFor="address">
                            Temporary Address
                </label>
                        <input type="text" name="address" id="address" >
                        </input>
                    </li>
                    <li>
                        <label htmlFor="address">
                            Parmenent Address
                </label>
                        <input type="text" name="address" id="address"></input>
                    </li>

                    <li>
                        <button type="submit" className="button primary">Submit</button>
                    </li>

                </ul>

            </form>
        </div>

    )
}

export default HomeScreen;
