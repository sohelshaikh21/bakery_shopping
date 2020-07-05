import React from "react";
import ShopCollection from "../../components/ShopCollection/ShopCollection.components";
import COLLECTION_DATA from "./collection.data";

class ShopPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collections: COLLECTION_DATA
        };
    }
    render() {
        const collections = this.state.collections;
        return (
            <div>
                {
                    collections.map(({id, title, items}) =>
                        <ShopCollection key={id} title={title} items={items}/>
                    )
                }
                <h1>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></h1>
            </div>
        )
    }
};

export default ShopPage;