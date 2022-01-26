import { makeStyles } from '@mui/styles';
import Page from 'components/Page';
import { Typography } from '@mui/material';
import Snippet from 'components/common/Snippet';

const exampleCode = `import React from 'react';
import { Container, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CopyBlock, dracula } from 'react-code-blocks';

type SnippetProps = {
  code: string;
  language: string;
  theme: string;
};

const Snippet = ({ code, language, theme }: SnippetProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <CopyBlock
          //style={{ width: '100%', height: '100%' }}
          text={code}
          language={language}
          showLineNumbers={true}
          theme={dracula}
        />
      </Container>
    </Box>
  );
};

const useStyles = makeStyles((theme: any) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid red',
    width: 500,
    height: 'auto',
  },
  copyBlock: {
    width: '100%',
    height: '100%',
  },
}));

export default Snippet;`;

export default function HomePage() {
  const classes = useStyles();

  return (
    <Page title="HomePage" className={classes.root}>
      {/* <Typography color="textPrimary">Home Page</Typography> */}
      <Snippet
        code={exampleCode}
        language={'javascript'}
        userName="khayrullaev"
      />
    </Page>
  );
}

const useStyles = makeStyles((theme: any) => ({
  root: {
    backgroundColor: theme.palette.background.light,
    padding: theme.spacing(2),
  },
}));
