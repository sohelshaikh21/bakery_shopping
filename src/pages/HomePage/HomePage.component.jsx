import React from "react";
import Menu from "../../components/Menu/Menu.component";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [
                {
                    id: 1,
                    title: 'Baked',
                    imageUrl: 'https://tinyurl.com/y9oxkopq',
                    linkUrl:'baked'
                },
                {
                    id: 2,
                    title: 'Cakes',
                    imageUrl: 'https://tinyurl.com/yblo7ens',
                    linkUrl:'cakes'
                },
                {
                    id: 3,
                    title: 'Cookies',
                    imageUrl: 'https://tinyurl.com/y8wtdqkx',
                    linkUrl:'cookies'
                },
                {
                    id: 4,
                    title: 'Brownie',
                    imageUrl: 'https://tinyurl.com/y7ardlqo',
                    size:'large',
                    linkUrl:'brownie'
                },
                {
                    id: 5,
                    title: 'Cup Cakes',
                    imageUrl: 'https://tinyurl.com/y9gn4f8l',
                    size:'large',
                    linkUrl:'cupcakes'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <Menu items={this.state.menus}/>
            </div>
        );
    }
}
export default HomePage;