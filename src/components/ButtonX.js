import PropTypes from "prop-types";
import { Button } from "@material-ui/core";

const ButtonX = ({ color, lable, onClick }) => {
  return (
    <Button type="submit" size="small" variant="contained" onClick={onClick} color="primary">
      {lable}
    </Button>
  );
};

ButtonX.defaultProps = {
  lable: "Search",
  color: "primary",
};

ButtonX.propTypes = {
  color: PropTypes.string,
  lable: PropTypes.string,
  onClick: PropTypes.func
};

export default ButtonX;

