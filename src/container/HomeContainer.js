import { connect } from "react-redux";
import { AddToCart, removeToCart } from "../Services/Actions/Action";
import Home from "../component/Home";

const mapStateToProps = state => ({
    cardData:state
})
const mapDispatchToProps = dispatch => ({
  addToCartHandler: data => dispatch(AddToCart(data)),
  removeToCartHandler: data => dispatch(removeToCart(data)),
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);

// export default Home;
