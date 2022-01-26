import React from 'react';
import { Box, Chip, Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
  atomOneLight,
  atomOneDark,
} from 'react-syntax-highlighter/dist/esm/styles/hljs';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useSettings from 'hooks/useSettings';

type SnippetProps = {
  code: string;
  language: string;
  userName: string;
};

const Snippet = ({ code, language, userName }: SnippetProps) => {
  const classes = useStyles();
  const { settings } = useSettings();

  return (
    <Box className={classes.root}>
      <Box display="flex" flexDirection="row" pb={2}>
        <Chip
          avatar={
            <Avatar>
              <AccountCircleIcon />
            </Avatar>
          }
          label={userName}
          color="primary"
          variant="outlined"
        />
        <Chip label={language} color="primary" variant="outlined" />
      </Box>
      <SyntaxHighlighter
        language={language}
        lineProps={{
          style: { wordBreak: 'break-all', whiteSpace: 'pre-wrap' },
        }}
        showLineNumbers={true}
        style={settings.theme === 'LIGHT' ? atomOneLight : atomOneDark}
        customStyle={{
          width: '100%',
          height: '100%',
          borderRadius: 15,
          overflowY: 'scroll',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </Box>
  );
};

const useStyles = makeStyles((theme: any) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid red',
    borderRadius: 10,
    padding: '10px',
    width: '40%',
    height: 500,
    overflow: 'hidden',
  },

  copyBlock: {
    width: '100%',
    height: '100%',
  },
}));

export default Snippet;
