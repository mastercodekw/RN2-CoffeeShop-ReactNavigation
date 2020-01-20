import React from "react";
import { Icon, Button } from "native-base";
import { withNavigation } from "react-navigation";

class CartIcon extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <Button transparent onPress={() => navigation.navigate("CoffeeCart")}>
        <Icon name="cart" />
      </Button>
    );
  }
}

export default withNavigation(CartIcon);
