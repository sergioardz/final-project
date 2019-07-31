/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import "./footer.css";

const Footer = props => (
    <footer className="pt-4 my-md-5 pt-md-5 footer">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4 text-center">
                    <h5><strong>Features</strong></h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" target="_blank" href="https://reactjs.org/docs/getting-started.html">React JS</a></li>
                        <li><a className="text-muted" target="_blank" href="https://getbootstrap.com/docs/4.3/getting-started/introduction/">Bootstrap 4</a></li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 text-center">
                    <h5><strong>Resources</strong></h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" target="_blank" href="http://mongodb.github.io/node-mongodb-native/">Mongo DB</a></li>
                        <li><a className="text-muted" target="_blank" href="https://mongoosejs.com/">Mongoose</a></li>
                    </ul>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4 text-center">
                    <h5><strong>About</strong></h5>
                    <ul className="list-unstyled text-small">
                        <li><a className="text-muted" target="_blank" href="https://sergioardz.github.io/Portfolio/">Author</a></li>
                        <li><a className="text-muted" target="_blank" href="https://github.com/sergioardz">Github Repository</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;