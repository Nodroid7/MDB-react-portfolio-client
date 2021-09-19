import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import Label from '@material-ui/icons/Label';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import InfoIcon from '@material-ui/icons/Info';
import ForumIcon from '@material-ui/icons/Forum';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Spinner from './spinner';

const useTreeItemStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.secondary,
    '&:focus > $content': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
      color: 'var(--tree-view-color)',
    },
  },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '$expanded > &': {
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  group: {
    marginLeft: 0,
    '& $content': {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {},
  label: {
    fontWeight: 'inherit',
    color: 'inherit',
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1,
  },
}));

function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, id, name, checkLanguage, ...other } = props;

  return (
    <TreeItem
      label={
        <a onClick = {checkLanguage(id, name)}>
            <div className={classes.labelRoot}>
            <LabelIcon color="inherit" className={classes.labelIcon} />
            <Typography variant="body2" className={classes.labelText}>
                {labelText}
            </Typography>
            <Typography variant="caption" color="inherit">
                {labelInfo}
            </Typography>
            </div>
        </a>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checkLanguage: PropTypes.func.isRequired
};

const useStyles = makeStyles({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
  },
});

const treeView  = ({
    lang,
    checkLanguage
  }) => {
  const classes = {
    root: {
      height: 264,
      flexGrow: 1,
      maxWidth: 400,
    },
  }
  let languageLoading;
  let treeview;
  


  if(lang.isLoading || lang.langs === null){

    languageLoading = <Spinner/>;
    console.log('language loading');
  } 
  else {
    if (Object.keys(lang.langs).length > 0) {
      let langTemp = lang.langs;
      let deep = 0;
      for (let i = 0; i < langTemp.length; i++) {
        if(deep < langTemp[i].deep)
          deep = langTemp[i].deep; // max deep
      }
      console.log(deep);
      let j = -1;
      let child_lang;
      let temp_l = '0';
      for (let i = 0; i < langTemp.length; i++) {
        if(deep == langTemp[i].deep){
          // if(langTemp[i].parent != temp_l){
            // temp_l = langTemp[i].parent;
            j++;
          // }
          child_lang += <StyledTreeItem nodeId={i} labelText={langTemp.name} labelIcon={Label} id = {langTemp._id} name = {lang.name} checkLanguage = {checkLanguage} />
        }
      }
      console.log(child_lang);
      treeview = lang.langs && lang.langs.map((lang,index) => (
        <>
          {lang.child == false ? 
            <StyledTreeItem 
              nodeId={index}
              labelText={lang.name} 
              labelIcon={Label} 
              id = {lang._id} 
              name = {lang.name} 
              checkLanguage = {checkLanguage} 
            />  
          : ''  
          }

        </>
      ));
    }
  }  

  return (
      <>
      {languageLoading}
    <TreeView
      className={classes.root}
      defaultExpanded={['-1']}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
    >
        <StyledTreeItem nodeId="-1" labelText="Root" labelIcon={LocalOfferIcon} id = {"-1"} name = {"Root"} checkLanguage = {checkLanguage} >
            {treeview}
        </StyledTreeItem>
      {/* <StyledTreeItem nodeId="1" labelText="All Mail" labelIcon={MailIcon} />
      <StyledTreeItem nodeId="2" labelText="Trash" labelIcon={DeleteIcon} />
      <StyledTreeItem nodeId="3" labelText="Categories" labelIcon={Label}>
        <StyledTreeItem
          nodeId="5"
          labelText="Social"
          labelIcon={SupervisorAccountIcon}
          labelInfo="90"
          color="#1a73e8"
          bgColor="#e8f0fe"
        />
        <StyledTreeItem
          nodeId="6"
          labelText="Updates"
          labelIcon={InfoIcon}
          labelInfo="2,294"
          color="#e3742f"
          bgColor="#fcefe3"
        />
        <StyledTreeItem
          nodeId="7"
          labelText="Forums"
          labelIcon={ForumIcon}
          labelInfo="3,566"
          color="#a250f5"
          bgColor="#f3e8fd"
        />
        <StyledTreeItem
          nodeId="8"
          labelText="Promotions"
          labelIcon={LocalOfferIcon}
          labelInfo="733"
          color="#3c8039"
          bgColor="#e6f4ea"
        />
      </StyledTreeItem>
      <StyledTreeItem nodeId="4" labelText="History" labelIcon={Label} /> */}
    </TreeView>
    </>
  );
}

treeView.propTypes = {
    lang: PropTypes.object.isRequired,
    checkLanguage: PropTypes.func.isRequired
};

export default treeView;
