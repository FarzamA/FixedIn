import React from "react";
import { ProtectedRoute } from '../../util/route_util';
import FeedContainer from "../feed/feed";

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ProtectedRoute exact path='/feed' component={FeedContainer} />
            </div>
            
        )
    };
};

export default Main;
