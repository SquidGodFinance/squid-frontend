import { useState } from "react";
import { ReactComponent as Info } from "../../assets/icons/info.svg";
import { SvgIcon, Paper, Typography, Box, Popper } from "@material-ui/core";
import "./infotooltip.scss";

function InfoTooltip({ message }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleHover = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "info-tooltip" : undefined;

  return (
    <Box>
      <SvgIcon
        component={Info}
        onMouseOver={handleHover}
        onMouseOut={handleHover}
        style={{ margin: "0 5px", fontSize: 16 }}
        className="info-icon"
      ></SvgIcon>
      <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom" className="tooltip">
        <Paper className="info-tooltip sgod-card">
          <Typography variant="body2" className="info-tooltip-text">
            {message}
          </Typography>
        </Paper>
      </Popper>
    </Box>
  );
}

export default InfoTooltip;
