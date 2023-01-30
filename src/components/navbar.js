import React from "react";
import { Link } from "react-router-dom";
import Homepage from "./homepage";

function Navbar() {

    return (
        <div>
            <card className="nav">
                <ul class="nav nav-pills">
                    <li class="nav-item">
                        <h1> <Link class="nav-link text-light bg-dark mt-2" aria-current="page" to="/">NewDrib</Link></h1>
                    </li>

                </ul>
            </card>
            <Homepage />
        </div>
    )
}

export default Navbar