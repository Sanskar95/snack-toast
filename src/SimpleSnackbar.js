import React, { forwardRef, useImperativeHandle } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import WarningIcon from "@material-ui/icons/Warning";
import ErrorIcon from "@material-ui/icons/Error";
import ThemeConfig from "./ThemeConfig";
import Button from "@material-ui/core/Button";
import InfoIcon from "@material-ui/icons/Info";

function TransitionRight(props) {
  return <Slide {...props} direction="left" />;
}

const iconStyles = {
  color: "white",
  paddingLeft: "7px",
  marginTop: "2rem"
};

const styles = {
  success: {
    backgroundColor: "#008300",
    icon: <CheckCircleIcon style={iconStyles} />
  },
  error: {
    backgroundColor: "#CC0000",
    icon: <WarningIcon style={iconStyles} />
  },
  warning: {
    backgroundColor: "#ff9800",
    icon: <ErrorIcon style={iconStyles} />
  },
  info: { backgroundColor: "#2196f3", icon: <InfoIcon style={iconStyles} /> }
};

const SimpleSnackbar = forwardRef((props, ref) => {
  const [open, setOpen] = React.useState(false);

  useImperativeHandle(ref, () => ({
    handleClick() {
      setOpen(true);
    }
  }));

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        style={{ position: "unset", paddingTop: ".5rem" }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        open={open}
        onClose={handleClose}
        autoHideDuration={3200}
        TransitionComponent={TransitionRight}
      >
        <Card
          style={{
            background: `linear-gradient(to right, ${styles[`${props.type}`].backgroundColor} 0%, ${styles[`${props.type}`].backgroundColor} 10%, white 10%, white 100%)`,
            width: "24.125rem"
          }}
        >
          <div style={{ display: "table", width: "100%", height: "100%" }}>
            <div style={{ float: "left", width: "15%" }}>
              {styles[`${props.type}`].icon}
            </div>
            <div style={{ float: "left", width: "80%" }}>
              <Typography
                style={{
                  fontFamily: ThemeConfig.typography.fontFamily,
                  fontWeight: ThemeConfig.typography.h2.fontWeight,
                  fontSize: 20
                }}
              >
                {props.type.charAt(0).toUpperCase() + props.type.slice(1)}
              </Typography>

              <Typography
                style={{ fontFamily: ThemeConfig.typography.fontFamily }}
              >
                {props.message}
              </Typography>
            </div>
          </div>

          {props.dismissButton && (
            <Button
              onClick={handleClose}
              color="primary"
              style={{ display: "block", marginLeft: "18.5rem" }}
            >
              DISMISS
            </Button>
          )}
        </Card>
      </Snackbar>
    </div>
  );
});
export default SimpleSnackbar;
