import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';
import { fade, makeStyles, withStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import Typography from '@material-ui/core/Typography';
import TreeItem from '@material-ui/lab/TreeItem';
import Collapse from '@material-ui/core/Collapse';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import Spinner from './spinner';

function MinusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props) {
  return (
    <SvgIcon fontSize="inherit" {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function CloseSquare(props) {
  return (
    <SvgIcon className="close" fontSize="inherit" {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M17.485 17.512q-.281.281-.682.281t-.696-.268l-4.12-4.147-4.12 4.147q-.294.268-.696.268t-.682-.281-.281-.682.294-.669l4.12-4.147-4.12-4.147q-.294-.268-.294-.669t.281-.682.682-.281.696 .268l4.12 4.147 4.12-4.147q.294-.268.696-.268t.682.281 .281.669-.294.682l-4.12 4.147 4.12 4.147q.294.268 .294.669t-.281.682zM22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0z" />
    </SvgIcon>
  );
}

function TransitionComponent(props) {
  const style = useSpring({
    from: { opacity: 0, transform: 'translate3d(20px,0,0)' },
    to: { opacity: props.in ? 1 : 0, transform: `translate3d(${props.in ? 0 : 20}px,0,0)` },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

TransitionComponent.propTypes = {
  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,
};

const StyledTreeItem = withStyles(theme => ({
  iconContainer: {
    '& .close': {
      opacity: 0.3,
    },
  },
  group: {
    marginLeft: 12,
    paddingLeft: 12,
    borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`,
  },
}))(props => (
    <TreeItem {...props} 
      label = {
        <a onClick = {props.checkLanguage(props.id, props.name)}>
          <Typography variant="body2">
            {props.labelName}
          </Typography>
        </a>
      }
      TransitionComponent={TransitionComponent} 

    />
  ));

const treeView  = ({
  lang,
  checkLanguage
}) => {
  const classes = ({
    root: {
      height: 264,
      flexGrow: 1,
      maxWidth: 400,
    },
  });
  let languageLoading;
  let treeview;
  let treeExpend = ['-1'];




  if(lang.isLoading || lang.langs === null){

    languageLoading = <Spinner/>;
    console.log('language loading');
  } 
  else {
    if (Object.keys(lang.langs).length > 0) {
      let langTemp = lang.langs;
      for(let i = 0 ; i < langTemp.length ; i++ ){
        if(langTemp[i].child === true){
          treeExpend.push((i).toString());
        }
      }
            
      treeview = (
        <TreeView
          className={classes.root}
          defaultExpanded={treeExpend}
          defaultCollapseIcon={<MinusSquare />}
          defaultExpandIcon={<PlusSquare />}
          defaultEndIcon={<CloseSquare />}
        >
        <StyledTreeItem nodeId="-1" labelName="Root"  id = {"-1"} name = {"Root"} checkLanguage = {checkLanguage} >
        {lang.langs && lang.langs.map((lang0,index) => (
          <>
            {lang0.deep === 0 && lang0.child === true  ? 
              <StyledTreeItem 
                nodeId={index.toString()}
                labelName={lang0.name} 
                id = {lang0._id} 
                name = {lang0.name} 
                checkLanguage = {checkLanguage} 
              >
                {
                  lang.langs && lang.langs.map((lang1,index) => (
                    <>
                      {lang1.deep === 1 && lang1.parent === lang0._id && lang1.child === true ? 
                        <StyledTreeItem 
                          nodeId={index.toString()}
                          labelName={lang1.name} 
                          id = {lang1._id} 
                          name = {lang1.name} 
                          checkLanguage = {checkLanguage} 
                        >
                          {
                            lang.langs && lang.langs.map((lang2,index) => (
                              <>
                                {lang2.deep === 2 && lang2.parent === lang1._id && lang2.child === true ? 
                                  <StyledTreeItem 
                                    nodeId={index.toString()}
                                    labelName={lang2.name} 
                                    id = {lang2._id} 
                                    name = {lang2.name} 
                                    checkLanguage = {checkLanguage} 
                                  >
                                    {
                                      lang.langs && lang.langs.map((lang3,index) => (
                                        <>
                                          {lang3.deep === 3 && lang3.parent === lang2._id && lang3.child === true ? 
                                            <StyledTreeItem 
                                              nodeId={index.toString()}
                                              labelName={lang3.name} 
                                              id = {lang3._id} 
                                              name = {lang3.name} 
                                              checkLanguage = {checkLanguage} 
                                            >
                                              {
                                                lang.langs && lang.langs.map((lang4,index) => (
                                                  <>
                                                    {lang4.deep === 4 && lang4.parent === lang3._id && lang4.child === true ? 
                                                      <StyledTreeItem 
                                                        nodeId={index.toString()}
                                                        labelName={lang4.name} 
                                                        id = {lang4._id} 
                                                        name = {lang4.name} 
                                                        checkLanguage = {checkLanguage} 
                                                      >
                                                        {
                                                          lang.langs && lang.langs.map((lang5,index) => (
                                                            <>
                                                              {lang5.deep === 5 && lang5.parent === lang4._id && lang5.child === true ? 
                                                                <StyledTreeItem 
                                                                  nodeId={index.toString()}
                                                                  labelName={lang5.name} 
                                                                  id = {lang5._id} 
                                                                  name = {lang5.name} 
                                                                  checkLanguage = {checkLanguage} 
                                                                >
                                                                  {
                                                                    
                                                                  }
                                                                </StyledTreeItem>  
                                                                : ''  
                                                              }
                                                              {lang5.deep === 5 && lang5.parent === lang4._id && lang5.child === false ? 
                                                                <StyledTreeItem 
                                                                  nodeId={index}
                                                                  labelName={lang5.name} 
                                                                  id = {lang5._id} 
                                                                  name = {lang5.name} 
                                                                  checkLanguage = {checkLanguage} 
                                                                />
                                                                : ''
                                                              }
                                                            </>
                                                          ))
                                                        }
                                                      </StyledTreeItem>  
                                                      : ''  
                                                    }
                                                    {lang4.deep === 4 && lang4.parent === lang3._id && lang4.child === false ? 
                                                      <StyledTreeItem 
                                                        nodeId={index}
                                                        labelName={lang4.name} 
                                                        id = {lang4._id} 
                                                        name = {lang4.name} 
                                                        checkLanguage = {checkLanguage} 
                                                      />
                                                      : ''
                                                    }
                                                  </>
                                                ))
                                              }
                                            </StyledTreeItem>  
                                            : ''  
                                          }
                                          {lang3.deep === 3 && lang3.parent === lang2._id && lang3.child === false ? 
                                            <StyledTreeItem 
                                              nodeId={index}
                                              labelName={lang3.name} 
                                              id = {lang3._id} 
                                              name = {lang3.name} 
                                              checkLanguage = {checkLanguage} 
                                            />
                                            : ''
                                          }
                                        </>
                                      ))
                                    }
                                  </StyledTreeItem>  
                                  : ''  
                                }
                                {lang2.deep === 2 && lang2.parent === lang1._id && lang2.child === false ? 
                                  <StyledTreeItem 
                                    nodeId={index}
                                    labelName={lang2.name} 
                                    id = {lang2._id} 
                                    name = {lang2.name} 
                                    checkLanguage = {checkLanguage} 
                                  />
                                  : ''
                                }
                              </>
                            ))
                          }
                        </StyledTreeItem>  
                        : ''  
                      }
                      {lang1.deep === 1 && lang1.parent === lang0._id && lang1.child === false ? 
                        <StyledTreeItem 
                          nodeId={index}
                          labelName={lang1.name} 
                          id = {lang1._id} 
                          name = {lang1.name} 
                          checkLanguage = {checkLanguage} 
                        />
                        : ''
                      }
                    </>
                  ))
                }
              </StyledTreeItem>  
            : ''  
            }
            {lang0.deep === 0 && lang0.child === false ? 
              <StyledTreeItem 
                nodeId={index}
                labelName={lang0.name} 
                id = {lang0._id} 
                name = {lang0.name} 
                checkLanguage = {checkLanguage} 
              />
            : ''  
            }
          </>
        ))
        }
        </StyledTreeItem>
        </TreeView>
      )
    }
  }  

  return (
      <>
        {languageLoading}
        {treeview}
      </>
  );
}

treeView.propTypes = {
  lang: PropTypes.object.isRequired,
  checkLanguage: PropTypes.func.isRequired
};

export default treeView;