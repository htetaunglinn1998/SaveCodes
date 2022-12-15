import {
  FormControl, InputLabel, MenuItem, makeStyles, Snackbar, Select, ListItemIcon,
  ListItemText
} from "@material-ui/core";
import styled from "styled-components";
import { toAbsoluteUrl } from "@Metronic/_helpers";
import SVG from "react-inlinesvg";
import PlayForWorkIcon from "@material-ui/icons/PlayForWork";

//-----------------Styled components-------------------
const ImportOptions = styled.div`
    width: 96%;
    position: absolute;
    top: -10px;
    left: 0;
    display: flex;
    min-width: 50%;
    max-width: 90%;
    // z-index:9999;
    justify-content: flex-end;
    box-shadow: 0 0 50px 0 rgba(82, 63, 105, 0.15) !important;
  
    .MuiFormControl-root {
      width: 100px;
    }
  
    .MuiSelect-root{
      height:14.5px
    }
  
  
    .MuiOutlinedInput-root {
      border-radius: 5px !important;
      background: rgba(55, 131, 231, 0.8) !important;
    }
    .MuiInputLabel-outlined {
      transform: translate(14px, 10px) scale(1) !important;
      color: white !important;
    }
    .MuiOutlinedInput-notchedOutline {
      border: none !important;
    }
  
    .MuiSelect-iconOpen {
      transform: rotate(0) !important;
    }
  
    .MuiSelect-icon {
      color: #fff;
      margin-right: 3px;
    }
  
    .Mui-focused {
      display: block !important;
      overflow: hidden;
    }
  
    .svg-icon{
      display: block !important;
    }
  
  
    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: none !important;
    }
  
    .MuiSelect-outlined.MuiSelect-outlined {
      padding: 10px 15px !important;
      color: #fff !important;
    }
  `;
//----------------Styling Components---------------------
const useStyles = makeStyles({
  select: {
    border: "2px solid #87a9ff",
    borderRadius: "9px",
    "& li": {}
  },
  svgIcon: {
    minWidth: "30px",
    position: "relative"
  },
  hiddenSvg: {
    display: "none !important"
  },
  hiddenMenu: {
    display: "none !important"
  }
});

//--------------Before the component-----------------------------------



//--------------Inside the component-------------------------------------
const classes = useStyles();

const [exportOption, setExportOption] = useState(null);
const [hiddenSvg, setHiddenSvg] = useState(false)
  //--------------Inside the component-------------------------------------







  //---------------Add inside return()-----------------------------------
  < ImportOptions >
  <FormControl variant="outlined">
    <InputLabel id="select-options" >
      Export
    </InputLabel>

    <Select
      value={exportOption ? exportOption : null}
      labelId="select-options"
      id="select-options"
      className="select-options"
      onChange={e => {
        exportChange({ x: e, withImage: withImage });
        setExportOption(e.target.value)
      }}
      onClose={() => {
        setHiddenSvg(true)
        setExportOption(null)
      }}
      onOpen={() => {
        setHiddenSvg(false)
        setExportOption(null)
      }}
      IconComponent={PlayForWorkIcon}
      MenuProps={{ classes: { paper: classes.select } }}
      label="Export"
    >
      <MenuItem value="pdf">
        <ListItemIcon className={hiddenSvg ? classes.hiddenSvg : classes.svgIcon}>
          <span className="svg-icon menu-icon">
            <SVG
              src={toAbsoluteUrl("/media/svg/files/pdf.svg")}
            ></SVG>
          </span>
        </ListItemIcon>
        <ListItemText primary="Export to PDF" className={hiddenSvg ? classes.hiddenMenu : null} />
      </MenuItem>
      <MenuItem value="excel" >
        <ListItemIcon className={hiddenSvg ? classes.hiddenSvg : classes.svgIcon}>
          <span className="svg-icon menu-icon">
            <SVG
              src={toAbsoluteUrl("/media/svg/files/xml.svg")}
            ></SVG>
          </span>
        </ListItemIcon>
        <ListItemText primary="Export to Excel" className={hiddenSvg ? classes.hiddenMenu : null} />
      </MenuItem>
    </Select>
  </FormControl>
  </ ImportOptions >
