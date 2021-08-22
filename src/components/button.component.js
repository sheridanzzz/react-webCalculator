import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    button: {
        height: "7rem",
        width: "7rem",
        fontSize: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "100px",
        backgroundColor: "#383434",
        color: "#ffffff",
        "&:nth-child(4n), &:last-child": {
            backgroundColor: "#ff8b3d",
            color: "#ffffff",
        },
        "&:nth-child(1)": {
            backgroundColor: "#a39d9d",
            color: "#000000",
        },
        "&:nth-child(2)": {
            backgroundColor: "#a39d9d",
            color: "#000000",
        },
        "&:nth-child(3)": {
            backgroundColor: "#a39d9d",
            color: "#000000",
        },
        "&:last-child": {
            width: "200%",
        },
        "@media(max-width: 480px)": {
            height: "4.8rem",
            width: "4.8rem",
        },
    },
}));

const ButtonComponent = ({ buttonName, clickHandler }) => {
    const classes = useStyles();

    return (
        <Button
            variant="contained"
            className={classes.button}
            type="button"
            onClick={() => clickHandler(buttonName)}
        >
            {buttonName}
        </Button>
    );
};

ButtonComponent.propTypes = { buttonName: PropTypes.string };
export default ButtonComponent;