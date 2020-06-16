import React from 'react';
import { Jumbotron } from 'reactstrap';
import '../App.css';

const Header = () => {
    return(
        <div className="head">
        <Jumbotron className="jumbotron">
            
                <div className="row row-header">
                    
                    <div className="col-12 col-sm-10">    
                        <h1 style={{marginLeft: '20px'}} >Welcome</h1>
                        <p></p>
                    </div>
                </div>
           
        </Jumbotron>
        </div>
    )
}

export default Header;