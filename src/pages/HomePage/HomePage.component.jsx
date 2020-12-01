import React from "react";
import Menu from "../../components/Menu/Menu.component";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: [
        {
          id: 1,
          title: "Baked",
          imageUrl:
            "https://img1.mashed.com/img/gallery/the-best-bakery-in-every-state/intro-1601499029.jpg",
          linkUrl: "baked"
        },
        {
          id: 2,
          title: "Cakes",
          imageUrl:
            "https://wrightsdairyfarm.com/assets/img/dessertcakes/dessertcakebanner2.jpg",
          linkUrl: "cakes"
        },
        {
          id: 3,
          title: "Cookies",
          imageUrl:
            "https://wrightsdairyfarm.com/assets/img/bakery/bakery-banner.jpg",
          linkUrl: "cookies"
        },
        {
          id: 4,
          title: "Brownie",
          imageUrl:
            "https://wrightsdairyfarm.com/assets/img/bakery/blueberry.jpg",
          size: "large",
          linkUrl: "brownie"
        },
        {
          id: 5,
          title: "Cup Cakes",
          imageUrl:
            "https://wrightsdairyfarm.com/assets/img/cupcakes/cupcakebanner.jpg",
          size: "large",
          linkUrl: "cupcakes"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Menu items={this.state.menus} />
      </div>
    );
  }
}
export default HomePage;
